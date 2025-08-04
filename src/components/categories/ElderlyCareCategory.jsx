import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const ElderlyCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'elder1',
      name: 'Walking Cane',
      description: 'Adjustable height walking cane with comfortable grip',
      price: 899.99,
      image: '/images/products/product-1.jpg',
      stock: 40,
      manufacturer: 'MobilityPlus'
    },
    {
      id: 'elder2',
      name: 'Pill Organizer',
      description: 'Weekly pill organizer with AM/PM compartments',
      price: 349.99,
      image: '/images/products/product-2.jpg',
      stock: 65,
      manufacturer: 'MediOrganize'
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

export default ElderlyCareCategory; 