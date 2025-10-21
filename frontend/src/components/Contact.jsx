import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    enquiryType: 'General'
  });

  const enquiryTypes = ['General', 'CA Services', 'Technical Support', 'Partnership', 'Media Inquiry'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="page-subtitle">Get in touch with us for any enquiries or support</p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enquiryType">Enquiry Type</label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                  >
                    {enquiryTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter the subject of your enquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Please describe your enquiry in detail"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-content">
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                  <span className="method-note">Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div className="method-content">
                  <h3>Email</h3>
                  <p>info@topcaindia.com</p>
                  <p>support@topcaindia.com</p>
                  <span className="method-note">We respond within 24 hours</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-content">
                  <h3>WhatsApp</h3>
                  <p>+91 98765 43210</p>
                  <span className="method-note">Quick responses available</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-content">
                  <h3>Office Address</h3>
                  <p>123 Business District</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="live-chat-section">
              <h3>Live Chat Support</h3>
              <p>Get instant help from our support team</p>
              <button className="chat-btn">Start Live Chat</button>
            </div>

            {/* Social Media */}
            <div className="social-media-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I find a CA in my city?</h3>
              <p>Use our directory page to search for CAs by city, specialty, and other filters. You can also contact us directly for personalized recommendations.</p>
            </div>
            <div className="faq-item">
              <h3>What services do you provide?</h3>
              <p>We provide a platform to connect clients with verified CAs, offer compliance tools, resources, and keep you updated with industry news and events.</p>
            </div>
            <div className="faq-item">
              <h3>How do I verify a CA's credentials?</h3>
              <p>All CAs listed on our platform are verified. You can check their ICAI registration number and credentials through our directory.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a fee for using your services?</h3>
              <p>Our platform is free to use for finding CAs. Individual CA services may have their own fees, which you can discuss directly with them.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
