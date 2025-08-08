import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const PrescribeMedicineCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'pres1',
      name: 'Ecosprin 75mg',
        description: 'antiplatelet heart protection',
      price: 8.00,
      image: '/images/products/p1.webp'
    },
    {
      id: 'pres2',
      name: 'Bizoran 5mg+20mg',
        description: 'blood pressure control',
      price: 180.09,
      image: '/images/products/p2.webp'
    },
    // Adding 10 more medicines
    {
      id: 'pres3',
      name: 'Thyrox 50mcg',
        description: 'thyroid hormone replacement',
      price: 66.00,
      image: '/images/products/p3.webp'
    },
    {
      id: 'pres4',
      name: 'Uromax 0.4mg',
        description: 'urinary flow improvement',
      price: 60.00,
      image: '/images/products/p4.webp'
    },
    {
      id: 'pres5',
      name: 'Comet 500mg',
        description: 'diabetes glucose control',
      price: 50.00,
      image: '/images/products/p5.webp'
    },
    {
      id: 'pres6',
      name: 'Uromax-D 0.4mg+0.5mg',
        description: 'BPH symptom relief',
      price: 115.00,
      image: '/images/products/p6.webp'
    },
    {
      id: 'pres7',
      name: 'Febustat 40mg',
        description: 'uric acid reduction',
      price: 130.00,
      image: '/images/products/p7.webp'
    },
    {
      id: 'pres8',
      name: 'Metacard MR 35mg',
        description: 'angina symptom control',
      price: 140.00,
      image: '/images/products/p8.webp'
    },
    {
      id: 'pres9',
      name: 'Lijenta 5mg',
        description: 'diabetes DPP-4 inhibitor',
      price: 330.00,
      image: '/images/products/p9.webp'
    },
    {
      id: 'pres10',
      name: 'Galvus Met 50 mg+500 mg',
        description: 'diabetes dual therapy',
      price: 330.00,
      image: '/images/products/p10.webp'
    },
    {
      id: 'pres11',
      name: 'Cildip 5mg',
        description: 'blood pressure reduction',
      price: 112.00,
      image: '/images/products/p11.webp'
    },
    {
      id: 'pres12',
      name: 'Thyrin50 mcg',
        description: 'thyroid hormone replacement',
      price: 33.75,
      image: '/images/products/p12.webp'
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