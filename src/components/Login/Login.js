import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { EMAIL_PATTERN } from '../../constants/constants';

import EntranceForm from '../EntranceForm/EntranceForm'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Span from '../Span/Span'
// import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";

function Login({
  onLogin,
  isLoading,
  errorMessage,
  handleErrorMessage
}) {
  const history = useHistory();
  const { values, handleChange, setValues, errors, isValid, resetForm } = useForm({});
  const email = values.email || '';
  const password = values.password || '';

  // const resetForm = () => {
  //   setValues({
  //     email: '',
  //     password: ''
  //   })
  // };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    onLogin({ password, email })
      .then(() => {
        resetForm();
        history.push('/movies');
      })
      .catch((result) => {
        result.json()
          .then((err) => {
            if (result.status && err.message) {
              handleErrorMessage(err.message)
              console.log(result.status + ": " + err.message)
            } else {
              handleErrorMessage('Что-то пошло не так')
              console.log('Что-то пошло не так')
            }
          });
      })
  }

  return (
    <EntranceForm
      title="Рады видеть!"
      isLoading={isLoading}
      submitButtonName="Войти"
      submitButtonNameOnLoading="Вход ..."
      onSubmit={submitButtonHandler}
      isValid={isValid}

      text="Еще не зарегистрированы?"
      linkText="Регистрация"
      linkTo="/signup"

      errorMessage={errorMessage}
      handleErrorMessage={handleErrorMessage}
    >
      <Label className={"entrance"}>
        E-mail
        <Input
          id="email"
          name="email"
          type="email"
          className="entrance"
          placeholder=""
          value={values.email}
          onChange={handleChange}
          disabled={false}
          required={true}
          pattern={EMAIL_PATTERN}
        />
        <Span message={errors.email} />
      </Label>
      <Label className={"entrance"}>
        Пароль
        <Input
          id="password"
          name="password"
          type="password"
          className="entrance"
          placeholder=""
          value={values.password}
          onChange={handleChange}
          minLength="8"
          disabled={false}
          required={true}
        />
        <Span message={errors.password} />
      </Label>
    </EntranceForm>
  );
}

export default Login;