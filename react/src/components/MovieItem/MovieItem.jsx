import React from "react";
import { useNavigate, Link } from "react-router-dom";

export const MovieItem = ({
  mov_id,
  mov_title,
  mov_year,
  mov_time,
  mov_lang,
  mov_dt_rel,
  mov_rel_country,
}) => {
  const navigate = useNavigate();

  // const onClickDetails = () => {
  //   navigate(`/movies/${mov_id}`, { state: { id: mov_id } });
  // };

  return (
    <div className="container">
      <span>{mov_id}</span>
      <span>{mov_title}</span>
      <span>{mov_year}</span>
      <span>{mov_time}</span>
      <span>{mov_lang}</span>
      <span>{mov_dt_rel}</span>
      <span>{mov_rel_country}</span>
      {/* <button onClick={onClickDetails}>Movie Details</button> */}
      <Link to={`/movies/${mov_id}`}>
        <button>Movie Details</button>
      </Link>
    </div>
  );
};
