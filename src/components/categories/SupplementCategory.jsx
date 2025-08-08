import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const SupplementCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'supp1',
      name: 'Karkuma Joint Guard',
        description: 'joint health support',
      price: 2170.00,
      image: '/images/products/s1.webp'
    },
    {
      id: 'supp2',
      name: 'Karkuma Organic Healthy Gut',
        description: 'digestive health supplement',
      price: 800.00,
      image: '/images/products/s2.webp'
    },
    {
      id: 'supp3',
      name: 'Karkuma Organic Honey',
        description: 'organic natural honey',
      price: 75.00,
      image: '/images/products/s3.webp'
    },
    {
      id: 'supp4',
      name: 'Zinc Supplement',
        description: 'immune support zinc',
      price: 180.00,
      image: '/images/products/s4.webp'
    },
    {
      id: 'supp5',
      name: 'Immune 24 Hour +',
        description: 'daily immune support',
      price: 180.00,
      image: '/images/products/s5.webp'
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

export default SupplementCategory; 