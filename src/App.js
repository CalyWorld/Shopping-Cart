import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './navPage';
import HomePage from '../src/components/HomePage/HomePage';
import ShopPage from '../src/components/ShopPage/shopPage';
import CartPage from '../src/components/CartPage/cartPage';
import ContactPage from '../src/components/ContactPage/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  const [cartScore, setCartScore] = useState(0);
  const [products, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products/');
    const items = await data.json();
    setProduct(items);
  };

  const handleClick = (cartItem) => {
    // const getEachProduct = products.filter((product) => product.id === id);
    if(cartProduct.some((item)=> item.id === cartItem.id)){
    // console.log("duplicated");
    console.log(cartItem);
    }
  
    //handle click gets each item when clicked;
    //it checks if the item is already in the array it is going into
    //if it is, it adds the amount property by 1 and not concat the array
    //if it is not, it adds the item into the array with an amount property of 1



    setCartScore(cartScore + 1);
  };



  return (
    <Router>
      <Nav cartScore={cartScore} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Shop' element={<ShopPage items={products} handleClick={handleClick} />} />
        <Route path='/Cart' element={<CartPage cartProduct={cartProduct} />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
