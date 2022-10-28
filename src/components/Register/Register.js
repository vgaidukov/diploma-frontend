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
      <Label className={"entrance"}>
        Имя
        <Input
          className="entrance"
          type="text"
        />
      </Label>
      <Label className={"entrance"}>
        E-mail
        <Input
          className="entrance"
          type="email"
        />
      </Label>
      <Label className={"entrance"}>
        Пароль
        <Input
          className="entrance"
          type="password"
        />
      </Label>
    </EntranceForm>
  );
}

export default Register;