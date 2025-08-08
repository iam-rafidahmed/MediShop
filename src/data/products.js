// Centralized product data for MediShop
// This file contains all products from all categories for search functionality

export const getAllProducts = () => {
  try {
    // Combine products from all category components
    const products = [
      // Top Picks for You - Popular Medicines (from Home.jsx)
      {id: 'top1', name: 'Sergel 20mg', category: 'Top Picks', description: 'acid reflux relief', price: 70.00, image: '/images/products/sergel.otc1.webp'},
      {id: 'top2', name: 'Napa Extra 500mg', category: 'Top Picks', description: 'fever pain relief', price: 30.00, image: '/images/products/napaextra.otc6.webp'},
      {id: 'top3', name: 'losectil 20mg', category: 'Top Picks', description: 'gastric acid control', price: 50.00, image: '/images/products/otc9.webp'},
      {id: 'top4', name: 'Napa 60ml', category: 'Top Picks', description: 'children fever relief', price: 35.00, image: '/images/products/otc12.webp'},
      {id: 'top5', name: 'Xorel 20 mg', category: 'Top Picks', description: 'bacterial infection treatment', price: 40.00, image: '/images/products/otc14.webp'},
      {id: 'top6', name: 'Montex10 mg', category: 'Top Picks', description: 'allergy asthma control', price: 160.00, image: '/images/products/Montex10 mg.webp'},
      {id: 'top7', name: 'Omidon 10mg', category: 'Top Picks', description: 'stomach acid relief', price: 52.50, image: '/images/products/omidon.otc5.webp'},
      {id: 'top8', name: 'Lijenta 5mg', category: 'Top Picks', description: 'allergy symptom relief', price: 330.00, image: '/images/products/p9.webp'},
      {id: 'top9', name: 'Maxpro 20mg', category: 'Top Picks', description: 'GERD acid relief', price: 45.00, image: '/images/products/maxpro.otc2.webp'},
      {id: 'top10', name: 'Monas 10mg', category: 'Top Picks', description: 'asthma allergy relief', price: 180.00, image: '/images/products/monas.otc3.webp'},
      {id: 'top11', name: 'Seclo 20mg', category: 'Top Picks', description: 'stomach acid reduction', price: 55.00, image: '/images/products/seclo.otc7.webp'},
      {id: 'top12', name: 'Deslor 5 mg', category: 'Top Picks', description: 'allergic rhinitis relief', price: 50.00, image: '/images/products/otc13.webp'},

      // Doctor Recommended Medicines (from Home.jsx)
      {id: 'doc1', name: 'Ecosprin 75mg', category: 'Doctor Recommended', description: 'heart disease prevention', price: 8.00, image: '/images/products/p1.webp'},
      {id: 'doc2', name: 'Napa Extend', category: 'Doctor Recommended', description: 'long-lasting pain relief', price: 24.00, image: '/images/products/napaext.otc4.webp'},
      {id: 'doc3', name: 'Ace XR665 mg', category: 'Doctor Recommended', description: 'arthritis pain relief', price: 20.00, image: '/images/products/ace-xr-665-mg.webp'},
      {id: 'doc4', name: 'Azithromycin 500', category: 'Doctor Recommended', description: 'respiratory infection treatment', price: 240.00, image: '/images/products/Azithromycin.webp'},

      // OTC Medicine Products (from OTCMedicineCategory.jsx) - Removed duplicates that are in Top Picks
      {id: 'otc8', name: 'Alatrol 10mg', category: 'OTC Medicine', description: 'diarrhea relief medication', price: 30.10, image: '/images/products/otc8.webp'},

      // Prescribe Medicine Products (from PrescribeMedicineCategory.jsx) - Removed Ecosprin duplicate
      {id: 'pres2', name: 'Bizoran 5mg+20mg', category: 'Prescribe Medicine', description: 'blood pressure control', price: 180.09, image: '/images/products/p2.webp'},
      {id: 'pres3', name: 'Thyrox 50mcg', category: 'Prescribe Medicine', description: 'cholesterol lowering medication', price: 66.00, image: '/images/products/p3.webp'},
      {id: 'pres4', name: 'Uromax 0.4mg', category: 'Prescribe Medicine', description: 'thyroid hormone replacement', price: 60.00, image: '/images/products/p4.webp'},
      {id: 'pres5', name: 'Comet 500mg', category: 'Prescribe Medicine', description: 'antidepressant medication required', price: 50.00, image: '/images/products/p5.webp'},
      {id: 'pres6', name: 'Uromax-D 0.4mg+0.5mg', category: 'Prescribe Medicine', description: 'hypertension treatment support', price: 115.00, image: '/images/products/p6.webp'},
      {id: 'pres7', name: 'Febustat 40mg', category: 'Prescribe Medicine', description: 'blood pressure management', price: 130.00, image: '/images/products/p7.webp'},
      {id: 'pres8', name: 'Metacard MR 35mg', category: 'Prescribe Medicine', description: 'depression treatment ssri', price: 140.00, image: '/images/products/p8.webp'},

      // Personal Care Products (from PersonalCareCategory.jsx)
      {id: 'care1', name: 'Select-Plus', category: 'Personal Care', description: 'Gentle pH-balanced facial cleanser for all skin types', price: 200.00, image: '/images/products/pc1.webp'},
      {id: 'care2', name: 'Isabgul Plus', category: 'Personal Care', description: '24-hour hydration body lotion with natural oils', price: 495.00, image: '/images/products/pc2.webp'},
      {id: 'care3', name: 'Sunmask', category: 'Personal Care', description: 'Advanced formula with retinol and vitamin C for youthful skin', price: 250.00, image: '/images/products/pc3.webp'},
      {id: 'care4', name: 'Absorbent Cotton Wool', category: 'Personal Care', description: 'Broad-spectrum protection with lightweight, non-greasy formula', price: 25.00, image: '/images/products/pc4.webp'},
      {id: 'care5', name: 'Moov Cream Indian', category: 'Personal Care', description: 'Intensive moisturizing hand cream with shea butter', price: 280.00, image: '/images/products/pc5.webp'},
      {id: 'care6', name: 'Acne-Aid', category: 'Personal Care', description: 'Nourishing body wash with natural extracts and vitamins', price: 310.00, image: '/images/products/pc6.webp'},
      {id: 'care7', name: 'Moov Spray Indian', category: 'Personal Care', description: 'Hydrating lip balm with SPF 15 protection', price: 522.00, image: '/images/products/pc7.webp'},

      // Wellness Products (from WellnessCategory.jsx)
      {id: 'well1', name: 'Savlon Face Mask', category: 'Wellness', description: 'Complete daily multivitamin with minerals', price: 320.00, image: '/images/products/w1.webp'},
      {id: 'well2', name: 'AXE Brand Universal Oil', category: 'Wellness', description: 'High-potency omega-3 fatty acids supplement', price: 410.00, image: '/images/products/w2.webp'},
      {id: 'well3', name: 'One Time Bandage', category: 'Wellness', description: 'High-strength vitamin D3 for bone health and immunity', price: 2.00, image: '/images/products/w3.webp'},
      {id: 'well4', name: 'N95 Mask', category: 'Wellness', description: 'Advanced probiotic formula for digestive health', price: 45.00, image: '/images/products/w4.webp'},
      {id: 'well5', name: 'Odessy', category: 'Wellness', description: 'Hydrolyzed collagen for skin, hair, and joint health', price: 170.00, image: '/images/products/w5.webp'},
      {id: 'well6', name: 'ProDentalB Breath Spray', category: 'Wellness', description: 'Essential mineral for muscle function and relaxation', price: 255.00, image: '/images/products/w6.webp'},

      // Herbal Medicine Products (from HerbalMedicineCategory.jsx)
      {id: 'herb1', name: 'Adovas200 ml', category: 'Herbal Medicine', description: 'Natural blood purifier and immunity booster from neem leaves', price: 110.00, image: '/images/products/he1.webp'},
      {id: 'herb2', name: 'Devas100 ml', category: 'Herbal Medicine', description: 'Pure organic turmeric powder for natural anti-inflammatory benefits', price: 70.00, image: '/images/products/he2.webp'},
      {id: 'herb3', name: 'Spirucap 500mg', category: 'Herbal Medicine', description: 'Pure aloe vera gel for skin health and digestive support', price: 240.00, image: '/images/products/he3.webp'},
      {id: 'herb4', name: 'Safi 450ml', category: 'Herbal Medicine', description: 'Natural ginger tea for digestion and immune support', price: 230.00, image: '/images/products/he4.webp'},
      {id: 'herb5', name: 'AmCivit100 ml', category: 'Herbal Medicine', description: 'Natural honey and lemon blend for throat and immunity', price: 60.00, image: '/images/products/he5.webp'},
      {id: 'herb6', name: 'Alocap 100mg', category: 'Herbal Medicine', description: 'Sacred basil leaves for respiratory health and stress relief', price: 80.00, image: '/images/products/he6.webp'},
      {id: 'herb7', name: 'Alkuli 450ml', category: 'Herbal Medicine', description: 'Indian gooseberry powder rich in vitamin C and antioxidants', price: 180.00, image: '/images/products/he7.webp'},

      // Supplement Products (from SupplementCategory.jsx)
      {id: 'supp1', name: 'Karkuma Joint Guard', category: 'Supplement', description: 'High-strength vitamin C supplement for immune support', price: 2170.00, image: '/images/products/s1.webp'},
      {id: 'supp2', name: 'Karkuma Organic Healthy Gut', category: 'Supplement', description: 'Calcium supplement with vitamin D3 for bone health', price: 800.00, image: '/images/products/s2.webp'},
      {id: 'supp3', name: 'Karkuma Organic Honey', category: 'Supplement', description: 'Iron supplement for energy and blood health', price: 75.00, image: '/images/products/s3.webp'},
      {id: 'supp4', name: 'Zinc Supplement', category: 'Supplement', description: 'Zinc supplement for immune system and wound healing', price: 180.00, image: '/images/products/s4.webp'},
      {id: 'supp5', name: 'Immune 24 Hour +', category: 'Supplement', description: 'Folic acid supplement for cell growth and development', price: 180.00, image: '/images/products/s5.webp'},

      // Dental Care Products (from DentalCareCategory.jsx)
      {id: 'dent1', name: 'Orostar Plus250 ml', category: 'Dental Care', description: 'Rechargeable sonic toothbrush with multiple cleaning modes', price: 150.00, image: '/images/products/den1.webp'},
      {id: 'dent2', name: 'Mediplus DS', category: 'Dental Care', description: 'Specialized toothpaste for sensitive teeth and gums', price: 135.00, image: '/images/products/den2.webp'},
      {id: 'dent3', name: 'Sensodyne Fresh Gel', category: 'Dental Care', description: 'Pack of 5 mint-flavored dental floss spools', price: 200.00, image: '/images/products/den3.webp'},
      {id: 'dent4', name: 'Sensodyne Sensitive Toothbrush', category: 'Dental Care', description: 'Rechargeable oral irrigator for deep cleaning between teeth', price: 110.00, image: '/images/products/den4.webp'},
      {id: 'dent5', name: 'Dental Floss (Toothpick)', category: 'Dental Care', description: 'Professional-grade teeth whitening system for home use', price: 135.00, image: '/images/products/den5.webp'},
      {id: 'dent6', name: 'Betadine', category: 'Dental Care', description: 'Alcohol-free antiseptic mouthwash for gum health', price: 50.00, image: '/images/products/den6.webp'},
      {id: 'dent7', name: 'Colgate Charcoal Clean Toothpaste', category: 'Dental Care', description: 'Strong-hold denture adhesive cream for all-day comfort', price: 350.00, image: '/images/products/den7.webp'},
      {id: 'dent8', name: 'Colgate Kids 0-2 yrs Premium Toothpaste', category: 'Dental Care', description: 'Dental wax for braces and orthodontic appliances', price: 320.00, image: '/images/products/den8.webp'},

      // Baby Care Products (from BabyCareCategory.jsx)
      {id: 'baby1', name: 'Baby Wipes', category: 'Baby Care', description: 'Gentle moisturizing lotion for sensitive baby skin', price: 235.00, image: '/images/products/b1.webp'},
      {id: 'baby2', name: 'Savlon Baby Wipes', category: 'Baby Care', description: 'Ultra-absorbent diapers with wetness indicator', price: 235.00, image: '/images/products/b2.webp'},
      {id: 'baby3', name: 'Savlon Baby Wipes (AntiBacterial)', category: 'Baby Care', description: 'Alcohol-free gentle wipes for sensitive skin, pack of 80', price: 285.00, image: '/images/products/b3.webp'},
      {id: 'baby4', name: 'NeoCare Diaper Belt', category: 'Baby Care', description: 'Tear-free gentle shampoo for babies and toddlers', price: 1200.00, image: '/images/products/b4.webp'},
      {id: 'baby5', name: 'Lactogen 350 gm', category: 'Baby Care', description: 'Talc-free powder to prevent diaper rash and irritation', price: 67.00, image: '/images/products/b5.webp'},
      {id: 'baby6', name: 'Neocare Pants', category: 'Baby Care', description: 'Soothing gel for teething discomfort and pain relief', price: 120.00, image: '/images/products/b6.webp'},
      {id: 'baby7', name: 'Meril Baby Gel Toothpaste', category: 'Baby Care', description: 'Digital thermometer designed for infants with fever alert', price: 10.00, image: '/images/products/b7.png'},
      {id: 'baby8', name: 'NAN OPTI Pro', category: 'Baby Care', description: 'Gentle nasal aspirator for clearing baby\'s congestion', price: 900.00, image: '/images/products/b8.jpg'},
      {id: 'baby9', name: 'NAN OPTI Pro 1', category: 'Baby Care', description: 'Soft-bristled toothbrush designed for baby\'s first teeth', price: 900.00, image: '/images/products/b9.jpg'},

      // Health Hygiene Products (from HealthHygieneCategory.jsx)
      {id: 'hyg1', name: 'Sepnil Hand Sanitizer', category: 'Health Hygiene', description: 'Instant Hand Sanitizer with Moisturizer (200ml)', price: 250.00, image: '/images/products/hh1.jpg'},
      {id: 'hyg2', name: 'Dettol Liquid', category: 'Health Hygiene', description: 'Antiseptic Liquid for cuts and wounds (500ml)', price: 60.00, image: '/images/products/hh2.webp'},
      {id: 'hyg3', name: 'Godrej AER Power', category: 'Health Hygiene', description: 'Povidone-Iodine Antiseptic Solution (100ml)', price: 75.00, image: '/images/products/hh3.webp'},
      {id: 'hyg4', name: 'Sparkbliss Aquacool', category: 'Health Hygiene', description: 'Fever and Pain Relief Tablets (10 tablets/strip)', price: 210.00, image: '/images/products/hh4.webp'},
      {id: 'hyg5', name: 'Sparkbliss Lavender', category: 'Health Hygiene', description: 'Immune Support Supplement (30 tablets/bottle)', price: 150.00, image: '/images/products/hh5.png'},

      // Healthcare Devices Products (from HealthcareDevicesCategory.jsx)
      {id: 'device1', name: 'Thermometer', category: 'Healthcare Devices', description: 'Accurate blood pressure monitor with large display', price: 265.00, image: '/images/products/h1.webp'},
      {id: 'device2', name: 'Digital Weight Machine', category: 'Healthcare Devices', description: 'Portable nebulizer for respiratory medication delivery', price: 1400.00, image: '/images/products/h2.webp'},
      {id: 'device3', name: 'Blood Pressure Machine Digital', category: 'Healthcare Devices', description: 'Fast-reading digital thermometer with fever alert', price: 2500.00, image: '/images/products/h3.webp'},
      {id: 'device4', name: 'Blood Pressure Machine', category: 'Healthcare Devices', description: 'Fingertip pulse oximeter for measuring blood oxygen levels', price: 3450.00, image: '/images/products/h4.webp'},
      {id: 'device5', name: 'Blood Pressure Machine Digital', category: 'Healthcare Devices', description: 'Transcutaneous electrical nerve stimulation device for pain relief', price: 2500.00, image: '/images/products/h5.webp'},
      {id: 'device6', name: 'Pulse Oximeter', category: 'Healthcare Devices', description: 'High-precision digital scale with body composition analysis', price: 1275.00, image: '/images/products/h6.webp'},
      {id: 'device7', name: 'Nebulizer', category: 'Healthcare Devices', description: 'Rechargeable digital hearing aid with noise reduction', price: 3000.00, image: '/images/products/h7.webp'},
      {id: 'device8', name: 'Pulse Oximeter', category: 'Healthcare Devices', description: 'Complete blood glucose monitoring system with test strips', price: 1600.00, image: '/images/products/h8.webp'},

      // Diabetic Care Products (from DiabeticCareCategory.jsx)
      {id: 'diab1', name: 'GlucoLeader Enhance Red Test Strip', category: 'Diabetic Care', description: 'Advanced Blood Glucose Monitoring System', price: 462.00, image: '/images/products/db1.webp'},
      {id: 'diab2', name: 'VivaChek Ino Test Strip', category: 'Diabetic Care', description: 'Special compression socks for diabetic patients', price: 1000.00, image: '/images/products/db2.webp'},
      {id: 'diab3', name: 'GlucoLeader Enhance Blue Test Strip', category: 'Diabetic Care', description: 'Oral diabetes medicine to control blood sugar levels', price: 412.00, image: '/images/products/db3.webp'},
      {id: 'diab4', name: 'On Call Plus Test Strip', category: 'Diabetic Care', description: 'Ultra-fine needles for insulin delivery', price: 1000.00, image: '/images/products/db4.webp'},
      {id: 'diab5', name: 'Insulin Carry Bag', category: 'Diabetic Care', description: 'Specialized moisturizing cream for diabetic foot care', price: 250.00, image: '/images/products/db5.webp'},
      {id: 'diab6', name: 'Bionime Blood Glucose Meter', category: 'Diabetic Care', description: 'Compatible test strips for glucose monitors', price: 2000.00, image: '/images/products/db6.webp'},
      {id: 'diab7', name: 'G1 Advance', category: 'Diabetic Care', description: 'Portable case to keep insulin at optimal temperature', price: 1000.50, image: '/images/products/db7.webp'},
      {id: 'diab8', name: 'Contour Plus Meter', category: 'Diabetic Care', description: 'Specialized vitamin supplement for diabetic patients', price: 1650.00, image: '/images/products/db8.webp'},
      {id: 'diab9', name: 'GlucoLeader Enhance Red Test Strip', category: 'Diabetic Care', description: 'Advanced Blood Glucose Monitoring System', price: 462.00, image: '/images/products/db9.webp'},
      {id: 'diab10', name: 'VivaChek Ino Test Strip', category: 'Diabetic Care', description: 'Special compression socks for diabetic patients', price: 1000.00, image: '/images/products/db10.webp'},
      {id: 'diab11', name: 'GlucoLeader Enhance Blue Test Strip', category: 'Diabetic Care', description: 'Oral diabetes medicine to control blood sugar levels', price: 412.00, image: '/images/products/db11.webp'},
      {id: 'diab12', name: 'On Call Plus Test Strip', category: 'Diabetic Care', description: 'Ultra-fine needles for insulin delivery', price: 1000.00, image: '/images/products/db12.webp'},

      // First Aid Products (from FirstAidCategory.jsx)
      {id: 'aid1', name: 'First Aid Kit', category: 'First Aid', description: 'Complete emergency kit with essential medical supplies', price: 799.99, image: '/images/products/product-1.jpg'},
      {id: 'aid2', name: 'Antiseptic Solution', category: 'First Aid', description: 'Medical-grade antiseptic for wound cleaning', price: 249.99, image: '/images/products/product-2.jpg'},
      {id: 'aid3', name: 'Bandage Roll', category: 'First Aid', description: 'Sterile gauze bandage roll for wound dressing', price: 149.99, image: '/images/products/product-3.jpg'},
      {id: 'aid4', name: 'Ice Pack', category: 'First Aid', description: 'Reusable gel ice pack for injury treatment', price: 199.99, image: '/images/products/product-4.jpg'},
      {id: 'aid5', name: 'Medical Tape', category: 'First Aid', description: 'Hypoallergenic medical tape for secure bandaging', price: 89.99, image: '/images/products/product-1.jpg'},
      {id: 'aid6', name: 'Scissors', category: 'First Aid', description: 'Medical-grade scissors for first aid procedures', price: 179.99, image: '/images/products/product-2.jpg'},
      {id: 'aid7', name: 'Thermometer', category: 'First Aid', description: 'Digital thermometer for accurate temperature reading', price: 399.99, image: '/images/products/product-3.jpg'},

      // Elderly Care Products (from ElderlyCareCategory.jsx)
      {id: 'elder1', name: 'Walking Cane', category: 'Elderly Care', description: 'Adjustable height walking cane with comfortable grip', price: 899.99, image: '/images/products/product-1.jpg'},
      {id: 'elder2', name: 'Pill Organizer', category: 'Elderly Care', description: 'Weekly pill organizer with AM/PM compartments', price: 349.99, image: '/images/products/product-2.jpg'},
      {id: 'elder3', name: 'Blood Pressure Monitor', category: 'Elderly Care', description: 'Digital automatic blood pressure monitor for home use', price: 1299.99, image: '/images/products/product-3.jpg'},
      {id: 'elder4', name: 'Grab Bar', category: 'Elderly Care', description: 'Safety grab bar for bathroom and shower installation', price: 599.99, image: '/images/products/product-4.jpg'},
      {id: 'elder5', name: 'Reading Glasses', category: 'Elderly Care', description: 'Comfortable reading glasses with anti-glare coating', price: 249.99, image: '/images/products/product-1.jpg'},
      {id: 'elder6', name: 'Joint Support Brace', category: 'Elderly Care', description: 'Adjustable knee support brace for arthritis relief', price: 449.99, image: '/images/products/product-2.jpg'},
      {id: 'elder7', name: 'Emergency Alert System', category: 'Elderly Care', description: 'Personal emergency alert pendant for safety', price: 1999.99, image: '/images/products/product-3.jpg'}
    ];
    
    return products;
  } catch (error) {
    console.error("Error getting all products:", error);
    return [];
  }
}; 