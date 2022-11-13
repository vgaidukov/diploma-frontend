import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./MoviesCardList.css";
import "../List/List.css";
import "../Button/Button.css";
import "../Hidden/Hidden.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesCardDelete from "../../images/movies-card-delete.svg";
// import moviesCardMark from "../../images/movies-card-mark.svg";

function MoviesCardList({
  movies,
  isFilterOn,
  isLoading,
  setIsEmpty,
  showAllList
}) {
  const [cardsRows, setCardsRows] = useState(0);
  const [initialCardsRows, setInitialCardsRows] = useState(3);
  const [isAllShown, setIsAllShown] = useState(false);
  const [lessThenThree, setLessThenThree] = useState(false);
  const [moviesShown, setMoviesShown] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [cardsColumns, setCardsColumns] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // сохранение и удаление фильмов
  let savedMovies = [];

  const handleMovieSave = (movie) => {
    savedMovies.push(movie);
    // console.log(savedMovies);
  }

  const handleMovieUnSave = (movie) => {
    savedMovies = savedMovies.filter((element) => element.id !== movie.id);
    // console.log(savedMovies);

  }

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
    // console.log(movies);
    if (movies.length === 0) { return };
    // console.log(1);
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
      {/* <Switch>
        <Route Route exact path="/movies"> */}
      <ul className={`list movies-card-list ${lessThenThree && "movies-card-list_less-then-three"} ${isLoading && "hidden"}`}>
        {moviesShown.map((element) => (
          <MoviesCard
            key={element.id}
            movie={element}
            // setIsVisible="setIsVisible"
            // handleMouseOver="handleMouseOver"
            // handleMouseOut="handleMouseOut"
            handleMovieSave={handleMovieSave}
            handleMovieUnSave={handleMovieUnSave}
          >
            {/* <button
                    type="button"
                    aria-label={!isSaved ? "Сохранить" : "Сохранено"}
                    className={`button movies-card__button movies-card__button_${!isSaved ? "save" : "saved"} ${(isHidden || isSaved) && "movies-card__button_hidden"}`}
                    onClick="handleClick"
                  >
                    {!isSaved ? "Сохранить" : <img className="movies-card__mark" src={moviesCardMark} alt="Отметка" />}
                  </button> */}
          </MoviesCard>
        ))}
      </ul>
      <button
        className={`button movies-cards__more ${(isAllShown || isLoading) && "hidden"}`}
        type="button"
        onClick={handleMoreButton}>Ещё</button>
      {/* </Route> */}
      {/* <Route Route exact path="/saved-movies">
          <ul className={`"list movies-card-list ${isAllShown && "movies-card-list_less-then-three"}`}>
            {moviesShown.map((element) => {
              <MoviesCard
                key={element.id}
                movie={element}
                handleMovieSave={handleMovieSave}
                handleMovieUnSave={handleMovieUnSave}
              />
            })
            }
          </ul>
        </Route> */}
      {/* </Switch > */}
    </div >

  );
}

export default MoviesCardList;
