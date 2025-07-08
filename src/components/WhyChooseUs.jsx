import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Genuine Medicines',
      description: 'All our products are sourced directly from manufacturers to ensure authenticity.'
    },
    {
      id: 2,
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your medicines delivered to your doorstep within 24-48 hours.'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Best Prices',
      description: 'We offer competitive prices and regular discounts on essential medicines.'
    },
    {
      id: 4,
      icon: '👨‍⚕️',
      title: 'Expert Consultation',
      description: 'Get free consultation from our team of experienced pharmacists.'
    }
  ];

  return (
    <div className="why-choose-us">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="benefits-container">
        {benefits.map(benefit => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs; 