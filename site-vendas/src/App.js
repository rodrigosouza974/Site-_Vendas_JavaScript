import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductList from './components/ProductList/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './components/ProductDetailsPage';
import Cart from './components/Cart/Cart'; 

function App() {
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos
  const [cartItems, setCartItems] = useState([]); // Estado para armazenar os itens do carrinho

  useEffect(() => {
    // Função para carregar o arquivo JSON
    fetch('/path/to/your/products.json') // Substitua pelo caminho correto do seu arquivo JSON
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao carregar os produtos:', error));
  }, []);

  return (
    <Router>
      <Header cartItems={cartItems} /> {/* Passa cartItems como prop para o Header */}
      <Routes>
        <Route path="/" element={<Home products={products} />} /> {/* Passa os produtos para Home */}
        <Route path="/product/:productId" element={<ProductDetailsPage products={products} />} /> {/* Passa os produtos para ProductDetailsPage */}
        <Route path="/cart" element={<Cart items={cartItems} />} /> {/* Rota para o Carrinho */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


