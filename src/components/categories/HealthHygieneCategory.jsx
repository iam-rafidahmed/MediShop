import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const HealthHygieneCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'hyg1',
      name: 'Sepnil Hand Sanitizer',
      description: 'Instant Hand Sanitizer with Moisturizer (200ml)',
      price: 250.00,
      image: '/images/products/hh1.jpg'
    },
    {
      id: 'hyg2',
      name: 'Dettol Liquid',
      description: 'Antiseptic Liquid for cuts and wounds (500ml)',
      price: 60.00,
      image: '/images/products/hh2.webp'
    },
    {
      id: 'hyg3',
      name: 'Godrej AER Power',
      description: 'Povidone-Iodine Antiseptic Solution (100ml)',
      price: 75.00,
      image: '/images/products/hh3.webp'
    },
    {
      id: 'hyg4',
      name: 'Sparkbliss Aquacool',
      description: 'Fever and Pain Relief Tablets (10 tablets/strip)',
      price: 210.00,
      image: '/images/products/hh4.webp'
    },
    {
      id: 'hyg5',
      name: 'Sparkbliss Lavender',
      description: 'Immune Support Supplement (30 tablets/bottle)',
      price: 150.00,
      image: '/images/products/hh5.png'
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