import "../List/List.css";
import "./MoviesCardListEmpty.css";

function MoviesCardListEmpty({ isEmpty, isLoading, children }) {
  return (
    <div className={`movies-cards-empty ${(!isEmpty || isLoading) ? "movies-cards-empty_hidden" : ""}`}>
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
