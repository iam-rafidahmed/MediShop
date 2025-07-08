import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card card">
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`auth-tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <div className="login-form">
            <h2>Login to Your Account</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn">Login</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="register-form">
            <h2>Create an Account</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Create a password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm your password" />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn">Register</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login; 