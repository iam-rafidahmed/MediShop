import React from 'react';
import './CategoryStyles.css';

const ElderlyCareCategory = () => {
  const dummyProducts = [
    {
      id: 'eld1',
      name: 'Walking Aid Premium',
      description: 'Adjustable walking stick with ergonomic grip',
      price: 1499.99,
      image: '/images/products/product-1.jpg',
      stock: 25,
      manufacturer: 'MobilityPlus'
    },
    {
      id: 'eld2',
      name: 'Senior Care Kit',
      description: 'Essential daily care items for elderly',
      price: 2999.99,
      image: '/images/products/product-2.jpg',
      stock: 30,
      manufacturer: 'ElderCare'
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

export default ElderlyCareCategory; 