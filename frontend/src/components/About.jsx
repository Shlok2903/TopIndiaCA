import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About Us</h1>
          <p className="page-subtitle">Learn about our mission, team, and commitment to connecting clients with the best CAs</p>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-text">
              To bridge the gap between clients and qualified Chartered Accountants across India, 
              providing a trusted platform that ensures transparency, quality, and accessibility 
              in accounting and financial services.
            </p>
            <div className="mission-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Verified CAs</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Cities Covered</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="mission-image">
            <div className="placeholder-image">Our Mission</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">RK</div>
              <h3>Rajesh Kumar</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">
                CA with 15+ years of experience in tax advisory and corporate finance. 
                Passionate about leveraging technology to improve accounting services.
              </p>
              <div className="member-social">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-avatar">SM</div>
              <h3>Sunita Mehta</h3>
              <p className="member-role">Head of Operations</p>
              <p className="member-bio">
                CA specializing in audit and assurance with 12+ years of experience. 
                Expert in compliance and regulatory matters.
              </p>
              <div className="member-social">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-avatar">AP</div>
              <h3>Amit Patel</h3>
              <p className="member-role">Technology Director</p>
              <p className="member-bio">
                Technology expert with 10+ years in fintech and digital transformation. 
                Leads our platform development and innovation initiatives.
              </p>
              <div className="member-social">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="partners-section">
          <h2>Our Partners</h2>
          <div className="partners-grid">
            <div className="partner-card">
              <h3>ICAI</h3>
              <p>Institute of Chartered Accountants of India</p>
              <span className="partner-type">Professional Body</span>
            </div>
            <div className="partner-card">
              <h3>Big 4 Firms</h3>
              <p>KPMG, Deloitte, EY, PwC</p>
              <span className="partner-type">Accounting Firms</span>
            </div>
            <div className="partner-card">
              <h3>Technology Partners</h3>
              <p>Leading fintech and accounting software companies</p>
              <span className="partner-type">Tech Partners</span>
            </div>
            <div className="partner-card">
              <h3>Banking Partners</h3>
              <p>Major banks and financial institutions</p>
              <span className="partner-type">Financial Partners</span>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for the highest standards in everything we do, ensuring quality service delivery.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>Building lasting relationships through transparency, reliability, and integrity.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Embracing technology and new ideas to improve accounting services and client experience.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌍</div>
              <h3>Accessibility</h3>
              <p>Making quality CA services accessible to clients across all regions and business sizes.</p>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="legal-section">
          <h2>Legal Information</h2>
          <div className="legal-content">
            <div className="legal-item">
              <h3>Company Registration</h3>
              <p>Top CA India Private Limited</p>
              <p>CIN: U74120MH2019PTC123456</p>
              <p>Registered Office: Mumbai, Maharashtra</p>
            </div>
            <div className="legal-item">
              <h3>Compliance</h3>
              <p>GST Registration: 27ABCDE1234F1Z5</p>
              <p>PAN: ABCDE1234F</p>
              <p>ISO 9001:2015 Certified</p>
            </div>
            <div className="legal-item">
              <h3>Privacy & Terms</h3>
              <p><a href="#" className="legal-link">Privacy Policy</a></p>
              <p><a href="#" className="legal-link">Terms of Service</a></p>
              <p><a href="#" className="legal-link">Cookie Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
