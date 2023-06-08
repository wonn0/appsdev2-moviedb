import React, { useState, useEffect } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import "./Menu.css";
import axios from "axios";

export const Menu = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/movies?page=${currentPage}`)
      .then((response) => {
        setMovies(response.data.data.data);
        setPaginationData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(movies);

  return (
    <div className="container">
      <h1>Movies 'R' Us Movie Database</h1>
      <MovieList
        movies={movies}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        paginationData={paginationData}
      />
    </div>
  );
};
