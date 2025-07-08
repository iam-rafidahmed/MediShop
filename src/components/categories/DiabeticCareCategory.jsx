import React from 'react';
import './CategoryStyles.css';

const DiabeticCareCategory = () => {
  const dummyProducts = [
    {
      id: 'diab1',
      name: 'GlucoCheck Pro',
      description: 'Advanced Blood Glucose Monitoring System',
      price: 2499.99,
      image: '/images/products/product-3.jpg',
      stock: 50,
      manufacturer: 'DiaCare Medical'
    },
    {
      id: 'diab2',
      name: 'DiabeSocks Comfort',
      description: 'Special compression socks for diabetic patients',
      price: 599.99,
      image: '/images/products/product-4.jpg',
      stock: 120,
      manufacturer: 'HealthWear Plus'
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
              <p className="manufacturer">By {product.manufacturer}</p>
              <p className="stock">In Stock: {product.stock}</p>
              <p className="price">₹{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiabeticCareCategory; 