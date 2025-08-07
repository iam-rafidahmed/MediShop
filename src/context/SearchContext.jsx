import React, { createContext, useState, useContext } from 'react';
import { getAllProducts } from '../data/products';

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

  // Search products prioritizing those that start with the search term
  const searchProducts = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const allProducts = getAllProducts();
    const searchTerm = query.toLowerCase();
    
    // Find products that start with the search term (exact match at beginning)
    const startsWithMatches = allProducts.filter(product => 
      product.name.toLowerCase().startsWith(searchTerm)
    );
    
    // Find products that contain the search term anywhere
    const containsMatches = allProducts.filter(product => 
      !product.name.toLowerCase().startsWith(searchTerm) && // Exclude exact matches
      product.name.toLowerCase().includes(searchTerm)
    );
    
    // Find products that match in other fields (description, category, etc.)
    const otherFieldMatches = allProducts.filter(product => 
      !product.name.toLowerCase().includes(searchTerm) && // Exclude name matches
      (
        (product.description && product.description.toLowerCase().includes(searchTerm)) ||
        (product.category && product.category.toLowerCase().includes(searchTerm))
      )
    );
    
    // Combine results in priority order: starts with > contains > other fields
    const combinedResults = [
      ...startsWithMatches.sort((a, b) => a.name.localeCompare(b.name)), // Alphabetical sort within each group
      ...containsMatches.sort((a, b) => a.name.localeCompare(b.name)),
      ...otherFieldMatches.sort((a, b) => a.name.localeCompare(b.name))
    ];
    
    setSearchResults(combinedResults);
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