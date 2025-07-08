import React from 'react';
import './CategoryStyles.css';

const PersonalCareCategory = () => {
  const dummyProducts = [
    {
      id: 'pc1',
      name: 'Skin Care Kit',
      description: 'Complete skincare routine package with cleanser, toner, and moisturizer',
      price: 1299.99,
      image: '/images/products/product-1.jpg',
      stock: 50,
      manufacturer: 'DermaCare'
    },
    {
      id: 'pc2',
      name: 'Hair Care Bundle',
      description: 'Premium shampoo and conditioner set for all hair types',
      price: 899.99,
      image: '/images/products/product-2.jpg',
      stock: 75,
      manufacturer: 'HairPro'
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

export default PersonalCareCategory; 