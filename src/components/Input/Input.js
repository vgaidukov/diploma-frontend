import "./Input.css";

function Input({
  id,
  name,
  type,
  className,
  placeholder,
  value,
  onChange,
  minLength,
  maxLength,
  disabled,
  required,
  // isValid,
  autocomplete,
  pattern
}) {

  return (
    <input
      id={id}
      name={name}
      type={type}
      className={`input input_${className}`}
      placeholder={placeholder}
      value={value || ""}
      onChange={onChange}
      minLength={minLength}
      maxLength={maxLength}
      disabled={disabled}
      required={required}
      autoComplete={autocomplete}
      pattern={pattern}
    />
  );
}

export default Input;
