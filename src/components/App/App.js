import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route Route path="/movies">
          <Movies />
        </Route>
        <Route Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route Route path="/profile">
        </Route>
        <Route Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
