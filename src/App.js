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
  const [eachProduct, setEachProduct] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products/');
    const items = await data.json();
    setProduct(items);
  };

  const handleClick = (id) => {
    const getEachProduct = products.filter((product) => product.id === id);
    setEachProduct(getEachProduct);
    setCartScore(cartScore + 1);
  };





  return (
    <Router>
      <Nav cartScore={cartScore} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Shop' element={<ShopPage items={products} handleClick={handleClick} />} />
        <Route path='/Cart' element={<CartPage eachProduct={eachProduct} />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
