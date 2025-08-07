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
      image: '/images/products/product-1.jpg'
    },
    {
      id: 'elder2',
      name: 'Pill Organizer',
      description: 'Weekly pill organizer with AM/PM compartments',
      price: 349.99,
      image: '/images/products/product-2.jpg'
    },
    {
      id: 'elder3',
      name: 'Blood Pressure Monitor',
      description: 'Digital automatic blood pressure monitor for home use',
      price: 1299.99,
      image: '/images/products/product-3.jpg'
    },
    {
      id: 'elder4',
      name: 'Grab Bar',
      description: 'Safety grab bar for bathroom and shower installation',
      price: 599.99,
      image: '/images/products/product-4.jpg'
    },
    {
      id: 'elder5',
      name: 'Reading Glasses',
      description: 'Comfortable reading glasses with anti-glare coating',
      price: 249.99,
      image: '/images/products/product-1.jpg'
    },
    {
      id: 'elder6',
      name: 'Joint Support Brace',
      description: 'Adjustable knee support brace for arthritis relief',
      price: 449.99,
      image: '/images/products/product-2.jpg'
    },
    {
      id: 'elder7',
      name: 'Emergency Alert System',
      description: 'Personal emergency alert pendant for safety',
      price: 1999.99,
      image: '/images/products/product-3.jpg'
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