import React from 'react';
import './headerbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome icon components
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the shopping cart icon
import { useSelector } from 'react-redux'; // Import useSelector to access cart state

const HeaderBar = ({ headerClass }) => { // Accept the headerClass prop
    const cartItems = useSelector(state => state.cart);
    return (
        <header className={headerClass}> {/* Apply the class conditionally */}
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li className="cart-icon">
                        <Link to="/cart" className="cart-link"> {/* Added cart-link for hover effects */}
                            <FontAwesomeIcon icon={faShoppingCart} /> {/* Shopping cart icon */}
                        </Link>
                        {cartItems.length > 0 && (
                            <span className="cart-item-count">({cartItems.length})</span>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderBar;
