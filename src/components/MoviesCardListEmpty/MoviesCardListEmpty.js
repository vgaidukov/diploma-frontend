import "../List/List.css";
import "./MoviesCardListEmpty.css";

function MoviesCardListEmpty({ children }) {
  return (
    <div className="movies-cards-empty">
      {children}
      <ul className="list movies-card-list-empty" >
        <li className="movies-card-empty">
        </li>
        <li className="movies-card-empty">
        </li>
        <li className="movies-card-empty">
        </li>
      </ul>
    </div >
  );
}

export default MoviesCardListEmpty;
