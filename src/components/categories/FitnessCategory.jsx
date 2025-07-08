import React from 'react';
import './CategoryStyles.css';

const FitnessCategory = () => {
  const dummyProducts = [
    {
      id: 'fit1',
      name: 'Resistance Band Set',
      description: 'Complete set of resistance bands with workout guide',
      price: 999.99,
      image: '/images/products/product-1.jpg',
      stock: 65,
      manufacturer: 'FitPro'
    },
    {
      id: 'fit2',
      name: 'Protein Bundle',
      description: 'Premium whey protein with BCAA supplements',
      price: 2499.99,
      image: '/images/products/product-2.jpg',
      stock: 40,
      manufacturer: 'NutriTech'
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

export default FitnessCategory; 