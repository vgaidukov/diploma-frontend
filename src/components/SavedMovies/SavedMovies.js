import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCardListEmpty from "../MoviesCardListEmpty/MoviesCardListEmpty";

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardListEmpty>
        <p className="saved-movies__inform">Здесь будут сохраненные фильмы</p>
      </MoviesCardListEmpty>
      <Preloader />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;