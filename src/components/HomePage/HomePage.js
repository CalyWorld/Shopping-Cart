import React from "react";
import { Link } from "react-router-dom";
import "../HomePage/homepage-assets/homepage.css";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="parent-container">
        <img
          src="https://picjumbo.com/wp-content/uploads/shopping-carts-in-ikea-store-warehouse-free-photo-2210x1473.jpg"
          alt=""
        />
        <div className="button-container">
          <Link to={"/Shop"}>
            <button type="button" className="shop-button">
              Go to Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
