import "./SearchForm.css";
import "../Button/Button.css";

import searchIcon from "../../images/search-icon.svg";
import filterRemoveIcon from "../../images/filter-remove-icon.svg";
import searchSubmitIcon from "../../images/search-submit-icon.svg";

import Toggle from "../Toggle/Toggle";

function SearchForm({
  handleSearchButton,
  handleFilter,
  isFilterOn,
  onChange,
  value,
  wasSearched,
  resetToDefault
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchButton();
  }

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={handleSubmit}
      >
        <div className="search__line">
          <img className={`search__icon-search ${wasSearched && "hidden"}`} src={searchIcon} alt="Поле поиска" />
          <button type="button" className={`button search__icon ${!wasSearched && "hidden"}`} onClick={resetToDefault}>
            <img className={`search__icon-remove ${!wasSearched && "hidden"}`} src={filterRemoveIcon} alt="Очистить" />
          </button>
          <input
            className="search__input"
            type="text"
            name="request"
            id="request"
            placeholder="Фильм"
            onChange={onChange}
            required
            value={value || ""}
            autoComplete="off" />
          <button className="button search__submit-button" type="submit">
            <img className="search__submit-icon" src={searchSubmitIcon} alt="Кнопка поиска" />
          </button>
        </div>
        <div className="search__filter">
          <Toggle
            handleFilter={handleFilter}
            isFilterOn={isFilterOn}
          />
          <p className="search__toggle-lable">Короткометражки</p>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
