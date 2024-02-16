import React, { useState, useEffect } from 'react';
import  './Components.css';

const LeftSide = ({onGenreSelect}) => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Function to fetch genres from your backend
        const fetchGenres = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/movies/get/distinct/genres'); 
                const data = await response.json();
                setGenres(data);
            } catch (error) {
                console.error('Error fetching genres:', error.message);
            }
        };

        fetchGenres();
    }, []); 

    const leftside = {
            width: '15%',
            height: '100%',
            backgroundColor: 'cadetblue',
            overflow: 'hidden', // Hide both vertical and horizontal scrollbars
    };

  const handleItemClick= (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre); // Pass the selected genre to the parent component (App.js)
  }

    const handleSearch = (event) => {
      const searchTerm = event.target.value;
      console.log('Original Search Term:', searchTerm);
  
      // Convert the search term to lowercase
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      console.log('Lowercase Search Term:', lowercaseSearchTerm);
  
      // Filter genres based on the lowercase search term
      // here i used includes i can also use startswith,endswith
      const filteredGenres = genres.filter((genre) =>
          genre.toLowerCase().includes(lowercaseSearchTerm)
          
      );
      console.log('Filtered Genres:', filteredGenres);
  
      // Set the search term in state
      setSearchTerm(searchTerm);

      
  };


  

    return (
        <div style={leftside}>
            <h4  style={{ marginLeft: '10px',marginTop:"15px" }}>Genres</h4>
             {/* Add a search bar */}
             <input
                type="text"
                placeholder="Search genres"
                value={searchTerm}
                onChange={handleSearch}
                style={{  margin: '10px',
                padding: '8px',
                width: '90%',
                borderRadius: '5px',
                border: '1px solid #ccc',
                outline: 'none',
                backgroundColor: '#f2f2f2',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', }}
            />
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {genres
                  .filter((genre) => genre.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((genre, index) => (
                      <li className={genre === selectedGenre ? 'highlighted_item' : ''} key={index}  onClick={() => handleItemClick(genre)}    style={{ cursor: 'pointer', padding: '5px 10px', marginBottom: '5px' }}>{genre}</li>
                      
                  ))}
            </ul>
        </div>
    );
};

export default LeftSide;
