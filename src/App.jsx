import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import SearchResults from './pages/SearchResults';
import OTCMedicineCategory from './components/categories/OTCMedicineCategory';
import PrescribeMedicineCategory from './components/categories/PrescribeMedicineCategory';
import DiabeticCareCategory from './components/categories/DiabeticCareCategory';
import HealthcareDevicesCategory from './components/categories/HealthcareDevicesCategory';
import DentalCareCategory from './components/categories/DentalCareCategory';
import BabyCareCategory from './components/categories/BabyCareCategory';
import HealthHygieneCategory from './components/categories/HealthHygieneCategory';
import FirstAidCategory from './components/categories/FirstAidCategory';
import PersonalCareCategory from './components/categories/PersonalCareCategory';
import WellnessCategory from './components/categories/WellnessCategory';
import SupplementCategory from './components/categories/SupplementCategory';
import ElderlyCareCategory from './components/categories/ElderlyCareCategory';
import HerbalMedicineCategory from './components/categories/HerbalMedicineCategory';
import FirstAidService from './pages/FirstAidService';
import EmergencyService from './pages/EmergencyService';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Home />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/category/otc-medicine" element={<OTCMedicineCategory />} />
                  <Route path="/category/prescribe-medicine" element={<PrescribeMedicineCategory />} />
                  <Route path="/category/diabetic-care" element={<DiabeticCareCategory />} />
                  <Route path="/category/healthcare-devices" element={<HealthcareDevicesCategory />} />
                  <Route path="/category/dental-care" element={<DentalCareCategory />} />
                  <Route path="/category/baby-care" element={<BabyCareCategory />} />
                  <Route path="/category/health-hygiene" element={<HealthHygieneCategory />} />
                  <Route path="/category/first-aid" element={<FirstAidCategory />} />
                  <Route path="/category/personal-care" element={<PersonalCareCategory />} />
                  <Route path="/category/wellness" element={<WellnessCategory />} />
                  <Route path="/category/herbal-medicine" element={<HerbalMedicineCategory />} />
                  <Route path="/category/supplement" element={<SupplementCategory />} />
                  <Route path="/category/elderly-care" element={<ElderlyCareCategory />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/first-aid-service" element={<FirstAidService />} />
                  <Route path="/emergency-service" element={<EmergencyService />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
