import "./App.css";
import Header from "../Header/Header";
import HeaderButtonsLogged from "../HeaderButtonsLogged/HeaderButtonsLogged";
import HeaderButtonsMain from "../HeaderButtonsMain/HeaderButtonsMain";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route Route path="/movies">
            <Header>
              <HeaderButtonsLogged />
            </Header>
            <Movies />
          </Route>
          <Route Route path="/saved-movies">
            <Header>
              <HeaderButtonsLogged />
            </Header>
            <SavedMovies />
          </Route>
          <Route Route path="/profile">
            <Header>
              <HeaderButtonsLogged />
            </Header>
            <Profile />
          </Route>
          <Route Route path="/signup">
            <Register />
          </Route>
          <Route Route exact path="/">
            <Header isMainPage={true}>
              <HeaderButtonsMain />
            </Header>
            <Main />
          </Route>
        </Switch>
      </div>
      <Footer isHidden={true} />
    </div>
  );
}

export default App;
