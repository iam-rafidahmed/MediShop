import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const FirstAidCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'aid1',
      name: 'First Aid Kit',
      description: 'Complete emergency kit with essential medical supplies',
      price: 799.99,
      image: '/images/products/product-1.jpg'
    },
    {
      id: 'aid2',
      name: 'Antiseptic Solution',
      description: 'Medical-grade antiseptic for wound cleaning',
      price: 249.99,
      image: '/images/products/product-2.jpg'
    },
    {
      id: 'aid3',
      name: 'Bandage Roll',
      description: 'Sterile gauze bandage roll for wound dressing',
      price: 149.99,
      image: '/images/products/product-3.jpg'
    },
    {
      id: 'aid4',
      name: 'Ice Pack',
      description: 'Reusable gel ice pack for injury treatment',
      price: 199.99,
      image: '/images/products/product-4.jpg'
    },
    {
      id: 'aid5',
      name: 'Medical Tape',
      description: 'Hypoallergenic medical tape for secure bandaging',
      price: 89.99,
      image: '/images/products/product-1.jpg'
    },
    {
      id: 'aid6',
      name: 'Scissors',
      description: 'Medical-grade scissors for first aid procedures',
      price: 179.99,
      image: '/images/products/product-2.jpg'
    },
    {
      id: 'aid7',
      name: 'Thermometer',
      description: 'Digital thermometer for accurate temperature reading',
      price: 399.99,
      image: '/images/products/product-3.jpg'
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

export default FirstAidCategory; 