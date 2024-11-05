import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bestSeller.css'; 
import BestSeller1 from '../images/bstblack.jpg';
import BestSeller2 from '../images/bstGold.jpg';
import BestSeller3 from '../images/bstFem.jpg';

const BestSellers = () => {
  const navigate = useNavigate(); 
  const bestSellers = [
    { id: 1, name: 'Herittage ho1980', price: 299.99, image: BestSeller1 },
    { id: 2, name: 'Horology 1818', price: 199.99, image: BestSeller2 },
    { id: 3, name: 'Lumina 2001', price: 399.99, image: BestSeller3 },
  ];

  const openWatchDetails = (id) => {
    navigate(`/watch-details/${id}`); 
  };

  return (
    <div className="best-sellers">
      <h2>Our Best Sellers</h2>
      <div className="watch-list">
        {bestSellers.map((watch) => (
          <div key={watch.id} className="watch-item" onClick={() => openWatchDetails(watch.id)}>
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h3>{watch.name}</h3>
            <div className='p1'>
            <p>{`$${watch.price.toFixed(2)}`}</p>
            </div>
        
          </div>
        ))}
         </div>
      <div className='btn-container'>
        <button className="shop-buttons" onClick={() => navigate('/shop')}>Discover More</button>
      </div> 
    </div>
   
  );
};

export default BestSellers;
