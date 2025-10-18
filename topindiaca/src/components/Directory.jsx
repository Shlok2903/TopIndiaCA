import React, { useState } from 'react';
import './Directory.css';

const Directory = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad', 'Ahmedabad'];
  const specialties = ['Tax Advisory', 'Audit & Assurance', 'Financial Planning', 'Corporate Law', 'GST Compliance', 'Investment Advisory'];

  const caList = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      firm: 'Kumar & Associates',
      city: 'Mumbai',
      specialty: 'Tax Advisory',
      experience: '15 years',
      rating: 4.9,
      phone: '+91 98765 43210',
      email: 'rajesh@kumarassociates.com'
    },
    {
      id: 2,
      name: 'Sunita Mehta',
      firm: 'Mehta & Co.',
      city: 'Delhi',
      specialty: 'Audit & Assurance',
      experience: '12 years',
      rating: 4.8,
      phone: '+91 98765 43211',
      email: 'sunita@mehtaco.com'
    },
    {
      id: 3,
      name: 'Amit Patel',
      firm: 'Patel Financial Services',
      city: 'Bangalore',
      specialty: 'Financial Planning',
      experience: '10 years',
      rating: 4.9,
      phone: '+91 98765 43212',
      email: 'amit@patelfinancial.com'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      firm: 'Sharma & Partners',
      city: 'Chennai',
      specialty: 'GST Compliance',
      experience: '8 years',
      rating: 4.7,
      phone: '+91 98765 43213',
      email: 'priya@sharmapartners.com'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      firm: 'Singh Associates',
      city: 'Pune',
      specialty: 'Corporate Law',
      experience: '18 years',
      rating: 4.9,
      phone: '+91 98765 43214',
      email: 'vikram@singhassociates.com'
    },
    {
      id: 6,
      name: 'Anita Reddy',
      firm: 'Reddy & Co.',
      city: 'Hyderabad',
      specialty: 'Investment Advisory',
      experience: '14 years',
      rating: 4.8,
      phone: '+91 98765 43215',
      email: 'anita@reddyco.com'
    }
  ];

  const filteredCAs = caList.filter(ca => {
    const cityMatch = !selectedCity || ca.city === selectedCity;
    const specialtyMatch = !selectedSpecialty || ca.specialty === selectedSpecialty;
    return cityMatch && specialtyMatch;
  });

  return (
    <div className="directory-page">
      <div className="container">
        <h1>CA Directory</h1>
        <p className="page-subtitle">Find the best Chartered Accountants and CA firms across India</p>

        {/* Filters */}
        <div className="filters-section">
          <div className="filter-group">
            <label htmlFor="city-filter">Filter by City:</label>
            <select 
              id="city-filter"
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="specialty-filter">Filter by Specialty:</label>
            <select 
              id="specialty-filter"
              value={selectedSpecialty} 
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>

          <div className="filter-results">
            Showing {filteredCAs.length} CA{filteredCAs.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* CA Listings */}
        <div className="ca-listings">
          {filteredCAs.map(ca => (
            <div key={ca.id} className="ca-listing-card">
              <div className="ca-info">
                <div className="ca-header">
                  <h3>{ca.name}</h3>
                  <div className="ca-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-number">{ca.rating}</span>
                  </div>
                </div>
                <p className="firm-name">{ca.firm}</p>
                <div className="ca-details">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{ca.city}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Specialty:</span>
                    <span className="detail-value">{ca.specialty}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Experience:</span>
                    <span className="detail-value">{ca.experience}</span>
                  </div>
                </div>
              </div>
              <div className="ca-contact">
                <div className="contact-info">
                  <p><strong>Phone:</strong> {ca.phone}</p>
                  <p><strong>Email:</strong> {ca.email}</p>
                </div>
                <div className="contact-actions">
                  <button className="contact-btn primary">Contact Now</button>
                  <button className="contact-btn secondary">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Firm Listings */}
        <div className="firms-section">
          <h2>Top CA Firms</h2>
          <div className="firms-grid">
            <div className="firm-card">
              <h3>KPMG India</h3>
              <p className="firm-type">Big 4 Accounting Firm</p>
              <p className="firm-location">Pan India</p>
              <div className="firm-specialties">
                <span className="specialty-tag">Audit</span>
                <span className="specialty-tag">Tax</span>
                <span className="specialty-tag">Advisory</span>
              </div>
              <button className="firm-btn">Visit Website</button>
            </div>
            <div className="firm-card">
              <h3>Deloitte India</h3>
              <p className="firm-type">Big 4 Accounting Firm</p>
              <p className="firm-location">Pan India</p>
              <div className="firm-specialties">
                <span className="specialty-tag">Audit</span>
                <span className="specialty-tag">Tax</span>
                <span className="specialty-tag">Consulting</span>
              </div>
              <button className="firm-btn">Visit Website</button>
            </div>
            <div className="firm-card">
              <h3>EY India</h3>
              <p className="firm-type">Big 4 Accounting Firm</p>
              <p className="firm-location">Pan India</p>
              <div className="firm-specialties">
                <span className="specialty-tag">Audit</span>
                <span className="specialty-tag">Tax</span>
                <span className="specialty-tag">Advisory</span>
              </div>
              <button className="firm-btn">Visit Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
