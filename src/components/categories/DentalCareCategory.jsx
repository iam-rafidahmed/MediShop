import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const DentalCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'dent1',
      name: 'Orostar Plus250 ml',
      description: 'Rechargeable sonic toothbrush with multiple cleaning modes',
      price: 150.00,
      image: '/images/products/den1.webp'
    },
    {
      id: 'dent2',
      name: 'Mediplus DS',
      description: 'Specialized toothpaste for sensitive teeth and gums',
      price: 135.00,
      image: '/images/products/den2.webp'
    },
    // Adding 10 more products
    {
      id: 'dent3',
      name: 'Sensodyne Fresh Gel',
      description: 'Pack of 5 mint-flavored dental floss spools',
      price: 200.00,
      image: '/images/products/den3.webp'
    },
    {
      id: 'dent4',
      name: 'Sensodyne Sensitive Toothbrush',
      description: 'Rechargeable oral irrigator for deep cleaning between teeth',
      price: 110.00,
      image: '/images/products/den4.webp'
    },
    {
      id: 'dent5',
      name: 'Dental Floss (Toothpick)',
      description: 'Professional-grade teeth whitening system for home use',
      price: 135.00,
      image: '/images/products/den5.webp'
    },
    {
      id: 'dent6',
      name: 'Betadine',
      description: 'Alcohol-free antiseptic mouthwash for gum health',
      price: 50.00,
      image: '/images/products/den6.webp'
    },
    {
      id: 'dent7',
      name: 'Colgate Charcoal Clean Toothpaste',
      description: 'Strong-hold denture adhesive cream for all-day comfort',
      price: 350.00,
      image: '/images/products/den7.webp'
    },
    {
      id: 'dent8',
      name: 'Colgate Kids 0-2 yrs Premium Toothpaste',
      description: 'Dental wax for braces and orthodontic appliances',
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