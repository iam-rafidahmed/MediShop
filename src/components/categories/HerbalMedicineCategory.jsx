import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const HerbalMedicineCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'herb1',
      name: 'Adovas200 ml',
      description: 'Natural blood purifier and immunity booster from neem leaves',
      price: 110.00,
      image: '/images/products/he1.webp'
    },
    {
      id: 'herb2',
      name: 'Devas100 ml',
      description: 'Pure organic turmeric powder for natural anti-inflammatory benefits',
      price: 70.00,
      image: '/images/products/he2.webp'
    },
    {
      id: 'herb3',
      name: 'Spirucap 500mg',
      description: 'Pure aloe vera gel for skin health and digestive support',
      price: 240.00,
      image: '/images/products/he3.webp'
    },
    {
      id: 'herb4',
      name: 'Safi 450ml',
      description: 'Natural ginger tea for digestion and immune support',
      price: 230.00,
      image: '/images/products/he4.webp'
    },
    {
      id: 'herb5',
      name: 'AmCivit100 ml',
      description: 'Natural honey and lemon blend for throat and immunity',
      price: 60.00,
      image: '/images/products/he5.webp'
    },
    {
      id: 'herb6',
      name: 'Alocap 100mg',
      description: 'Sacred basil leaves for respiratory health and stress relief',
      price: 80.00,
      image: '/images/products/he6.webp'
    },
    {
      id: 'herb7',
      name: 'Alkuli 450ml',
      description: 'Indian gooseberry powder rich in vitamin C and antioxidants',
      price: 180.00,
      image: '/images/products/he7.webp'
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

export default HerbalMedicineCategory; 