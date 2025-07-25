import React from 'react';
import './CategoryStyles.css';

const DentalCareCategory = () => {
  const dummyProducts = [
    {
      id: 'dent1',
      name: 'Electric Toothbrush',
      description: 'Rechargeable sonic toothbrush with multiple cleaning modes',
      price: 1999.99,
      image: '/images/products/product-1.jpg',
      stock: 45,
      manufacturer: 'OralCare Pro'
    },
    {
      id: 'dent2',
      name: 'Sensitive Toothpaste',
      description: 'Specialized toothpaste for sensitive teeth and gums',
      price: 199.99,
      image: '/images/products/product-2.jpg',
      stock: 120,
      manufacturer: 'DentaSense'
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

export default DentalCareCategory; 