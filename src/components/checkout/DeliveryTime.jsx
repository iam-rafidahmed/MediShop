import React from 'react';
import { FaTruck } from 'react-icons/fa';

const DeliveryTime = ({ onSubmit, onPrevious }) => {
  return (
    <div className="checkout-form">
      <h2 className="form-title">Delivery Time</h2>
      
      <div className="delivery-option selected">
        <div className="delivery-option-icon">
          <FaTruck />
        </div>
        <div className="delivery-option-details">
          <div className="delivery-option-title">Delivery within 1–2 Hours</div>
          <div className="delivery-option-description">
            Fast delivery to your doorstep
          </div>
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
        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={onSubmit}
        >
          Continue to Final Step
        </button>
      </div>
    </div>
  );
};

export default DeliveryTime; 