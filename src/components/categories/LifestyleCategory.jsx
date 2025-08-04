import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const LifestyleCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'life1',
      name: 'Yoga Mat',
      description: 'Non-slip eco-friendly yoga mat with carrying strap',
      price: 999.99,
      image: '/images/products/product-1.jpg',
      stock: 60,
      manufacturer: 'YogaLife'
    },
    {
      id: 'life2',
      name: 'Aromatherapy Diffuser',
      description: 'Ultrasonic essential oil diffuser with LED lights',
      price: 1499.99,
      image: '/images/products/product-2.jpg',
      stock: 45,
      manufacturer: 'AromaWell'
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

export default LifestyleCategory; 