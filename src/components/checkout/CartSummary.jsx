import React from 'react';
import { useCart } from '../../context/CartContext';

const CartSummary = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="cart-summary">
      <h2 className="cart-summary-title">Cart Summary</h2>
      
      {cartItems && cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-summary-item">
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">x {item.quantity}</span>
              </div>
              <span className="item-price">Tk {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="cart-summary-placeholder">
          Cart is empty
        </div>
      )}
      
      <div className="cart-total">
        <span>Total:</span>
        <span>Tk {cartTotal ? cartTotal.toFixed(2) : '0.00'}</span>
      </div>
    </div>
  );
};

export default CartSummary; 