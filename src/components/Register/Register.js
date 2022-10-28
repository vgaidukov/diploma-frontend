import { useHistory } from "react-router-dom";

import EntranceForm from '../EntranceForm/EntranceForm'
import Label from '../Label/Label'
import Input from '../Input/Input'

function Register() {
  const history = useHistory();

  const submitButtonHandler = (e) => {
    e.preventDefault();
    history.push('/login')
  }

  return (
    <EntranceForm
      title="Добро пожаловать!"
      submitButtonName="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkText="Войти"
      submitButtonHandler={submitButtonHandler}
      linkTo="/login"
    >
      <Label>
        Имя
        <Input
          className="input_register"
          type="text"
        />
      </Label>
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

export default Register;