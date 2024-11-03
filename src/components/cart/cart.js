import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing Font Awesome icon
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Importing the trash icon
import './cart.css'; // Ensure appropriate styles are defined

const Cart = () => {
    const cartItems = useSelector(state => state.cart); // Access cart items from Redux
    const dispatch = useDispatch();
    const [orderConfirmed, setOrderConfirmed] = useState(false); // State to check if the order is confirmed

    const handleRemoveFromCart = (index) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { index } }); // Pass item index to the action
    };

    const handlePlaceOrder = () => {
        // You can also dispatch an action to clear the cart if desired
        dispatch({ type: 'CLEAR_CART' }); // Clear cart logic
        setOrderConfirmed(true); // Set order confirmed state
    };

    const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2); // Calculate total

    return (
        <div className="cart-container">
            <div className="card">
            <h1 className="cart-title">Your Basket</h1>
            {orderConfirmed ? (
                <p>Thank you for your order!</p> // Display message after placing the order
            ) : cartItems.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <div>
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div className="cart-item" key={index}> {/* Use index as key */}
                                <img src={item.image} alt={item.name} />
                                <span>{item.name} - ${item.price.toFixed(2)}</span>
                                <FontAwesomeIcon 
                                    icon={faTrash} // Using the trash icon
                                    onClick={() => handleRemoveFromCart(index)} // Remove on click
                                    style={{ cursor: 'pointer', marginRight: '10px' }} 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="total-row"> {/* New container for total and button */}
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
