import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {Switch, Route} from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieDetailsContainer from "./components/MovieDetails/MovieDetailsContainer";

function App() {
      return (
          <div className="app-wrapper">
              <Switch>
                  <Route path="/" exact component={MainPage}/>
                  <Route path="/movie/:movieId?" exact component={MovieDetailsContainer}/>
              </Switch>
          </div>
      );
}

export default App;
