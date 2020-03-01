import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { Link, useHistory, useParams } from "react-router-dom";

export default function DiscoverMoviesPage(props) {
  const [searchText, set_searchText] = useState("love");
  const [status, set_status] = useState("idle");
  const [allMovies, set_allMovies] = useState([]);
  const history = useHistory();
  const params = useParams();

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/DiscoverMovies/${routeParam}`);
  };

  useEffect(() => {
    search();
  }, [params.lookFor]);

  const search = async () => {
    // console.log("Start searching for:", searchText);
    set_status("searching");

    const queryParam = encodeURIComponent(params.lookFor);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=a062ae83&s=${queryParam}`
    );

    console.log("Success!", response);
    set_status("done");

    set_allMovies(response.data.Search);
  };

  // const effect = () => search();

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        {status}
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={navigateToSearch}>Search</button>
      </p>
      <div>
        {allMovies.map(movie => (
          <Link to={`/DiscoverMovies/movie/${movie.imdbID}`}>
            <p> {movie.Title} </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
