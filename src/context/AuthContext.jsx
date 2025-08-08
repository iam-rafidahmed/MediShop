import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check login status on app load
    const checkAuthStatus = () => {
      const loginStatus = localStorage.getItem('isMedishopLoggedIn');
      const userData = localStorage.getItem('medishopCurrentUser');
      
      if (loginStatus === 'true' && userData) {
        setIsLoggedIn(true);
        setCurrentUser(JSON.parse(userData));
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = (userData) => {
    localStorage.setItem('isMedishopLoggedIn', 'true');
    localStorage.setItem('medishopCurrentUser', JSON.stringify(userData));
    setIsLoggedIn(true);
    setCurrentUser(userData);
  };

  const logout = () => {
    // Clear user-specific cart before removing user data
    const currentUser = localStorage.getItem('medishopCurrentUser');
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        const userCartKey = `medishopCart_${user.id}`;
        localStorage.removeItem(userCartKey);
      } catch (error) {
        console.error('Error clearing user cart on logout:', error);
      }
    }
    
    localStorage.removeItem('isMedishopLoggedIn');
    localStorage.removeItem('medishopCurrentUser');
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const value = {
    isLoggedIn,
    currentUser,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 