import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ movie, onFavoriteToggle, onDelete }) => {
    const cardStyle = {
        width: '150px',
        height: '200px',
        backgroundColor: 'cadetblue',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', // Adjust spacing between elements
        padding: '10px', // Add padding for better spacing
        borderRadius: '8px', // Add border radius for rounded corners
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
    };

    const handleToggleFavorite = () => {
        // Call the onFavoriteToggle function passed from CardContainer.js
        onFavoriteToggle(movie._id, !movie.fav);
    };

    const confirmDelete = () => {
        if (window.confirm('Are you sure you want to delete this movie?')) {
            onDelete(movie._id);
        }
    };


    const buttonStyle = {
        backgroundColor: movie.fav ? 'red' : 'blue',
        width: '100%',
        padding: '8px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px', // Adjust margin between buttons
    };

    
    const eyeIconStyle = {
        color: 'black', // Set the color of the eye icon to black
        marginBottom: '10px', // Adjust the margin to position the icon above the button
    };


    return (
        <div>
            <div style={cardStyle}>
            {/* <h3><Link to={`/movie/${movie._id}`}>{movie.movieName}</Link></h3> */}
                <h3>{movie.movieName}</h3>
                <div >
                    <Link to={`/movie/${movie._id}`} style={{ marginBottom: '10px' }}>
                    <i className="fa-solid fa-eye" style={eyeIconStyle} ></i> {/* FontAwesome icon for "View Details" */}
                    </Link>

                    <i className="fa-solid fa-trash" style={{ color: 'red', cursor: 'pointer' }} onClick={confirmDelete}></i>

                </div>
                <button style={buttonStyle} onClick={handleToggleFavorite}>
                    {movie.fav ? 'Favorite' : 'Not Favorite'}
                </button>
              
                
            </div>
        </div>
    );
};

export default Card;




















