import React from 'react';
import './CategoryStyles.css';

const LifestyleCategory = () => {
  const dummyProducts = [
    {
      id: 'life1',
      name: 'Aromatherapy Diffuser',
      description: 'Smart essential oil diffuser with LED mood lighting',
      price: 1999.99,
      image: '/images/products/product-1.jpg',
      stock: 35,
      manufacturer: 'AromaLife'
    },
    {
      id: 'life2',
      name: 'Sleep Aid Kit',
      description: 'Natural sleep supplements and eye mask set',
      price: 899.99,
      image: '/images/products/product-2.jpg',
      stock: 55,
      manufacturer: 'SleepWell'
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

export default LifestyleCategory; 