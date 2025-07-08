import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaClinicMedical, FaPills, FaStethoscope, FaFirstAid, FaHospital, FaAmbulance, FaPrescriptionBottleAlt, FaTooth, FaBaby, FaSprayCan, FaHeartbeat, FaPrescription } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import LocationPopup from './LocationPopup';
import './Navbar.css';

const Navbar = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showFirstAidDropdown, setShowFirstAidDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const firstAidRef = useRef(null);
  const searchInputRef = useRef(null);

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

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.classList.add('focused');
    }
  };

  const handleSearchBlur = () => {
    if (searchInputRef.current && !searchQuery) {
      searchInputRef.current.classList.remove('focused');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
    console.log('Search query:', searchQuery);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (firstAidRef.current && !firstAidRef.current.contains(event.target)) {
        setShowFirstAidDropdown(false);
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
              <div className="search-icon">
                <FaSearch />
              </div>
              <input 
                type="text" 
                placeholder="Search for" 
                className="pharmeasy-search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <button type="submit" className="pharmeasy-search-button">
                Search
              </button>
            </form>
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
