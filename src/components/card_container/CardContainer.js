import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardContainer = ({ selectedGenre }) => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/movies/get/details"
        );
        const data = await response.json();
        console.log("Fetched movie details:", data);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      }
    };

    fetchMovieDetails();
  }, []);

  useEffect(() => {
    const fetchMovieDetailsByGenre = async () => {
      if (selectedGenre !== "all") {
        try {
          const response = await fetch(
            `http://localhost:8000/api/movies/getMovieDetailsByGenre/${selectedGenre}`
          );
          const data = await response.json();
          setMovieDetails(data);
        } catch (error) {
          console.error(
            "Error fetching movie details by genre:",
            error.message
          );
        }
      }
    };

    fetchMovieDetailsByGenre();
  }, [selectedGenre]);

  const handleFavoriteToggle = async (id, newFavoriteStatus) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/movies/updateFav`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id, fav: newFavoriteStatus }),
        }
      );
      if (response.ok) {
        setMovieDetails((prevMovieDetails) =>
          prevMovieDetails.map((movie) =>
            movie._id === id ? { ...movie, fav: newFavoriteStatus } : movie
          )
        );
      }
    } catch (error) {
      console.error("Error updating favorite status:", error.message);
    }
  };

  const handleDeleteMovie = async (movieId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/movies/deleteMovieById/${movieId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setMovieDetails((prevMovieDetails) =>
          prevMovieDetails.filter((movie) => movie._id !== movieId)
        );
      }
    } catch (error) {
      console.error("Error deleting movie:", error.message);
    }
  };

  const cardcontainer = {
    width: "85%",
    backgroundColor: "lightgray",
    position: "absolute",
    top: "60px",
    left: "15%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
    overflow: "hidden",
    marginTop: "59px",
  };
  return (
    <div>
      <div style={cardcontainer}>
        {movieDetails.map((movie, index) => (
          <Card
            key={index}
            movie={movie}
            onFavoriteToggle={handleFavoriteToggle}
            onDelete={handleDeleteMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
