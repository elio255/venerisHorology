import React from 'react';
import HeaderBar from './components/navigationBar/headerbar';  // Ensure the path and filename are correct
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';  // Ensure the path and filename are correct
import ContactUs from './components/contactUs/contactUs';
import './App.css';

const App = ()  => {
  return (
    <Router>
      <HeaderBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<HeaderBar />} />
        <Route path="/about" element={<HeaderBar />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
