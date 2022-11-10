import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCardListEmpty from "../MoviesCardListEmpty/MoviesCardListEmpty";

import { useState } from "react";
import api from "../../utils/MoviesApi";
import { useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);

  useEffect(() => {
    setWasSearched(false);
  }, []);

  const searchMovies = () => {
    setWasSearched(true);
    setIsLoading(true);
    setIsEmpty(false);
    api
      .getMoviesArray()
      .then((films) => {
        const moviesArray = films.slice(0, 62);

        setIsLoading(false);
        if (moviesArray.length > 0) {
          setMovies(moviesArray);
        } else {
          setMovies([]);
          setIsEmpty(true);
        }
      })
      .catch((err) => console.log(err))
  }

  const handleFilter = () => {
    setIsFilterOn(!isFilterOn);
  }

  return (
    <section className="movies">
      <SearchForm
        searchMovies={searchMovies}
        handleFilter={handleFilter}
      />
      <MoviesCardListEmpty isEmpty={isEmpty}>
        <p className="movies__inform">{
          !wasSearched
            ? "Здесь будут результаты поиска"
            : "Ничего не найдено"
        }
        </p>
      </MoviesCardListEmpty>
      <Preloader isLoading={isLoading} />
      <MoviesCardList
        movies={movies}
        isFilterOn={isFilterOn}
        isLoading={isLoading}
        setIsEmpty={setIsEmpty}
      />
    </section>
  );
}

export default Movies;