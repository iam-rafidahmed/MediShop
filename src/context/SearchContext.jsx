import React, { createContext, useState, useContext } from 'react';

// Create a local getAllProducts function since categories.js was removed
const getAllProducts = () => {
  try {
    // Combine products from all category components
    const products = [
      // Health & Hygiene products
      {id: 'hyg1', name: 'Dettol Hand Sanitizer', category: 'Health & Hygiene', description: 'Instant Hand Sanitizer with Moisturizer (200ml)', manufacturer: 'Reckitt Benckiser'},
      {id: 'hyg2', name: 'Savlon Antiseptic', category: 'Health & Hygiene', description: 'Antiseptic Liquid for cuts and wounds (500ml)', manufacturer: 'ICI'},
      {id: 'hyg3', name: 'Betadine Solution', category: 'Health & Hygiene', description: 'Povidone-Iodine Antiseptic Solution (100ml)', manufacturer: 'Mundipharma'},
      {id: 'hyg4', name: 'Paracetamol 500mg', category: 'Health & Hygiene', description: 'Fever and Pain Relief Tablets (10 tablets/strip)', manufacturer: 'Incepta Pharmaceuticals'},
      {id: 'hyg5', name: 'Vitamin C 500mg', category: 'Health & Hygiene', description: 'Immune Support Supplement (30 tablets/bottle)', manufacturer: 'Healthcare Nutrition'},
      
      // OTC Medicine products
      {id: 'otc1', name: 'Paracetamol Plus', category: 'OTC-Medicine', description: 'Fast-acting pain relief tablet with added caffeine (No Prescription Required)', manufacturer: 'HealthCare Pharma'},
      {id: 'otc2', name: 'ColdGuard Syrup', category: 'OTC-Medicine', description: 'All-in-one cold and flu relief syrup (No Prescription Required)', manufacturer: 'WellLife Labs'},
      {id: 'otc3', name: 'Napa Extra', category: 'OTC-Medicine', description: 'Advanced fever and pain relief tablets (No Prescription Required)', manufacturer: 'Beximco Pharmaceuticals'},
      
      // Prescribed Medicine products
      {id: 'pres1', name: 'Amoxicillin 500mg', category: 'Prescribe-Medicine', description: 'Antibiotic capsules (Prescription Required)', manufacturer: 'PharmaCure'},
      {id: 'pres2', name: 'Lisinopril 10mg', category: 'Prescribe-Medicine', description: 'Blood pressure medication tablets (Prescription Required)', manufacturer: 'MediHealth'}
    ];
    
    return products;
  } catch (error) {
    console.error("Error getting all products:", error);
    return [];
  }
};

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
    
    // Find products that match in other fields (description, manufacturer, etc.)
    const otherFieldMatches = allProducts.filter(product => 
      !product.name.toLowerCase().includes(searchTerm) && // Exclude name matches
      (
        (product.description && product.description.toLowerCase().includes(searchTerm)) ||
        (product.manufacturer && product.manufacturer.toLowerCase().includes(searchTerm)) ||
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