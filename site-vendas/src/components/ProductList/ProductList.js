import React from 'react';
import './ProductList.css';

function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-item" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
