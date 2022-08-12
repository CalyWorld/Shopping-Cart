import React from "react";
import './shop-assets/shop.css';
const shopPage = ({ items, handleClick }) => {
  
  return (
    <div className="item-container">
      {items.map(item => (
        <div className="shopping-item" key={item.id}>
          <div className="image-container">
            <img src={item.image} alt="" />
          </div>
          <div className="item-identification">
            <div className="item-title">
              <p>{item.title}</p>
            </div>
            <div>${item.price}</div>
          </div>
          <div className="add-button-container">
            <button type="button" onClick={() => { handleClick(item) }}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default shopPage;