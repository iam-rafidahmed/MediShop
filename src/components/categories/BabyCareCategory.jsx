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
    },
    // Adding 10 more products
    {
      id: 'baby3',
      name: 'Baby Wipes',
      description: 'Alcohol-free gentle wipes for sensitive skin, pack of 80',
      price: 199.99,
      image: '/images/products/product-3.jpg',
      stock: 150,
      manufacturer: 'PureTouch'
    },
    {
      id: 'baby4',
      name: 'Baby Shampoo',
      description: 'Tear-free gentle shampoo for babies and toddlers',
      price: 249.99,
      image: '/images/products/product-4.jpg',
      stock: 90,
      manufacturer: 'BabyClean'
    },
    {
      id: 'baby5',
      name: 'Baby Powder',
      description: 'Talc-free powder to prevent diaper rash and irritation',
      price: 179.99,
      image: '/images/products/product-5.jpg',
      stock: 110,
      manufacturer: 'BabySoft'
    },
    {
      id: 'baby6',
      name: 'Teething Gel',
      description: 'Soothing gel for teething discomfort and pain relief',
      price: 229.99,
      image: '/images/products/product-6.jpg',
      stock: 65,
      manufacturer: 'ToothEase'
    },
    {
      id: 'baby7',
      name: 'Baby Thermometer',
      description: 'Digital thermometer designed for infants with fever alert',
      price: 499.99,
      image: '/images/products/product-7.jpg',
      stock: 50,
      manufacturer: 'BabyTemp'
    },
    {
      id: 'baby8',
      name: 'Nasal Aspirator',
      description: 'Gentle nasal aspirator for clearing baby\'s congestion',
      price: 349.99,
      image: '/images/products/product-8.jpg',
      stock: 60,
      manufacturer: 'BreathEasy'
    },
    {
      id: 'baby9',
      name: 'Baby Formula',
      description: 'Nutritionally complete infant formula, 400g tin',
      price: 899.99,
      image: '/images/products/product-1.jpg',
      stock: 80,
      manufacturer: 'NutriGrow'
    },
    {
      id: 'baby10',
      name: 'Baby Bottle Set',
      description: 'Set of 3 anti-colic bottles with different flow nipples',
      price: 799.99,
      image: '/images/products/product-2.jpg',
      stock: 45,
      manufacturer: 'FeedWell'
    },
    {
      id: 'baby11',
      name: 'Baby Nail Clipper',
      description: 'Safety baby nail clipper with magnifying glass',
      price: 199.99,
      image: '/images/products/product-3.jpg',
      stock: 70,
      manufacturer: 'SafeCare'
    },
    {
      id: 'baby12',
      name: 'Baby Monitor',
      description: 'Digital video baby monitor with night vision and two-way audio',
      price: 2999.99,
      image: '/images/products/product-4.jpg',
      stock: 25,
      manufacturer: 'BabyGuard'
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