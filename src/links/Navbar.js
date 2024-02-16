import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {

  const pages = {
    backgroundColor: 'lightgray', // Light gray background color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '10px 15px', // Decreased padding for a sleeker look
    borderBottom: '1px solid #ccc', // Add a bottom border for separation
    borderTopRightRadius: '8px', // Rounded corners for the top-right
    borderTopLeftRadius: '8px', // Rounded corners for the top-left
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
};



  return (
    <div style={pages}>
      <Link to="/register" className="nav-link">Register</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </div>
  );
};

export default Navbar;
