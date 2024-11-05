import React from 'react';
import './headerbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { useSelector } from 'react-redux'; 

const HeaderBar = ({ headerClass }) => { 
    const cartItems = useSelector(state => state.cart);
    return (
        <header className={headerClass}> 
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li className="cart-icon">
                        <Link to="/cart" className="cart-link">
                            <FontAwesomeIcon icon={faShoppingCart} /> 
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
