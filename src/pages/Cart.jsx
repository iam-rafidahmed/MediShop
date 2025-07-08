import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  


  return (
    <div className="cart-page">
      <div className="cart-header">
        <button className="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </button>
        <h1>Cart Item</h1>
      </div>


      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/products" className="btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  
                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        −
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="item-price">
                      {item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
                <button 
                  className="remove-item" 
                  onClick={() => removeItem(item.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
            </div>
            <div className="cart-total">
              <span>Cart Total:</span>
              <span className="total-amount">{cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;