import React, { useState } from 'react';
import './contactUs.css';
import HeaderBar from './navigationBar/headerbar';

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

  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container">
      <HeaderBar />
      <div className="subContainer">
        <h1>Contact Us</h1>
        <p className="subtitleDesign">Home / <span style={{ color: '#C5A580' }}>Contact Us</span></p>
      </div>
      <div className="LocDescontainer">
        <h2>Store Location</h2>
        <div className="storeLocDetails">
          <p>Mirora 1<br />
            123 Main Street, Anytown, CA<br />
            12345 - USA<br />
            <strong>Telephone:</strong> (012) 800 456 789<br />
            <strong>Fax:</strong> (012) 800 456 789
          </p>
          <button className="googleMapButton">View Google Map</button>
        </div>
      </div>
      <div className="contactFormSection">
        <h2>Contact Us</h2>
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

          {isSubmitted && <p className="successMessage">Your message has been submitted successfully!</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
