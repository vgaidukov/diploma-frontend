import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/hooks';

import EntranceForm from '../EntranceForm/EntranceForm'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Span from '../Span/Span'

function Login({ onLogin, isLoading }) {
  const history = useHistory();
  const { values, handleChange, setValues } = useForm({});
  const email = values.email || '';
  const password = values.password || '';

  const resetForm = () => {
    setValues({
      email: '',
      password: ''
    })
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    onLogin({ password, email })
      .then(() => {
        resetForm();
        history.push('/movies');
      })
      .catch((result) => {
        result.json()
          .then((err) =>
            (result.status && err.message)
              ? console.log(result.status + ": " + err.message)
              : console.log('Что-то пошло не так'));
      })
  }

  return (
    <EntranceForm
      title="Рады видеть!"
      isLoading={isLoading}
      submitButtonName="Войти"
      submitButtonNameOnLoading="Вход ..."
      onSubmit={submitButtonHandler}
      email={email}
      password={password}

      text="Еще не зарегистрированы?"
      linkText="Регистрация"
      linkTo="/signup"
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
          minLength={3}
          disabled={false}
          required={true}
        />
        <Span />
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
          minLength="4"
          disabled={false}
          required={true}
        />
        <Span />
      </Label>
    </EntranceForm>
  );
}

export default Login;