import React from 'react';
import { Link } from 'react-router-dom';
import PopularHospitals from '../components/PopularHospitals';
import WhyChooseUs from '../components/WhyChooseUs';
import './Home.css';

const Home = () => {
  const popularMedicines = [
    {
      id: 1,
      name: "Dolo 650mg",
      description: "Paracetamol Tablets",
      price: "₹30.00",
      rating: 4.8,
      reviews: 2450,
      image: "/images/products/product-1.jpg"
    },
    {
      id: 2,
      name: "Crocin Advance",
      description: "Fast Acting Pain Relief",
      price: "₹40.00",
      rating: 4.7,
      reviews: 1890,
      image: "/images/products/product-2.jpg"
    },
    {
      id: 3,
      name: "Zincovit",
      description: "Multivitamin Tablets",
      price: "₹105.00",
      rating: 4.9,
      reviews: 3200,
      image: "/images/products/product-3.jpg"
    },
    {
      id: 4,
      name: "Shelcal 500",
      description: "Calcium & Vitamin D3",
      price: "₹87.50",
      rating: 4.6,
      reviews: 1670,
      image: "/images/products/product-4.jpg"
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="section-title">Users' Choice</h2>
          <p className="section-subtitle">Most trusted medicines by our customers</p>
          <div className="medicine-grid">
            {popularMedicines.map((medicine) => (
              <div key={medicine.id} className="medicine-card">
                <div className="medicine-image">
                  <img src={medicine.image} alt={medicine.name} />
                </div>
                <div className="medicine-info">
                  <h3>{medicine.name}</h3>
                  <p className="medicine-description">{medicine.description}</p>
                  <div className="medicine-price">
                    <span className="price">{medicine.price}</span>
                    <Link to={`/product/${medicine.id}`} className="buy-btn">Buy Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <Link to="/category/personal-care" className="category-card">
            <h3>Personal Care</h3>
          </Link>
          <Link to="/category/wellness" className="category-card">
            <h3>Wellness</h3>
          </Link>
          <Link to="/category/lifestyle" className="category-card">
            <h3>Lifestyle</h3>
          </Link>
          <Link to="/category/fitness" className="category-card">
            <h3>Fitness</h3>
          </Link>
          <Link to="/category/elderly-care" className="category-card">
            <h3>Elderly Care</h3>
          </Link>
          <Link to="/category/first-aid" className="category-card">
            <h3>First Aid</h3>
          </Link>
        </div>
      </section>

      <PopularHospitals />
      
      <WhyChooseUs />
    </div>
  );
};

export default Home;
