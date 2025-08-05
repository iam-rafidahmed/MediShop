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
    },
    // Adding 10 more products
    {
      id: 'dent3',
      name: 'Dental Floss Pack',
      description: 'Pack of 5 mint-flavored dental floss spools',
      price: 249.99,
      image: '/images/products/product-3.jpg',
      stock: 150,
      manufacturer: 'FlossDaily'
    },
    {
      id: 'dent4',
      name: 'Water Flosser',
      description: 'Rechargeable oral irrigator for deep cleaning between teeth',
      price: 1799.99,
      image: '/images/products/product-4.jpg',
      stock: 35,
      manufacturer: 'AquaFloss'
    },
    {
      id: 'dent5',
      name: 'Teeth Whitening Kit',
      description: 'Professional-grade teeth whitening system for home use',
      price: 1299.99,
      image: '/images/products/product-5.jpg',
      stock: 40,
      manufacturer: 'BrightSmile'
    },
    {
      id: 'dent6',
      name: 'Mouthwash Antiseptic',
      description: 'Alcohol-free antiseptic mouthwash for gum health',
      price: 299.99,
      image: '/images/products/product-6.jpg',
      stock: 100,
      manufacturer: 'OralClean'
    },
    {
      id: 'dent7',
      name: 'Denture Adhesive',
      description: 'Strong-hold denture adhesive cream for all-day comfort',
      price: 349.99,
      image: '/images/products/product-7.jpg',
      stock: 80,
      manufacturer: 'DentureGrip'
    },
    {
      id: 'dent8',
      name: 'Orthodontic Wax',
      description: 'Dental wax for braces and orthodontic appliances',
      price: 149.99,
      image: '/images/products/product-8.jpg',
      stock: 90,
      manufacturer: 'BraceComfort'
    },
    {
      id: 'dent9',
      name: 'Tongue Cleaner',
      description: 'Stainless steel tongue scraper for fresh breath',
      price: 179.99,
      image: '/images/products/product-1.jpg',
      stock: 110,
      manufacturer: 'BreathFresh'
    },
    {
      id: 'dent10',
      name: 'Dental Mirror Set',
      description: 'Set of 2 dental mirrors for at-home oral inspection',
      price: 399.99,
      image: '/images/products/product-2.jpg',
      stock: 50,
      manufacturer: 'DentalTools'
    },
    {
      id: 'dent11',
      name: 'Children\'s Toothbrush',
      description: 'Soft-bristled toothbrush designed for kids with fun characters',
      price: 129.99,
      image: '/images/products/product-3.jpg',
      stock: 130,
      manufacturer: 'KidSmile'
    },
    {
      id: 'dent12',
      name: 'Gum Massage Gel',
      description: 'Soothing gel for gum inflammation and irritation',
      price: 259.99,
      image: '/images/products/product-4.jpg',
      stock: 75,
      manufacturer: 'GumHealth'
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