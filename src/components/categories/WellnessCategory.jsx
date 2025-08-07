import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const WellnessCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'well1',
      name: 'Savlon Face Mask',
      description: 'Complete daily multivitamin with minerals',
      price: 320.00,
      image: '/images/products/w1.webp'
    },
    {
      id: 'well2',
      name: 'AXE Brand Universal Oil',
      description: 'High-potency omega-3 fatty acids supplement',
      price: 410.00,
      image: '/images/products/w2.webp'
    },
    {
      id: 'well3',
      name: 'One Time Bandage',
      description: 'High-strength vitamin D3 for bone health and immunity',
      price: 2.00,
      image: '/images/products/w3.webp'
    },
    {
      id: 'well4',
      name: 'N95 Mask',
      description: 'Advanced probiotic formula for digestive health',
      price: 45.00,
      image: '/images/products/w4.webp'
    },
    {
      id: 'well5',
      name: 'Odessy',
      description: 'Hydrolyzed collagen for skin, hair, and joint health',
      price: 170.00,
      image: '/images/products/w5.webp'
    },
    {
      id: 'well6',
      name: 'ProDentalB Breath Spray',
      description: 'Essential mineral for muscle function and relaxation',
      price: 255.00,
      image: '/images/products/w6.webp'
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

export default WellnessCategory; 