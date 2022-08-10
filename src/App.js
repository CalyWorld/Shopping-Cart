import './App.css';
import React from 'react';
import Nav from './navPage';
import HomePage from '../src/components/HomePage/HomePage';
import ShopPage from '../src/components/ShopPage/shopPage';
import CartPage from '../src/components/CartPage/cartPage';
import ContactPage from '../src/components/ContactPage/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Shop' element={<ShopPage />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
