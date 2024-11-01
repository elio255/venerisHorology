import React from 'react';
import './home.css';


import FirstW from '../images/fisrtPiccut.jpg';

import { useNavigate } from 'react-router-dom';// Import the hook for navigation
import BestSellers from '../bestSellerss/bestSellerrs'; // Optional if directly included in Home
import FounderHorology from '../Founder/founder';

const Home = () => {
    const navigate = useNavigate();
    return (
        

      <div className="first-part">
         <div className="text-container">
        <h1 className="title">Veneris Horology</h1>
        <h2 className="subtitle">A Legacy of Precision, A Statement of Style.</h2>
        <div className='btn'>
        <button className="shop-button" onClick={() => navigate('/shop')}>Shop Now </button>
        </div> 
      </div>
        <img src={FirstW} alt="First" className="first-image" />
        <BestSellers />
        <FounderHorology/>
      </div>
    );
  };

  export default Home;


