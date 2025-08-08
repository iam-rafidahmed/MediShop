import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the cart context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const currentUser = localStorage.getItem('medishopCurrentUser');
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        const userCartKey = `medishopCart_${user.id}`;
        const savedCart = localStorage.getItem(userCartKey);
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    const currentUser = localStorage.getItem('medishopCurrentUser');
    if (currentUser && cartItems.length > 0) {
      try {
        const user = JSON.parse(currentUser);
        const userCartKey = `medishopCart_${user.id}`;
        localStorage.setItem(userCartKey, JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [cartItems]);

  // Listen for login/logout events and handle cart accordingly
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'isMedishopLoggedIn') {
        if (e.newValue === null) {
          // User logged out, clear cart state
          setCartItems([]);
        } else if (e.newValue === 'true') {
          // User logged in, load their cart
          const currentUser = localStorage.getItem('medishopCurrentUser');
          if (currentUser) {
            try {
              const user = JSON.parse(currentUser);
              const userCartKey = `medishopCart_${user.id}`;
              const savedCart = localStorage.getItem(userCartKey);
              if (savedCart) {
                setCartItems(JSON.parse(savedCart));
              } else {
                setCartItems([]);
              }
            } catch (error) {
              console.error('Error loading user cart:', error);
              setCartItems([]);
            }
          }
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Check current login status on mount
    const isLoggedIn = localStorage.getItem('isMedishopLoggedIn');
    const currentUser = localStorage.getItem('medishopCurrentUser');
    
    if (isLoggedIn === 'true' && currentUser) {
      try {
        const user = JSON.parse(currentUser);
        const userCartKey = `medishopCart_${user.id}`;
        const savedCart = localStorage.getItem(userCartKey);
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error('Error loading user cart on mount:', error);
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // If item exists, increase quantity
      updateQuantity(existingItem.id, 1);
    } else {
      // If item doesn't exist, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity of an item
  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    const currentUser = localStorage.getItem('medishopCurrentUser');
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        const userCartKey = `medishopCart_${user.id}`;
        localStorage.removeItem(userCartKey);
      } catch (error) {
        console.error('Error clearing user cart:', error);
      }
    }
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  // Calculate total number of items in cart
  const itemCount = cartItems.reduce(
    (count, item) => count + item.quantity, 
    0
  );

  // Value to be provided by the context
  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    cartTotal,
    itemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
