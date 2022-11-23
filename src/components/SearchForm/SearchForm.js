import { useState } from "react";

import "./SearchForm.css";
import "../Button/Button.css";

import searchIcon from "../../images/search-icon.svg";
import filterRemoveIcon from "../../images/filter-remove-icon.svg";
import searchSubmitIcon from "../../images/search-submit-icon.svg";


import Toggle from "../Toggle/Toggle";

function SearchForm({
  value,
  onChange,
  isFilterOn,
  handleFilter,
  handleSearchButton,
  wasSearched,
  resetToDefault
}) {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    value
      ? handleSearchButton()
      : setIsEmpty(false);
  }

  const handleInput = (e) => {
    setIsEmpty(true);
    onChange(e);
  }

  const hendleIconClick = (e) => {
    setIsEmpty(true)
    resetToDefault();
  }

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search__line">
          <img
            className={`search__icon-search ${wasSearched && "hidden"}`}
            src={searchIcon}
            alt="Поле поиска"
          />
          <button
            type="button"
            className={`button search__icon ${!wasSearched && "hidden"}`}
            onClick={hendleIconClick}
          >
            <img
              className={`search__icon-remove ${!wasSearched && "hidden"}`}
              src={filterRemoveIcon}
              alt="Очистить"
            />
          </button>
          <input
            className="search__input"
            type="text"
            name="request"
            id="request"
            placeholder={!isEmpty ? "Нужно ввести ключевое слово" : "Фильм"}
            onChange={handleInput}
            required
            value={value || ""}
            autoComplete="off"
          />
          <button className="button search__submit-button" type="submit">
            <img
              className="search__submit-icon"
              src={searchSubmitIcon}
              alt="Кнопка поиска"
            />
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
