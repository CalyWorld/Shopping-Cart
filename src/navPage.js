import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";


const Nav = ({ cartScore }) => {
  const navStyle = {
    color: "black",
    textDecoration: "none",
  };

  const iconStyle = {
    width: "50px",
    height: "50px"
  };

  const iconCartStyle = {
    width: "20px",
    height: "20px"
  };
  return (
    <nav className="nav">
      <FaShoppingCart style={iconStyle}/>
      <ul className="nav-links">
        <Link style={navStyle} to="/Home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/Shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/Cart/">
          <li><FaShoppingCart style={iconCartStyle}/>{cartScore}</li>
        </Link>
        <Link style={navStyle} to="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
