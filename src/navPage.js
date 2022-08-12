import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
// import logo from '../src/components/CartPage/cart-asset/cart.svg';

const Nav = ({ cartScore }) => {

    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    return (
        <nav className="nav">
            <h3>logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/Home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/Shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/Cart/'>
                    <li>Cart {cartScore}</li>
                </Link>
                <Link style={navStyle} to='/Contact'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;