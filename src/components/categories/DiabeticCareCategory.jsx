import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const DiabeticCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'diab1',
      name: 'GlucoCheck Pro',
      description: 'Advanced Blood Glucose Monitoring System',
      price: 2499.99,
      image: '/images/products/product-3.jpg',
      stock: 50,
      manufacturer: 'DiaCare Medical'
    },
    {
      id: 'diab2',
      name: 'DiabeSocks Comfort',
      description: 'Special compression socks for diabetic patients',
      price: 599.99,
      image: '/images/products/product-4.jpg',
      stock: 120,
      manufacturer: 'HealthWear Plus'
    },
    {
      id: 'diab3',
      name: 'Metformin 500mg',
      description: 'Oral diabetes medicine to control blood sugar levels',
      price: 350.00,
      image: '/images/products/product-5.jpg',
      stock: 200,
      manufacturer: 'Square Pharmaceuticals'
    },
    {
      id: 'diab4',
      name: 'Insulin Pen Needles',
      description: 'Ultra-fine needles for insulin delivery',
      price: 420.75,
      image: '/images/products/product-6.jpg',
      stock: 150,
      manufacturer: 'BD Medical'
    },
    {
      id: 'diab5',
      name: 'Diabetic Foot Cream',
      description: 'Specialized moisturizing cream for diabetic foot care',
      price: 275.50,
      image: '/images/products/product-7.jpg',
      stock: 80,
      manufacturer: 'DermaCare'
    },
    // Adding 10 more products
    {
      id: 'diab6',
      name: 'Glucose Test Strips',
      description: 'Compatible test strips for glucose monitors',
      price: 850.00,
      image: '/images/products/product-1.jpg',
      stock: 300,
      manufacturer: 'OneTouch'
    },
    {
      id: 'diab7',
      name: 'Insulin Cooling Case',
      description: 'Portable case to keep insulin at optimal temperature',
      price: 1200.50,
      image: '/images/products/product-2.jpg',
      stock: 40,
      manufacturer: 'FRIO'
    },
    {
      id: 'diab8',
      name: 'Diabetic Multivitamin',
      description: 'Specialized vitamin supplement for diabetic patients',
      price: 450.75,
      image: '/images/products/product-3.jpg',
      stock: 120,
      manufacturer: 'Nature Made'
    },
    {
      id: 'diab9',
      name: 'Sugar-Free Cookies',
      description: 'Delicious cookies safe for diabetic patients',
      price: 180.00,
      image: '/images/products/product-4.jpg',
      stock: 75,
      manufacturer: 'Healthy Bites'
    },
    {
      id: 'diab10',
      name: 'Lancet Device',
      description: 'Adjustable depth lancet device for comfortable blood sampling',
      price: 750.25,
      image: '/images/products/product-5.jpg',
      stock: 60,
      manufacturer: 'Accu-Chek'
    },
    {
      id: 'diab11',
      name: 'Diabetic Meal Replacement',
      description: 'Balanced nutrition shake for diabetic patients',
      price: 520.00,
      image: '/images/products/product-6.jpg',
      stock: 90,
      manufacturer: 'Glucerna'
    },
    {
      id: 'diab12',
      name: 'Insulin Travel Bag',
      description: 'Insulated bag for carrying insulin and supplies',
      price: 950.50,
      image: '/images/products/product-7.jpg',
      stock: 35,
      manufacturer: 'MediBag'
    },
    {
      id: 'diab13',
      name: 'Diabetic Foot Massager',
      description: 'Electric foot massager designed for diabetic neuropathy',
      price: 3500.00,
      image: '/images/products/product-1.jpg',
      stock: 25,
      manufacturer: 'ComfortPlus'
    },
    {
      id: 'diab14',
      name: 'Continuous Glucose Monitor',
      description: 'Advanced CGM system for real-time glucose monitoring',
      price: 12000.00,
      image: '/images/products/product-2.jpg',
      stock: 15,
      manufacturer: 'Dexcom'
    },
    {
      id: 'diab15',
      name: 'Diabetic Skin Lotion',
      description: 'Non-greasy lotion for sensitive diabetic skin',
      price: 320.25,
      image: '/images/products/product-3.jpg',
      stock: 70,
      manufacturer: 'CeraVe'
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

export default DiabeticCareCategory;