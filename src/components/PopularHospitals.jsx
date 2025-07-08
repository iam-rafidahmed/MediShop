import React, { useState } from 'react';
import HospitalCard from './HospitalCard';
import './PopularHospitals.css';

const PopularHospitals = () => {
  const [locationError, setLocationError] = useState('');
  const placeholderImage = '/images/hospitals/placeholder.svg';
  
  const hospitals = [
    {
      id: 1,
      name: 'Chittagong Medical College Hospital',
      location: 'Chittagong Medical College Rd, Chattogram',
      image: placeholderImage,
      coordinates: '22.3579,91.8311' // Example coordinates
    },
    {
      id: 2,
      name: 'Chittagong General Hospital',
      location: 'Anderkilla, Chattogram',
      image: placeholderImage,
      coordinates: '22.3411,91.8379' // Example coordinates
    },
    {
      id: 3,
      name: 'Max Hospital & Diagnostic',
      location: 'Mehedibag, Chattogram',
      image: placeholderImage,
      coordinates: '22.3489,91.8354' // Example coordinates
    },
    {
      id: 4,
      name: 'Imperial Hospital Ltd',
      location: 'Zakir Hossain Rd, Chattogram',
      image: placeholderImage,
      coordinates: '22.3601,91.8274' // Example coordinates
    }
  ];

  const getDirectionsToHospital = (hospitalName, hospitalCoordinates) => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      return;
    }

    setLocationError('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const googleMapsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${hospitalCoordinates}`;
        window.open(googleMapsUrl, '_blank');
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError('Please allow location access to get directions');
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError('Location information is unavailable');
            break;
          case error.TIMEOUT:
            setLocationError('Location request timed out');
            break;
          default:
            setLocationError('An unknown error occurred');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  };

  return (
    <div className="popular-hospitals">
      <h2 className="section-title">Popular Hospitals in Chittagong</h2>
      <div className="hospitals-container">
        {hospitals.map(hospital => (
          <div key={hospital.id} className="hospital-section">
            <HospitalCard
              name={hospital.name}
              location={hospital.location}
              image={hospital.image}
              coordinates={hospital.coordinates}
            />
          </div>
        ))}
      </div>
      {locationError && (
        <div className="location-error" role="alert">
          {locationError}
        </div>
      )}
    </div>
  );
};

export default PopularHospitals; 