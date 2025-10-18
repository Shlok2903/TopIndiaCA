import React, { useState } from 'react';
import './Resources.css';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Compliance Tools', 'Document Templates', 'Important Links', 'Calculators'];

  const resources = [
    {
      id: 1,
      title: 'GST Return Filing Tool',
      category: 'Compliance Tools',
      description: 'Automated GST return filing with validation and error checking.',
      type: 'Tool',
      downloadCount: '15,000+',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Income Tax Return Template',
      category: 'Document Templates',
      description: 'Comprehensive ITR filing template with all required forms.',
      type: 'Template',
      downloadCount: '25,000+',
      rating: 4.9
    },
    {
      id: 3,
      title: 'CBDT Official Website',
      category: 'Important Links',
      description: 'Direct link to Central Board of Direct Taxes official portal.',
      type: 'Link',
      downloadCount: 'N/A',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Tax Calculator',
      category: 'Calculators',
      description: 'Calculate income tax, GST, and other taxes instantly.',
      type: 'Calculator',
      downloadCount: '50,000+',
      rating: 4.9
    },
    {
      id: 5,
      title: 'Audit Checklist Template',
      category: 'Document Templates',
      description: 'Comprehensive audit checklist for various business types.',
      type: 'Template',
      downloadCount: '12,000+',
      rating: 4.8
    },
    {
      id: 6,
      title: 'GST Portal',
      category: 'Important Links',
      description: 'Official GST portal for all GST-related services.',
      type: 'Link',
      downloadCount: 'N/A',
      rating: 4.6
    }
  ];

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="resources-page">
      <div className="container">
        <div className="resources-header">
          <h1>Resources</h1>
          <p className="page-subtitle">Access important links, compliance tools, and document templates</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Resource */}
        <div className="featured-resource">
          <div className="featured-content">
            <div className="resource-badge">Most Popular</div>
            <h2>{resources[3].title}</h2>
            <p className="resource-description">{resources[3].description}</p>
            <div className="resource-stats">
              <div className="stat">
                <span className="stat-number">{resources[3].downloadCount}</span>
                <span className="stat-label">Downloads</span>
              </div>
              <div className="stat">
                <span className="stat-number">★★★★★</span>
                <span className="stat-label">{resources[3].rating}</span>
              </div>
            </div>
            <button className="use-resource-btn">Use Calculator</button>
          </div>
          <div className="featured-image">
            <div className="calculator-icon">🧮</div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-header">
                <div className="resource-type">{resource.type}</div>
                <div className="resource-rating">★★★★★ {resource.rating}</div>
              </div>
              <h3>{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
              <div className="resource-footer">
                <div className="download-count">{resource.downloadCount} downloads</div>
                <button className="resource-btn">
                  {resource.type === 'Link' ? 'Visit Link' : 
                   resource.type === 'Calculator' ? 'Use Tool' : 'Download'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="quick-links-section">
          <h2>Quick Links</h2>
          <div className="links-grid">
            <div className="link-category">
              <h3>Government Portals</h3>
              <ul>
                <li><a href="#" target="_blank">Income Tax Department</a></li>
                <li><a href="#" target="_blank">GST Portal</a></li>
                <li><a href="#" target="_blank">MCA Portal</a></li>
                <li><a href="#" target="_blank">EPFO Portal</a></li>
              </ul>
            </div>
            <div className="link-category">
              <h3>Professional Bodies</h3>
              <ul>
                <li><a href="#" target="_blank">ICAI Official Website</a></li>
                <li><a href="#" target="_blank">ICSI Portal</a></li>
                <li><a href="#" target="_blank">ICWAI Portal</a></li>
                <li><a href="#" target="_blank">SEBI Portal</a></li>
              </ul>
            </div>
            <div className="link-category">
              <h3>Banking & Finance</h3>
              <ul>
                <li><a href="#" target="_blank">RBI Official Website</a></li>
                <li><a href="#" target="_blank">Banking Ombudsman</a></li>
                <li><a href="#" target="_blank">Credit Information Bureau</a></li>
                <li><a href="#" target="_blank">NSE India</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
