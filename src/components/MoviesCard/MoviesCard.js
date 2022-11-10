import { useState } from "react";
import "./MoviesCard.css";
import "../Button/Button.css";
import "../Hidden/Hidden.css";


import moviesCardMark from "../../images/movies-card-mark.svg";

// import moviesCardImage from "../../images/movies-card-image.png";

function MoviesCard({ movie }) {
  const [isHidden, setIsVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  }
  const handleMouseOut = () => {
    setIsVisible(false);
  }

  const handleClick = () => {
    setIsSaved(!isSaved);
  }

  return (
    <li className="movies-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <button
        type="button"
        aria-label={!isSaved ? "Сохранить" : "Сохранено"}
        className={`button movies-card__button movies-card__button_${!isSaved ? "save" : "saved"} ${(isHidden || isSaved) && "movies-card__button_hidden"}`}
        onClick={handleClick}
      >
        {!isSaved ? "Сохранить" : <img className="movies-card__mark" src={moviesCardMark} alt="Отметка" />}
      </button>
      <div className="movie-card__image-container" >
        <img
          className="movie-card__image"
          src={`https://api.nomoreparties.co/${movie.image.url}`}
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
