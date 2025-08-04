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