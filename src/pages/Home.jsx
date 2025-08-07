import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaDumbbell, FaUserFriends, FaFirstAid, FaBaby, FaLeaf } from 'react-icons/fa';
import PopularHospitals from '../components/PopularHospitals';
import WhyChooseUs from '../components/WhyChooseUs';
import { useCart } from '../context/CartContext';
import './Home.css';

const Home = () => {
  const { addToCart } = useCart();
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/images/promotions/maxpro.png", alt: "Maxpro" },
    { src: "/images/promotions/monas.png", alt: "Monas" },
    { src: "/images/promotions/rolac.jpg", alt: "Rolac" },
    { src: "/images/promotions/skf-230300-mig-rt-1001.png", alt: "SKF Mig" },
    { src: "/images/promotions/acme-230400-filofer-ln.png", alt: "Acme Filofer" },
    { src: "/images/promotions/renata-230600-rolip-rtw-1001.jpg", alt: "Renata Rolip" }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // New slideshow state for the secondary slideshow
  const [currentSecondarySlide, setCurrentSecondarySlide] = useState(0);
  const secondarySlides = [
    { src: "/images/promotions/renata-230900-neurobest-rtw.jpg", alt: "Renata Neurobest" },
    { src: "/images/promotions/rpl-210600-meningitis-rths-b.png", alt: "RPL Meningitis" },
    { src: "/images/promotions/rpl-sh-gavirad-rth-1001.png", alt: "RPL Gavirad" },
    { src: "/images/promotions/skf-230300-tufnil-rt-1001.png", alt: "SKF Tufnil" },
    { src: "/images/promotions/algin.png", alt: "Algin" }
  ];

  // Auto-advance secondary slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSecondarySlide((prevSlide) => (prevSlide + 1) % secondarySlides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [secondarySlides.length]);
  
  const popularMedicines = [
    {
      id: 1,
      name: "Sergel 20mg",
      description: "Paracetamol Tablets",
      price: 70.00,
     
      image: "/images/products/sergel.otc1.webp"
    },
    {
      id: 2,
      name: "Napa Extra 500mg",
      description: "Fast Acting Pain Relief",
      price: 30.00,
    
      image: "/images/products/napaextra.otc6.webp"
    },
    {
      id: 3,
      name: "losectil 20mg",
      description: "Multivitamin Tablets",
      price: 50.00,

      image: "/images/products/otc9.webp"
    },
    {
      id: 4,
      name: "Napa 60ml",
      description: "Calcium & Vitamin D3",
      price: 35.00,
   
      image: "/images/products/otc12.webp"
    },
    {
      id: 5,
      name: "Xorel 20 mg",
      description: "Azithromycin Tablets",
      price: 40.00,
    
      image: "/images/products/otc14.webp"
    },
    {
      id: 6,
      name: "Montex10 mg",
      description: "Levocetirizine & Montelukast",
      price: 160.00,
      
      image: "/images/products/Montex10 mg.webp"
    },
    {
      id: 7,
      name: "Omidon 10mg",
      description: "Vitamin C Chewable Tablets",
      price: 52.50,

      image: "/images/products/omidon.otc5.webp"
    },
    {
      id: 8,
      name: "Lijenta 5mg",
      description: "B-Complex Capsules",
      price: 330.00,
    
      image: "/images/products/p9.webp"
    },
    {
      id: 9,
      name: "Maxpro 20mg",
      description: "Omeprazole Capsules",
      price: 45.00,
    
      image: "/images/products/maxpro.otc2.webp"
    },
    {
      id: 10,
      name: "Monas 10mg",
      description: "Montelukast Tablets",
      price: 180.00,
    
      image: "/images/products/monas.otc3.webp"
    },
    {
      id: 11,
      name: "Seclo 20mg",
      description: "Pantoprazole Tablets",
      price: 55.00,
    
      image: "/images/products/seclo.otc7.webp"
    },
    {
      id: 12,
      name: "Deslor 5 mg",
      description: "Fexofenadine Tablets",
      price: 50.00,
    
      image: "/images/products/otc13.webp"
    }
  ];

  const doctorRecommended = [
    {
      id: 1,
      name: "Ecosprin 75mg",
      description: "Aspirin Tablets",
      price: 8.00,

      image: "/images/products/p1.webp"
    },
    {
      id: 2,
      name: "Napa Extend",
      description: "Levothyroxine Sodium Tablets",
      price: 24.00,

      image: "/images/products/napaext.otc4.webp"
    },
    {
      id: 3,
      name: "Ace XR665 mg",
      description: "Vitamin B Complex Tablets",
      price: 20.00,
      image: "/images/products/ace-xr-665-mg.webp"
    },
    {
      id: 4,
      name: "Azithromycin 500",
      description: "Pantoprazole & Domperidone",
      price: 240.00,
    
      image: "/images/products/Azithromycin.webp"
    }
  ];

  const handleAddToCart = (medicine) => {
    addToCart(medicine);
  };

    return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="section-title">Top Picks for You</h2>
          <p className="section-subtitle">Most trusted medicines by our customers</p>
          <div className="auto-scroll-container">
            <div className="auto-scroll-content">
              {popularMedicines.map((medicine) => (
                <div key={medicine.id} className="medicine-card">
                  <div className="medicine-image">
                    <img src={medicine.image} alt={medicine.name} />
                  </div>
                  <div className="medicine-info">
                    <h3>{medicine.name}</h3>
                    <p className="medicine-description">{medicine.description}</p>
                    <p className="price">Tk {medicine.price.toFixed(2)}</p>
                    <button 
                      className="add-to-cart"
                      onClick={() => handleAddToCart(medicine)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Slideshow Section */}
      <section className="image-slideshow-section">
        <div className="slideshow-content">
          <div className="slideshow-text">
            <h2 className="trusted-title">Trusted by</h2>
            <h1 className="trusted-subtitle">thousands of customers</h1>
            <div className="trusted-accent"></div>
          </div>
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`slideshow-image ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-section doctor-recommended-section">
        <div className="hero-content">
          <h2 className="section-title">Doctor Recommended</h2>
          <p className="section-subtitle">Top medications recommended by healthcare professionals</p>
          <div className="medicine-grid">
            {doctorRecommended.map((medicine) => (
              <div key={medicine.id} className="medicine-card">
                <div className="medicine-image">
                  <img src={medicine.image} alt={medicine.name} />
                  </div>
                <div className="medicine-info">
                  <h3>{medicine.name}</h3>
                  <p className="medicine-description">{medicine.description}</p>
                  <p className="price">Tk {medicine.price.toFixed(2)}</p>
                  <button 
                    className="add-to-cart"
                    onClick={() => handleAddToCart(medicine)}
                  >
                    Add to Cart
                  </button>
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
            <div className="category-icon">
              <FaHeart />
            </div>
            <h3>Personal Care</h3>
          </Link>
          <Link to="/category/wellness" className="category-card">
            <div className="category-icon">
              <FaUserFriends />
            </div>
            <h3>Wellness</h3>
          </Link>
          <Link to="/category/herbal-medicine" className="category-card">
            <div className="category-icon">
              <FaLeaf />
            </div>
            <h3>Herbal Medicine</h3>
          </Link>
          <Link to="/category/supplement" className="category-card">
            <div className="category-icon">
              <FaDumbbell />
            </div>
            <h3>Supplement</h3>
          </Link>
          <Link to="/category/elderly-care" className="category-card">
            <div className="category-icon">
              <FaUserFriends />
            </div>
            <h3>Elderly Care</h3>
          </Link>
          <Link to="/category/first-aid" className="category-card">
            <div className="category-icon">
              <FaFirstAid />
            </div>
            <h3>First Aid</h3>
          </Link>
        </div>
      </section>

      {/* Secondary Slideshow Section */}
      <section className="secondary-slideshow-section">
        <div className="slideshow-content">
          <div className="left-image">
            <img src="/images/promotions/Medicine-bro.svg" alt="Medicine" />
          </div>
          <div className="slideshow-text">
            <h1 className="featured-subtitle">Stay Active, Stay Healthy</h1>
            <p className="featured-description">
            We bring you the best selection of trusted medicines to keep you always prepared and protected.
            Choose the right medicine for your needs — start your journey to better health today.
            </p>
          </div>
          <div className="right-image">
            <img src="/images/promotions/Hospital building-bro.svg" alt="Hospital Building" />
          </div>
        </div>
      </section>

      <PopularHospitals />
      
      <WhyChooseUs />
    </div>
  );
};

export default Home;
