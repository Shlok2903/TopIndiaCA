import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Industry News', 'Regulatory Updates', 'Articles', 'Interviews'];

  const blogPosts = [
    {
      id: 1,
      title: 'New GST Compliance Guidelines Released for 2024',
      category: 'Regulatory Updates',
      date: 'Dec 15, 2024',
      author: 'Rajesh Kumar',
      excerpt: 'The latest GST compliance guidelines bring significant changes to filing procedures and documentation requirements.',
      content: 'The Central Board of Indirect Taxes and Customs (CBIC) has released comprehensive guidelines for GST compliance in 2024. These guidelines introduce new e-invoicing requirements, updated return filing procedures, and enhanced documentation standards...',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Digital Transformation in Indian Accounting Firms',
      category: 'Industry News',
      date: 'Dec 12, 2024',
      author: 'Sunita Mehta',
      excerpt: 'How technology is revolutionizing the accounting profession and improving client services.',
      content: 'The accounting industry in India is undergoing a massive digital transformation. From cloud-based accounting software to AI-powered financial analysis, firms are adopting new technologies to enhance efficiency and accuracy...',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Interview with CA Amit Patel: Future of Financial Planning',
      category: 'Interviews',
      date: 'Dec 10, 2024',
      author: 'Editorial Team',
      excerpt: 'Exclusive interview with leading CA Amit Patel on emerging trends in financial planning and advisory services.',
      content: 'In this exclusive interview, CA Amit Patel shares insights on the evolving landscape of financial planning in India. He discusses the impact of digitalization, changing client expectations, and the role of technology in advisory services...',
      readTime: '10 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Income Tax Return Filing: Common Mistakes to Avoid',
      category: 'Articles',
      date: 'Dec 8, 2024',
      author: 'Priya Sharma',
      excerpt: 'A comprehensive guide to avoiding common mistakes while filing income tax returns.',
      content: 'Filing income tax returns can be complex, and even small mistakes can lead to penalties or delays in processing. This article covers the most common errors taxpayers make and provides practical tips to avoid them...',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'CBDT Announces Extension for ITR Filing Deadline',
      category: 'Regulatory Updates',
      date: 'Dec 5, 2024',
      author: 'Editorial Team',
      excerpt: 'The Central Board of Direct Taxes extends the deadline for certain categories of taxpayers.',
      content: 'In a recent announcement, the CBDT has extended the income tax return filing deadline for specific categories of taxpayers. This extension provides relief to taxpayers who may have faced challenges in meeting the original deadline...',
      readTime: '3 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Sustainable Finance: A Growing Trend in Corporate India',
      category: 'Industry News',
      date: 'Dec 3, 2024',
      author: 'Vikram Singh',
      excerpt: 'Exploring the rise of sustainable finance practices and ESG reporting in Indian corporations.',
      content: 'Sustainable finance is becoming increasingly important in India\'s corporate landscape. Companies are integrating environmental, social, and governance (ESG) factors into their financial strategies and reporting...',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h1>Blog & News</h1>
          <p className="page-subtitle">Stay updated with the latest industry news, regulatory updates, and expert insights</p>
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

        {/* Featured Article */}
        <div className="featured-article">
          <div className="featured-content">
            <div className="featured-meta">
              <span className="category-tag">{blogPosts[0].category}</span>
              <span className="article-date">{blogPosts[0].date}</span>
            </div>
            <h2>{blogPosts[0].title}</h2>
            <p className="featured-excerpt">{blogPosts[0].excerpt}</p>
            <div className="featured-author">
              <span>By {blogPosts[0].author}</span>
              <span className="read-time">{blogPosts[0].readTime}</span>
            </div>
            <button className="read-more-btn">Read Full Article</button>
          </div>
          <div className="featured-image">
            <div className="placeholder-image">Featured Image</div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredPosts.slice(1).map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <div className="placeholder-image">Blog Image</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="category-tag">{post.category}</span>
                  <span className="article-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="author">By {post.author}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates in accounting and finance</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
