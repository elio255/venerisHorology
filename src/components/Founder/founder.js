import React from 'react';
import Founder from '../images/founder-removebg-preview.png';

const FounderHorology = () => {
    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'black', 
            padding: '60px 20px' // Padding on top and bottom
        }}>
            <img 
                src={Founder}
                alt="Veneris Horology" 
                style={{ 
                    maxWidth: '400px', // Maintain max width
                    width: '100%', // Make it responsive
                    height: 'auto', // Maintain aspect ratio
                    marginRight: '20px' // Space between image and text
                }} 
            />
            <div style={{ 
                flex: 1, // Allow this div to take available space
                textAlign: 'left', // Align text to the left
                color: 'white', 
            }}>
                <h2 style={{ 
                    color: '#C5A580', 
                    fontFamily: 'Georgia, serif', 
                    fontSize: '2.5em', // Responsive font size
                    margin: '0 0 10px' 
                }}>
                    The Original
                </h2>
                <p style={{ 
                    padding: '0 20px', 
                    color: 'white', 
                    fontFamily: 'Georgia, serif', 
                    fontSize: '1.1em', // Slightly larger for readability
                    lineHeight: '1.6' 
                }}>
                    Born from a passion for time itself, Veneris Horology was founded on 
                    the belief that a watch is more than just a tool—it 
                    is a testament to the elegance and precision of the passing moments.
                    Inspired by the beauty of Venus, the Roman goddess of love and beauty, 
                    Veneris Horology embodies grace, luxury, and timeless craftsmanship.
                </p>
            </div>
        </div>
    );
};

export default FounderHorology;
