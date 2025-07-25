import React from 'react';
import './CategoryStyles.css';

const HealthcareDevicesCategory = () => {
  const dummyProducts = [
    {
      id: 'dev1',
      name: 'Smart BP Monitor',
      description: 'Bluetooth-enabled blood pressure monitor with app connectivity',
      price: 3999.99,
      image: '/images/products/product-1.jpg',
      stock: 30,
      manufacturer: 'TechMed Devices'
    },
    {
      id: 'dev2',
      name: 'Digital Thermometer Pro',
      description: 'Infrared non-contact thermometer with LCD display',
      price: 1299.99,
      image: '/images/products/product-2.jpg',
      stock: 85,
      manufacturer: 'HealthTech Solutions'
    }
  ];

  return (
    <div className="category-container">
      <div className="products-grid">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Tk {product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareDevicesCategory; 