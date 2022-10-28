import { Link } from 'react-router-dom';

import "./Register.css"
import '../Link/Link.css'
import '../Button/Button.css'
import Form from '../Form/Form'
import Input from '../Input/Input'

function Register() {

  const submitButtonHandler = (e) => {
    e.preventDefault();
  }

  return (
    <section className="register">
      <h2 className="register__titile">Добро пожаловать!</h2>
      <Form
        className={"form_register"}
        onSubmit={submitButtonHandler}
      >
        <label className="register__label">
          Имя
          <Input
            className={"input_register"}
            type={"text"}
          />
        </label>
        <label className="register__label">
          E-mail
          <Input
            className={"input_register"}
            type={"email"}
          />
        </label>
        <label className="register__label">
          Пароль
          <Input
            className={"input_register"}
            type={"password"}
          />
        </label>
        <button
          className={`button register__submit-button`}
          type="submit"
          onClick={submitButtonHandler}
        >
          Зарегистрироваться
        </button>
      </Form>
      <p className="register__text">Уже зарегистрированы?
        <Link className="link register__link-to-login" to='/login'>Войти</Link>
      </p>
    </section>
  );
}

export default Register;