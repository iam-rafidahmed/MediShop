import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const BabyCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'baby1',
      name: 'Baby Lotion',
      description: 'Gentle moisturizing lotion for sensitive baby skin',
      price: 299.99,
      image: '/images/products/product-1.jpg',
      stock: 75,
      manufacturer: 'BabySoft'
    },
    {
      id: 'baby2',
      name: 'Diaper Pack',
      description: 'Ultra-absorbent diapers with wetness indicator',
      price: 599.99,
      image: '/images/products/product-2.jpg',
      stock: 100,
      manufacturer: 'BabyComfort'
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

export default BabyCareCategory; 