import React from 'react';
import { useCart } from '../../context/CartContext';
import './CategoryStyles.css';

const BabyCareCategory = () => {
  const { addToCart } = useCart();
  
  const dummyProducts = [
    {
      id: 'baby1',
      name: 'Baby Wipes',
      description: 'Gentle moisturizing lotion for sensitive baby skin',
      price: 235.00,
      image: '/images/products/b1.webp'
    },
    {
      id: 'baby2',
      name: 'Savlon Baby Wipes',
      description: 'Ultra-absorbent diapers with wetness indicator',
      price: 235.00,
      image: '/images/products/b2.webp'
    },
    // Adding 10 more products
    {
      id: 'baby3',
      name: 'Savlon Baby Wipes (AntiBacterial)',
      description: 'Alcohol-free gentle wipes for sensitive skin, pack of 80',
      price: 285.00,
      image: '/images/products/b3.webp'
    },
    {
      id: 'baby4',
      name: 'NeoCare Diaper Belt',
      description: 'Tear-free gentle shampoo for babies and toddlers',
      price: 1200.00,
      image: '/images/products/b4.webp'
    },
    {
      id: 'baby5',
      name: 'Lactogen 350 gm',
      description: 'Talc-free powder to prevent diaper rash and irritation',
      price: 67.00,
      image: '/images/products/b5.webp'
    },
    {
      id: 'baby6',
      name: 'Neocare Pants',
      description: 'Soothing gel for teething discomfort and pain relief',
      price: 120.00,
      image: '/images/products/b6.webp'
    },
    {
      id: 'baby7',
      name: 'Meril Baby Gel Toothpaste',
      description: 'Digital thermometer designed for infants with fever alert',
      price: 10.00,
      image: '/images/products/b7.png'
    },
    {
      id: 'baby8',
      name: 'NAN OPTI Pro',
      description: 'Gentle nasal aspirator for clearing baby\'s congestion',
      price: 900.00,
      image: '/images/products/b8.jpg'
    },
    {
      id: 'baby9',
      name: 'Baby Cotton Buds',
      description: 'Nutritionally complete infant formula, 400g tin',
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