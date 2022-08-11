import React, { useEffect, useState } from "react";
import './shop-assets/shop.css';
import { Link } from "react-router-dom";
const shopPage = () => {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products/');
    const items = await data.json();
    setItems(items);
  };

  return (
    <div className="item-container">
      {items.map(item => (
        <div className="shopping-item" key={item.id}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div className="item-identification">
            <div className="item-title">
              <p>{item.title}</p>
            </div>
            <div>${item.price}</div>
          </div>
          <div className="add-button-container">
            <Link to={`/Cart/${item.id}`}><button type="button">Add to Cart</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default shopPage;