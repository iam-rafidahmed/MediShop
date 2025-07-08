import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import OrderConfirmation from './OrderConfirmation';

const ReviewOrder = ({ userInfo, onPrevious }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const { clearCart } = useCart();
  const navigate = useNavigate();

  // Function to generate a formatted order number
  const generateOrderNumber = () => {
    // Generate a 6-digit number
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    // Format it as needed (e.g., adding leading zeros or a prefix)
    return randomNum.toString().padStart(6, '0');
  };

  const handlePlaceOrder = () => {
    // In a real app, you would submit the order to your backend here
    // and receive an order confirmation number in response
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    
    // Clear the cart after successful order placement
    clearCart();
    
    // Show the confirmation popup
    setShowConfirmation(true);
  };

  return (
    <>
      <div className="checkout-form">
        <h2 className="form-title">Review & Place Order</h2>
        
        <div className="review-section">
          <h3 className="review-section-title">User Information</h3>
          <div className="review-item">
            <div className="review-item-label">Full Name:</div>
            <div className="review-item-value">{userInfo.fullName}</div>
          </div>
          <div className="review-item">
            <div className="review-item-label">Phone Number:</div>
            <div className="review-item-value">{userInfo.phoneNumber}</div>
          </div>
          {userInfo.email && (
            <div className="review-item">
              <div className="review-item-label">Email:</div>
              <div className="review-item-value">{userInfo.email}</div>
            </div>
          )}
          <div className="review-item">
            <div className="review-item-label">Address:</div>
            <div className="review-item-value">{userInfo.address}</div>
          </div>
        </div>
        
        <div className="review-section">
          <h3 className="review-section-title">Delivery Information</h3>
          <div className="review-item">
            <div className="review-item-label">Delivery Time:</div>
            <div className="review-item-value">Within 1–2 Hours</div>
          </div>
        </div>
        
        <div className="button-group">
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={onPrevious}
          >
            Previous
          </button>
        </div>
        
        <button 
          type="button" 
          className="btn place-order-btn" 
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>

      <OrderConfirmation 
        isVisible={showConfirmation} 
        orderNumber={orderNumber}
        onClose={() => setShowConfirmation(false)}
      />
    </>
  );
};

export default ReviewOrder; 