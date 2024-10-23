import React from 'react';
import './headerbar.css';


const HeaderBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderBar;
