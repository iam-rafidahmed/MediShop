import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const HealthcareDevicesCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'device1',
      name: 'Digital BP Monitor',
      description: 'Accurate blood pressure monitor with large display',
      price: 1999.99,
      image: '/images/products/product-1.jpg',
      stock: 35,
      manufacturer: 'HealthTech'
    },
    {
      id: 'device2',
      name: 'Nebulizer Machine',
      description: 'Portable nebulizer for respiratory medication delivery',
      price: 2499.99,
      image: '/images/products/product-2.jpg',
      stock: 20,
      manufacturer: 'MediBreath'
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

export default HealthcareDevicesCategory; 