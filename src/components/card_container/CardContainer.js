import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardContainer = ({selectedGenre}) => {

    const [movieDetails, setMovieDetails] = useState([]);

   
    useEffect(() => {
        // Function to fetch movie details from your backend
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/movies/get/details');
                const data = await response.json();
                console.log('Fetched movie details:', data); // Log the fetched data
                setMovieDetails(data);
            } catch (error) {
                console.error('Error fetching movie details:', error.message);
            }
        };

        // Call the fetchMovieDetails function when the component mounts
        fetchMovieDetails();
    }, []); // The empty dependency array ensures the effect runs only once when the component mounts



    useEffect(() => {
        const fetchMovieDetailsByGenre = async () => {
            if (selectedGenre !== 'all') {
                try {
                    const response = await fetch(`http://localhost:8000/api/movies/getMovieDetailsByGenre/${selectedGenre}`);
                    const data = await response.json();
                    setMovieDetails(data);
                } catch (error) {
                    console.error('Error fetching movie details by genre:', error.message);
                }
            }
        };

        fetchMovieDetailsByGenre();
    }, [selectedGenre]);

    const handleFavoriteToggle = async (id, newFavoriteStatus) => {
        try {
            const response = await fetch(`http://localhost:8000/api/movies/updateFav`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: id, fav: newFavoriteStatus }),
            });
            if (response.ok) {
                // Update the favorite status in the state
                setMovieDetails(prevMovieDetails =>
                    prevMovieDetails.map(movie =>
                        movie._id === id ? { ...movie, fav: newFavoriteStatus } : movie
                    )
                );
            }
        } catch (error) {
            console.error('Error updating favorite status:', error.message);
        }
    };


    const handleDeleteMovie = async (movieId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/movies/deleteMovieById/${movieId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setMovieDetails(prevMovieDetails =>
                    prevMovieDetails.filter(movie => movie._id !== movieId)
                );
            }
        } catch (error) {
            console.error('Error deleting movie:', error.message);
        }
    };


    const cardcontainer = {
        width: '85%',
        backgroundColor:"lightgray",
        position: 'absolute',
        top: '60px', // Height of the Header
        left: '15%', // Width of the LeftSide
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)', // 5 columns in each row
        gap: '20px', // Adjust the gap between cards
        overflow: 'hidden', // Hide both vertical and horizontal scrollbars
        marginTop:"59px"
        
        
        }
  return (
    <div>
       <div style={cardcontainer}>
                {/* Map through the filtered movieDetails and display them using the Card component */}
                {movieDetails
                    // .filter((movie) => selectedGenre === 'all' || movie.genre.includes(selectedGenre)) here we filter and get moviedetails of selected genrewe do it same thing in our backend also for that we need to call api

                    .map((movie, index) => (
                        <Card key={index} movie={movie} onFavoriteToggle={handleFavoriteToggle} onDelete={handleDeleteMovie}  />
                    ))}
            </div>
    </div>
  )
}

export default CardContainer





