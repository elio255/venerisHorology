import React from 'react';
import HeaderBar from './components/navigationBar/headerbar';  // Ensure the path and filename are correct
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from './components/home/home';  // Ensure the path and filename are correct
import ContactUs from './components/contactUs/contactUs';
import './App.css';
import Footer from './components/footer/footer';
import AboutUs from './components/Aboutus/AboutUs';

import WatchDetails from './components/WatchDetails/Watchdetails'
const App = ()  => {
  return (
    
        <Router>
      <HeaderBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<HeaderBar />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/watch-details/:id" element={<WatchDetails />} />  {/* Add WatchDetails Route */}
        <Route path="/" element={<Navigate to="/home" />} /> 
      </Routes>
      <Footer />
    </Router>
    
  
    
  );
}

export default App;
