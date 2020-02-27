import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function HomePage() {
  console.log("Home");
  return <h2>HOME</h2>;
}

function AboutPage() {
  console.log("About us ");
  return <h2>ABOUT</h2>;
}

function DiscoverMoviesPage() {
  console.log("Discover movies");
  return <h2>Discover movies</h2>;
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/DiscoverMovies" component={DiscoverMoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
