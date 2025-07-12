import React from 'react';
import './CategoryStyles.css';

const BabyCareCategory = () => {
  const dummyProducts = [
    {
      id: 'baby1',
      name: 'Baby Moisturizing Lotion',
      description: 'Gentle, hypoallergenic lotion for sensitive baby skin',
      price: 349.99,
      image: '/images/products/product-1.jpg',
      stock: 120,
      manufacturer: 'BabyBliss'
    },
    {
      id: 'baby2',
      name: 'Diaper Rash Cream',
      description: 'Soothing cream that prevents and treats diaper rash',
      price: 249.99,
      image: '/images/products/product-2.jpg',
      stock: 85,
      manufacturer: 'TinyTots'
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

export default BabyCareCategory; 