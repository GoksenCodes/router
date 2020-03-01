import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const [movie, setMovie] = useState([]);
  const location = useParams();
  console.log(location);

  const search = async () => {
    const response = await axios.get(
      `https://omdbapi.com/?i=${location.id}&apikey=a062ae83`
    );
    console.log(response.data);

    setMovie(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <p>{movie.Title}</p>
      <img src={movie.Poster} />
    </div>
  );
}
