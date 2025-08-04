import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const FitnessCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'fit1',
      name: 'Fitness Tracker',
      description: 'Advanced tracker with heart rate and sleep monitoring',
      price: 2499.99,
      image: '/images/products/product-1.jpg',
      stock: 45,
      manufacturer: 'FitTech'
    },
    {
      id: 'fit2',
      name: 'Protein Powder',
      description: 'High-quality whey protein for muscle recovery',
      price: 1299.99,
      image: '/images/products/product-2.jpg',
      stock: 75,
      manufacturer: 'NutriPower'
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

export default FitnessCategory; 