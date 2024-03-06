import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const pages = {
    backgroundColor: "lightgray",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "10px 15px",
    borderBottom: "1px solid #ccc",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={pages}>
      <Link to="/register" className="nav-link">
        Register
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
