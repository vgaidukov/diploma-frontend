import { Switch, Route } from "react-router-dom";

import "./App.css";
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

  return (
    <div className="page">
      <Switch>

        <Route Route exact path="/">
          <div className="page__container">
            <Header isMainPage={true}>
              <HeaderButtonsMain />
            </Header>
            <Main />
          </div>
          <Footer />
        </Route>

        <Route Route exact path="/signup">
          <div className="page__container page__container_not-logged">
            <Header withoutPadding={true} />
            <Register />
          </div>
        </Route>

        <Route Route exact path="/login">
          <div className="page__container page__container_not-logged">
            <Header withoutPadding={true} />
            <Login />
          </div>
        </Route>

        <Route Route exact path="/movies">
          <div className="page__container">
            <Header >
              <HeaderButtonsLogged />
            </Header>
            <Movies />
          </div>
          <Footer />
        </Route>

        <Route Route exact path="/saved-movies">
          <div className="page__container">
            <Header>
              <HeaderButtonsLogged />
            </Header>
            <SavedMovies />
          </div>
          <Footer />

        </Route>
        <Route Route exact path="/profile">
          <div className="page__container">
            <Header>
              <HeaderButtonsLogged />
            </Header>
            <Profile />
          </div>
          <Footer />
        </Route>

        <Route Route path="/">
          <NotFound />
        </Route>

      </Switch>
    </div >
  );
}

export default App;
