import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import "./MovieList.css";

export const MovieList = ({
  movies,
  currentPage,
  handlePageChange,
  paginationData,
}) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Length</th>
            <th>Language</th>
            <th>Date of Release</th>
            <th>Country Released</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.mov_id}>
              <td>{movie.mov_id}</td>
              <td>{movie.mov_title}</td>
              <td>{movie.mov_year}</td>
              <td>{movie.mov_time}</td>
              <td>{movie.mov_lang}</td>
              <td>{movie.mov_dt_rel ? movie.mov_dt_rel : "-"}</td>
              <td>{movie.mov_rel_country}</td>
              <td>
                <Link to={`/movies/${movie.mov_id}`}>
                  <Button>Movie Details</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="pagination">
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(paginationData.last_page).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === currentPage}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === paginationData.last_page}
        />
        <Pagination.Last
          onClick={() => handlePageChange(paginationData.last_page)}
          disabled={currentPage === paginationData.last_page}
        />
      </Pagination>
    </>
  );
};
