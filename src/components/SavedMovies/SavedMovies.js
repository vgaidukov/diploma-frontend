import "./SavedMovies.css";

import { useEffect, useState } from "react";
import { searchMovies } from "../../utils/SearchMovies";
import { useForm } from "../../hooks/hooks";
import mainApi from "../../utils/MainApi";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCardListEmpty from "../MoviesCardListEmpty/MoviesCardListEmpty";

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);
  const { values, handleChange, setValues } = useForm({});

  //сброс полей формы
  const resetForm = () => {
    setValues({
      request: ""
    })
  };

  // сброс поиска фильмов
  const resetToDefault = () => {
    setWasSearched(false);
    resetForm();
    setMovies(moviesSaved);
    setIsFilterOn(false);
  }

  // удаление фильма из DOM
  function deleteSavedMovie(id) {
    setMovies(movies.filter((el) => el.id !== id));
  }

  // управление переключателем короткометражек
  const handleFilter = () => {
    setIsFilterOn(!isFilterOn);
    localStorage.setItem("filterSavedMovies", !isFilterOn);
  }

  // управление нажатием кнопки Поиск
  const handleSearchButton = () => {
    setWasSearched(true);
    const moviesResult = searchMovies(movies, values.request);
    if (moviesResult.length > 0) {
      setMovies(moviesResult);
    } else {
      setMovies([]);
      setIsEmpty(true);
    }
  }

  // рендер страницы
  useEffect(() => {
    setIsFilterOn(false);
    setIsEmpty(false);
    setIsLoading(true);
    mainApi
      .getMovies()
      .then((moviesArray) => {
        setIsLoading(false);
        setMoviesSaved(moviesArray);
        if (moviesArray.length > 0) {
          setMovies(moviesArray);
        } else {
          setMovies([]);
          setIsEmpty(true);
        }
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className="saved-movies">
      <SearchForm
        value={values.request}
        isFilterOn={isFilterOn}
        wasSearched={wasSearched}
        handleSearchButton={handleSearchButton}
        handleFilter={handleFilter}
        resetToDefault={resetToDefault}
        onChange={handleChange}
      />
      <Preloader isLoading={isLoading} />
      <MoviesCardListEmpty
        isEmpty={isEmpty}
        isLoading={isLoading}
      >
        <div className="movies-cards-empty__text">
          <p className="movies__inform">{
            !wasSearched
              ? "У вас нет сохраненных фильмов"
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
      <MoviesCardList
        movies={movies}
        isFilterOn={isFilterOn}
        isLoading={isLoading}
        setIsEmpty={setIsEmpty}
        showAllList={true}
        saveButton={false}
        deleteSavedMovie={deleteSavedMovie}
      />
    </section >
  );
}

export default SavedMovies;