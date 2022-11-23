import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../Link/Link.css";
import "./HeaderButtonsLogged.css";
import profilePictogram from "../../images/profile-pictogram.svg";

function HeaderButtonsLogged() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpened(!isBurgerOpened);
  };

  const handleLinkClick = () => {
    if (isBurgerOpened) {
      handleBurgerClick();
    }
  };

  return (
    <div className="header-logged-buttons">
      <div
        className={`header-logged-buttons__burger header-logged-buttons__burger${
          isBurgerOpened ? "_active" : ""
        }`}
        onClick={handleBurgerClick}
      >
        <span className="header-logged-buttons__span"></span>
      </div>
      <nav
        className={`header-logged-buttons__menu header-logged-buttons__menu${
          isBurgerOpened ? "_active" : ""
        }`}
      >
        <NavLink
          className="header-logged-buttons__button header-logged-buttons__button_main link"
          activeClassName="header-logged-buttons__button_active"
          exact
          to="/"
          onClick={handleLinkClick}
        >
          Главная
        </NavLink>
        <NavLink
          className="header-logged-buttons__button header-logged-buttons__button_movies link"
          activeClassName="header-logged-buttons__button_active"
          to="/movies"
          onClick={handleLinkClick}
        >
          Фильмы
        </NavLink>
        <NavLink
          className="header-logged-buttons__button header-logged-buttons__button_saved-movies link"
          activeClassName="header-logged-buttons__button_active"
          to="/saved-movies"
          onClick={handleLinkClick}
        >
          Сохраненные фильмы
        </NavLink>
        <NavLink
          className="header-logged-buttons__button header-logged-buttons__button_profile link"
          activeClassName="header-logged-buttons__button_active"
          to="/profile"
          onClick={handleLinkClick}
        >
          <p className="header-logged-buttons__profile-text">Аккаунт</p>
          <div className="header-logged-buttons__pictogram-background">
            <img
              className="header-logged-buttons__profile-pictogram"
              src={profilePictogram}
              alt="Профиль"
            />
          </div>
        </NavLink>
      </nav>
    </div>
  );
}

export default HeaderButtonsLogged;
