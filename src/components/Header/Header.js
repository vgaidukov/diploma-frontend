import { Link } from "react-router-dom";

import "../Link/Link.css";
import "./Header.css";
import headerLogo from "../../images/header-logo.svg";

function Header({ isMainPage, children }) {
  return (
    <section className={`header ${isMainPage ? "header_main-page" : ""}`}>
      <div className="header-container">
        <Link className="link" to="/">
          <img className="header__logo" src={headerLogo} alt="логотип" />
        </Link>
        {children}
      </div>
    </section>
  );
}

export default Header;
