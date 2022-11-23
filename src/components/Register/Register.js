import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { EMAIL_PATTERN } from '../../constants/constants';

import EntranceForm from '../EntranceForm/EntranceForm';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Span from '../Span/Span';

function Register({
  onRegister,
  isLoading,
  errorMessage,
  handleErrorMessage
}) {
  const history = useHistory();

  const { values, handleChange, errors, isValid, resetForm } = useForm({});
  const name = values.name || "";
  const email = values.email || "";
  const password = values.password || "";

  // const resetForm = () => {
  //   setValues({
  //     email: '',
  //     password: '',
  //     name: ''
  //   })
  // };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    onRegister({ password, email, name })
      .then(() => {
        resetForm();
        history.push('/movies')
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
          }
            // (result.status && err.message)
            //   ? console.log(result.status + ": " + err.message)
            //   : console.log('Что-то пошло не так')
          );
      });
  }

  return (
    <EntranceForm
      title="Добро пожаловать!"
      isLoading={isLoading}
      submitButtonName="Зарегистрироваться"
      submitButtonNameOnLoading="Регистрация ..."
      onSubmit={submitButtonHandler}
      isValid={isValid}

      text="Уже зарегистрированы?"
      linkText="Войти"
      linkTo="/login"

      errorMessage={errorMessage}
      handleErrorMessage={handleErrorMessage}
    >
      <Label className={"entrance"}>
        Имя
        <Input
          id="name"
          name="name"
          type="text"
          className="entrance"
          placeholder=""
          value={values.name}
          onChange={handleChange}
          minLength="0"
          disabled={false}
          required={true}
        />
        <Span message={errors.name} />
      </Label>
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
          minLength="0"
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

export default Register;