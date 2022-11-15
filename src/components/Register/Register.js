import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/hooks';

import EntranceForm from '../EntranceForm/EntranceForm';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Span from '../Span/Span';

function Register({
  onRegister,
  isLoading
}) {
  const history = useHistory();

  const { values, handleChange, setValues } = useForm({});
  const name = values.name || '';
  const email = values.email || '';
  const password = values.password || '';

  const resetForm = () => {
    setValues({
      email: '',
      password: '',
      name: ''
    })
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    onRegister({ password, email, name })
      .then(() => {
        resetForm();
        history.push('/movies')
      })
      .catch((result) => {
        result.json()
          .then((err) =>
            (result.status && err.message)
              ? console.log(result.status + ": " + err.message)
              : console.log('Что-то пошло не так'));
      });
  }

  return (
    <EntranceForm
      title="Добро пожаловать!"
      isLoading={isLoading}
      submitButtonName="Зарегистрироваться"
      submitButtonNameOnLoading="Регистрация ..."
      onSubmit={submitButtonHandler}
      email={email}
      password={password}

      text="Уже зарегистрированы?"
      linkText="Войти"
      linkTo="/login"
    // submitButtonHandler={submitButtonHandler}
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
        <Span message={""} />
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

        // className="entrance"
        // type="email"
        />
        <Span message={""} />
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

        // className="entrance"
        // type="password"
        // minLength="8"
        />
        <Span message={""} />
      </Label>
    </EntranceForm>
  );
}

export default Register;