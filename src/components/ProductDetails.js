import React from 'react';
import './ProductDetails.css';

function ProductDetails({ product, addToCart }) {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;