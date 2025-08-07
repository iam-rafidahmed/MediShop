import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const HealthcareDevicesCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'device1',
      name: 'Thermometer',
      description: 'Accurate blood pressure monitor with large display',
      price: 265.00,
      image: '/images/products/h1.webp'
    },
    {
      id: 'device2',
      name: 'Digital Weight Machine',
      description: 'Portable nebulizer for respiratory medication delivery',
      price: 1400.00,
      image: '/images/products/h2.webp'
    },
    
    {
      id: 'device3',
      name: 'Blood Pressure Machine Digital',
      description: 'Fast-reading digital thermometer with fever alert',
      price: 2500.00,
      image: '/images/products/h3.webp'
    },
    {
      id: 'device4',
      name: 'Blood Pressure Machine',
      description: 'Fingertip pulse oximeter for measuring blood oxygen levels',
      price: 3450.00,
      image: '/images/products/h4.webp'
    },
    {
      id: 'device5',
      name: 'Blood Pressure Machine Digital',
      description: 'Transcutaneous electrical nerve stimulation device for pain relief',
      price: 2500.00,
      image: '/images/products/h5.webp'
    },
    {
      id: 'device6',
      name: 'Pulse Oximeter',
      description: 'High-precision digital scale with body composition analysis',
      price: 1275.00,
      image: '/images/products/h6.webp'
    },
    {
      id: 'device7',
      name: 'Nebulizer',
      description: 'Rechargeable digital hearing aid with noise reduction',
      price: 3000.00,
      image: '/images/products/h7.webp'
    },
    {
      id: 'device8',
      name: 'Pulse Oximeter',
      description: 'Complete blood glucose monitoring system with test strips',
      price: 1600.00,
      image: '/images/products/h8.webp'
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