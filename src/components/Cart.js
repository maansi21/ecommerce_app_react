import React from 'react';
import './Cart.css';

function Cart({ cart }) {
  return (
    <div className="cart">
      <span>🛒 {cart.length}</span>
    </div>
  );
}

export default Cart;