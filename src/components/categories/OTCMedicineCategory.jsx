import React from 'react';
import './CategoryStyles.css';

const OTCMedicineCategory = () => {
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
              <p className="manufacturer">By {product.manufacturer}</p>
              <p className="stock">In Stock: {product.stock}</p>
              <p className="price">₹{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OTCMedicineCategory; 