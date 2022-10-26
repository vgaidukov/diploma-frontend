import { Link } from "react-router-dom";

import "../Link/Link.css";
import "./HeaderButtonsMain.css";

function HeaderButtonsMain() {
  return (
    <div className="header__buttons header__buttons_main">
      <Link className="header__button header__button_signup link" to="/register">
        Регистрация
      </Link>
      <Link className="header__button header__button_signin link" to="/login">
        Войти
      </Link>
    </div>
  );
}

export default HeaderButtonsMain;
