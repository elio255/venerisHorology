import React from 'react';
import './footer.css';
import visa from '../images/visa.png';
import Paypal from '../images/Paypal.png';
import MasterCard from '../images/MasterCard.png';
import Skrill from '../images/skrill.png';
import Visa_Electron from '../images/Visa_Electron.png';
import watch1 from '../images/watch1.png';
import watch2 from '../images/watch2.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-column">
          <h3>About Veneris Horology</h3>
          <p>Address: 123 Main Street, Bei<br />
             12345 - Lebanon<br />
             Phone: (961) 01 677 252<br />
             Fax: (961) 01 688 525<br />
             Email: Contact@VenerisHorology.com
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Extras</h3>
          <ul>
            <li>Brands</li>
            <li>Gift Certificates</li>
            <li>Affiliate</li>
            <li>Specials</li>
            <li>My Account</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Custom Products</h3>
          <ul>
            <li className="product-item">
              <img src={watch1} alt="watch1" className="product-image" />
              <span>Acer Aspire Desktop <br /> $122.00</span>
            </li>
            <hr className="product-divider" />
            <li className="product-item">
              <img src={watch2} alt="watch2" className="product-image" />
              <span>Acer Aspire AIO <br /> $92.00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <p>Home</p>
          <p>Online Store</p>
          <p>Promotion</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>Sitemap</p>
          <p>Support</p>
        </div>
        <p className="footer-copyright">
          © 2024 Veneris Horology. All Rights Reserved.
        </p>
        <div className="payment-icons">
          <img src={visa} alt="Visa" />
          <img src={Paypal} alt="PayPal" />
          <img src={MasterCard} alt="MasterCard" />
          <img src={Skrill} alt="Skrill" />
          <img src={Visa_Electron} alt="Visa Electron" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
