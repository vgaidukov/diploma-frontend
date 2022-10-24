import "../Link/Link.css";
import "./Header.css";

import { Switch, Route, Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";

function Header() {
  return (
    <section className="header">
      <div className="header-container">
        <Link className="link" to="/">
          <img className="header__logo" src={headerLogo} alt="логотип" />
        </Link>
        <div className="header__elements">
          <Switch>
            <Route exact path="/">
              <Link className="header__signup link" to="/register">
                Регистрация
              </Link>
              <Link className="header__signin link" to="/login">
                Войти
              </Link>
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
}

export default Header;
