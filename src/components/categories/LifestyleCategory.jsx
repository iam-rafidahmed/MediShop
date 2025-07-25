import React from 'react';
import './CategoryStyles.css';

const LifestyleCategory = () => {
  const dummyProducts = [
    {
      id: 'life1',
      name: 'Aromatherapy Diffuser',
      description: 'Essential oil diffuser with LED mood lighting',
      price: 1299.99,
      image: '/images/products/product-1.jpg',
      stock: 40,
      manufacturer: 'AromaWell'
    },
    {
      id: 'life2',
      name: 'Sleep Aid Mask',
      description: 'Contoured blackout sleep mask with memory foam',
      price: 599.99,
      image: '/images/products/product-2.jpg',
      stock: 85,
      manufacturer: 'DreamSleep'
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

export default LifestyleCategory; 