import "./SearchForm.css";
import "../Button/Button.css";
import searchIcon from "../../images/search-icon.svg";
import searchSubmitIcon from "../../images/search-submit-icon.svg";
import Toggle from "../Toggle/Toggle";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <img className="search__icon" src={searchIcon} alt="Поле поиска" />
        <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Фильм" />
        <button className="button search__submit-button" type="submit">
          <img className="search__submit-icon" src={searchSubmitIcon} alt="Кнопка поиска" />
        </button>
        <div className="search__filter">
          <Toggle />
          <p className="search__toggle-lable">Короткометражки</p>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;