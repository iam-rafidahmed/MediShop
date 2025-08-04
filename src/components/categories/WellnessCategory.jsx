import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const WellnessCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'well1',
      name: 'Multivitamin Complex',
      description: 'Complete daily multivitamin with minerals',
      price: 599.99,
      image: '/images/products/product-1.jpg',
      stock: 120,
      manufacturer: 'VitaWell'
    },
    {
      id: 'well2',
      name: 'Omega-3 Fish Oil',
      description: 'High-potency omega-3 fatty acids supplement',
      price: 449.99,
      image: '/images/products/product-2.jpg',
      stock: 90,
      manufacturer: 'NutriLife'
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

export default WellnessCategory; 