import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const DentalCareCategory = () => {
  const { addToCart } = useCart();
  
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

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="category-container">
      <div className="products-grid">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Tk {product.price.toFixed(2)}</p>
              <button 
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentalCareCategory; 