import React from 'react';
import './CategoryStyles.css';

const DiabeticCareCategory = () => {
  const dummyProducts = [
    {
      id: 'diab1',
      name: 'GlucoCheck Pro',
      description: 'Advanced Blood Glucose Monitoring System',
      price: 2499.99,
      image: '/images/products/product-3.jpg',
      stock: 50,
      manufacturer: 'DiaCare Medical'
    },
    {
      id: 'diab2',
      name: 'DiabeSocks Comfort',
      description: 'Special compression socks for diabetic patients',
      price: 599.99,
      image: '/images/products/product-4.jpg',
      stock: 120,
      manufacturer: 'HealthWear Plus'
    },
    {
      id: 'diab3',
      name: 'Metformin 500mg',
      description: 'Oral diabetes medicine to control blood sugar levels',
      price: 350.00,
      image: '/images/products/product-5.jpg',
      stock: 200,
      manufacturer: 'Square Pharmaceuticals'
    },
    {
      id: 'diab4',
      name: 'Insulin Pen Needles',
      description: 'Ultra-fine needles for insulin delivery',
      price: 420.75,
      image: '/images/products/product-6.jpg',
      stock: 150,
      manufacturer: 'BD Medical'
    },
    {
      id: 'diab5',
      name: 'Diabetic Foot Cream',
      description: 'Specialized moisturizing cream for diabetic foot care',
      price: 275.50,
      image: '/images/products/product-7.jpg',
      stock: 80,
      manufacturer: 'DermaCare'
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

export default DiabeticCareCategory; 