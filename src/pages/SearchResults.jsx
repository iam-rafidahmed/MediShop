import React from 'react';
import { useSearch } from '../context/SearchContext';
import { useCart } from '../context/CartContext';
import '../components/categories/CategoryStyles.css';

const SearchResults = () => {
  const { searchQuery, searchResults } = useSearch();
  const { addToCart } = useCart();

  if (!searchQuery) {
    return (
      <div className="category-container">
        <h2>Search Results</h2>
        <p>Please enter a search term to find products.</p>
      </div>
    );
  }

  if (searchResults.length === 0) {
    return (
      <div className="category-container">
        <h2>Search Results for "{searchQuery}"</h2>
        <p>No products found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="category-container">
      <h2>Search Results for "{searchQuery}"</h2>
      <div className="products-grid">
        {searchResults.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">৳{product.price.toFixed(2)}</p>
              <div className="product-meta">
                <span>Stock: {product.stock}</span>
                <span>Manufacturer: {product.manufacturer}</span>
              </div>
              <button 
                className="add-to-cart-btn" 
                onClick={() => addToCart(product)}
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

export default SearchResults;