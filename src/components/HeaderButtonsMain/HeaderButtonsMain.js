import { Link } from "react-router-dom";

import "../Link/Link.css";
import "./HeaderButtonsMain.css";

function HeaderButtonsMain() {
  return (
    <div className="header-main-buttons">
      <Link className="header-main-buttons__button header-main-buttons__button_signup link" to="/signup">
        Регистрация
      </Link>
      <Link className="header-main-buttons__button header-main-buttons__button_signin link" to="/login">
        Войти
      </Link>
    </div>
  );
}

export default HeaderButtonsMain;
