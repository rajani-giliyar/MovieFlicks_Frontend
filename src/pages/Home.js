import React from 'react'
import { useState} from 'react';
import Header from '../components/Header';
import LeftSide from '../components/LeftSide';
import CardContainer from '../components/card_container/CardContainer';

const Home = () => {
    const [selectedGenre, setSelectedGenre] = useState('all');

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
    };
  return (
    <div>
       <Header/>
       <LeftSide onGenreSelect={handleGenreSelect} />
       <CardContainer selectedGenre={selectedGenre} />
    </div>
  )
}

export default Home