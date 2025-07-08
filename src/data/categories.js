export const categories = [
  {
    id: 1,
    name: "OTC-Medicine",
    image: "/images/products/product-1.jpg",
    products: [
      {
        id: "otc-1",
        name: "Napa Extra",
        price: 120.00,
        description: "Paracetamol 500mg + Caffeine 65mg (No Prescription Required)",
        image: "/images/products/product-1.jpg",
        category: "OTC-Medicine",
        stock: 150,
        manufacturer: "Beximco Pharmaceuticals",
        dosageForm: "Tablet",
        packSize: "10 tablets/strip"
      },
      {
        id: "otc-2",
        name: "Seclo",
        price: 85.00,
        description: "Omeprazole 20mg (No Prescription Required)",
        image: "/images/products/product-2.jpg",
        category: "OTC-Medicine",
        stock: 200,
        manufacturer: "Square Pharmaceuticals",
        dosageForm: "Capsule",
        packSize: "10 capsules/strip"
      },
      {
        id: "med-3",
        name: "Alatrol",
        price: 45.00,
        description: "Cetirizine Hydrochloride 10mg",
        image: "/images/products/product-3.jpg",
        category: "Medicines",
        stock: 180,
        manufacturer: "Square Pharmaceuticals",
        dosageForm: "Tablet",
        packSize: "10 tablets/strip"
      }
    ]
  },
  {
    id: 2,
    name: "Prescribe-Medicine",
    image: "/images/products/product-3.jpg",
    products: [
      {
        id: "pres-1",
        name: "Amoxicillin 500mg",
        price: 299.99,
        description: "Antibiotic for bacterial infections (Prescription Required)",
        image: "/images/products/product-3.jpg",
        category: "Prescribe-Medicine",
        stock: 80,
        manufacturer: "PharmaCare Labs",
        dosageForm: "Tablet",
        packSize: "10 tablets/strip"
      },
      {
        id: "pres-2",
        name: "Metformin 850mg",
        price: 199.99,
        description: "Diabetes medication (Prescription Required)",
        image: "/images/products/product-4.jpg",
        category: "Prescribe-Medicine",
        stock: 120,
        manufacturer: "DiabeCare Pharma",
        dosageForm: "Tablet",
        packSize: "15 tablets/strip"
      }
    ]
  },
  {
    id: 3,
    name: "Diabetic Care",
    image: "/images/products/product-2.jpg",
    products: [
      {
        id: "diab-1",
        name: "Glucometer Kit",
        price: 2500.00,
        description: "Digital Blood Glucose Monitoring System",
        image: "/images/products/product-2.jpg",
        category: "Diabetic Care",
        stock: 50,
        manufacturer: "Accu-Check",
        type: "Device",
        includes: "Meter, Lancing Device, Test Strips (10), User Manual"
      },
      {
        id: "diab-2",
        name: "Sugar Free Gold",
        price: 250.00,
        description: "Natural Sweetener for Diabetics",
        image: "/images/products/product-3.jpg",
        category: "Diabetic Care",
        stock: 100,
        manufacturer: "Zydus Wellness",
        type: "Sweetener",
        packSize: "100 tablets"
      }
    ]
  },
  {
    id: 4,
    name: "Healthcare Devices",
    image: "/images/products/product-3.jpg",
    products: [
      {
        id: "dev-1",
        name: "Digital BP Monitor",
        price: 3200.00,
        description: "Automatic Upper Arm Blood Pressure Monitor",
        image: "/images/products/product-1.jpg",
        category: "Healthcare Devices",
        stock: 30,
        manufacturer: "Omron",
        type: "Device",
        warranty: "1 Year"
      },
      {
        id: "dev-2",
        name: "Pulse Oximeter",
        price: 1800.00,
        description: "Digital Fingertip Pulse Oximeter",
        image: "/images/products/product-2.jpg",
        category: "Healthcare Devices",
        stock: 45,
        manufacturer: "Dr. Trust",
        type: "Device",
        warranty: "6 Months"
      }
    ]
  },
  {
    id: 5,
    name: "Dental Care",
    image: "/images/products/product-4.jpg",
    products: [
      {
        id: "dent-1",
        name: "Sensodyne Fresh Mint",
        price: 220.00,
        description: "Sensitive Teeth Toothpaste",
        image: "/images/products/product-4.jpg",
        category: "Dental Care",
        stock: 120,
        manufacturer: "GlaxoSmithKline",
        type: "Toothpaste",
        size: "75g"
      },
      {
        id: "dent-2",
        name: "Oral-B Pro Health",
        price: 180.00,
        description: "Medium Bristle Toothbrush",
        image: "/images/products/product-1.jpg",
        category: "Dental Care",
        stock: 200,
        manufacturer: "Oral-B",
        type: "Toothbrush"
      }
    ]
  },
  {
    id: 6,
    name: "Baby Care",
    image: "/images/products/product-1.jpg",
    products: [
      {
        id: "baby-1",
        name: "Johnson's Baby Lotion",
        price: 350.00,
        description: "Gentle Baby Moisturizing Lotion",
        image: "/images/products/product-2.jpg",
        category: "Baby Care",
        stock: 80,
        manufacturer: "Johnson & Johnson",
        type: "Skin Care",
        size: "200ml"
      },
      {
        id: "baby-2",
        name: "Pampers Premium",
        price: 1200.00,
        description: "Premium Care Diapers (Medium)",
        image: "/images/products/product-3.jpg",
        category: "Baby Care",
        stock: 150,
        manufacturer: "P&G",
        type: "Diapers",
        size: "Pack of 42"
      }
    ]
  },
  {
    id: 7,
    name: "Health & Hygiene",
    image: "/images/products/product-2.jpg",
    products: [
      {
        id: "hyg-1",
        name: "Dettol Hand Sanitizer",
        price: 160.00,
        description: "Instant Hand Sanitizer with Moisturizer",
        image: "/images/products/product-4.jpg",
        category: "Health & Hygiene",
        stock: 200,
        manufacturer: "Reckitt Benckiser",
        type: "Sanitizer",
        size: "200ml"
      },
      {
        id: "hyg-2",
        name: "Savlon Antiseptic",
        price: 140.00,
        description: "Antiseptic Liquid",
        image: "/images/products/product-1.jpg",
        category: "Health & Hygiene",
        stock: 180,
        manufacturer: "ICI",
        type: "Antiseptic",
        size: "500ml"
      }
    ]
  },
  {
    id: 8,
    name: "First Aid",
    image: "/images/products/product-3.jpg",
    products: [
      {
        id: "aid-1",
        name: "First Aid Kit",
        price: 850.00,
        description: "Complete Emergency First Aid Kit",
        image: "/images/products/product-2.jpg",
        category: "First Aid",
        stock: 40,
        manufacturer: "SafetyFirst",
        type: "Kit",
        items: "40+ Items"
      },
      {
        id: "aid-2",
        name: "Bandage Roll",
        price: 45.00,
        description: "Sterile Elastic Bandage",
        image: "/images/products/product-3.jpg",
        category: "First Aid",
        stock: 300,
        manufacturer: "3M",
        type: "Bandage",
        size: "4 inch x 4 meters"
      }
    ]
  }
];

export const getProductById = (productId) => {
  for (const category of categories) {
    const product = category.products.find(p => p.id === productId);
    if (product) return product;
  }
  return null;
};

export const getAllProducts = () => {
  return categories.reduce((allProducts, category) => {
    return [...allProducts, ...category.products];
  }, []);
};

export const getProductsByCategory = (categoryName) => {
  const category = categories.find(c => c.name === categoryName);
  return category ? category.products : [];
}; 