import React, { useState } from 'react';

const UserInfo = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };
  
  return (
    <div className="checkout-form">
      <h2 className="form-title">User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName" className="form-label required">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-input"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && <div className="error-message">{errors.fullName}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label required">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="form-input"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your 10-digit phone number"
          />
          {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address (Optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address (optional)"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="address" className="form-label required">Address</label>
          <textarea
            id="address"
            name="address"
            className="form-input"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your full address"
            rows="3"
          ></textarea>
          {errors.address && <div className="error-message">{errors.address}</div>}
        </div>
        
        <div className="button-group">
          <div></div> {/* Empty div to maintain flex spacing */}
          <button type="submit" className="btn btn-primary">Continue to Delivery Time</button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo; 