import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaClinicMedical, FaPills, FaStethoscope, FaFirstAid, FaHospital, FaAmbulance, FaPrescriptionBottleAlt, FaTooth, FaBaby, FaSprayCan, FaHeartbeat, FaPrescription, FaTimes as FaClose } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import LocationPopup from './LocationPopup';
import './Navbar.css';

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

const Navbar = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showFirstAidDropdown, setShowFirstAidDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });
  const { itemCount } = useCart();
  const { searchProducts } = useSearch();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const firstAidRef = useRef(null);
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const toggleLocationPopup = () => {
    if (isHomePage) {
      setShowLocationPopup(!showLocationPopup);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleFirstAidDropdown = () => {
    setShowFirstAidDropdown(!showFirstAidDropdown);
  };

  // Generate search suggestions based on input
  const generateSuggestions = (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    
    try {
      const allProducts = getAllProducts();
      const searchTerm = query.toLowerCase();
      
      // Find products that start with the search term (prioritized)
      const startsWithMatches = allProducts.filter(product => 
        product.name.toLowerCase().startsWith(searchTerm)
      );
      
      // If we have products that start with the search term, only show those
      if (startsWithMatches.length > 0) {
        // Sort alphabetically for better organization
        startsWithMatches.sort((a, b) => a.name.localeCompare(b.name));
        
        // Generate suggestions from matching products
        const productSuggestions = startsWithMatches.map(product => ({
          id: product.id,
          text: product.name,
          type: 'product',
          category: product.category || ''
        }));
        
        // Limit to 8 suggestions
        setSuggestions(productSuggestions.slice(0, 8));
        return;
      }
      
      // If no products start with the search term, show products that contain the term
      const containsMatches = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
      );
      
      // Sort alphabetically for better organization
      containsMatches.sort((a, b) => a.name.localeCompare(b.name));
      
      // Generate suggestions from matching products
      const productSuggestions = containsMatches.map(product => ({
        id: product.id,
        text: product.name,
        type: 'product',
        category: product.category || ''
      }));
      
      // Limit to 8 suggestions
      setSuggestions(productSuggestions.slice(0, 8));
    } catch (error) {
      console.error("Error generating suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.classList.add('focused');
    }
    // Only show suggestions if there's a search query
    // This prevents showing recent searches automatically on focus
    if (searchQuery.trim()) {
      setShowSuggestions(true);
    }
  };

  const handleSearchBlur = (e) => {
    // Don't hide suggestions if clicking within the suggestions box
    if (suggestionsRef.current && suggestionsRef.current.contains(e.relatedTarget)) {
      return;
    }
    
    if (searchInputRef.current && !searchQuery) {
      searchInputRef.current.classList.remove('focused');
    }
    
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim()) {
      generateSuggestions(value);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Save to recent searches
    const updatedSearches = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    
    searchProducts(searchQuery);
    setShowSuggestions(false);
    navigate('/search');
  };
  
  const handleSuggestionClick = (suggestion) => {
    if (suggestion.type === 'product') {
      setSearchQuery(suggestion.text);
      searchProducts(suggestion.text);
      navigate('/search');
    } else if (suggestion.type === 'category') {
      navigate(`/category/${suggestion.text.toLowerCase().replace(' & ', '-').replace(' ', '-')}`);
    }
    setShowSuggestions(false);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Handle first aid dropdown
      if (firstAidRef.current && !firstAidRef.current.contains(event.target)) {
        setShowFirstAidDropdown(false);
      }
      
      // Handle search suggestions
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="brand-container">
            <div className="logo-container">
              <div className="logo-icon">
                <FaClinicMedical />
              </div>
              <div className="logo-text">
                <span className="logo-medi">Medi</span>
                <span className="logo-shop">Shop</span>
              </div>
            </div>
            {isHomePage && (
              <div className="location-selector" onClick={toggleLocationPopup}>
                <FaMapMarkerAlt />
                <span>Select Location</span>
              </div>
            )}
          </Link>
        </div>

        <div className="navbar-center">
          <div className="pharmeasy-search-container" ref={searchInputRef}>
            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="search-input-container">
                <div className="search-icon">
                  <FaSearch />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for medicines, products..." 
                  className="pharmeasy-search-input"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="pharmeasy-search-button">
                <span>Search</span>
              </button>
            </form>
            
            {showSuggestions && searchQuery && suggestions.length > 0 && (
              <div className="search-suggestions" ref={suggestionsRef}>
                <div className="suggestions-header">Suggestions</div>
                <ul className="suggestions-list">
                  {suggestions.map(suggestion => (
                    <li 
                      key={suggestion.id} 
                      className={`suggestion-item ${suggestion.type}`}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <FaSearch className="suggestion-icon" />
                      <div className="suggestion-text">
                        <span>{suggestion.text}</span>
                        {suggestion.category && (
                          <small>in {suggestion.category}</small>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Recent searches are now only shown when user types matching text */}
          </div>
        </div>

        <div className="navbar-right">
          <div className="user-actions">
            <div className="first-aid-icon" onClick={toggleFirstAidDropdown} ref={firstAidRef}>
              <FaFirstAid />
              <div className={`first-aid-dropdown ${showFirstAidDropdown ? 'show' : ''}`}>
                <div className="first-aid-dropdown-item">
                  <FaHospital className="dropdown-icon" />
                  <span>First Aid</span>
                </div>
                <div className="first-aid-dropdown-item">
                  <FaPrescriptionBottleAlt className="dropdown-icon" />
                  <span>Request Medicine</span>
                </div>
                <div className="first-aid-dropdown-item">
                  <FaAmbulance className="dropdown-icon" />
                  <span>Emergency Services</span>
                </div>
              </div>
            </div>
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </Link>
            <Link to="/login" className="user-icon">
              <FaUser />
              <span>Login/Register</span>
            </Link>
          </div>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div className="secondary-nav">
        <div className="secondary-nav-container">
          <NavLink to="/category/otc-medicine" className={({isActive}) => isActive ? 'secondary-nav-item active' : 'secondary-nav-item'}>
            <FaPills className="secondary-nav-icon" />
            <span>OTC-Medicine</span>
          </NavLink>
          <NavLink to="/category/prescribe-medicine" className={({isActive}) => isActive ? 'secondary-nav-item active' : 'secondary-nav-item'}>
            <FaPrescription className="secondary-nav-icon" />
            <span>Prescribe-Medicine</span>
          </NavLink>
          <NavLink to="/category/diabetic-care" className={({isActive}) => isActive ? 'secondary-nav-item active' : 'secondary-nav-item'}>
            <FaHeartbeat className="secondary-nav-icon" />
            <span>Diabetic Care</span>
          </NavLink>
          <NavLink to="/category/healthcare-devices" className={({isActive}) => isActive ? 'secondary-nav-item active' : 'secondary-nav-item'}>
            <FaStethoscope className="secondary-nav-icon" />
            <span>Healthcare Devices</span>
          </NavLink>
          <NavLink to="/category/dental-care" className={({isActive}) => isActive ? 'secondary-nav-item active' : 'secondary-nav-item'}>
            <FaTooth className="secondary-nav-icon" />
            <span>Dental Care</span>
          </NavLink>
          <NavLink to="/category/baby-care" className={({isActive}) => isActive ? 'secondary-nav-item active' : 'secondary-nav-item'}>
            <FaBaby className="secondary-nav-icon" />
            <span>Baby Care</span>
          </NavLink>
          <NavLink to="/category/health-hygiene" className={({isActive}) => isActive ? 'secondary-nav-item active' : 'secondary-nav-item'}>
            <FaSprayCan className="secondary-nav-icon" />
            <span>Health & Hygiene</span>
          </NavLink>
        </div>
      </div>

      {showMobileMenu && (
        <div className="mobile-menu">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink to="/category/otc-medicine" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>OTC-Medicine</NavLink>
          <NavLink to="/category/prescribe-medicine" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Prescribe-Medicine</NavLink>
          <NavLink to="/category/diabetic-care" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Diabetic Care</NavLink>
          <NavLink to="/category/healthcare-devices" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Healthcare Devices</NavLink>
          <NavLink to="/category/dental-care" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Dental Care</NavLink>
          <NavLink to="/category/baby-care" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Baby Care</NavLink>
          <NavLink to="/category/health-hygiene" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Health & Hygiene</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>About</NavLink>
          
          <div className="mobile-menu-section">
            <div className="mobile-menu-section-title">Emergency Services</div>
            <div className="mobile-menu-item">
              <FaHospital className="mobile-menu-icon" />
              <span>First Aid</span>
            </div>
            <div className="mobile-menu-item">
              <FaPrescriptionBottleAlt className="mobile-menu-icon" />
              <span>Request Medicine</span>
            </div>
            <div className="mobile-menu-item">
              <FaAmbulance className="mobile-menu-icon" />
              <span>Emergency Services</span>
            </div>
          </div>
          
          <NavLink to="/cart" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Cart</NavLink>
          <NavLink to="/login" className={({isActive}) => isActive ? 'active' : ''} onClick={toggleMobileMenu}>Login/Register</NavLink>
        </div>
      )}

      {showLocationPopup && isHomePage && (
        <LocationPopup onClose={() => setShowLocationPopup(false)} />
      )}
    </>
  );
};

export default Navbar;
