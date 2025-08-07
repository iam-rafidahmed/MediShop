// Utility functions for testing and debugging

export const testLocalStorage = () => {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    console.error('localStorage not available:', e);
    return false;
  }
};

export const validateProductData = (products) => {
  const errors = [];
  
  products.forEach((product, index) => {
    if (!product.id) errors.push(`Product ${index}: Missing ID`);
    if (!product.name) errors.push(`Product ${index}: Missing name`);
    if (!product.price || typeof product.price !== 'number') errors.push(`Product ${index}: Invalid price`);
    if (!product.image) errors.push(`Product ${index}: Missing image`);
    if (!product.description) errors.push(`Product ${index}: Missing description`);
    if (!product.category) errors.push(`Product ${index}: Missing category`);
  });
  
  return errors;
};

export const logAppState = () => {
  console.log('=== MediShop App State ===');
  console.log('localStorage available:', testLocalStorage());
  console.log('Cart items:', JSON.parse(localStorage.getItem('medishopCart') || '[]'));
  console.log('User logged in:', localStorage.getItem('isMedishopLoggedIn'));
  console.log('Current user:', localStorage.getItem('medishopCurrentUser'));
  console.log('Orders:', JSON.parse(localStorage.getItem('medishopOrders') || '[]'));
  console.log('========================');
}; 