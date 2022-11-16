import { useState, useCallback } from "react";

export const useForm = (inputValues) => {
	const [values, setValues] = useState(inputValues);
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(false);


	const handleChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		setErrors({ ...errors, [name]: target.validationMessage });
		setIsValid(target.closest("form").checkValidity());
		setValues({ ...values, [name]: value });
	};

	const resetForm = useCallback(() => {
		setValues({});
		setErrors({});
		setIsValid(false);
	},
		[setValues, setErrors, setIsValid]
	);

	return { values, handleChange, setValues, errors, isValid, resetForm, setIsValid };
}
