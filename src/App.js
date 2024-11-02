import React from 'react';
import HeaderBar from './components/navigationBar/headerbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/home';
import ContactUs from './components/contactUs/contactUs';
import './App.css';
import Footer from './components/footer/footer';
import AboutUs from './components/Aboutus/AboutUs';
import WatchDetails from './components/WatchDetails/Watchdetails';
import Cart from './components/cart/cart'; // Import the Cart component

const App = () => {
    return (
        <Router>
            <HeaderBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<h1>Shop Page</h1>} /> {/* Placeholder for Shop */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/watch-details/:id" element={<WatchDetails />} />
                <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Optional: handle 404 */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
