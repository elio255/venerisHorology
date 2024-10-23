import React from 'react';
import './home.css';


import FirstW from '../components/images/fisrtPiccut.jpg';
import BestSeller2 from '../components/images/bstGold.jpg';
import BestSeller3 from '../components/images/bstFem.jpg';
import BestSeller1 from '../components/images/bstblack.jpg';
import Founder from '../components/images/founder.jpg';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation


const Home = () => {
    const navigate = useNavigate();
    return (
        

      <div className="first-part">
         <div className="text-container">
        <h1 className="title">Veneris Horology</h1>
        <h2 className="subtitle">A Legacy of Precision, A Statement of Style.</h2>
        <div className='btn'>
        <button className="shop-button" onClick={() => navigate('/shop')}>Shop Now</button>
        </div> 
      </div>
        <img src={FirstW} alt="First" className="first-image" />
       
      </div>
    );
  };

  export default Home;


