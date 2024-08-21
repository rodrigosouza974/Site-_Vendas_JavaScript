// src/pages/Home/HomePage.js
import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './Home.css';

function Home() {
    // Lista estática de produtos
    const products = [
        { id: 1, name: 'Product 1', price: '$10.00', image: '/assets/product1.jpg' },
        { id: 2, name: 'Product 2', price: '$20.00', image: '/assets/product2.jpg' },
        { id: 3, name: 'Product 3', price: '$30.00', image: '/assets/product3.jpg' },
        { id: 4, name: 'Product 4', price: '$40.00', image: '/assets/product4.jpg' },
    ];

    return (
        <div className="home-page">
            <h1>Welcome to Our Store</h1>
            <ProductList products={products} />
        </div>
    );
}

export default Home;
