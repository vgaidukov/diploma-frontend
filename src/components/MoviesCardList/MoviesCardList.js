import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./MoviesCardList.css";
import "../List/List.css";
import "../Button/Button.css";
import "../Hidden/Hidden.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesCardDelete from "../../images/movies-card-delete.svg";

function MoviesCardList({
  movies,
  isFilterOn,
  isLoading,
  setIsEmpty
}) {
  const [cardsRows, setCardsRows] = useState(0);
  const [initialCardsRows, setInitialCardsRows] = useState(3);
  const [isAllShown, setIsAllShown] = useState(false);
  const [lessThenThree, setLessThenThree] = useState(false);
  const [moviesShown, setMoviesShown] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [cardsColumns, setCardsColumns] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // ОБРАБОТЧИКИ СОБЫТИЙ

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  const handleMoreButton = () => {
    setMoviesShown(moviesFiltered.slice(0, cardsColumns * cardsRows));
    setCardsRows(cardsRows + initialCardsRows);
  }

  // ОТРИСОВКА ЭЛЕМЕНТОВ СТРАНИЦЫ

  // задать количество выводимых строк и колон
  useEffect(() => {
    const windowWidth = window.innerWidth;

    switch (true) {
      case (windowWidth < 580):
        setCardsColumns(1);
        setCardsRows(5);
        setInitialCardsRows(5);
        break;
      case (windowWidth < 995):
        setCardsColumns(2);
        setCardsRows(1);
        setInitialCardsRows(1);
        break;
      default:
        setCardsColumns(3);
        setCardsRows(1);
        setInitialCardsRows(1);
    }
  }, [movies, windowWidth]);

  // фильтр фильмов
  useEffect(() => {
    if (movies.length === 0) { return };

    setMoviesShown([]);
    isFilterOn
      ? setMoviesFiltered(movies.filter((element) => element.duration <= 40))
      : setMoviesFiltered(movies);

    window.addEventListener("resize", getWindowWidth);
    return () => window.removeEventListener("resize", getWindowWidth);
  }, [movies, isFilterOn]);

  // пустой список
  useEffect(() => {
    setMoviesShown(moviesFiltered.slice(0, cardsColumns * cardsRows));
    moviesFiltered.length === 0
      ? setIsEmpty(true)
      : setIsEmpty(false);
  }, [moviesFiltered, cardsRows, cardsColumns]);

  // контроль кнопки Еще
  useEffect(() => {
    moviesShown.length === moviesFiltered.length
      ? setIsAllShown(true)
      : setIsAllShown(false);
  }, [moviesShown]);

  // контроль меньше трех карточек
  useEffect(() => {
    moviesShown.length < 3
      ? setLessThenThree(true)
      : setLessThenThree(false);
  }, [moviesShown]);

  return (
    <div className="movies-cards">
      <Switch>
        <Route Route exact path="/movies">
          <ul className={`list movies-card-list ${lessThenThree && "movies-card-list_less-then-three"} ${isLoading && "hidden"}`}>
            {
              moviesShown.map((element) => (
                <MoviesCard
                  key={element.id}
                  movie={element}
                />
              ))}
          </ul>
          <button
            className={`button movies-cards__more ${(isAllShown || isLoading) && "hidden"}`}
            type="button"
            onClick={handleMoreButton}>Ещё</button>
        </Route>
        <Route Route exact path="/saved-movies">
          <ul className={`"list movies-card-list ${isAllShown && "movies-card-list_less-then-three"}`}>
            <MoviesCard>
              <button
                type="button"
                aria-label="Удалить из сохраненных"
                className="button movies-card__button movies-card__button_delete"
              >
                <img className="movies-card__delete" src={moviesCardDelete} alt="Отметка" />
              </button>
            </MoviesCard>
            <MoviesCard>
              <button
                type="button"
                aria-label="Удалить из сохраненных"
                className="button movies-card__button movies-card__button_delete"
              >
                <img className="movies-card__delete" src={moviesCardDelete} alt="Отметка" />
              </button>
            </MoviesCard>
          </ul>
        </Route>
      </Switch >
    </div >

  );
}

export default MoviesCardList;
