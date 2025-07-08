import React, { createContext, useState, useContext } from 'react';

// Create the cart context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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
