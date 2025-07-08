import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = ({ isVisible, orderNumber, onClose }) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  const handleBackToHome = () => {
    navigate('/');
    if (onClose) onClose();
  };

  return (
    <div className="order-confirmation-overlay">
      <div className="order-confirmation-modal">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#4CAF50" />
            <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <h2 className="confirmation-title">Thank you for your Purchase!</h2>
        
        <p className="confirmation-message">
          Thank you for shopping with Medishop.com.
        </p>
        
        <p className="order-number">
          We have received your order and order Number is: <span>{orderNumber || '003473'}</span>.
        </p>
        
        <button className="back-to-home-btn" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation; 