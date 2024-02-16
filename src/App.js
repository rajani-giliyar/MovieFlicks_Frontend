import './App.css';
import React from 'react';
import Navbar from './links/Navbar';
import Home from "./pages/Home"
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';// to give a notification 
import { Routes, Route,Navigate } from 'react-router-dom';
import MovieDetails from './components/card_container/MovieDetail';
// import UpdateMovieDetails from './components/card_container/UpdateMovieDetails';





function App() {
  return (
    <div className="App">
       <Navbar/>
  <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
    
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        {/* <Route path="/update/:id" element={UpdateMovieDetails} /> */}
        


      </Routes>
    </div>
  );
}

export default App;



