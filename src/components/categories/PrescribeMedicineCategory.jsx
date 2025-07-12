import React from 'react';
import './CategoryStyles.css';

const PrescribeMedicineCategory = () => {
  const dummyProducts = [
    {
      id: 'pres1',
      name: 'Amoxicillin 500mg',
      description: 'Antibiotic for bacterial infections (Prescription Required)',
      price: 299.99,
      image: '/images/products/product-1.jpg',
      stock: 80,
      manufacturer: 'PharmaCare Labs'
    },
    {
      id: 'pres2',
      name: 'Metformin 850mg',
      description: 'Diabetes medication (Prescription Required)',
      price: 199.99,
      image: '/images/products/product-2.jpg',
      stock: 120,
      manufacturer: 'DiabeCare Pharma'
    }
  ];

  return (
    <div className="category-container">
      <div className="products-grid">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">₹{product.price}</p>
              <button className="add-to-cart">Upload Prescription</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescribeMedicineCategory; 