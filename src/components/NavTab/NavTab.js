import { HashLink as Link } from "react-router-hash-link";

import "../Link/Link.css";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="nav-tab">
      <Link className="nav-tab__link link" to="/#about-project">
        О проекте
      </Link>
      <Link className="nav-tab__link link" to="/#techs">
        Технологии
      </Link>
      <Link className="nav-tab__link link" to="/#about-me">
        Студент
      </Link>
    </nav>
  );
}

export default NavTab;
