import { useHistory } from "react-router-dom";

import EntranceForm from '../EntranceForm/EntranceForm'
import Label from '../Label/Label'
import Input from '../Input/Input'

function Login() {
  const history = useHistory();

  const submitButtonHandler = (e) => {
    e.preventDefault();
    history.push('/movies')
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

export default Login;