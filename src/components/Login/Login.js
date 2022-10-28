import EntranceForm from '../EntranceForm/EntranceForm'
import Label from '../Label/Label'
import Input from '../Input/Input'

function Login() {

  const submitButtonHandler = (e) => {
    e.preventDefault();
  }

  return (
    <EntranceForm
      title="Рады видеть!"
      submitButtonName="Войти"
      text="Еще не зарегистрированы?"
      linkText="Регистрация"
      submitButtonHandler={submitButtonHandler}
      linkTo="/signup"
    >
      <Label>
        E-mail
        <Input
          className="input_register"
          type="email"
        />
      </Label>
      <Label>
        Пароль
        <Input
          className="input_register"
          type="password"
        />
      </Label>
    </EntranceForm>
  );
}

export default Login;