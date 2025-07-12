import React from 'react';
import './CategoryStyles.css';

const FirstAidCategory = () => {
  const dummyProducts = [
    {
      id: 'aid1',
      name: 'Emergency First Aid Kit',
      description: 'Complete first aid kit with 100+ essential items',
      price: 1499.99,
      image: '/images/products/product-1.jpg',
      stock: 50,
      manufacturer: 'SafetyFirst'
    },
    {
      id: 'aid2',
      name: 'Burn Relief Gel',
      description: 'Instant cooling gel for minor burns and scalds',
      price: 249.99,
      image: '/images/products/product-2.jpg',
      stock: 120,
      manufacturer: 'MediRelief'
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

export default FirstAidCategory; 