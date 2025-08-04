import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const PersonalCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'care1',
      name: 'Facial Cleanser',
      description: 'Gentle pH-balanced facial cleanser for all skin types',
      price: 399.99,
      image: '/images/products/product-1.jpg',
      stock: 80,
      manufacturer: 'DermaCare'
    },
    {
      id: 'care2',
      name: 'Moisturizing Lotion',
      description: '24-hour hydration body lotion with natural oils',
      price: 349.99,
      image: '/images/products/product-2.jpg',
      stock: 100,
      manufacturer: 'SkinEssentials'
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

export default PersonalCareCategory; 