import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pauseScroll = () => {
    setIsScrolling(false);
  };

  const resumeScroll = () => {
    setIsScrolling(true);
  };

  const handleNewsClick = (newsTitle) => {
    console.log("News clicked:", newsTitle);
    // You can add navigation to news detail page here
    alert(`Opening news: ${newsTitle}`);
  };

  // Carousel data
  const carouselImages = [
    {
      id: 1,
      title: "Modern Living Room with Smart TV",
      description:
        "Contemporary interior design featuring Hisense Android TV and elegant decor",
      image: "/api/placeholder/800/500",
    },
    {
      id: 2,
      title: "Elegant Dining Space",
      description:
        "Sophisticated dining area with modern furniture and ambient lighting",
      image: "/api/placeholder/800/500",
    },
    {
      id: 3,
      title: "Luxury Bedroom Suite",
      description:
        "Master bedroom with premium finishes and contemporary design elements",
      image: "/api/placeholder/800/500",
    },
    {
      id: 4,
      title: "Modern Kitchen Design",
      description:
        "State-of-the-art kitchen with premium appliances and sleek finishes",
      image: "/api/placeholder/800/500",
    },
    {
      id: 5,
      title: "Executive Office Space",
      description:
        "Professional workspace designed for productivity and comfort",
      image: "/api/placeholder/800/500",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Scroll detection for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const editorsChoiceSection = document.querySelector(".editors-choice");
      if (editorsChoiceSection) {
        const rect = editorsChoiceSection.getBoundingClientRect();
        // Show button when Editor's Choice section starts coming into view
        const shouldShow = rect.top <= window.innerHeight * 0.8;
        setShowScrollTop(shouldShow);
        console.log(
          "Editor Choice section found:",
          shouldShow,
          "rect.top:",
          rect.top,
          "window height:",
          window.innerHeight
        );
      } else {
        // Fallback: show button after scrolling 500px from top
        const shouldShow = window.scrollY > 500;
        setShowScrollTop(shouldShow);
        console.log(
          "Editor Choice section not found, using fallback:",
          shouldShow,
          "scrollY:",
          window.scrollY
        );
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setSubscriptionStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscriptionStatus({
          type: "success",
          message: "Subscription email sent successfully! Please check your inbox.",
        });
        setEmail(""); // Clear the input
      } else {
        setSubscriptionStatus({
          type: "error",
          message: data.error || "Failed to subscribe. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setSubscriptionStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-page">
      {/* Latest News Banner */}
      <div className="latest-news">
        <div className="news-banner">
          <span className="news-icon">⚡</span>
          <span className="news-text">Latest News</span>
        </div>
        <div className="news-scroll-container">
          <div
            className={`news-scroll ${!isScrolling ? "paused" : ""}`}
            onMouseEnter={pauseScroll}
            onMouseLeave={resumeScroll}
          >
            <div className="news-item" onClick={() => handleNewsClick("NOAM")}>
              NOAM
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Top 10 Interior Designers & Architects of Pune"
                )
              }
            >
              Top 10 Interior Designers & Architects of Pune
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Top 10 Interior Designers & Architects of Mumbai"
                )
              }
            >
              Top 10 Interior Designers & Architects of Mumbai
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Ar. Samarth Jain - Redefining Spaces with Soulful Design"
                )
              }
            >
              Ar. Samarth Jain - Redefining Spaces with Soulful Design
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Inside the Vision and Craft of Jalpa Shah Design Studio"
                )
              }
            >
              Inside the Vision and Craft of Jalpa Shah Design Studio
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Meghal Patel | Co-Founder & Principal Designer at NOAM"
                )
              }
            >
              Meghal Patel | Co-Founder & Principal Designer at NOAM
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Digital Transformation in Indian Accounting Firms"
                )
              }
            >
              Digital Transformation in Indian Accounting Firms
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "New GST Compliance Guidelines Released for 2024"
                )
              }
            >
              New GST Compliance Guidelines Released for 2024
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick("Income Tax Return Filing Deadline Extended")
              }
            >
              Income Tax Return Filing Deadline Extended
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Sustainable Finance: A Growing Trend in Corporate India"
                )
              }
            >
              Sustainable Finance: A Growing Trend in Corporate India
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "CBDT Announces Extension for ITR Filing Deadline"
                )
              }
            >
              CBDT Announces Extension for ITR Filing Deadline
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() => handleNewsClick("Audit Standards Update Seminar")}
            >
              Audit Standards Update Seminar
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() => handleNewsClick("GST Return Filing Deadline")}
            >
              GST Return Filing Deadline
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() => handleNewsClick("Digital Accounting Trends 2024")}
            >
              Digital Accounting Trends 2024
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Interview with CA Amit Patel: Future of Financial Planning"
                )
              }
            >
              Interview with CA Amit Patel: Future of Financial Planning
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Income Tax Return Filing: Common Mistakes to Avoid"
                )
              }
            >
              Income Tax Return Filing: Common Mistakes to Avoid
            </div>
            <div className="news-separator">→</div>
            <div className="news-item" onClick={() => handleNewsClick("NOAM")}>
              NOAM
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Top 10 Interior Designers & Architects of Pune"
                )
              }
            >
              Top 10 Interior Designers & Architects of Pune
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Top 10 Interior Designers & Architects of Mumbai"
                )
              }
            >
              Top 10 Interior Designers & Architects of Mumbai
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Ar. Samarth Jain - Redefining Spaces with Soulful Design"
                )
              }
            >
              Ar. Samarth Jain - Redefining Spaces with Soulful Design
            </div>
            <div className="news-separator">→</div>
            <div
              className="news-item"
              onClick={() =>
                handleNewsClick(
                  "Inside the Vision and Craft of Jalpa Shah Design Studio"
                )
              }
            >
              Inside the Vision and Craft of Jalpa Shah Design Studio
            </div>
          </div>
        </div>
      </div>

      {/* Photo Carousel */}
      <div className="photo-carousel">
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>
            ‹
          </button>
          <div className="carousel-wrapper">
            <div
              className="carousel-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image) => (
                <div key={image.id} className="carousel-slide">
                  <div className="slide-image">
                    <div className="placeholder-image">{image.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>
            ›
          </button>
        </div>
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Editor's Choice Section */}
      <section className="editors-choice">
        <div className="container">
          <div className="section-header">
            <div className="header-line"></div>
            <h2>Editor's Choice</h2>
            <div className="header-line"></div>
          </div>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-image">
                <div className="placeholder-image">CA Expertise</div>
              </div>
              <div className="article-content">
                <h3>
                  Digital Transformation in Indian Accounting Firms: A Complete
                  Guide
                </h3>
                <p className="article-meta">By Top CA India | March 7, 2025</p>
              </div>
            </div>
            <div className="article-card">
              <div className="article-image">
                <div className="placeholder-image">Tax Planning</div>
              </div>
              <div className="article-content">
                <h3>
                  Advanced Tax Planning Strategies for Small Businesses in 2025
                </h3>
                <p className="article-meta">
                  By Top CA India | August 23, 2025
                </p>
              </div>
            </div>
            <div className="article-card">
              <div className="article-image">
                <div className="placeholder-image">GST Compliance</div>
              </div>
              <div className="article-content">
                <h3>
                  GST Compliance Made Simple: A Comprehensive Guide for New
                  Entrepreneurs
                </h3>
                <p className="article-meta">
                  By Top CA India | September 1, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People's Choice Section */}
      <section className="peoples-choice">
        <div className="container">
          <div className="section-header-left">
            <h2>People's Choice</h2>
            <div className="header-line"></div>
          </div>
          <div className="peoples-grid">
            <div className="people-card">
              <div className="people-image">
                <div className="placeholder-image">CA Expert</div>
              </div>
              <div className="people-content">
                <p className="people-category">Tax Advisory</p>
                <h3>
                  Mastering Tax Planning: The Expert Journey of CA Rajesh Kumar
                </h3>
                <p className="people-date">April 28, 2025</p>
              </div>
            </div>
            <div className="people-card">
              <div className="people-image">
                <div className="placeholder-image">CA Leader</div>
              </div>
              <div className="people-content">
                <p className="people-category">Audit & Assurance</p>
                <h3>
                  CA Sunita Mehta: A Journey of Excellence in Financial Auditing
                </h3>
                <p className="people-date">April 18, 2025</p>
              </div>
            </div>
            <div className="people-card">
              <div className="people-image">
                <div className="placeholder-image">CA Innovator</div>
              </div>
              <div className="people-content">
                <p className="people-category">Financial Planning</p>
                <h3>
                  CA Amit Patel: Celebrating a Pioneer of Digital Financial
                  Solutions
                </h3>
                <p className="people-date">April 14, 2025</p>
              </div>
            </div>
            <div className="people-card">
              <div className="people-image">
                <div className="placeholder-image">CA Visionary</div>
              </div>
              <div className="people-content">
                <p className="people-category">Business Advisory</p>
                <h3>
                  CA Priya Sharma: A Visionary Journey of Transforming Business
                  Finance
                </h3>
                <p className="people-date">April 25, 2025</p>
              </div>
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
              <p>
                Latest updates on GST filing requirements and compliance
                procedures for businesses.
              </p>
              <a href="#" className="read-more">
                Read More →
              </a>
            </div>
            <div className="news-card">
              <div className="news-date">Dec 12, 2024</div>
              <h3>Income Tax Return Filing Deadline Extended</h3>
              <p>
                CBDT announces extension for ITR filing deadline for certain
                categories.
              </p>
              <a href="#" className="read-more">
                Read More →
              </a>
            </div>
            <div className="news-card">
              <div className="news-date">Dec 10, 2024</div>
              <h3>Digital Accounting Trends 2024</h3>
              <p>
                How technology is transforming the accounting profession in
                India.
              </p>
              <a href="#" className="read-more">
                Read More →
              </a>
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

      {/* Footer Section */}
      <footer className="footer">
        {/* WhatsApp Community Section */}
        <div className="whatsapp-community">
          <div className="container">
            <div className="whatsapp-content">
              <h3>Join WhatsApp Community</h3>
              <div className="whatsapp-separator"></div>
              <div className="whatsapp-icon">📱</div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              {/* Company Info & Social Media */}
              <div className="footer-column company-info">
                <div className="footer-logo">
                  <div className="logo-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path
                        d="M8 6C8 4.89543 8.89543 4 10 4H30C31.1046 4 32 4.89543 32 6V34C32 35.1046 31.1046 36 30 36H10C8.89543 36 8 35.1046 8 34V6Z"
                        stroke="black"
                        strokeWidth="2"
                        fill="white"
                      />
                      <path d="M8 6H32" stroke="black" strokeWidth="2" />
                      <path d="M8 20H32" stroke="black" strokeWidth="1" />
                      <path d="M24 12L28 8L32 12L28 16L24 12Z" fill="black" />
                      <path d="M28 8L28 16" stroke="black" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="logo-text">
                    <div className="logo-top">Top CA</div>
                    <div className="logo-bottom">India</div>
                  </div>
                </div>
                <p className="company-description">
                  Fastest growing platform for Chartered Accountants and CA
                  firms across India. We want to build the most authentic
                  platform. Let's feature your best work here.
                </p>
                <div className="social-media">
                  <div className="social-icon instagram">📷</div>
                  <div className="social-icon youtube">📺</div>
                  <div className="social-icon facebook">📘</div>
                  <div className="social-icon linkedin">💼</div>
                  <div className="social-icon pinterest">📌</div>
                  <div className="social-icon behance">🎨</div>
                  <div className="social-icon twitter">🐦</div>
                  <div className="social-icon rss">📡</div>
                </div>
              </div>

              {/* Useful Links */}
              <div className="footer-column">
                <h4 className="footer-title">
                  <span className="title-bullet"></span>
                  Useful Links
                </h4>
                <ul className="footer-links">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/directory">Directory</a>
                  </li>
                  <li>
                    <a href="/blog">Magazine</a>
                  </li>
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms">Terms and Conditions</a>
                  </li>
                </ul>
              </div>

              {/* Latest News */}
              <div className="footer-column">
                <h4 className="footer-title">
                  <span className="title-bullet"></span>
                  Latest News
                </h4>
                <div className="news-items">
                  <div className="news-item">
                    <div className="news-avatar">JS</div>
                    <div className="news-content">
                      <h5>
                        Inside the Vision and Craft of Jalpa Shah Design Studio
                      </h5>
                      <p className="news-date">October 15, 2025</p>
                    </div>
                  </div>
                  <div className="news-item">
                    <div className="news-avatar">MP</div>
                    <div className="news-content">
                      <h5>
                        Meghal Patel | Co-Founder & Principal Designer at NOAM
                      </h5>
                      <p className="news-date">October 13, 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="footer-column">
                <h4 className="footer-title">
                  <span className="title-bullet"></span>
                  Newsletter
                </h4>
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    required
                  />
                  <button 
                    type="submit"
                    className="newsletter-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
                {subscriptionStatus && (
                  <div
                    style={{
                      marginTop: "10px",
                      padding: "10px",
                      borderRadius: "4px",
                      fontSize: "0.9rem",
                      backgroundColor:
                        subscriptionStatus.type === "success"
                          ? "#d4edda"
                          : "#f8d7da",
                      color:
                        subscriptionStatus.type === "success"
                          ? "#155724"
                          : "#721c24",
                      border: `1px solid ${
                        subscriptionStatus.type === "success"
                          ? "#c3e6cb"
                          : "#f5c6cb"
                      }`,
                    }}
                  >
                    {subscriptionStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright-content">
              <p>Copyright © 2025 topcaindia.com | Design by IMI Advertising</p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span style={{ color: "#ccc", fontSize: "0.8rem" }}>
                  Scroll State: {showScrollTop ? "SHOW" : "HIDE"}
                </span>
                <button
                  className="scroll-top-btn"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
