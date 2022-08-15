import React from "react";
import { Link } from "react-router-dom";
import "../HomePage/homepage-assets/homepage.css";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="parent-container">
          <h1 className="homePage-header">Welcome to Cal's Shop</h1>
        <img
          src="https://picjumbo.com/wp-content/uploads/shopping-carts-in-ikea-store-warehouse-free-photo-2210x1473.jpg"
          alt=""
        />
        <div className="child-3">
          <Link to={"/Shop"}>
            <button type="button" className="button">
              Go to Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
