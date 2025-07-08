import React from 'react';
import './CategoryStyles.css';

const DentalCareCategory = () => {
  const dummyProducts = [
    {
      id: 'dent1',
      name: 'Electric Toothbrush Pro',
      description: 'Smart sonic toothbrush with multiple cleaning modes',
      price: 2999.99,
      image: '/images/products/product-3.jpg',
      stock: 45,
      manufacturer: 'DentalTech'
    },
    {
      id: 'dent2',
      name: 'Premium Dental Floss',
      description: 'Mint-flavored waxed dental floss for thorough cleaning',
      price: 199.99,
      image: '/images/products/product-4.jpg',
      stock: 150,
      manufacturer: 'OralCare Plus'
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

export default DentalCareCategory; 