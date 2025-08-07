import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaHistory, FaSignOutAlt, FaHome } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const { currentUser, logout, isLoggedIn } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Check if user is logged in
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    // Load order history from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('medishopOrders') || '[]');
    const userOrders = savedOrders.filter(order => order.userId === currentUser?.id);
    setOrderHistory(userOrders);
  }, [isLoggedIn, currentUser, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!currentUser) {
    return (
      <div className="profile-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <FaUser />
          </div>
          <h1 className="profile-title">My Profile</h1>
        </div>

        <div className="profile-section">
          <h2 className="section-title">Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">
                <FaUser />
                <span>Full Name</span>
              </div>
              <div className="info-value">{currentUser.name}</div>
            </div>
            <div className="info-item">
              <div className="info-label">
                <FaEnvelope />
                <span>Email Address</span>
              </div>
              <div className="info-value">{currentUser.email}</div>
            </div>
            <div className="info-item">
              <div className="info-label">
                <FaHistory />
                <span>Member Since</span>
              </div>
              <div className="info-value">
                {new Date(currentUser.id).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2 className="section-title">Order History</h2>
          {orderHistory.length > 0 ? (
            <div className="order-history">
              {orderHistory.map((order, index) => (
                <div key={order.id || index} className="order-item">
                  <div className="order-header">
                    <div className="order-info">
                      <h3>Order #{order.id || `ORD-${index + 1}`}</h3>
                      <p className="order-date">
                        {new Date(order.date || Date.now()).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <div className="order-status">
                      <span className={`status-badge ${order.status || 'completed'}`}>
                        {order.status || 'Completed'}
                      </span>
                    </div>
                  </div>
                  <div className="order-items">
                    {order.items?.map((item, itemIndex) => (
                      <div key={itemIndex} className="order-item-detail">
                        <img 
                          src={item.image || '/images/products/product-1.jpg'} 
                          alt={item.name}
                          className="order-item-image"
                        />
                        <div className="order-item-info">
                          <h4>{item.name}</h4>
                          <p className="order-item-price">Tk {item.price?.toFixed(2)}</p>
                          <p className="order-item-quantity">Qty: {item.quantity || 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="order-total">
                    <strong>Total: Tk {order.total?.toFixed(2) || '0.00'}</strong>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-orders">
              <FaHistory className="no-orders-icon" />
              <h3>No Orders Yet</h3>
              <p>You haven't placed any orders yet. Start shopping to see your order history here!</p>
              <Link to="/" className="start-shopping-btn">
                <FaHome />
                Start Shopping
              </Link>
            </div>
          )}
        </div>

        <div className="profile-actions">
          <Link to="/" className="action-button home-button">
            <FaHome />
            Back to Home
          </Link>
          <button onClick={handleLogout} className="action-button logout-button">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 