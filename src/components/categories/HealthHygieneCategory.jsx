import React from 'react';
import './CategoryStyles.css';

const HealthHygieneCategory = () => {
  const dummyProducts = [
    {
      id: 'hyg1',
      name: 'Hand Sanitizer Pack',
      description: 'Pack of 3 travel-sized hand sanitizers with 70% alcohol',
      price: 299.99,
      image: '/images/products/product-1.jpg',
      stock: 200,
      manufacturer: 'PureHands'
    },
    {
      id: 'hyg2',
      name: 'Disinfectant Spray',
      description: 'Multi-surface disinfectant spray that kills 99.9% of germs',
      price: 349.99,
      image: '/images/products/product-2.jpg',
      stock: 150,
      manufacturer: 'CleanPro'
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

export default HealthHygieneCategory; 