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
              <p className="price">Tk {product.price}</p>
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