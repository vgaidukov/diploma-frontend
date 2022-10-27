import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCardListEmpty from "../MoviesCardListEmpty/MoviesCardListEmpty";

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      {/* <MoviesCardListEmpty>
        <p className="movies__inform">Здесь будут результаты поиска</p>
      </MoviesCardListEmpty>
      <Preloader /> */}
      <MoviesCardList />
    </section>
  );
}

export default Movies;