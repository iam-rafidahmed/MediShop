import React from 'react';
import './CategoryStyles.css';

const ElderlyCareCategory = () => {
  const dummyProducts = [
    {
      id: 'elderly1',
      name: 'Walking Cane',
      description: 'Adjustable height walking cane with ergonomic handle',
      price: 899.99,
      image: '/images/products/product-1.jpg',
      stock: 35,
      manufacturer: 'MobilityPlus'
    },
    {
      id: 'elderly2',
      name: 'Pill Organizer',
      description: 'Weekly pill organizer with AM/PM compartments',
      price: 399.99,
      image: '/images/products/product-2.jpg',
      stock: 80,
      manufacturer: 'MediOrganize'
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

export default ElderlyCareCategory; 