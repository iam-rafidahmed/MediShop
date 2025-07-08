import React from 'react';
import './CategoryStyles.css';

const HealthHygieneCategory = () => {
  const dummyProducts = [
    {
      id: 'hyg1',
      name: 'Advanced Hand Sanitizer',
      description: '99.9% germ protection with moisturizing formula',
      price: 199.99,
      image: '/images/products/product-3.jpg',
      stock: 200,
      manufacturer: 'PureProtect'
    },
    {
      id: 'hyg2',
      name: 'Antibacterial Body Wash',
      description: 'pH balanced body wash with natural ingredients',
      price: 299.99,
      image: '/images/products/product-4.jpg',
      stock: 150,
      manufacturer: 'HygieneFirst'
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

export default HealthHygieneCategory; 