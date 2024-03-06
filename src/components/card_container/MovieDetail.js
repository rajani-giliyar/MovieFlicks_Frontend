import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/movies/getMovieDetailsById/${id}`
      );
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error.message);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <div>
        <Link to="/home" onClick={handleGoBack}>
          <i className="fa-solid fa-circle-xmark"></i>
        </Link>
      </div>
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>{movieDetails.movieName}</h2>
      </div>
      <div style={styles.detailsContainer}>
        <div style={styles.imageContainer}>
          <img
            src={movieDetails.image}
            alt={movieDetails.movieName}
            style={styles.image}
          />
        </div>
        <div style={styles.infoContainer}>
          <div style={styles.field}>
            <p style={styles.label}>Genre:</p>
            <p>{movieDetails.genre.join(", ")}</p>
          </div>
          <div style={styles.field}>
            <p style={styles.label}>Casts:</p>
            <p>{movieDetails.casts.join(", ")}</p>
          </div>
          <div style={styles.field}>
            <p style={styles.label}>Rating:</p>
            <p>{movieDetails.ratings}</p>
          </div>
          <div style={styles.field}>
            <p style={styles.label}>Description:</p>
            <p>{movieDetails.description}</p>
          </div>
          <div style={styles.field}>
            <p style={styles.label}>Favorite:</p>
            <p>{movieDetails.fav ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    marginTop: "50px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  titleContainer: {
    padding: "20px",
    borderBottom: "2px solid #ccc",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  detailsContainer: {
    display: "flex",
  },
  imageContainer: {
    padding: "20px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "400px",
    borderRadius: "8px",
  },
  infoContainer: {
    flex: 1,
    padding: "20px",
  },
  field: {
    marginBottom: "20px",
  },
  label: {
    fontWeight: "bold",
  },
};

export default MovieDetails;
