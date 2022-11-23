import "../Button/Button.css";
import "./MoviesCard.css";
import moviesCardImage from "../../images/movies-card-image.png";

function MoviesCard({ children, lessThenThree }) {
  return (
    <li className="movies-card">
      {children}
      <img
        className={`movie-card__image ${lessThenThree && "movie-card__image_less-then-three"}`}
        src={moviesCardImage}
        alt="Постер"
      />
      <div className="movie-card__lable">
        <p className="movie-card__name">33 слова о дизайне</p>
        <p className="movie-card__duraiton">1ч 17м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
