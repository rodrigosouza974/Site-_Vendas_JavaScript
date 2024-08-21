import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';

function App() {
    const products = [
        { id: 1, name: 'Product 1', price: '$10.00', image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: '$20.00', image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: '$30.00', image: 'product3.jpg' },
    ];

    return (
        <div className="App">
            <Header />
            <main>
                <h1>Our Products</h1>
                <ProductList products={products} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
