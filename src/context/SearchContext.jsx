import React, { createContext, useState, useContext } from 'react';
import { getAllProducts } from '../data/categories';

// Create the search context
const SearchContext = createContext();

// Custom hook to use the search context
export const useSearch = () => {
  return useContext(SearchContext);
};

// Search provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Search products by name
  const searchProducts = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const allProducts = getAllProducts();
    const filteredProducts = allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filteredProducts);
  };

  // Clear search results
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  // Value to be provided by the context
  const value = {
    searchQuery,
    searchResults,
    searchProducts,
    clearSearch
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};