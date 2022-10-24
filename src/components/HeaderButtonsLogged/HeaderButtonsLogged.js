import { NavLink } from "react-router-dom";

import "../Link/Link.css";
import "./HeaderButtonsLogged.css";
import profilePictogram from "../../images/profile-pictogram.svg";

function HeaderButtonsLogged() {
  return (
    <div className="header__buttons header__buttons_logged">
      <NavLink
        className="header__button header__button_movies link"
        activeClassName="header__button_active"
        to="/movies"
      >
        Фильмы
      </NavLink>
      <NavLink
        className="header__button header__button_saved-movies link"
        activeClassName="header__button_active"
        to="/saved-movies"
      >
        Сохраненные фильмы
      </NavLink>
      <NavLink
        className="header__button header__button_profile link"
        activeClassName="header__button_active"
        to="/profile"
      >
        <p className="header__button_profile-text">Аккаунт</p>
        <div className="header__pictogram-background">
          <img
            className="header__profile-pictogram"
            src={profilePictogram}
            alt="Профиль"
          />
        </div>
      </NavLink>
    </div>
  );
}

export default HeaderButtonsLogged;
