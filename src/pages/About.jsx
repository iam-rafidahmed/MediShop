import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Medishop</h1>
        <p className="about-tagline">Delivering Health and Wellness to Your Doorstep</p>
      </section>

      <section className="about-content card">
        <h2>Our Mission</h2>
        <p>
          At Medishop, we are committed to delivering quality medicines quickly and safely to your door. 
          Our mission is to make healthcare accessible to everyone by providing a convenient, reliable, and 
          affordable online pharmacy service.
        </p>
      </section>

      <section className="about-content card">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Quality</h3>
            <p>We source our products only from licensed manufacturers and authorized distributors to ensure you receive genuine medications.</p>
          </div>
          <div className="value-item">
            <h3>Reliability</h3>
            <p>We understand the importance of timely medication delivery and strive to deliver your orders promptly and securely.</p>
          </div>
          <div className="value-item">
            <h3>Customer Care</h3>
            <p>Our team of pharmacists and healthcare professionals is available to provide guidance and answer your questions.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We continuously improve our services by adopting the latest technologies to enhance your shopping experience.</p>
          </div>
        </div>
      </section>

      <section className="about-content card">
        <h2>Our Team</h2>
        <p>
          Our team consists of experienced pharmacists, healthcare professionals, and customer service specialists 
          dedicated to providing you with the best service. We work together to ensure that you receive accurate 
          information, quality products, and excellent support.
        </p>
      </section>
    </div>
  );
};

export default About;
