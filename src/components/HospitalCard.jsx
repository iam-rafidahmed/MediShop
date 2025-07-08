import React, { useState } from 'react';
import './HospitalCard.css';

const HospitalCard = ({ name, image, location, coordinates }) => {
  const [locationError, setLocationError] = useState('');

  const getDirectionsToHospital = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      return;
    }

    setLocationError('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const googleMapsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${coordinates}`;
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
    <div className="hospital-card">
      <div className="hospital-logo">
        <img src={image} alt={`${name} logo`} />
      </div>
      <div className="hospital-info">
        <h3>{name}</h3>
        <p>{location}</p>
        <button
          className="directions-btn"
          onClick={getDirectionsToHospital}
          aria-label={`Get directions to ${name}`}
        >
          <span className="map-icon" role="img" aria-hidden="true">🗺️</span>
          <span className="btn-text">Get Directions</span>
        </button>
        {locationError && (
          <div className="location-error" role="alert">
            {locationError}
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalCard; 