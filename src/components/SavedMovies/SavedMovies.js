import "./SavedMovies.css";

import { useEffect, useState, useContext } from "react";
import { searchMovies } from "../../utils/SearchMovies";
import { useForm } from "../../hooks/hooks";
import { CurrentUserContext } from '../../context/CurrentUserContext';

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCardListEmpty from "../MoviesCardListEmpty/MoviesCardListEmpty";

function SavedMovies({ isLoading }) {
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);

  const { values, handleChange, setValues } = useForm({});
  const { savedMovies } = useContext(CurrentUserContext);

  // сброс полей формы
  const resetForm = () => {
    setValues({ request: "" })
  };

  // сброс поиска фильмов
  const resetToDefault = () => {
    setWasSearched(false);
    resetForm();
    setMovies(savedMovies);
    setIsFilterOn(false);
  }

  // удаление фильма из DOM
  const deleteSavedMovie = (id) => {
    setMovies(movies.filter((el) => el._id !== id));
  }

  // управление переключателем короткометражек
  const handleFilter = () => {
    setIsFilterOn(!isFilterOn);
    localStorage.setItem("filterSavedMovies", !isFilterOn);
  }

  // управление нажатием на кнопку Поиск
  const handleSearchButton = () => {
    setWasSearched(true);
    const moviesResult = searchMovies(savedMovies, values.request);
    if (moviesResult.length > 0) {
      setIsEmpty(false);
      setMovies(moviesResult);
    } else {
      setIsEmpty(true);
      setMovies([]);
    }
  }

  // если есть сохраненые фильмы,
  // то добавить их в массив для рендеринга
  const checkLength = () => {
    if (savedMovies.length > 0) {
      setMovies(savedMovies);
    } else {
      setMovies([]);
      setIsEmpty(true);
    }
  }

  // сброс переключателя короткометражек
  // проверить длину массива сохраненных фильмов,
  // когда они будет загружены
  useEffect(() => {
    setIsFilterOn(false);
    savedMovies && checkLength();
  }, [isLoading, savedMovies])

  return (
    <section className="saved-movies">
      <SearchForm
        value={values.request}
        onChange={handleChange}
        handleSearchButton={handleSearchButton}
        isFilterOn={isFilterOn}
        handleFilter={handleFilter}
        wasSearched={wasSearched}
        resetToDefault={resetToDefault}
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