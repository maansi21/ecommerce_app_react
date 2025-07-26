import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const goToDetails = (product) => {
    setSelectedProduct(product);
  };

  const goHome = () => setSelectedProduct(null);

  return (
    <div className="App">
      <header>
        <h1 onClick={goHome}>MyStore</h1>
        <Cart cart={cart} />
      </header>
      <main>
        {selectedProduct ? (
          <ProductDetails product={selectedProduct} addToCart={addToCart} />
        ) : (
          <ProductList goToDetails={goToDetails} />
        )}
      </main>
    </div>
  );
}

export default App;