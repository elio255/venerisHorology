import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BestSeller1 from '../images/bstblack.jpg';
import BestSeller2 from '../images/bstGold.jpg';
import BestSeller3 from '../images/bstFem.jpg';
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
import './Watchdetails.css'

const watches = [
    { 
        id: 1, 
        name: 'Heritage HO1980', 
        price: 299.99, 
        description: 'A classic design with a modern touch.', 
        image: BestSeller1,
        attributes: {
            category: 'Luxury',
            moreText: 'Elegant design suitable for all occasions.',
            type: 'Analog',
            metal: 'Stainless Steel',
            diamond: 'Yes'
        }
    },
    { 
        id: 2, 
        name: 'Horology 1818', 
        price: 199.99, 
        description: 'Timeless elegance for every occasion.', 
        image: BestSeller2,
        attributes: {
            category: 'Formal',
            moreText: 'A sophisticated watch for the modern gentleman.',
            type: 'Quartz',
            metal: 'Gold Plated',
            diamond: 'No'
        }
    },
    {
        id: 3, 
        name: 'Lumina 2001', 
        price: 399.99, 
        description: 'A bold statement piece for the innovative individual.', 
        image: BestSeller3,
        attributes: {
            category: 'Casual',
            moreText: 'Round smartwatch with multiple features.',
            type: 'Smart',
            metal: 'Aluminum',
            diamond: 'No'
        }
    },
    { 
        id: 4, 
        name: 'Celestial Eclipse', 
        price: 1450, 
        description: 'A luxurious watch inspired by the beauty of the cosmos.', 
        image: watch1,
        attributes: {
            category: 'Luxury',
            moreText: 'Features a midnight blue dial and a moon phase indicator.',
            type: 'Automatic',
            metal: 'Titanium',
            diamond: 'Yes'
        }
    },
    { 
        id: 5, 
        name: 'Rose Imperial', 
        price: 1100, 
        description: 'A watch that combines vintage charm with modern elegance.', 
        image: watch2,
        attributes: {
            category: 'Classic',
            moreText: 'Textured rose gold finish with Roman numeral markers.',
            type: 'Analog',
            metal: 'Rose Gold Plated',
            diamond: 'No'
        }
    },
    { 
        id: 6, 
        name: 'Voyager Pro', 
        price: 2000, 
        description: 'Built for the adventurer, with features for rugged travels.', 
        image: watch3,
        attributes: {
            category: 'Sports',
            moreText: 'High water resistance with durable rubber strap.',
            type: 'Digital',
            metal: 'Ceramic',
            diamond: 'No'
        }
    },
    { 
        id: 7, 
        name: 'Laine', 
        price: 750, 
        description: 'A stylish unisex watch for everyday elegance.', 
        image: watch4,
        attributes: {
            category: 'Casual',
            moreText: 'Lightweight and versatile with a minimalist dial.',
            type: 'Quartz',
            metal: 'Stainless Steel',
            diamond: 'No'
        }
    },
    { 
        id: 8, 
        name: 'Blues', 
        price: 1300, 
        description: 'A chic watch with a deep blue dial for fashion-forward individuals.', 
        image: watch5,
        attributes: {
            category: 'Fashion',
            moreText: 'Unique blue dial with leather strap.',
            type: 'Analog',
            metal: 'Stainless Steel',
            diamond: 'No'
        }
    },
    { 
        id: 9, 
        name: 'Lumina', 
        price: 950, 
        description: 'An elegant watch with luminous hands for easy reading.', 
        image: watch6,
        attributes: {
            category: 'Dress',
            moreText: 'Classic look with luminescent features.',
            type: 'Analog',
            metal: 'Stainless Steel',
            diamond: 'Yes'
        }
    },
    { 
        id: 10, 
        name: 'Aurora', 
        price: 1100, 
        description: 'A sophisticated watch with a hint of sparkle.', 
        image: watch7,
        attributes: {
            category: 'Dress',
            moreText: 'Subtle sparkle on bezel and markers.',
            type: 'Analog',
            metal: 'Gold Plated',
            diamond: 'Yes'
        }
    },
    { 
        id: 11, 
        name: 'Stellar', 
        price: 680, 
        description: 'A modern watch with an understated elegance.', 
        image: watch8,
        attributes: {
            category: 'Casual',
            moreText: 'Simple design with stainless steel strap.',
            type: 'Quartz',
            metal: 'Aluminum',
            diamond: 'No'
        }
    },
    { 
        id: 12, 
        name: 'Chronos', 
        price: 1450, 
        description: 'A versatile unisex watch with precision timekeeping.', 
        image: watch9,
        attributes: {
            category: 'Classic',
            moreText: 'Features a chronograph and date display.',
            type: 'Chronograph',
            metal: 'Stainless Steel',
            diamond: 'No'
        }
    },
    { 
        id: 13, 
        name: 'Vanguard', 
        price: 1550, 
        description: 'A bold watch for those who lead the way.', 
        image: watch10,
        attributes: {
            category: 'Adventure',
            moreText: 'Bold design with extra durability.',
            type: 'Automatic',
            metal: 'Carbon Fiber',
            diamond: 'No'
        }
    },
    { 
        id: 14, 
        name: 'Prestige', 
        price: 700, 
        description: 'A refined watch for special occasions.', 
        image: watch11,
        attributes: {
            category: 'Luxury',
            moreText: 'Refined style with comfortable leather strap.',
            type: 'Quartz',
            metal: 'Gold Plated',
            diamond: 'No'
        }
    }
];


const WatchDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const watch = watches.find(watch => watch.id === parseInt(id));

    if (!watch) {
        return <div>Watch not found!</div>; 
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: watch }); 
        alert(`${watch.name} added to cart!`); 
    };

    return (
     
       
        <div className="watch-details-container">
            <div className="watch-header">
    
                <img src={watch.image} alt={watch.name} className="watch-image-shop" />
                <div className="watch-info">
                    <h1 className="watch-title">{watch.name}</h1>
                    <h2 className="watch-price">{`$${watch.price.toFixed(2)}`}</h2>
                    <p className="watch-description">{watch.description}</p>
                    <div className="watch-attributes">
                        <p><strong>Category:</strong> {watch.attributes.category}</p>
                        <p><strong>More Text:</strong> {watch.attributes.moreText}</p>
                        <p><strong>Type:</strong> {watch.attributes.type}</p>
                        <p><strong>Metal:</strong> {watch.attributes.metal}</p>
                        <p><strong>Diamond:</strong> {watch.attributes.diamond}</p>
                    </div>
                    <button onClick={handleAddToCart} className="add-to-cart-button">Add to Basket</button>
                </div>
            </div>
        </div>
    );
};

export default WatchDetails;
