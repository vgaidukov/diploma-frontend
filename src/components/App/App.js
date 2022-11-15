import "./App.css";

import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import * as auth from '../../utils/Auth';
import mainApi from "../../utils/MainApi";

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

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const history = useHistory();

  // обновление списка сохраненных фильмов
  const handleSavedMovies = (array) => {
    return setSavedMovies(array);
  }

  // получение данных пользователя и сохраненных фильмов
  const getInitialData = () => {
    setIsLoading(true);
    return Promise.all([
      mainApi.getUserInfo(),
      mainApi.getMovies()
    ])
      .then(([userInfo, movies]) => {
        // фильтр фильмов, сохранненых текущим пользователем
        const moviesArray = movies.filter(el => el.owner === userInfo._id);
        setCurrentUser(userInfo);
        setSavedMovies(moviesArray);
        return moviesArray;
      })
      .catch((result) => {
        result.json()
          .then((err) =>
            (result.status && err.message)
              ? console.log(result.status + ": " + err.message)
              : console.log('Что-то пошло не так'));
      })
      .finally(() => setIsLoading(false));
  }

  //аутентификация
  const onLogin = ({ password, email }) => {
    setIsLoading(true);
    return auth
      .authorize(password, email)
      .then((res) => {
        if (res.token) {
          return setIsLoggedIn(true);
        }
      })
      .catch((result) => {
        return Promise.reject(result)
      })
      .finally(() => setIsLoading(false));
  };

  // регистрация
  const onRegister = ({ password, email, name }) => {
    setIsLoading(true);
    return auth
      .register(password, email, name)
      .then((res) => {
        return setIsLoggedIn(true);
      })
      .catch((result) => {
        return Promise.reject(result)
      })
      .finally(() => setIsLoading(false));
  };

  // редактирование профиля
  const onEditProfile = (newUserInfo) => {
    return mainApi
      .patchUserInfo(newUserInfo)
      .then(updatedUserInfo => {
        setCurrentUser(updatedUserInfo);
      })
      .catch((result) => {
        return Promise.reject(result)
      })
      .finally(() => setIsLoading(false));
  }

  // очистка хранилища и перенаправление на главную страницу
  const onSignOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push('/');
  };

  // авторизация
  const authorize = (token) => {
    return auth
      .validateToken(token)
      .then((res) => {
        if (res) {
          return setIsLoggedIn(true);
        }
        return history.push('/');
      })
      .catch((err) => console.log(err))
  }

  // проверка токена и получение начальных данных
  useEffect(() => {
    const token = localStorage.getItem('token');
    token && authorize(token);
    getInitialData();
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, savedMovies, handleSavedMovies }}>
      <div className="page">

        <Switch>

          <Route Route exact path="/">
            <div className="page__container">
              <Header isMainPage={true}>
                {isLoggedIn ? <HeaderButtonsLogged /> : <HeaderButtonsMain />}
              </Header>
              <Main />
            </div>
            <Footer />
          </Route>

          <Route Route exact path="/signup">
            <div className="page__container page__container_not-logged">
              <Header withoutPadding={true} />
              <Register
                onRegister={onRegister}
                isLoading={isLoading}
              />
            </div>
          </Route>

          <Route Route exact path="/login">
            <div className="page__container page__container_not-logged">
              <Header withoutPadding={true} />
              <Login
                onLogin={onLogin}
                isLoading={isLoading}
              />
            </div>
          </Route>

          <Route Route exact path="/movies">
            <div className="page__container">
              <Header >
                <HeaderButtonsLogged />
              </Header>
              <Movies isLoading={isLoading} />
            </div>
            <Footer />
          </Route>

          <Route Route exact path="/saved-movies">
            <div className="page__container">
              <Header>
                <HeaderButtonsLogged />
              </Header>
              <SavedMovies isLoading={isLoading} />
            </div>
            <Footer />

          </Route>
          <Route Route exact path="/profile">
            <div className="page__container">
              <Header>
                <HeaderButtonsLogged />
              </Header>
              <Profile
                onEditProfile={onEditProfile}
                onSignOut={onSignOut}
                isLoading={isLoading}
              />
            </div>
            <Footer />
          </Route>

          <Route Route path="/">
            <NotFound />
          </Route>

        </Switch>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
