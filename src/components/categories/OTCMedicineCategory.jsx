import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const OTCMedicineCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'otc1',
      name: 'Paracetamol Plus',
      description: 'Fast-acting pain relief tablet with added caffeine (No Prescription Required)',
      price: 149.99,
      image: '/images/products/product-1.jpg',
      stock: 100,
      manufacturer: 'HealthCare Pharma'
    },
    {
      id: 'otc2',
      name: 'ColdGuard Syrup',
      description: 'All-in-one cold and flu relief syrup (No Prescription Required)',
      price: 199.99,
      image: '/images/products/product-2.jpg',
      stock: 75,
      manufacturer: 'WellLife Labs'
    },
    {
      id: 'otc3',
      name: 'Napa Extra',
      description: 'Advanced fever and pain relief tablets (No Prescription Required)',
      price: 120.00,
      image: '/images/products/product-3.jpg',
      stock: 150,
      manufacturer: 'Beximco Pharmaceuticals'
    },
    {
      id: 'otc4',
      name: 'Ace Plus',
      description: 'Fast-acting headache and muscle pain relief (No Prescription Required)',
      price: 85.50,
      image: '/images/products/product-4.jpg',
      stock: 200,
      manufacturer: 'Square Pharmaceuticals'
    },
    // Adding 10 more medicines
    {
      id: 'otc5',
      name: 'Digene Gel',
      description: 'Antacid gel for quick relief from acidity and indigestion',
      price: 110.50,
      image: '/images/products/product-1.jpg',
      stock: 120,
      manufacturer: 'Abbott Healthcare'
    },
    {
      id: 'otc6',
      name: 'Strepsils Honey & Lemon',
      description: 'Medicated lozenges for sore throat relief',
      price: 75.25,
      image: '/images/products/product-2.jpg',
      stock: 180,
      manufacturer: 'Reckitt Benckiser'
    },
    {
      id: 'otc7',
      name: 'Vicks VapoRub',
      description: 'Topical cough suppressant for temporary relief of cough and congestion',
      price: 130.00,
      image: '/images/products/product-3.jpg',
      stock: 90,
      manufacturer: 'Procter & Gamble'
    },
    {
      id: 'otc8',
      name: 'Imodium',
      description: 'Anti-diarrheal medication for fast relief',
      price: 165.75,
      image: '/images/products/product-4.jpg',
      stock: 110,
      manufacturer: 'Johnson & Johnson'
    },
    {
      id: 'otc9',
      name: 'Benadryl Allergy',
      description: 'Antihistamine for allergy relief',
      price: 145.50,
      image: '/images/products/product-1.jpg',
      stock: 85,
      manufacturer: 'McNeil Consumer'
    },
    {
      id: 'otc10',
      name: 'Pepto-Bismol',
      description: 'Relief for upset stomach, indigestion, and nausea',
      price: 195.25,
      image: '/images/products/product-2.jpg',
      stock: 70,
      manufacturer: 'Procter & Gamble'
    },
    {
      id: 'otc11',
      name: 'Gaviscon Double Action',
      description: 'Fast-acting, dual relief from heartburn and indigestion',
      price: 180.00,
      image: '/images/products/product-3.jpg',
      stock: 95,
      manufacturer: 'Reckitt Benckiser'
    },
    {
      id: 'otc12',
      name: 'Tums Extra Strength',
      description: 'Antacid tablets for fast heartburn relief',
      price: 95.50,
      image: '/images/products/product-4.jpg',
      stock: 150,
      manufacturer: 'GlaxoSmithKline'
    },
    {
      id: 'otc13',
      name: 'Advil Liquid-Gels',
      description: 'Fast pain relief for headaches, muscle aches, and minor arthritis',
      price: 210.25,
      image: '/images/products/product-1.jpg',
      stock: 120,
      manufacturer: 'Pfizer'
    },
    {
      id: 'otc14',
      name: 'Halls Mentho-Lyptus',
      description: 'Cough suppressant drops for temporary relief',
      price: 55.00,
      image: '/images/products/product-2.jpg',
      stock: 200,
      manufacturer: 'Mondelez International'
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