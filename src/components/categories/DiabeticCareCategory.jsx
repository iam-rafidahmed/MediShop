import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const DiabeticCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'diab1',
      name: 'GlucoLeader Enhance Red Test Strip',
      description: 'Advanced Blood Glucose Monitoring System',
      price: 462.00,
      image: '/images/products/db1.webp'
    },
    {
      id: 'diab2',
      name: 'VivaChek Ino Test Strip',
      description: 'Special compression socks for diabetic patients',
      price: 1000.00,
      image: '/images/products/db2.webp'
    },
    {
      id: 'diab3',
      name: 'GlucoLeader Enhance Blue Test Strip',
      description: 'Oral diabetes medicine to control blood sugar levels',
      price: 412.00,
      image: '/images/products/db3.webp'
    },
    {
      id: 'diab4',
      name: 'On Call Plus Test Strip',
      description: 'Ultra-fine needles for insulin delivery',
      price: 1000.00,
      image: '/images/products/db4.webp'
    },
    {
      id: 'diab5',
      name: 'Insulin Carry Bag',
      description: 'Specialized moisturizing cream for diabetic foot care',
      price: 250.00,
      image: '/images/products/db5.webp'
    },
    // Adding 10 more products
    {
      id: 'diab6',
      name: 'Bionime Blood Glucose Meter',
      description: 'Compatible test strips for glucose monitors',
      price: 2000.00,
      image: '/images/products/db6.webp'
    },
    {
      id: 'diab7',
      name: 'G1 Advance',
      description: 'Portable case to keep insulin at optimal temperature',
      price: 1000.50,
      image: '/images/products/db7.webp'
    },
    {
      id: 'diab8',
      name: 'Contour Plus Meter',
      description: 'Specialized vitamin supplement for diabetic patients',
      price: 1650.00,
      image: '/images/products/db8.webp'
    },
    {
      id: 'diab9',
      name: 'NovoFine Needle',
      description: 'Delicious cookies safe for diabetic patients',
      price: 12.50,
      image: '/images/products/db9.webp'
    },
    {
      id: 'diab10',
      name: 'Insulin Syringe (Korean)100IU',
      description: 'Adjustable depth lancet device for comfortable blood sampling',
      price: 12.00,
      image: '/images/products/db10.webp'
    },
    {
      id: 'diab11',
      name: 'OneTouch Verio',
      description: 'Balanced nutrition shake for diabetic patients',
      price: 2060.00,
      image: '/images/products/db11.webp'
    },
    {
      id: 'diab12',
      name: 'Digital ACCU-ANSWER',
      description: 'Insulated bag for carrying insulin and supplies',
      price: 550.00,
      image: '/images/products/db12.webp'
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