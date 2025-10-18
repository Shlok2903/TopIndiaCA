import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Top CA India</h1>
          <p className="hero-subtitle">
            Your premier destination for finding the best Chartered Accountants and CA firms across India
          </p>
          <div className="hero-stats">
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
          </div>
        </div>
      </section>

      {/* News Highlights */}
      <section className="news-highlights">
        <div className="container">
          <h2>Latest News Highlights</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-date">Dec 15, 2024</div>
              <h3>New GST Compliance Guidelines Released</h3>
              <p>Latest updates on GST filing requirements and compliance procedures for businesses.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
            <div className="news-card">
              <div className="news-date">Dec 12, 2024</div>
              <h3>Income Tax Return Filing Deadline Extended</h3>
              <p>CBDT announces extension for ITR filing deadline for certain categories.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
            <div className="news-card">
              <div className="news-date">Dec 10, 2024</div>
              <h3>Digital Accounting Trends 2024</h3>
              <p>How technology is transforming the accounting profession in India.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured CAs */}
      <section className="featured-cas">
        <div className="container">
          <h2>Featured Chartered Accountants</h2>
          <div className="ca-grid">
            <div className="ca-card">
              <div className="ca-avatar">RK</div>
              <h3>Rajesh Kumar</h3>
              <p className="ca-specialty">Tax Advisory & Compliance</p>
              <p className="ca-location">Mumbai, Maharashtra</p>
              <div className="ca-rating">★★★★★ 4.9</div>
              <button className="contact-btn">Contact</button>
            </div>
            <div className="ca-card">
              <div className="ca-avatar">SM</div>
              <h3>Sunita Mehta</h3>
              <p className="ca-specialty">Audit & Assurance</p>
              <p className="ca-location">Delhi, NCR</p>
              <div className="ca-rating">★★★★★ 4.8</div>
              <button className="contact-btn">Contact</button>
            </div>
            <div className="ca-card">
              <div className="ca-avatar">AP</div>
              <h3>Amit Patel</h3>
              <p className="ca-specialty">Financial Planning</p>
              <p className="ca-location">Bangalore, Karnataka</p>
              <div className="ca-rating">★★★★★ 4.9</div>
              <button className="contact-btn">Contact</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Firms */}
      <section className="featured-firms">
        <div className="container">
          <h2>Top CA Firms</h2>
          <div className="firms-grid">
            <div className="firm-card">
              <h3>KPMG India</h3>
              <p>Big 4 Accounting Firm</p>
              <p className="firm-location">Pan India</p>
              <div className="firm-specialties">
                <span className="specialty-tag">Audit</span>
                <span className="specialty-tag">Tax</span>
                <span className="specialty-tag">Advisory</span>
              </div>
            </div>
            <div className="firm-card">
              <h3>Deloitte India</h3>
              <p>Big 4 Accounting Firm</p>
              <p className="firm-location">Pan India</p>
              <div className="firm-specialties">
                <span className="specialty-tag">Audit</span>
                <span className="specialty-tag">Tax</span>
                <span className="specialty-tag">Consulting</span>
              </div>
            </div>
            <div className="firm-card">
              <h3>EY India</h3>
              <p>Big 4 Accounting Firm</p>
              <p className="firm-location">Pan India</p>
              <div className="firm-specialties">
                <span className="specialty-tag">Audit</span>
                <span className="specialty-tag">Tax</span>
                <span className="specialty-tag">Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
