import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const BabyCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'baby1',
      name: 'Baby Wipes',
        description: 'gentle baby wipes',
      price: 235.00,
      image: '/images/products/b1.webp'
    },
    {
      id: 'baby2',
      name: 'Savlon Baby Wipes',
        description: 'antibacterial baby wipes',
      price: 235.00,
      image: '/images/products/b2.webp'
    },
    // Adding 10 more products
    {
      id: 'baby3',
      name: 'Savlon Baby Wipes (AntiBacterial)',
        description: 'antibacterial gentle wipes',
      price: 285.00,
      image: '/images/products/b3.webp'
    },
    {
      id: 'baby4',
      name: 'NeoCare Diaper Belt',
        description: 'secure diaper belt',
      price: 1200.00,
      image: '/images/products/b4.webp'
    },
    {
      id: 'baby5',
      name: 'Lactogen 350 gm',
        description: 'infant formula nutrition',
      price: 67.00,
      image: '/images/products/b5.webp'
    },
    {
      id: 'baby6',
      name: 'Neocare Pants',
        description: 'comfortable baby diapers',
      price: 120.00,
      image: '/images/products/b6.webp'
    },
    {
      id: 'baby7',
      name: 'Meril Baby Gel Toothpaste',
        description: 'baby gel toothpaste',
      price: 10.00,
      image: '/images/products/b7.png'
    },
    {
      id: 'baby8',
      name: 'NAN OPTI Pro',
        description: 'infant formula milk',
      price: 900.00,
      image: '/images/products/b8.jpg'
    },
    {
      id: 'baby9',
        name: 'Baby Cotton Buds',
        description: 'soft cotton buds',
      price: 100.00,
      image: '/images/products/b9.jpg'
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