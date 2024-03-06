import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie, onFavoriteToggle, onDelete }) => {
  const cardStyle = {
    width: "150px",
    height: "200px",
    backgroundColor: "cadetblue",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const handleToggleFavorite = () => {
    onFavoriteToggle(movie._id, !movie.fav);
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      onDelete(movie._id);
    }
  };

  const buttonStyle = {
    backgroundColor: movie.fav ? "red" : "blue",
    width: "100%",
    padding: "8px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const eyeIconStyle = {
    color: "black",
    marginBottom: "10px",
  };

  return (
    <div>
      <div style={cardStyle}>
        <h3>{movie.movieName}</h3>
        <div>
          <Link to={`/movie/${movie._id}`} style={{ marginBottom: "10px" }}>
            <i className="fa-solid fa-eye" style={eyeIconStyle}></i>
          </Link>

          <i
            className="fa-solid fa-trash"
            style={{ color: "red", cursor: "pointer" }}
            onClick={confirmDelete}
          ></i>
        </div>
        <button style={buttonStyle} onClick={handleToggleFavorite}>
          {movie.fav ? "Favorite" : "Not Favorite"}
        </button>
      </div>
    </div>
  );
};

export default Card;
