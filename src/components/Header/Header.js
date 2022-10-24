import { Switch, Route, Link } from "react-router-dom";

import "../Link/Link.css";
import "./Header.css";
import headerLogo from "../../images/header-logo.svg";
import HeaderButtonsLogged from "../HeaderButtonsLogged/HeaderButtonsLogged";
import HeaderButtonsMain from "../HeaderButtonsMain/HeaderButtonsMain";

function Header() {
  return (
    <section className="header">
      <div className="header-container">
        <Link className="link" to="/">
          <img className="header__logo" src={headerLogo} alt="логотип" />
        </Link>
        <Switch>
          <Route path="/movies">
            <HeaderButtonsLogged />
          </Route>
          <Route path="/saved-movies">
            <HeaderButtonsLogged />
          </Route>
          <Route path="/profile">
            <HeaderButtonsLogged />
          </Route>
          <Route exact path="/">
            <HeaderButtonsMain />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Header;
