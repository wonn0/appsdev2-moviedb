import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const id = useParams();
  const navigate = useNavigate();

  console.log(id.id);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/movies/${id.id}`)
        .then((response) => {
          setMovie(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  if (!id) {
    return <div>Loading...</div>;
  }

  console.log(movie);

  return (
    <div className="container">
      <h1>Movie Information</h1>
      <p>Movie Title: {movie.title}</p>
      <p>Year: {movie.year}</p>
      <p>Running Time: {movie.time}</p>
      {movie.directors && movie.directors.length > 0 ? (
        movie.directors.map((director, index) => (
          <p key={director.dir_id}>
            {index == 0 && "Directed By:"} {director.dir_fname}{" "}
            {director.dir_lname}
          </p>
        ))
      ) : (
        <p>No directors found.</p>
      )}
      {movie.cast && movie.cast.length > 0 ? (
        movie.cast.map((actor, index) => (
          <p key={actor.act_id}>
            {index == 0 && "Starring:"} {actor.actor.act_fname}{" "}
            {actor.actor.act_lname} - {actor.role}
          </p>
        ))
      ) : (
        <p>No cast found.</p>
      )}
      {movie.genres && movie.genres.length > 0 ? (
        movie.genres.map((genre, index) => (
          <p key={genre.gen_id}>
            {index == 0 && "Genre:"} {genre.gen_title}
          </p>
        ))
      ) : (
        <p>No genres found.</p>
      )}
      {movie.ratings && movie.ratings.length > 0 ? (
        movie.ratings.map((rating, index) => (
          <>
            <p key={rating.rev_id}>
              {index == 0 && "Rating:"} {rating.reviewer.rev_name}
            </p>
            <p>
              {index == 0 && "Score:"} {rating.rev_stars} stars
            </p>
          </>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
      <Button onClick={() => navigate(-1)}>Go Back to List</Button>
    </div>
  );
};
