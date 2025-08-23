import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Contact me for any queries or you can write us, we will get back to you in 48 hours.</p>
      </div>

      <div className="contact-content">
        {/* Left Column - Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-details">
                <span className="info-label">Location:</span>
                <span className="info-value">Dharmasthala, Kootadhakallu, Belthangady</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-details">
                <span className="info-label">Email:</span>
                <span className="info-value">mithunjain755@gmail.com</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-details">
                <span className="info-label">Call:</span>
                <span className="info-value">+91 63666 36405</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="info-details">
                <span className="info-label">WhatsApp</span>
                <a href="https://wa.me/919740684686" className="info-link">click here</a>
              </div>
            </div>
          </div>

          {/* Google Map - Working Embed */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d75.12345678901234!3d12.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a1234567890%3A0x1234567890abcdef!2sUjire%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map - Ujire, Karnataka, India"
            ></iframe>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
