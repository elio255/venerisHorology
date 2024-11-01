import React from 'react';
import Founder from '../images/founder.jpg';
const FounderHorology = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center',backgroundColor:'#242424' }}>
            <img 
                src = {Founder}
                alt="Veneris Horology" 
                style={{ maxWidth: '400px', marginRight: '20px' }} 
            />
            <div>
            <div style={{backgroundColor:'#242424' }}>
                <h2 style={{ textAlign:'center' ,color: '#C5A580',backgroundColor:'#242424', fontFamily: 'Georgia, serif', fontSize: '50px', margin: '0 0 10px' }}>The Original</h2>
                <p style={{paddingLeft:'20px',
                paddingRight:'20px' ,textAlign:'center',color: 'white',backgroundColor:'#242424', fontFamily: 'Georgia, serif', fontSize: '20px', lineHeight: '1.6' }}>
                    Born from a passion for time itself,
                     Veneris Horology was founded on 
                    the belief that a watch is more than just a tool—it 
                    is a testament to 
                    the elegance and precision of the passing moments.
                     Inspired by the beauty 
                    of Venus, the Roman goddess of love and beauty, Veneris Horology embodies 
                    grace, luxury, and timeless craftsmanship.
                </p>
            </div>
        </div>
        </div>
    );
};

export default FounderHorology;