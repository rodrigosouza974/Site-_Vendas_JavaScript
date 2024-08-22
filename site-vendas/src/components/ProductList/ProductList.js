import React from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';


function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-item" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    {/* Este link direciona para a página de detalhes do produto */}
                    <Link to={`/product/${product.id}`}>Ver detalhes</Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;


