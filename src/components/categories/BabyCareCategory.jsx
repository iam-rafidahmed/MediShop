import React from 'react';
import './CategoryStyles.css';

const BabyCareCategory = () => {
  const dummyProducts = [
    {
      id: 'baby1',
      name: 'Baby Moisturizing Cream',
      description: 'Gentle, hypoallergenic moisturizing cream for sensitive baby skin',
      price: 349.99,
      image: '/images/products/product-1.jpg',
      stock: 100,
      manufacturer: 'BabySoft Care'
    },
    {
      id: 'baby2',
      name: 'Digital Baby Thermometer',
      description: 'Quick-read digital thermometer with soft flexible tip',
      price: 799.99,
      image: '/images/products/product-2.jpg',
      stock: 60,
      manufacturer: 'BabyTech'
    }
  ];

  return (
    <div className="category-container">
      <div className="products-grid">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="manufacturer">By {product.manufacturer}</p>
              <p className="stock">In Stock: {product.stock}</p>
              <p className="price">₹{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabyCareCategory; 