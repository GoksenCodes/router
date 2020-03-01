import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";

function HomePage() {
  console.log("Home");
  return <h2>HOME</h2>;
}

function AboutPage() {
  console.log("About us ");
  return <h2>ABOUT</h2>;
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/discovermovies/movie/:id" component={MoviePage} />
        <Route path="/discovermovies/:lookFor" component={DiscoverMoviesPage} />
        <Route path="/discovermovies/" component={DiscoverMoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
