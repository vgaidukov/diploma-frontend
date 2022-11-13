import "./MoviesCard.css";
import "../Button/Button.css";
import "../Hidden/Hidden.css";

import { useEffect, useState } from "react";

import moviesCardDelete from "../../images/movies-card-delete.svg";
import moviesCardMark from "../../images/movies-card-mark.svg";
import mainApi from "../../utils/MainApi";

function MoviesCard({
  movie,
  saveButton,
  deleteSavedMovie,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // УПРАВЛЕНИЕ СОБЫТИЯМИ

  const handleMouseOver = () => {
    setIsVisible(true);
  }
  const handleMouseOut = () => {
    setIsVisible(false);
  }
  const handleClick = (e) => {
    if (e.target.className === "movie-card__image") {
      window.open(movie.trailerLink);
    }
  }
  const handleMovieSave = () => {
    mainApi
      .postMovie(movie)
      .then((mov) => {
        console.log(mov);
        setIsSaved(true);
        localStorage.setItem(mov.id, JSON.stringify(mov));
      })
      .catch(err => console.log(err));
  }

  const handleMovieDelete = () => {
    const movieToDelete = JSON.parse(localStorage.getItem(movie.id));

    mainApi
      .deleteMovie(movieToDelete._id)
      .then((mov) => {
        setIsSaved(false);
        localStorage.removeItem(movie.id)
        if (!saveButton) {
          deleteSavedMovie(movie.id)
        }
      })
      .catch(err => console.log(err));
    setIsSaved(false)
  }

  // РЕНДЕР
  // кнопка сохранено/удаление, если фильм был сохранен
  useEffect(() => {
    if (localStorage.getItem(movie.id)) {
      setIsSaved(true);
    }
  }, [])

  return (
    <li
      className="movies-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <button
        type="button"
        aria-label={"Сохранить"}
        className={`button movies-card__button movies-card__button_save 
        ${(saveButton && isVisible && !isSaved) && "movies-card__button_visible"}`}
        onClick={handleMovieSave}
      >
        Сохранить
      </button>
      <button
        type="button"
        aria-label="Удалить"
        className={`button movies-card__button movies-card__button_${(saveButton) ? "saved" : "delete"} 
        ${((saveButton && isSaved) || (!saveButton && isVisible)) && "movies-card__button_visible"}`}
        onClick={handleMovieDelete}
      >
        {saveButton
          ? <img className="movies-card__mark" src={moviesCardMark} alt="Отметка" />
          : <img className="movies-card__delete" src={moviesCardDelete} alt="Отметка" />
        }
      </button>
      <div className="movie-card__image-container" >
        <img
          className="movie-card__image"
          src={`${saveButton ? "https://api.nomoreparties.co/" + movie.image.url : movie.image}`}
          alt={movie.nameEN}
        />
      </div >
      <div className="movie-card__lable">
        <p className="movie-card__name">{movie.nameRU}</p>
        <p className="movie-card__duraiton">{Math.floor(movie.duration / 60)}ч {movie.duration % 60}м</p>
      </div>
    </li >
  );
}

export default MoviesCard;
