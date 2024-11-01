import React,{ useState } from 'react';
import './Aboutus.css'; // Assuming you have a CSS file for styling

const AboutUs = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you would typically send the email to your backend
      setMessage('Thank you for subscribing to our newsletter!');s
      setEmail('');
    };
  return (
    <div style={{backgroundColor:'#242424'}}>
    <div className="about-us">

<div className="subContainer">
        <h1>About Us</h1>
        <p className="subtitleDesign">Home / <span style={{ color: '#C5A580' }}>About Us</span></p>
      </div>
      

      <h2>Our Mission</h2>
      <p>
        At Veneris Horology, our mission transcends the mere act of telling time; we are dedicated to creating artful timepieces that breathe elegance and sophistication into your everyday life. Established in [insert year], our brand was born out of a fervent passion for horology and a desire to bring innovative designs to the world of luxury watches. We are committed to marrying artistry with technology, producing timepieces that encapsulate the essence of human craftsmanship while pushing the boundaries of modern watchmaking. Every watch we create is a testament to our dedication to quality, integrity, and a relentless pursuit of excellence.
      </p>

      <h2>Inspiration Behind Our Designs</h2>
      <p>
        Our designs draw inspiration from the celestial bodies that gracefully traverse the night sky. Just as the stars, moons, and planets have captivated humanity for centuries, our collections aim to evoke wonder and admiration. We delve into the elements of nature and the cosmos, translating this beauty into meticulously crafted timepieces. Each watch is designed to be not just a functional instrument but also a visual masterpiece that resonates with personal stories and experiences. We envision our watches as companions for life's memorable moments—be it celebrations, milestones, or everyday adventures—each telling its own unique tale.
      </p>

      <h2>Craftsmanship and Quality</h2>
      <p>
        At the heart of Veneris Horology lies an unwavering commitment to craftsmanship and quality. Our timepieces are assembled with the finest materials, from premium-grade stainless steel cases to sapphire crystal glasses that ensure durability and clarity. Each movement is carefully selected for its precision and reliability, reflecting our insistence on excellence. Skilled artisans with years of expertise hand-finish every aspect of our watches to perfection, from intricate engravings to the delicate assembly of components. This meticulous attention to detail ensures that each Veneris timepiece not only meets the highest industry standards but also serves as a cherished heirloom that can be passed down through generations.
      </p>

      <h2>Commitment to Sustainability</h2>
      <p>
        Conscious of our impact on the planet, Veneris Horology champions sustainability in every facet of our operation. We are committed to responsible sourcing of our materials, prioritizing ethically harvested components and recycled resources wherever possible. Our manufacturing processes are designed to minimize waste and energy consumption, reflecting our belief that luxury should not come at the expense of the environment. We strive to create timepieces that uphold the principles of sustainability, allowing our customers to invest in a future that harmonizes elegance with ecological responsibility. Together, we can celebrate the art of watchmaking while preserving the beauty of the world around us.
      </p>

      <h2>Join Us on Our Journey</h2>
      <p>
        We invite you to join us on this remarkable journey as we redefine the essence of horology. Explore the vast cosmos of our collections and discover the perfect timepiece that resonates with your individual style and spirit. At Veneris, we see our customers as part of our family, and we are committed to providing an unparalleled experience that goes beyond the transaction. Together, let's embrace time as a canvas for creating lasting memories, appreciating each moment as it unfolds.
      </p>
      <h2>Join Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <label htmlFor="email">Enter your email to stay updated:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="youremail@example.com"
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="subscribe-message">{message}</p>}


      
    </div>
    </div>
  );
};

export default AboutUs;
