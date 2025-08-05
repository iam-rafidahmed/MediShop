import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const HealthcareDevicesCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'device1',
      name: 'Digital BP Monitor',
      description: 'Accurate blood pressure monitor with large display',
      price: 1999.99,
      image: '/images/products/product-1.jpg',
      stock: 35,
      manufacturer: 'HealthTech'
    },
    {
      id: 'device2',
      name: 'Nebulizer Machine',
      description: 'Portable nebulizer for respiratory medication delivery',
      price: 2499.99,
      image: '/images/products/product-2.jpg',
      stock: 20,
      manufacturer: 'MediBreath'
    },
    // Adding 10 more products
    {
      id: 'device3',
      name: 'Digital Thermometer',
      description: 'Fast-reading digital thermometer with fever alert',
      price: 599.99,
      image: '/images/products/product-3.jpg',
      stock: 50,
      manufacturer: 'TempTech'
    },
    {
      id: 'device4',
      name: 'Pulse Oximeter',
      description: 'Fingertip pulse oximeter for measuring blood oxygen levels',
      price: 1299.99,
      image: '/images/products/product-4.jpg',
      stock: 40,
      manufacturer: 'OxyCheck'
    },
    {
      id: 'device5',
      name: 'TENS Unit',
      description: 'Transcutaneous electrical nerve stimulation device for pain relief',
      price: 2799.99,
      image: '/images/products/product-5.jpg',
      stock: 15,
      manufacturer: 'PainRelief'
    },
    {
      id: 'device6',
      name: 'Digital Weight Scale',
      description: 'High-precision digital scale with body composition analysis',
      price: 1899.99,
      image: '/images/products/product-6.jpg',
      stock: 25,
      manufacturer: 'HealthMetrics'
    },
    {
      id: 'device7',
      name: 'Hearing Aid',
      description: 'Rechargeable digital hearing aid with noise reduction',
      price: 15999.99,
      image: '/images/products/product-7.jpg',
      stock: 10,
      manufacturer: 'ClearSound'
    },
    {
      id: 'device8',
      name: 'Glucose Monitor Kit',
      description: 'Complete blood glucose monitoring system with test strips',
      price: 3499.99,
      image: '/images/products/product-8.jpg',
      stock: 30,
      manufacturer: 'DiabetesControl'
    },
    {
      id: 'device9',
      name: 'Infrared Thermometer',
      description: 'Non-contact infrared thermometer for instant readings',
      price: 1299.99,
      image: '/images/products/product-1.jpg',
      stock: 45,
      manufacturer: 'SafeScan'
    },
    {
      id: 'device10',
      name: 'ECG Monitor',
      description: 'Portable electrocardiogram monitor for home use',
      price: 8999.99,
      image: '/images/products/product-2.jpg',
      stock: 8,
      manufacturer: 'HeartTrack'
    },
    {
      id: 'device11',
      name: 'CPAP Machine',
      description: 'Continuous positive airway pressure device for sleep apnea',
      price: 12999.99,
      image: '/images/products/product-3.jpg',
      stock: 12,
      manufacturer: 'SleepWell'
    },
    {
      id: 'device12',
      name: 'Mobility Scooter',
      description: 'Electric mobility scooter for improved independence',
      price: 45999.99,
      image: '/images/products/product-4.jpg',
      stock: 5,
      manufacturer: 'MobilityPlus'
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

export default HealthcareDevicesCategory;