import React from 'react';
import './CategoryStyles.css';

const WellnessCategory = () => {
  const dummyProducts = [
    {
      id: 'well1',
      name: 'Yoga Mat Premium',
      description: 'High-density non-slip yoga mat with carrying strap',
      price: 1499.99,
      image: '/images/products/product-1.jpg',
      stock: 40,
      manufacturer: 'YogaLife'
    },
    {
      id: 'well2',
      name: 'Meditation Cushion Set',
      description: 'Ergonomic meditation cushion with back support',
      price: 999.99,
      image: '/images/products/product-2.jpg',
      stock: 60,
      manufacturer: 'MindfulLiving'
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

export default WellnessCategory; 