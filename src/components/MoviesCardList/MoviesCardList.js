import { Switch, Route } from "react-router-dom";

import "./MoviesCardList.css";
import "../List/List.css";
import "../Button/Button.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesCardMark from "../../images/movies-card-mark.svg";
import moviesCardDelete from "../../images/movies-card-delete.svg";

function MoviesCardList() {
  const lessThenThree = true;
  const lessThenThreeSaved = true;

  return (
    <div className="movies-cards">
      <Switch>
        <Route Route exact path="/movies">
          <ul className={`list movies-card-list ${lessThenThree && "movies-card-list_less-then-three"}`}>
            <MoviesCard lessThenThree={lessThenThree}>
              <button
                type="button"
                aria-label={true ? "Сохранить" : "Сохранено"}
                className={`button movies-card__button movies-card__button_${true ? "save" : "saved"}`}
              >
                {true ? "Сохранить" : <img className="movies-card__mark" src={moviesCardMark} alt="Отметка" />}
              </button>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
              <button
                type="button"
                aria-label={false ? "Сохранить" : "Сохранено"}
                className={`button movies-card__button movies-card__button_${false ? "save" : "saved"}`}
              >
                {false ? "Сохранить" : <img className="movies-card__mark" src={moviesCardMark} alt="Отметка" />}
              </button>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
              <button
                type="button"
                aria-label={false ? "Сохранить" : "Сохранено"}
                className={`button movies-card__button movies-card__button_${false ? "save" : "saved"}`}
              >
                {false ? "Сохранить" : <img className="movies-card__mark" src={moviesCardMark} alt="Отметка" />}
              </button>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard>

            {/* <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard>
            <MoviesCard lessThenThree={lessThenThree}>
            </MoviesCard> */}
          </ul>
          <button className="button movies-cards__more" type="button">Ещё</button>
        </Route>
        <Route Route exact path="/saved-movies">
          <ul className={`"list movies-card-list ${lessThenThreeSaved && "movies-card-list_less-then-three"}`}>
            <MoviesCard lessThenThreeSaved={lessThenThreeSaved}>
              {/* <button
                type="button"
                aria-label="Удалить из сохраненных"
                className="button movies-card__button movies-card__button_delete"
              >
                <img className="movies-card__delete" src={moviesCardDelete} alt="Отметка" />
              </button> */}
            </MoviesCard>
            <MoviesCard lessThenThreeSaved={lessThenThreeSaved}>
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
