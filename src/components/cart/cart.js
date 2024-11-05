import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import './cart.css'; 
const Cart = () => {
    const cartItems = useSelector(state => state.cart); 
    const dispatch = useDispatch();
    const [orderConfirmed, setOrderConfirmed] = useState(false); 

    const handleRemoveFromCart = (index) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { index } }); 
    };

    const handlePlaceOrder = () => {
        dispatch({ type: 'CLEAR_CART' }); 
        setOrderConfirmed(true); 
    };

    const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2); 

    return (
        <div className="cart-container">
            <div className="card">
            <h1 className="cart-title">Your Basket</h1>
            {orderConfirmed ? (
                <p>Thank you for your order!</p>
            ) : cartItems.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <div>
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div className="cart-item" key={index}> 
                                <img src={item.image} alt={item.name} />
                                <span>{item.name} - ${item.price.toFixed(2)}</span>
                                <FontAwesomeIcon 
                                    icon={faTrash} 
                                    onClick={() => handleRemoveFromCart(index)} 
                                    style={{ cursor: 'pointer', marginRight: '10px' }} 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="total-row">
                        <div className="cart-total">Total: ${total}</div>
                        <button onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
                    </div>
                    </div>
               
            )}
          </div>
        </div>
    );
};

export default Cart;
