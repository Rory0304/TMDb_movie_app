import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
function Movie({ title, date, overview, poster }) {
  return (
    <div className="movies_movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_date">{date}</h5>
        <p className="overview">{overview}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
  // pages: PropTypes.number.isRequired,
  // page: PropTypes.number.isRequired
};

export default Movie;
