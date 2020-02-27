import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div class="container">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/DiscoverMovies">Discover</NavLink>
      </nav>
    </div>
  );
}
