import React from "react";
import { Link } from "react-router-dom";
import "../HomePage/homepage-assets/homepage.css";
const HomePage = () => {
  return (
    <div>
      <h1 className="homePage-header">Welcome to Cal's Shop</h1>
      <div className="image-container">
        <img
          className="homePage-image"
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="shop-button">
          <Link to={'/Shop'}><button type="button">Go to Shopping</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
