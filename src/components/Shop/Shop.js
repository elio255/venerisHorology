import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import BestSeller1 from '../images/bstFem.jpg';
import BestSeller2 from '../images/bstGold.jpg';
import BestSeller3 from '../images/bstblack.jpg';
import watch1 from '../images/watch1.1.png';
import watch2 from '../images/watch1.2.png';
import watch3 from '../images/watch1.3.png';
import watch4 from '../images/watch1.4.png';
import watch5 from '../images/watch1.5.png';
import watch6 from '../images/watch1.6.png';
import watch7 from '../images/watch1.7.png';
import watch8 from '../images/watch1.8.png';
import watch9 from '../images/watch1.9.png';
import watch10 from '../images/watch2.0.png';
import watch11 from '../images/watch2.1.png';

const watches = [
    { id: 1, name: 'Heritage HO1980', price: 299.99, gender: 'unisex', image: BestSeller3 },
    { id: 2, name: 'Horology 1818', price: 199.99, gender: 'male', image: BestSeller2 },
    { id: 3, name: 'Lumina 2001', price: 399.99, gender: 'unisex', image: BestSeller1 },
    { id: 4, name: 'Celestial Eclipse', price: 1450, gender: 'male', image: watch1 },
    { id: 5, name: 'Rose Imperial', price: 1100, gender: 'male', image: watch2 },
    { id: 6, name: 'Voyager Pro', price: 2000, gender: 'female', image: watch3 },
    { id: 7, name: 'Laine', price: 750, gender: 'unisex', image: watch4 },
    { id: 8, name: 'Blues', price: 1300, gender: 'female', image: watch5 },
    { id: 9, name: 'Lumina', price: 950, gender: 'male', image: watch6 },
    { id: 10, name: 'Aurora', price: 1100, gender: 'male', image: watch7 },
    { id: 11, name: 'Stellar', price: 680, gender: 'female', image: watch8 },
    { id: 12, name: 'Chronos', price: 1450, gender: 'unisex', image: watch9 },
    { id: 13, name: 'Vanguard', price: 1550, gender: 'female', image: watch10 },
    { id: 14, name: 'Prestige', price: 700, gender: 'female', image: watch11 },
];

const Shop = () => {
    const [search, setSearch] = useState('');
    const [priceRange, setPriceRange] = useState([60, 2000]);
    const [selectedGenders, setSelectedGenders] = useState([]); 

    const handlePriceChange = (e) => {
        const newMaxPrice = parseInt(e.target.value);
        setPriceRange([priceRange[0], newMaxPrice]);
    };

   
    const handleGenderChange = (e) => {
        const gender = e.target.value;
        setSelectedGenders((prev) =>
            prev.includes(gender)
                ? prev.filter((g) => g !== gender) 
                : [...prev, gender] 
        );
    };

    const filteredWatches = watches.filter(watch => 
        watch.name.toLowerCase().includes(search.toLowerCase()) &&
        watch.price >= priceRange[0] && watch.price <= priceRange[1] &&
        (selectedGenders.length === 0 || selectedGenders.includes(watch.gender))
    );

    return (
        <div className="shop-container">
            <div className="sidebar">
                <h2>Price</h2>
                <input 
                    type="range" 
                    min="60" 
                    max="2000" 
                    value={priceRange[1]} 
                    onChange={handlePriceChange}
                />
                <br />
                <span>{`$${priceRange[0]} - $${priceRange[1]}`}</span>

                <h2>Gender</h2>
                <ul>
                    <li>
                        <input 
                            type="checkbox" 
                            value="male" 
                            onChange={handleGenderChange}
                            checked={selectedGenders.includes('male')}
                        /> Male
                    </li>
                    <li>
                        <input 
                            type="checkbox" 
                            value="female" 
                            onChange={handleGenderChange}
                            checked={selectedGenders.includes('female')}
                        /> Female
                    </li>
                    <li>
                        <input 
                            type="checkbox" 
                            value="unisex" 
                            onChange={handleGenderChange}
                            checked={selectedGenders.includes('unisex')}
                        /> Unisex
                    </li>
                </ul>
            </div>

            <div className="content">
                <h2>Catch the time by our Watches</h2>
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="search-bar"
                />

                <div className="scrollable-watch-grid">
                    <div className="watch-grid">
                        {filteredWatches.length > 0 ? (
                            filteredWatches.map((watch) => (
                                <Link to={`/watch-details/${watch.id}`} key={watch.id} className="watch-card">
                                    <img src={watch.image} alt={watch.name} className="watch-image" />
                                    <h3>{watch.name}</h3>
                                    <h3>${watch.price.toFixed(2)}</h3>
                                </Link>
                            ))
                        ) : (
                            <p>No watches match your search criteria.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
