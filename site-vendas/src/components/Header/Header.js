import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ cartItems }) {
    return (
        <header className="header">
            <div className="logo">MyLogo</div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><Link to="/cart">Carro ({cartItems.length})</Link></li> {/* Usa cartItems */}
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
