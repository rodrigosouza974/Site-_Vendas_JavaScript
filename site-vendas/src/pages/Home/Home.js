import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './Home.css';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Carregar dados do arquivo JSON
        fetch('/products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="home">
            <h1>Bem vindo ao Site de Vendas</h1>
            <ProductList products={products} />
        </div>
    );
}

export default Home;
