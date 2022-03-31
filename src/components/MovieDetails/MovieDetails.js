import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMoviesOrShowDetail,
  getAllDetail,
  removeData,
  // removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { imdbID } = useParams();
  console.log("Here Movie Detail", imdbID);
  const dispatch = useDispatch();
  const data = useSelector(getAllDetail);
  console.log("Here Movie Detail", data);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowDetail(imdbID));
    return () => {
      dispatch(removeData());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">
          <h1>{data.Title}</h1>
        </div>
        <div className="movie-rating">
          <span>
            IMDb Rating <i className="fa fa-star"></i>: {data.imdbRating}
          </span>
          <span>
            IMDb Votes <i className="fa fa-thumbs-up"></i>: {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i>: {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i>: {data.Year}
          </span>
        </div>

        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-rigth">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetails;
