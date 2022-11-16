import "./Movies.css";

import { useState, useEffect, useContext } from "react";
import { searchMovies } from "../../utils/SearchMovies";
import { useForm } from "../../hooks/useForm";
import moviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from '../../context/CurrentUserContext';

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCardListEmpty from "../MoviesCardListEmpty/MoviesCardListEmpty";

function Movies({ preloader }) {
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(preloader);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);
  const { values, handleChange, setValues } = useForm({});
  const { savedMovies } = useContext(CurrentUserContext);

  // установка и сброс полей формы
  const setForm = () => {
    setValues({ request: localStorage.getItem("request") })
  };
  const resetForm = () => {
    setValues({ request: "" })
  };

  // сброс поиска фильмов
  const resetToDefault = () => {
    setWasSearched(false);
    resetForm();
    setMovies([]);
    setIsFilterOn(false);
    localStorage.removeItem("moviesResult");
    localStorage.removeItem("filterMovies");
    localStorage.removeItem("request");
    localStorage.removeItem("wasSearched");
  }

  // управление переключателем короткометражек
  const handleFilter = () => {
    setIsFilterOn(!isFilterOn)
    localStorage.setItem("filterMovies", !isFilterOn);
  }

  // управление нажатием кнопки Поиск
  const handleSearchButton = () => {
    setWasSearched(true);
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((allMovies) => {
        const moviesResult = searchMovies(allMovies, values.request);
        if (moviesResult.length > 0) {
          setIsEmpty(false);
          setMovies(moviesResult);
        } else {
          setIsEmpty(true);
          setMovies([]);
        }
        localStorage.setItem("moviesResult", JSON.stringify(moviesResult));
        localStorage.setItem("request", values.request);
        localStorage.setItem("wasSearched", true);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }


  // пустая функция
  const deleteSavedMovie = (id) => {
    return
  }

  //рендер страницы с сохраненными состояниями 
  useEffect(() => {
    setWasSearched(localStorage.getItem("wasSearched"));
    localStorage.getItem("filterMovies") === "true"
      ? setIsFilterOn(true)
      : setIsFilterOn(false);
    localStorage.getItem("moviesResult") && setMovies(JSON.parse(localStorage.getItem("moviesResult")));
    setForm();
  }, []);

  return (
    <section className="movies">
      <SearchForm
        value={values.request}
        onChange={handleChange}
        isFilterOn={isFilterOn}
        handleFilter={handleFilter}
        handleSearchButton={handleSearchButton}
        wasSearched={wasSearched}
        resetToDefault={resetToDefault}
      />
      <MoviesCardListEmpty
        isEmpty={isEmpty}
        isLoading={isLoading}
      >
        <div className="movies-cards-empty__text">
          <p className="movies__inform">{
            !wasSearched
              ? "Здесь будут результаты поиска"
              : "Ничего не найдено."
          }
          </p>
          <button
            className={`button movies-cards-empty__button ${!wasSearched && "hidden"}`}
            type="button"
            onClick={resetToDefault}
          >
            Назад
          </button>
        </div>
      </MoviesCardListEmpty>
      <Preloader isLoading={isLoading} />
      <MoviesCardList
        movies={movies}
        isFilterOn={isFilterOn}
        isLoading={isLoading}
        setIsEmpty={setIsEmpty}
        showAllList={false}
        saveButton={true}
        deleteSavedMovie={deleteSavedMovie}
      >
      </MoviesCardList>
    </section>
  );
}

export default Movies;