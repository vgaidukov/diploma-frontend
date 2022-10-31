import { NavLink } from "react-router-dom";

import "../Link/Link.css";
import "./HeaderButtonsLogged.css";
import profilePictogram from "../../images/profile-pictogram.svg";

function HeaderButtonsLogged() {
  return (
    <div className="header-logged-buttons">
      <NavLink
        className="header-logged-buttons__button header-logged-buttons__button_movies link"
        activeClassName="header-logged-buttons__button_active"
        to="/movies"
      >
        Фильмы
      </NavLink>
      <NavLink
        className="header-logged-buttons__button header-logged-buttons__button_saved-movies link"
        activeClassName="header-logged-buttons__button_active"
        to="/saved-movies"
      >
        Сохраненные фильмы
      </NavLink>
      <NavLink
        className="header-logged-buttons__button header-logged-buttons__button_profile link"
        activeClassName="header-logged-buttons__button_active"
        to="/profile"
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
    </div>
  );
}

export default HeaderButtonsLogged;
