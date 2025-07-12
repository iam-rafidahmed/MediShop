import React from 'react';
import './CategoryStyles.css';

const FitnessCategory = () => {
  const dummyProducts = [
    {
      id: 'fit1',
      name: 'Fitness Tracker Pro',
      description: 'Advanced fitness tracker with heart rate monitoring and sleep analysis',
      price: 3499.99,
      image: '/images/products/product-1.jpg',
      stock: 50,
      manufacturer: 'FitTech'
    },
    {
      id: 'fit2',
      name: 'Protein Powder',
      description: 'Whey protein isolate for muscle recovery and growth',
      price: 1999.99,
      image: '/images/products/product-2.jpg',
      stock: 100,
      manufacturer: 'NutriPower'
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
              <p className="price">₹{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessCategory; 