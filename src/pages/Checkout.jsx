import React, { useState } from 'react';
import UserInfo from '../components/checkout/UserInfo';
import DeliveryTime from '../components/checkout/DeliveryTime';
import ReviewOrder from '../components/checkout/ReviewOrder';
import CartSummary from '../components/checkout/CartSummary';
import '../components/checkout/Checkout.css';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: ''
  });
  
  const handleUserInfoSubmit = (data) => {
    setUserInfo(data);
    setStep(2);
  };
  
  const handleDeliveryTimeSubmit = () => {
    setStep(3);
  };
  
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserInfo onSubmit={handleUserInfoSubmit} />;
      case 2:
        return <DeliveryTime 
                onSubmit={handleDeliveryTimeSubmit} 
                onPrevious={handlePreviousStep} 
              />;
      case 3:
        return <ReviewOrder 
                userInfo={userInfo} 
                onPrevious={handlePreviousStep} 
              />;
      default:
        return <UserInfo onSubmit={handleUserInfoSubmit} />;
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">
            <span className="step-icon">🪪</span> Address
          </div>
        </div>
        <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">
            <span className="step-icon">⏱️</span> Shipping
          </div>
        </div>
        <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-label">
            <span className="step-icon">💳</span> Payment
          </div>
        </div>
      </div>

      <div className="checkout-content">
        <div className="cart-summary-container">
          <CartSummary />
        </div>
        <div className="checkout-form-container">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Checkout; 