import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const PrescribeMedicineCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'pres1',
      name: 'Amoxicillin 500mg',
      description: 'Antibiotic capsules (Prescription Required)',
      price: 299.99,
      image: '/images/products/product-1.jpg',
      stock: 100,
      manufacturer: 'PharmaCure'
    },
    {
      id: 'pres2',
      name: 'Lisinopril 10mg',
      description: 'Blood pressure medication tablets (Prescription Required)',
      price: 249.99,
      image: '/images/products/product-2.jpg',
      stock: 150,
      manufacturer: 'MediHealth'
    },
    // Adding 10 more medicines
    {
      id: 'pres3',
      name: 'Atorvastatin 20mg',
      description: 'Cholesterol-lowering medication (Prescription Required)',
      price: 320.50,
      image: '/images/products/product-3.jpg',
      stock: 120,
      manufacturer: 'Pfizer'
    },
    {
      id: 'pres4',
      name: 'Levothyroxine 50mcg',
      description: 'Thyroid hormone replacement (Prescription Required)',
      price: 275.75,
      image: '/images/products/product-4.jpg',
      stock: 90,
      manufacturer: 'Abbott'
    },
    {
      id: 'pres5',
      name: 'Sertraline 100mg',
      description: 'Antidepressant medication (Prescription Required)',
      price: 350.00,
      image: '/images/products/product-1.jpg',
      stock: 80,
      manufacturer: 'Pfizer'
    },
    {
      id: 'pres6',
      name: 'Losartan 50mg',
      description: 'Angiotensin II receptor blocker for hypertension (Prescription Required)',
      price: 290.25,
      image: '/images/products/product-2.jpg',
      stock: 110,
      manufacturer: 'Merck'
    },
    {
      id: 'pres7',
      name: 'Metoprolol 25mg',
      description: 'Beta-blocker for high blood pressure and angina (Prescription Required)',
      price: 265.50,
      image: '/images/products/product-3.jpg',
      stock: 95,
      manufacturer: 'AstraZeneca'
    },
    {
      id: 'pres8',
      name: 'Escitalopram 10mg',
      description: 'Selective serotonin reuptake inhibitor for depression (Prescription Required)',
      price: 330.75,
      image: '/images/products/product-4.jpg',
      stock: 75,
      manufacturer: 'Lundbeck'
    },
    {
      id: 'pres9',
      name: 'Warfarin 5mg',
      description: 'Anticoagulant to prevent blood clots (Prescription Required)',
      price: 310.00,
      image: '/images/products/product-1.jpg',
      stock: 60,
      manufacturer: 'Bristol-Myers Squibb'
    },
    {
      id: 'pres10',
      name: 'Fluoxetine 20mg',
      description: 'Antidepressant for depression and OCD (Prescription Required)',
      price: 285.25,
      image: '/images/products/product-2.jpg',
      stock: 85,
      manufacturer: 'Eli Lilly'
    },
    {
      id: 'pres11',
      name: 'Omeprazole 40mg',
      description: 'Proton pump inhibitor for acid reflux (Prescription Required)',
      price: 240.50,
      image: '/images/products/product-3.jpg',
      stock: 130,
      manufacturer: 'AstraZeneca'
    },
    {
      id: 'pres12',
      name: 'Prednisone 10mg',
      description: 'Corticosteroid for inflammation and allergic disorders (Prescription Required)',
      price: 195.75,
      image: '/images/products/product-4.jpg',
      stock: 100,
      manufacturer: 'Pfizer'
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

export default PrescribeMedicineCategory;