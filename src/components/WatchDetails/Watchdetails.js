import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BestSeller1 from '../images/bstblack.jpg'; // Ensure image import paths are correct
import BestSeller2 from '../images/bstGold.jpg';
import BestSeller3 from '../images/bstFem.jpg';
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
];

const WatchDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const watch = watches.find(watch => watch.id === parseInt(id));

    if (!watch) {
        return <div>Watch not found!</div>; // Handle case where watch is not found
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: watch }); // Dispatch the action to add watch
        alert(`${watch.name} added to cart!`); // User feedback
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
