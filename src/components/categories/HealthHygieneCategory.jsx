import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const HealthHygieneCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'hyg1',
      name: 'Dettol Hand Sanitizer',
      description: 'Instant Hand Sanitizer with Moisturizer (200ml)',
      price: 160.00,
      image: '/images/products/product-4.jpg',
      stock: 200,
      manufacturer: 'Reckitt Benckiser'
    },
    {
      id: 'hyg2',
      name: 'Savlon Antiseptic',
      description: 'Antiseptic Liquid for cuts and wounds (500ml)',
      price: 140.00,
      image: '/images/products/product-1.jpg',
      stock: 180,
      manufacturer: 'ICI'
    },
    {
      id: 'hyg3',
      name: 'Betadine Solution',
      description: 'Povidone-Iodine Antiseptic Solution (100ml)',
      price: 185.00,
      image: '/images/products/product-2.jpg',
      stock: 120,
      manufacturer: 'Mundipharma'
    },
    {
      id: 'hyg4',
      name: 'Paracetamol 500mg',
      description: 'Fever and Pain Relief Tablets (10 tablets/strip)',
      price: 45.00,
      image: '/images/products/product-3.jpg',
      stock: 250,
      manufacturer: 'Incepta Pharmaceuticals'
    },
    {
      id: 'hyg5',
      name: 'Vitamin C 500mg',
      description: 'Immune Support Supplement (30 tablets/bottle)',
      price: 120.00,
      image: '/images/products/product-4.jpg',
      stock: 180,
      manufacturer: 'Healthcare Nutrition'
    },
    {
      id: 'hyg6',
      name: 'First Aid Antiseptic Spray',
      description: 'Quick-Drying No-Sting Antiseptic Spray (120ml)',
      price: 220.00,
      image: '/images/products/product-1.jpg',
      stock: 95,
      manufacturer: 'Johnson & Johnson'
    },
    {
      id: 'hyg7',
      name: 'Ibuprofen 400mg',
      description: 'Anti-inflammatory Pain Relief Tablets (10 tablets/strip)',
      price: 65.00,
      image: '/images/products/product-2.jpg',
      stock: 180,
      manufacturer: 'Square Pharmaceuticals'
    },
    {
      id: 'hyg8',
      name: 'Multivitamin Tablets',
      description: 'Daily Essential Vitamins & Minerals (60 tablets/bottle)',
      price: 280.00,
      image: '/images/products/product-3.jpg',
      stock: 120,
      manufacturer: 'Nature\'s Way'
    },
    {
      id: 'hyg9',
      name: 'Hydrogen Peroxide 3%',
      description: 'First Aid Antiseptic Solution (100ml)',
      price: 75.00,
      image: '/images/products/product-4.jpg',
      stock: 150,
      manufacturer: 'MediCare'
    },
    {
      id: 'hyg10',
      name: 'Allergy Relief Tablets',
      description: 'Fast-Acting Antihistamine (10 tablets/strip)',
      price: 95.00,
      image: '/images/products/product-1.jpg',
      stock: 130,
      manufacturer: 'Beximco Pharma'
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

export default HealthHygieneCategory; 