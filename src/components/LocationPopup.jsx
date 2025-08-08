import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup as LeafletPopup, useMapEvents, CircleMarker } from 'react-leaflet';
import { FaTimes, FaMapMarkerAlt, FaCheck, FaStore } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './LocationPopup.css';

// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom user location icon - light blue
const userIcon = new L.Icon({
  iconUrl: '/images/user-location.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

// Custom store icon - green
const storeIcon = new L.Icon({
  iconUrl: '/images/pharmacy-icon.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

// Popular areas in Chittagong with Medishop partner stores
const popularAreas = [
  { 
    id: 1, 
    name: 'Oxyzen', 
    position: [22.3475, 91.8123],
    address: 'Oxygen More, Chittagong'
  },
  { 
    id: 2, 
    name: 'Agrabad', 
    position: [22.3231, 91.8115],
    address: 'Agrabad Commercial Area, Chittagong'
  },
  { 
    id: 3, 
    name: 'Chawkbazar', 
    position: [22.3584, 91.8318],
    address: 'Chawkbazar Area, Chittagong'
  },
  { 
    id: 4, 
    name: 'Halishahar', 
    position: [22.3361, 91.7851],
    address: 'Halishahar Housing Estate, Chittagong'
  },
  { 
    id: 5, 
    name: 'Kotwali', 
    position: [22.3375, 91.8411],
    address: 'Kotwali Area, Chittagong'
  },
  { 
    id: 6, 
    name: 'Bahaddarhat', 
    position: [22.3594, 91.8432],
    address: 'Bahaddarhat Circle, Chittagong'
  },
  { 
    id: 7, 
    name: 'Khulshi', 
    position: [22.3594, 91.8055],
    address: 'Khulshi Hill Area, Chittagong'
  }
];

// Map click handler component
function MapClickHandler({ setSelectedLocation }) {
  useMapEvents({
    click: (e) => {
      setSelectedLocation([e.latlng.lat, e.latlng.lng]);
    }
  });
  return null;
}

const LocationPopup = ({ onClose }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationName, setLocationName] = useState('');
  // Chittagong city center coordinates
  const [mapCenter] = useState([22.3569, 91.7832]);

  useEffect(() => {
    // Try to get saved location from localStorage
    const savedLocation = localStorage.getItem('medishopLocation');
    if (savedLocation) {
      const { location, name } = JSON.parse(savedLocation);
      setSelectedLocation(location);
      setLocationName(name);
    }

    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          if (!savedLocation) {
            setSelectedLocation([latitude, longitude]);
            setLocationName('Your Current Location');
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const handleLocationSelect = (location, name) => {
    setSelectedLocation(location);
    setLocationName(name || 'Selected Location');
  };

  const handleMapClick = (coords) => {
    handleLocationSelect(coords, `Location at ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`);
  };

  const saveLocation = () => {
    if (selectedLocation) {
      localStorage.setItem('medishopLocation', JSON.stringify({
        location: selectedLocation,
        name: locationName
      }));
      onClose();
    }
  };

  return (
    <div className="location-popup-overlay">
      <div className="location-popup-container location-popup-light">
        <div className="location-popup-header">
          <h2 className="location-popup-title">
            <FaMapMarkerAlt className="location-title-icon" />
            Select Your Location
          </h2>
          <button 
            className="location-close-button"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="location-popup-content-full">
          <div className="selected-location-info">
            <FaMapMarkerAlt className="location-icon" />
            <span>{locationName || 'Select a location on the map'}</span>
          </div>
          
          <div className="location-map-container">
            <MapContainer 
              center={mapCenter} 
              zoom={13} 
              scrollWheelZoom={true}
              style={{ height: '400px', width: '100%' }}
            >
              {/* Map click handler */}
              <MapClickHandler setSelectedLocation={handleMapClick} />
              
              {/* Light theme map tiles */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {/* User location marker */}
              {userLocation && (
                <Marker 
                  position={userLocation} 
                  icon={userIcon}
                  eventHandlers={{
                    click: () => handleLocationSelect(userLocation, 'Your Current Location')
                  }}
                >
                  <LeafletPopup>Your Current Location</LeafletPopup>
                </Marker>
              )}
              
              {/* Selected location - no visible marker if it's not the user location */}
              {selectedLocation && !userLocation?.equals?.(selectedLocation) && (
                <Marker 
                  position={selectedLocation} 
                  opacity={0}
                >
                  <LeafletPopup>Selected Delivery Location</LeafletPopup>
                </Marker>
              )}
              
              {/* Popular areas with Medishop partner stores */}
              {popularAreas.map(area => (
                <React.Fragment key={area.id}>
                  <Marker 
                    position={area.position} 
                    icon={storeIcon}
                    eventHandlers={{
                      click: () => handleLocationSelect(area.position, area.name)
                    }}
                  >
                    <LeafletPopup>
                      <div className="store-popup">
                        <FaStore className="store-icon" />
                        <div>
                          <strong>{area.name}</strong><br />
                          <small>{area.address}</small><br />
                          <span className="store-status">Medishop Partner Store Available</span>
                        </div>
                      </div>
                    </LeafletPopup>
                  </Marker>
                  <CircleMarker 
                    center={area.position}
                    pathOptions={{ 
                      color: '#4caf50',
                      fillColor: '#4caf50',
                      fillOpacity: 0.2
                    }}
                    radius={50}
                  />
                </React.Fragment>
              ))}
            </MapContainer>
          </div>
        </div>
        
        <div className="location-popup-footer">
          <button 
            className="select-button"
            disabled={!selectedLocation} 
            onClick={saveLocation}
          >
            <FaCheck className="button-icon" /> Confirm Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup; 