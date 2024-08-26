import React from 'react';
import './Cart.css'; // Importa o CSS
//import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom

const Cart = ({ items, removeItem, updateQuantity }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Seu Carrinho de compras Está Vazio</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span> - ${item.price}</span>
              <span> x {item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
