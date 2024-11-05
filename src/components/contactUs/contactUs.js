import React, { useState } from 'react';
import './contactUs.css';
import Contactusimage from '../images/ContactUsImage.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    enquiry: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {
      name: formData.name === '',
      email: formData.email === '',
      enquiry: formData.enquiry === '',
    };

    const hasErrors = Object.values(errors).some((error) => error);

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <div className="subContainer">
        <h1>Contact Us</h1>
        <p className="subtitleDesign">Home / <span style={{ color: '#C5A580' }}>Contact Us</span></p>
      </div>

      <div className="imageContainer">
        <img src={Contactusimage} alt="Contact Us" className="contactImage" />
      </div>

      <div className="formAndLocationContainer">
        <div className="contactFormSection">
          <h2>Contact Us</h2>
        </div>

        
          
        
      </div>

      <hr className="dividerLine" />

      <div className="formAndLocationContainer">
        <div className="contactFormSection">
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Your Name {formData.name === '' && <span className="required">*</span>}</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <p className="errorMessage">Please fill out your name.</p>}
            </div>

            <div className="formGroup">
              <label>E-Mail Address {formData.email === '' && <span className="required">*</span>}</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="errorMessage">Please fill out your email.</p>}
            </div>

            <div className="formGroup">
              <label>Enquiry {formData.enquiry === '' && <span className="required">*</span>}</label>
              <textarea
                name="enquiry"
                placeholder="Enter your message"
                value={formData.enquiry}
                onChange={handleChange}
              ></textarea>
              {formErrors.enquiry && <p className="errorMessage">Please fill out your enquiry.</p>}
            </div>

            <button type="submit" className="submitButton">Submit</button>
          </form>
        </div>

        <div className="LocDescontainer">
          <div className="storeLocDetails">
            <p><span style={{fontSize:30}}>Store Location:</span>
            <br />
            <br />
          Mirora 1<br />
  123 Rue Principale, Beyrouth<br />
  Liban<br />
  <strong>Téléphone:</strong> (01) 456 789<br />
  <strong>Fax:</strong> (01) 456 789
</p>

            <button
              className="googleMapButton"
              onClick={() => window.open('https://www.google.com/maps')}
            >
              View Google Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
