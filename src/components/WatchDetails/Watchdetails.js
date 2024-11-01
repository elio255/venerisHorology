import React from 'react';
import { useParams } from 'react-router-dom';

import BestSeller1 from '../images/bstblack.jpg';
import BestSeller2 from '../images/bstGold.jpg';
import BestSeller3 from '../images/bstFem.jpg';
// Sample data (you may replace it with API calls or props as needed)
const watches = [
    { id: 1, name: 'Heritage HO1980', price: 299.99, description: 'A classic design with a modern touch.', image: BestSeller1 },
    { id: 2, name: 'Horology 1818', price: 199.99, description: 'Timeless elegance for every occasion.', image: BestSeller2 },
    { id: 3, name: 'Lumina 2001', price: 399.99, description: 'A bold statement piece for the innovative individual.', image: BestSeller3 },
];

const WatchDetails = () => {
    const { id } = useParams(); // Get the watch id from the URL
    const watch = watches.find(watch => watch.id === parseInt(id)); // Find the watch by id

    if (!watch) {
        return <div>Watch not found!</div>; // Handle case when watch is not found
    }

    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '10px' }}>
            <h1>{watch.name}</h1>
            <img src={watch.image} alt={watch.name} style={{ maxWidth: '400px', borderRadius: '10px' }} />
            <h2>{`$${watch.price.toFixed(2)}`}</h2>
            <p>{watch.description}</p>
        </div>
    );
};

export default WatchDetails;

