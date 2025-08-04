import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const HealthHygieneCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'hyg1',
      name: 'Hand Sanitizer',
      description: 'Alcohol-based hand sanitizer with moisturizing formula',
      price: 199.99,
      image: '/images/products/product-1.jpg',
      stock: 150,
      manufacturer: 'CleanHands'
    },
    {
      id: 'hyg2',
      name: 'Face Masks Pack',
      description: 'Pack of 50 disposable 3-ply face masks',
      price: 499.99,
      image: '/images/products/product-2.jpg',
      stock: 100,
      manufacturer: 'SafeBreath'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="category-container">
      <div className="products-grid">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Tk {product.price.toFixed(2)}</p>
              <button 
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthHygieneCategory; 