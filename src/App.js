import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./navPage";
import HomePage from "../src/components/HomePage/HomePage";
import ShopPage from "../src/components/ShopPage/shopPage";
import CartPage from "../src/components/CartPage/cartPage";
import ContactPage from "../src/components/ContactPage/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [cartScore, setCartScore] = useState(0);
  const [products, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [total, setTotal] = useState(1);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products/");
    const items = await data.json();
    setProduct(items);
  };

  const handleAmount = () => {
    //gets amount and price of each items and multiplies them together
  };

  const handleChange = (id, num) => {
    //gets the id of each item and makes sure it's the selected item then it adds the amount or decreases the amount based on the num being passed from the event handler
  };

  const handleDelete = (id) =>{
    const nonSelectedCart = cartProduct.filter(cart => cart.id !== id);
    setCartProduct(nonSelectedCart);
    setCartScore(cartScore - 1);
  }

  const handleClick = (cartItem) => {
    if (cartProduct.some((product) => product.id === cartItem.id)) {
      setCartProduct((products) =>
        products.map((eachProduct) =>
          eachProduct.id === cartItem.id
            ? { ...eachProduct, amount: eachProduct.amount + 1 }
            : eachProduct
        )
      );
      return;
    }

    //increase cart score when item is added into the cart store
    setCartScore(cartScore + 1);
    //add amount property to cartItem object
    setCartProduct((products) => [...products, { ...cartItem, amount: 1 }]);
  };

  console.log(cartProduct);

  return (
    <Router>
      <Nav cartScore={cartScore} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route
          path="/Shop"
          element={<ShopPage items={products} handleClick={handleClick} />}
        />
        <Route
          path="/Cart"
          element={<CartPage cartProduct={cartProduct} total={total} handleDelete={handleDelete} />}
        />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
