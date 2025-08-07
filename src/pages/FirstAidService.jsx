import React from 'react';
import { Link } from 'react-router-dom';
import './FirstAidService.css';

const FirstAidService = () => {
  return (
    <div className="first-aid-service-container">
      <div className="first-aid-service-content">
        {/* Header Image */}
        <div className="first-aid-header">
          <img 
            src="/images/promotions/Medical prescription-pana.svg" 
            alt="Medical Prescription" 
            className="first-aid-image"
          />
          <h1 className="first-aid-title">
            🩹 প্রাথমিক চিকিৎসা সেবা (First Aid Services)
          </h1>
        </div>

        {/* Main Content */}
        <div className="first-aid-content">
          
          <p className="first-aid-intro">
            দুর্ঘটনা ঘটে হঠাৎ — কিন্তু প্রস্তুতি থাকলে বিপদ কাটিয়ে ওঠা যায় সহজেই। জানুন জরুরি পরিস্থিতিতে প্রাথমিক করণীয়।
          </p>

          {/* Emergency Sections */}
          <div className="emergency-sections">
            {/* Burns */}
            <div className="emergency-section">
              <h2 className="emergency-title">🔥 পুড়ে যাওয়া:</h2>
              <ul className="emergency-list">
                <li>ঠান্ডা পানির নিচে ১০-১৫ মিনিট রাখুন</li>
                <li>ক্ষত স্থানে কোনো ধরনের তেল/পাউডার ব্যবহার করবেন না</li>
                <li>পরিষ্কার কাপড় দিয়ে ঢেকে দিন</li>
              </ul>
            </div>

            {/* Bleeding */}
            <div className="emergency-section">
              <h2 className="emergency-title">🩸 রক্তপাত:</h2>
              <ul className="emergency-list">
                <li>পরিষ্কার কাপড় বা ব্যান্ডেজ দিয়ে চাপ দিন</li>
                <li>ক্ষতস্থানের উপরে হাত/পা উঁচু করে রাখুন</li>
                <li>অতিরিক্ত রক্তপাত হলে চিকিৎসকের পরামর্শ নিন</li>
              </ul>
            </div>

            {/* Bone Fracture */}
            <div className="emergency-section">
              <h2 className="emergency-title">💔 হাড় ভেঙে যাওয়া:</h2>
              <ul className="emergency-list">
                <li>ভাঙা স্থানে নাড়াচাড়া বন্ধ করুন</li>
                <li>কাঠ বা শক্ত বস্তু দিয়ে ফিট করে বেঁধে দিন</li>
                <li>যত দ্রুত সম্ভব হাসপাতালে নিন</li>
              </ul>
            </div>

            {/* Breathing Difficulty */}
            <div className="emergency-section">
              <h2 className="emergency-title">🫁 শ্বাসকষ্ট বা অজ্ঞান:</h2>
              <ul className="emergency-list">
                <li>রোগীকে সোজা করে শুইয়ে দিন</li>
                <li>কৃত্রিম শ্বাস (CPR) দিতে জানলে প্রয়োগ করুন</li>
                <li>জরুরি অ্যাম্বুলেন্স ডাকুন</li>
              </ul>
            </div>

            {/* Snake Bite */}
            <div className="emergency-section">
              <h2 className="emergency-title">🐍 সাপে কাটা:</h2>
              <ul className="emergency-list">
                <li>রোগীকে শান্ত রাখুন</li>
                <li>আক্রান্ত অঙ্গ নাড়াচাড়া বন্ধ করুন</li>
                <li>যত দ্রুত সম্ভব চিকিৎসা কেন্দ্রে নিন</li>
              </ul>
            </div>
          </div>

          {/* Warning */}
          <div className="warning-section">
            <h2 className="warning-title">📢 সতর্কতা:</h2>
            <p className="warning-text">
              প্রাথমিক চিকিৎসা শুধু অস্থায়ী সমাধান। সঠিক চিকিৎসার জন্য দ্রুত নিকটস্থ হাসপাতালে যোগাযোগ করুন।
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="back-to-home">
            <Link to="/" className="back-button">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAidService; 