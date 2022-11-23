import { useHistory } from "react-router-dom";

import EntranceForm from '../EntranceForm/EntranceForm'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Span from '../Span/Span'

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
        <Span />
      </Label>
      <Label className={"entrance"}>
        Пароль
        <Input
          className="entrance"
          type="password"
        />
        <Span />
      </Label>
    </EntranceForm>
  );
}

export default Login;