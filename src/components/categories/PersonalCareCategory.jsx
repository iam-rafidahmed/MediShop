import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const PersonalCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'care1',
      name: 'Select-Plus',
        description: 'gentle facial cleanser',
      price: 200.00,
      image: '/images/products/pc1.webp'
    },
    {
      id: 'care2',
      name: 'Isabgul Plus',
        description: 'fiber digestive supplement',
      price: 495.00,
      image: '/images/products/pc2.webp'
    },
    {
      id: 'care3',
      name: 'Sunmask',
        description: 'broad spectrum sunscreen',
      price: 250.00,
      image: '/images/products/pc3.webp'
    },
    {
      id: 'care4',
      name: 'Absorbent Cotton Wool',
        description: 'soft medical cotton',
      price: 25.00,
      image: '/images/products/pc4.webp'
    },
    {
      id: 'care5',
      name: 'Moov Cream Indian',
        description: 'pain relief cream',
      price: 280.00,
      image: '/images/products/pc5.webp'
    },
    {
      id: 'care6',
      name: 'Acne-Aid',
        description: 'acne control cleanser',
      price: 310.00,
      image: '/images/products/pc6.webp'
    },
    {
      id: 'care7',
      name: 'Moov Spray Indian',
        description: 'pain relief spray',
      price: 522.00,
      image: '/images/products/pc7.webp'
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

export default PersonalCareCategory; 