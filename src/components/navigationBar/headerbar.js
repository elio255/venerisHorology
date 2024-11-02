import React from 'react';
import './headerbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome icon components
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the shopping cart icon
import { useSelector } from 'react-redux'; // Import useSelector to access cart state

const HeaderBar = () => {
    const cartItems = useSelector(state => state.cart);
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li className="cart-icon">
                        <Link to="/cart" className="cart-link"> {/* Added cart-link for hover effects */}
                            <FontAwesomeIcon icon={faShoppingCart} /> {/* Shopping cart icon */}
                        </Link>
                        {cartItems.length > 0 && (
                            <span className="cart-item-count">({cartItems.length})</span>)}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderBar;
