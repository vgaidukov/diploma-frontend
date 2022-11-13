import "./MoviesCardList.css";
import "../List/List.css";
import "../Button/Button.css";
import "../Hidden/Hidden.css";

import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  isFilterOn,
  isLoading,
  setIsEmpty,
  showAllList,
  saveButton,
  deleteSavedMovie
}) {
  const [cardsRows, setCardsRows] = useState(1);
  const [isAllShown, setIsAllShown] = useState(false);
  const [lessThenThree, setLessThenThree] = useState(false);
  const [moviesShown, setMoviesShown] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [initialCards, setInitialCards] = useState(0);

  // ОБРАБОТЧИКИ СОБЫТИЙ

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  const handleMoreButton = () => {
    setCardsRows(cardsRows + 1);
  }

  // ОТРИСОВКА ЭЛЕМЕНТОВ СТРАНИЦЫ

  // задать количество выводимых карточек
  useEffect(() => {
    const windowWidth = window.innerWidth;
    switch (true) {
      case (windowWidth < 580):
        setInitialCards(5);
        break;
      case (windowWidth < 995):
        setInitialCards(2);
        break;
      default:
        setInitialCards(3);
    }
  }, [windowWidth]);

  // задать массив отфильтрованных фильмов, случатель размера экрана
  useEffect(() => {
    setMoviesShown([]);
    showAllList
      ? setCardsRows(movies.length)
      : setCardsRows(1)
    isFilterOn
      ? setMoviesFiltered(movies.filter((element) => element.duration <= 40))
      : setMoviesFiltered(movies);

    window.addEventListener("resize", getWindowWidth);

    return () => window.removeEventListener("resize", getWindowWidth);
  }, [movies, isFilterOn]);

  // рендер выводимых фильмов
  useEffect(() => {
    if ((cardsRows === 1) || (moviesShown.length < (initialCards * cardsRows))) {
      setMoviesShown(moviesFiltered.slice(0, initialCards * cardsRows));
    }
    moviesFiltered.length === 0
      ? setIsEmpty(true)
      : setIsEmpty(false);
  }, [moviesFiltered, cardsRows, initialCards]);

  // отображение кнопки Еще
  useEffect(() => {
    moviesShown.length === moviesFiltered.length
      ? setIsAllShown(true)
      : setIsAllShown(false);
  }, [moviesShown]);

  // отображение меньше трех карточек
  useEffect(() => {
    moviesShown.length < 3
      ? setLessThenThree(true)
      : setLessThenThree(false);
  }, [moviesShown]);

  return (
    <div className="movies-cards">
      <ul className={`list movies-card-list ${lessThenThree && "movies-card-list_less-then-three"} ${isLoading && "hidden"}`}>
        {moviesShown.map((element) => (
          <MoviesCard
            key={element.id || element._id}
            movie={element}
            saveButton={saveButton}
            deleteSavedMovie={deleteSavedMovie}
          />
        ))}
      </ul>
      <button
        className={`button movies-cards__more ${(isAllShown || isLoading) && "hidden"}`}
        type="button"
        onClick={handleMoreButton}>Ещё</button>
    </div >
  );
}

export default MoviesCardList;
