import "./App.css";

import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import * as auth from "../../utils/Auth";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Header from "../Header/Header";
import HeaderButtonsLogged from "../HeaderButtonsLogged/HeaderButtonsLogged";
import HeaderButtonsMain from "../HeaderButtonsMain/HeaderButtonsMain";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  // обработка ошибки от сервера в формах
  const handleErrorMessage = (message) => {
    return setErrorMessage(message);
  };

  // получение фильмов с BeatMovies
  const getBeatMovies = () => {
    return moviesApi
      .getAllMovies()
      .then((res) => {
        localStorage.setItem("allMovies", JSON.stringify(res));
        return res;
      })
      .catch((result) => {
        result.json().then((err) => {
          result.status && err.message
            ? console.log(result.status + ": " + err.message)
            : console.log("Что-то пошло не так");
        });
        return Promise.reject();
      })
      .finally(() => setIsLoading(false));
  };

  // добавление фильма в Сохраненные
  const handleMovieSave = (movie) => {
    return mainApi
      .postMovie(movie)
      .then((mov) => {
        savedMovies.push(mov);
      })
      .catch((result) => {
        result
          .json()
          .then((err) =>
            result.status && err.message
              ? console.log(result.status + ": " + err.message)
              : console.log("Что-то пошло не так")
          );
      })
      .finally(() => setIsLoading(false));
  };

  // удаление фильма из Сохраненных
  const handleMovieDelete = (cardId) => {
    return mainApi
      .deleteMovie(cardId)
      .then(() => {
        setSavedMovies(savedMovies.filter((el) => el._id !== cardId));
      })
      .catch((result) => {
        result
          .json()
          .then((err) =>
            result.status && err.message
              ? console.log(result.status + ": " + err.message)
              : console.log("Что-то пошло не так")
          );
      })
      .finally(() => setIsLoading(false));
  };

  // получение данных пользователя и сохраненных фильмов
  const getInitialData = () => {
    setIsLoading(true);
    return Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
      .then(([userInfo, movies]) => {
        // фильтр фильмов, сохранненых текущим пользователем
        const moviesArray = movies.filter((el) => el.owner === userInfo._id);
        setCurrentUser(userInfo);
        setSavedMovies(moviesArray);
        return moviesArray;
      })
      .catch((result) => {
        result
          .json()
          .then((err) =>
            result.status && err.message
              ? console.log(result.status + ": " + err.message)
              : console.log("Что-то пошло не так")
          );
      })
      .finally(() => setIsLoading(false));
  };

  //аутентификация
  const onLogin = ({ password, email }) => {
    setIsLoading(true);
    setErrorMessage("");
    return auth
      .authorize(password, email)
      .then((res) => {
        if (res.token) {
          return setIsLoggedIn(true);
        }
      })
      .catch((result) => {
        setIsLoading(false);
        return Promise.reject(result);
      });
    // .finally(() => setIsLoading(false));
  };

  // регистрация
  const onRegister = ({ password, email, name }) => {
    setIsLoading(true);
    setErrorMessage("");
    return auth
      .register(password, email, name)
      .then(() => {
        return setIsLoggedIn(true);
      })
      .catch((result) => {
        setIsLoading(false);
        return Promise.reject(result);
      });
    // .finally(() => setIsLoading(false));
  };

  // редактирование профиля
  const onEditProfile = (newUserInfo) => {
    // setIsLoading(true);
    setErrorMessage("");
    return mainApi
      .patchUserInfo(newUserInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
        console.log(updatedUserInfo);
      })
      .then(() => {
        setErrorMessage("Профиль успешно обновлен");
      })
      .catch((result) => {
        return Promise.reject(result);
      })
      .finally(() => setIsLoading(false));
  };

  // очистка хранилища и перенаправление на главную страницу
  const onSignOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/");
  };

  // авторизация
  const authorize = (token) => {
    return auth
      .validateToken(token)
      .then((res) => {
        if (res) {
          return setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // проверка токена и получение начальных данных
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      authorize(token)
        .then(getInitialData())
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
          setIsChecked(true);
        });
    } else {
      setIsLoading(false);
      setIsChecked(true);
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, savedMovies }}>
      <div className="page">
        <Switch>
          {isLoggedIn ? (
            <ProtectedRoute exact path="/movies" isLoggedIn={isLoggedIn}>
              <div className="page__container">
                <Header>
                  <HeaderButtonsLogged />
                </Header>
                <Movies
                  isLoading={isLoading}
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete}
                  getBeatMovies={getBeatMovies}
                />
              </div>
              <Footer />
            </ProtectedRoute>
          ) : (
            !isChecked && <Preloader isLoading={isLoading} fullsize={true} />
          )}

          {isLoggedIn ? (
            <ProtectedRoute exact path="/saved-movies" isLoggedIn={isLoggedIn}>
              <div className="page__container">
                <Header>
                  <HeaderButtonsLogged />
                </Header>
                <SavedMovies
                  isLoading={isLoading}
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete}
                />
              </div>
              <Footer />
            </ProtectedRoute>
          ) : (
            !isChecked && <Preloader isLoading={isLoading} fullsize={true} />
          )}
          {isLoggedIn ? (
            <ProtectedRoute exact path="/profile" isLoggedIn={isLoggedIn}>
              <div className="page__container">
                <Header>
                  <HeaderButtonsLogged />
                </Header>
                <Profile
                  onEditProfile={onEditProfile}
                  onSignOut={onSignOut}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  handleErrorMessage={handleErrorMessage}
                />
              </div>
              <Footer />
            </ProtectedRoute>
          ) : (
            !isChecked && <Preloader isLoading={isLoading} fullsize={true} />
          )}
          <Route exact path="/">
            <div className="page__container">
              <Header isMainPage={true}>
                {isLoggedIn ? <HeaderButtonsLogged /> : <HeaderButtonsMain />}
              </Header>
              <Main />
            </div>
            <Footer />
          </Route>

          <Route exact path="/signup">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <div className="page__container page__container_not-logged">
                <Header withoutPadding={true} />
                <Register
                  onRegister={onRegister}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  handleErrorMessage={handleErrorMessage}
                />
              </div>
            )}
          </Route>

          <Route exact path="/login">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <div className="page__container page__container_not-logged">
                <Header withoutPadding={true} />
                <Login
                  onLogin={onLogin}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  handleErrorMessage={handleErrorMessage}
                />
              </div>
            )}
          </Route>

          <Route path="/*">
            {!isLoggedIn ? <Redirect to="/" /> : <NotFound />}
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
