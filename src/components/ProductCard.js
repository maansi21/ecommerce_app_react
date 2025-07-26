import React from 'react';
import './ProductCard.css';

function ProductCard({ product, goToDetails }) {
  return (
    <div className="product-card" onClick={() => goToDetails(product)}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;