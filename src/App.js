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

  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products/", {
      mode: "cors",
    });
    const items = await data.json();
    setProduct(items);
  };

  const increment = (cartItem) => {
    setCartProduct((products) =>
      products.map((eachCart) =>
        eachCart.id === cartItem.id
          ? { ...eachCart, amount: eachCart.amount + 1 }
          : eachCart
      )
    );
    return;
  };

  const decrement = (cartItem) => {
    if (cartItem.amount === 1) {
      handleDelete(cartItem.id);
    } else {
      setCartProduct((product) =>
        product.map((eachCart) =>
          eachCart.id === cartItem.id
            ? { ...eachCart, amount: eachCart.amount - 1 }
            : eachCart
        )
      );
      return;
    }
  };

  // console.log(cartProduct);

  const handleDelete = (id) => {
    const nonSelectedCart = cartProduct.filter((cart) => cart.id !== id);
    setCartProduct(nonSelectedCart);
    setCartScore(cartScore - 1);
  };

  if(cartProduct.length === 0){
    console.log("cart empty");
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

    setCartScore(cartScore + 1);
    //add amount property to cartItem object
    setCartProduct((products) => [...products, { ...cartItem, amount: 1 }]);
  };

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
          element={
            <CartPage
              cartProduct={cartProduct}
              handleDelete={handleDelete}
              increment={increment}
              decrement={decrement}
            />
          }
        />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
