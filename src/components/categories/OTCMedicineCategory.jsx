import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const OTCMedicineCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'otc1',
      name: 'Sergel 20mg',
        description: 'acid reflux relief',
      price: 70.00,
      image: '/images/products/sergel.otc1.webp'
    },
    {
      id: 'otc2',
      name: 'Maxpro 20mg',
        description: 'acid reflux control',
      price: 98.00,
      image: '/images/products/maxpro.otc2.webp'
    },
    {
      id: 'otc3',
      name: 'Monas 10mg',
        description: 'asthma allergy relief',
      price: 262.50,
      image: '/images/products/monas.otc3.webp'
    },
    {
      id: 'otc4',
      name: 'Napa Extend 665mg',
        description: 'extended pain relief',
      price: 24.00,
      image: '/images/products/napaext.otc4.webp'
    },
    // Adding 10 more medicines
    {
      id: 'otc5',
      name: 'Omidon 10mg',
        description: 'acidity relief gel',
      price: 52.50,
      image: '/images/products/omidon.otc5.webp'
    },
    {
      id: 'otc6',
      name: 'Napa Extra 500mg',
        description: 'fever pain relief',
      price: 30.00,
      image: '/images/products/napaextra.otc6.webp'
    },
    {
      id: 'otc7',
      name: 'Seclo 20mg',
        description: 'stomach acid reduction',
      price: 60.00,
      image: '/images/products/seclo.otc7.webp'
    },
    {
      id: 'otc8',
      name: 'Alatrol 10mg',
        description: 'diarrhea relief medication',
      price: 30.10,
      image: '/images/products/otc8.webp'
    },
    {
      id: 'otc9',
      name: 'losectil 20mg',
        description: 'gastric acid control',
      price: 50.00,
      image: '/images/products/otc9.webp'
    },
    {
      id: 'otc10',
      name: 'Tufnil 200mg',
        description: 'indigestion nausea relief',
      price: 100.00,
      image: '/images/products/otc10.webp'
    },
    {
      id: 'otc11',
      name: 'E-Cap 400IU',
        description: 'heartburn indigestion relief',
      price: 105.00,
      image: '/images/products/otc11.webp'
    },
    {
      id: 'otc12',
      name: 'Napa 60ml',
        description: 'children fever relief',
      price: 35.00,
      image: '/images/products/otc12.webp'
    },
    {
      id: 'otc13',
      name: 'Deslor 5 mg',
        description: 'fast pain relief',
      price: 50.00,
      image: '/images/products/otc13.webp'
    },
    {
      id: 'otc14',
      name: 'Xorel 20 mg',
        description: 'cough suppressant drops',
      price: 40.00,
      image: '/images/products/otc14.webp'
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

export default OTCMedicineCategory;