import React from 'react';
import { Link } from 'react-router-dom';
import './EmergencyService.css';

const EmergencyService = () => {
  return (
    <div className="emergency-service-container">
      <div className="emergency-service-content">
        {/* Header Section */}
        <div className="emergency-header">
          <img
            src="/images/promotions/Emergency call-bro.svg"
            
            alt="Hospital Building"
            className="emergency-image"
          />
          <h1 className="emergency-title">
            🆘 জরুরি সেবা (Emergency Services)
          </h1>
        </div>

        {/* Main Content */}
        <div className="emergency-main-content">
          <p className="emergency-intro">
            "জরুরি মুহূর্তে এক সেকেন্ডের দেরিও হতে পারে বিপদজনক।"
            CTG Medishop আপনার পাশে আছে সংকটের সময় দ্রুত ও নির্ভরযোগ্য সহায়তা নিশ্চিত করতে।
          </p>

          <h2 className="section-heading">🔴 ১. জরুরি যোগাযোগ নম্বরসমূহ (Emergency Contacts)</h2>
          <div className="emergency-contacts-table">
            <table>
              <thead>
                <tr>
                  <th>বিভাগ</th>
                  <th>নাম্বার</th>
                  <th>বিবরণ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span role="img" aria-label="ambulance">🚑</span> অ্যাম্বুলেন্স</td>
                  <td>৯৯৯</td>
                  <td>জাতীয় অ্যাম্বুলেন্স সেবা। কোনো সময়ে কল করে অ্যাম্বুলেন্স ডাকা যাবে।</td>
                </tr>
                <tr>
                  <td><span role="img" aria-label="fire">🔥</span> ফায়ার সার্ভিস</td>
                  <td>৯৯৫</td>
                  <td>অগ্নিকাণ্ড, গ্যাস বিস্ফোরণ, বা যেকোনো ধ্বংসাত্মক ঘটনার জন্য।</td>
                </tr>
                <tr>
                  <td><span role="img" aria-label="police">👮‍♂️</span> পুলিশ</td>
                  <td>৯৯৯</td>
                  <td>দুর্ঘটনা, নিরাপত্তা সংকট বা অপরাধমূলক পরিস্থিতিতে জরুরি সাহায্য পেতে।</td>
                </tr>
                <tr>
                  <td><span role="img" aria-label="skull">☠️</span> বিষ নিয়ন্ত্রণ কেন্দ্র (Poison Control)</td>
                  <td>০১৭১১-xxxxxx</td>
                  <td>বিষক্রিয়া হলে তাৎক্ষণিক নির্দেশনা ও সহায়তা পেতে যোগাযোগ করুন।</td>
                </tr>
                <tr>
                  <td><span role="img" aria-label="brain">🧠</span> মানসিক স্বাস্থ্য সহায়তা (Mental Health)</td>
                  <td>১৬৩৪৭ (MIND Aid)</td>
                  <td>আত্মহত্যার চিন্তা, উদ্বেগ বা মানসিক চাপে থাকলে পরামর্শ নিন।</td>
                </tr>
                <tr>
                  <td><span role="img" aria-label="phone">📞</span> CTG Medishop হেল্পলাইন (ডেমো)</td>
                  <td>01300-xxxxxx</td>
                  <td>ওষুধ সংক্রান্ত জরুরি প্রশ্ন বা অর্ডার সহায়তার জন্য।</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="section-heading">🏥 ২. নিকটস্থ হাসপাতাল ও ক্লিনিক তথ্য</h2>
          <p>ব্যবহারকারীকে দ্রুত চিকিৎসা কেন্দ্রে পৌঁছাতে সাহায্য করার জন্য লোকেশন ভিত্তিক হসপিটাল সাজেশন খুব কার্যকর।</p>

          <h3 className="sub-heading">🏨 চট্টগ্রামে জরুরি হাসপাতাল:</h3>
          <ul className="hospital-list">
            <li>
              <strong>🏥 চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল (CMCH)</strong><br />
              ঠিকানা: চান্দগাঁও, চট্টগ্রাম<br />
              খোলা: ২৪ ঘণ্টা
            </li>
            <li>
              <strong>🏥 পার্কভিউ হাসপাতাল</strong><br />
              ঠিকানা: জি ই সি মোড়, চট্টগ্রাম<br />
              বিশেষজ্ঞ চিকিৎসা ও অ্যাম্বুলেন্স সেবা
            </li>
            <li>
              <strong>🏥 ম্যাক্স হসপিটাল & ডায়াগনস্টিক</strong><br />
              ঠিকানা: মুরাদপুর, চট্টগ্রাম<br />
              হটলাইন: ০১৭১৩-xxxxxx
            </li>
          </ul>
          <p className="map-note">🎯 Google Maps Embed করে ব্যবহারকারীকে লোকেশনসহ হাসপাতালের দিকনির্দেশনা দেখানো যাবে।</p>

          <h2 className="section-heading">🧰 ৩. জরুরি প্রস্তুতি ও করণীয় গাইড</h2>
          <p>অনেক সময় অ্যাম্বুলেন্স পৌঁছাতে কিছুটা সময় লাগে। তাই রোগীর অবস্থা অনুযায়ী তাৎক্ষণিক প্রাথমিক ব্যবস্থা গ্রহণ করতে হয়।</p>

          <h3 className="sub-heading">✅ হার্ট অ্যাটাক হলে করণীয়:</h3>
          <ul className="guide-list">
            <li>রোগীকে বসিয়ে দিন</li>
            <li>অতিরিক্ত চলাফেরা করতে দেবেন না</li>
            <li>অ্যাসপিরিন থাকলে (300mg) চিবিয়ে দিন (ডাক্তারের নির্দেশ অনুযায়ী)</li>
            <li>অ্যাম্বুলেন্স ডাকুন</li>
          </ul>

          <h3 className="sub-heading">✅ দুর্ঘটনা ঘটলে করণীয়:</h3>
          <ul className="guide-list">
            <li>রক্তপাত বন্ধ করতে চাপ প্রয়োগ করুন</li>
            <li>ভাঙা হাড় হলে নাড়াচাড়া না করে ফিক্স করে বেঁধে দিন</li>
            <li>শ্বাসকষ্ট হলে সোজা করে শুইয়ে দিন</li>
            <li>আশেপাশের মানুষকে সহায়তার জন্য ডাকুন</li>
          </ul>

          <h3 className="sub-heading">✅ গ্যাস/বিষক্রিয়া ঘটলে:</h3>
          <ul className="guide-list">
            <li>আক্রান্ত ব্যক্তিকে দ্রুত খোলা বাতাসে নিন</li>
            <li>তার কাপড় খুলে দিন যাতে শ্বাস নিতে সুবিধা হয়</li>
            <li>বমি করানোর চেষ্টা করবেন না</li>
            <li>বিষ নিয়ন্ত্রণ হেল্পলাইনে কল করুন</li>
          </ul>

          <h2 className="section-heading">📦 ৪. জরুরি ওষুধ ও সরঞ্জাম তালিকা (Emergency Medical Kit Suggestion)</h2>
          <p>প্রতিটি বাসা বা অফিসে একটি ছোট Emergency Medical Kit রাখা উচিত।</p>

          <h3 className="sub-heading">🧴 প্রস্তাবিত উপকরণ:</h3>
          <ul className="guide-list">
            <li>ব্যান্ডেজ, গজ, কটন</li>
            <li>অ্যান্টিসেপ্টিক লিকুইড (Dettol/Savlon)</li>
            <li>গ্লাভস ও মাস্ক</li>
            <li>Digital thermometer</li>
            <li>ORS (oral saline)</li>
            <li>পেইন রিলিভার (Paracetamol, Napa)</li>
            <li>ইনহেলার (যদি পরিবারের কেউ ব্যবহার করেন)</li>
            <li>ছোট কাটার জন্য Ointment (Bacitracin)</li>
            <li>CPR Mask (যদি থাকে)</li>
          </ul>

          <p className="emergency-footer-text">
            জরুরি সেবা শুধু ফোন নম্বর নয়, তা হলো দ্রুত সিদ্ধান্ত ও সাহায্য পাওয়ার সঠিক প্ল্যাটফর্ম।
            CTG Medishop আপনার জীবন রক্ষাকারী মুহূর্তে পাশে থাকবে — তথ্য, প্রস্তুতি, ও সহায়তা নিয়ে।
          </p>

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

export default EmergencyService; 