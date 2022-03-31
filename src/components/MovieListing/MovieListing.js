import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import Moviecard from "../MovieCard/Moviecard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log("Movie Listing", movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}ERROR</h3>
      </div>
    );

  let renderShows = "";
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <Moviecard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}ERROR</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>

        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="shows-list">
        <h2>Shows</h2>

        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
