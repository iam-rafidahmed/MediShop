import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const DentalCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'dent1',
      name: 'Orostar Plus250 ml',
        description: 'antiseptic mouth rinse',
      price: 150.00,
      image: '/images/products/den1.webp'
    },
    {
      id: 'dent2',
      name: 'Mediplus DS',
        description: 'sensitive teeth toothpaste',
      price: 135.00,
      image: '/images/products/den2.webp'
    },
    // Adding 10 more products
    {
      id: 'dent3',
      name: 'Sensodyne Fresh Gel',
        description: 'sensitivity relief toothpaste',
      price: 200.00,
      image: '/images/products/den3.webp'
    },
    {
      id: 'dent4',
      name: 'Sensodyne Sensitive Toothbrush',
        description: 'gentle bristle toothbrush',
      price: 110.00,
      image: '/images/products/den4.webp'
    },
    {
      id: 'dent5',
      name: 'Dental Floss (Toothpick)',
        description: 'mint dental floss',
      price: 135.00,
      image: '/images/products/den5.webp'
    },
    {
      id: 'dent6',
      name: 'Betadine',
        description: 'antiseptic mouthwash gargle',
      price: 50.00,
      image: '/images/products/den6.webp'
    },
    {
      id: 'dent7',
      name: 'Colgate Charcoal Clean Toothpaste',
        description: 'charcoal whitening toothpaste',
      price: 350.00,
      image: '/images/products/den7.webp'
    },
    {
      id: 'dent8',
      name: 'Colgate Kids 0-2 yrs Premium Toothpaste',
        description: 'kids fluoride toothpaste',
      price: 320.00,
      image: '/images/products/den8.webp'
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