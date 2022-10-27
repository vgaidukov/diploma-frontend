import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route Route path="/movies">
            <Header />
            <Movies />
          </Route>
          <Route Route path="/saved-movies">
            <Header />
            <SavedMovies />
          </Route>
          <Route Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route Route exact path="/">
            <Header mainPage={true} />
            <Main />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
