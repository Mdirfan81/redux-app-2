import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import movieAPI from "../../common/api/movieAPI";
import { APIKey } from "../../common/api/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const ferchMovies = async () => {
      const response = await movieAPI
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.warn("Err", err);
        });
      console.log("API Data", response);
    };
  }, []);
  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
