import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css'; // Importa o arquivo de estilos CSS

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('/products.json'); // Verifique o caminho correto
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const productDetails = data.find(p => p.id === parseInt(productId, 10));
        setProduct(productDetails);
      } catch (error) {
        console.error("Erro ao carregar detalhes do produto:", error);
        setError("Erro ao carregar detalhes do produto. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return (
      <div className="product-details-container">
        <div className="loading">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-details-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-details-container">
        <div className="error">Produto não encontrado</div>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="price">Preço: R${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default ProductDetailsPage;
