import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [selectedType, setSelectedType] = useState('All');

  const eventTypes = ['All', 'Conferences', 'Webinars', 'Tax Calendar', 'Workshops'];

  const upcomingEvents = [
    {
      id: 1,
      title: 'National CA Conference 2024',
      type: 'Conferences',
      date: 'Jan 15, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Mumbai, Maharashtra',
      description: 'Annual conference featuring industry leaders discussing the future of accounting and finance.',
      speakers: ['Rajesh Kumar', 'Sunita Mehta', 'Amit Patel'],
      price: '₹2,500',
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'GST Compliance Workshop',
      type: 'Workshops',
      date: 'Jan 20, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Delhi, NCR',
      description: 'Comprehensive workshop on GST compliance, filing procedures, and recent updates.',
      speakers: ['Priya Sharma', 'Vikram Singh'],
      price: '₹1,500',
      status: 'Upcoming'
    },
    {
      id: 3,
      title: 'Digital Accounting Trends Webinar',
      type: 'Webinars',
      date: 'Jan 25, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Online',
      description: 'Explore the latest trends in digital accounting and automation tools.',
      speakers: ['Anita Reddy'],
      price: 'Free',
      status: 'Upcoming'
    },
    {
      id: 4,
      title: 'Income Tax Return Filing Deadline',
      type: 'Tax Calendar',
      date: 'Mar 31, 2025',
      time: 'All Day',
      location: 'Nationwide',
      description: 'Last date for filing income tax returns for the financial year 2023-24.',
      speakers: [],
      price: 'N/A',
      status: 'Important Date'
    },
    {
      id: 5,
      title: 'Audit Standards Update Seminar',
      type: 'Conferences',
      date: 'Feb 10, 2025',
      time: '9:30 AM - 5:30 PM',
      location: 'Bangalore, Karnataka',
      description: 'Understanding the latest audit standards and implementation guidelines.',
      speakers: ['Rajesh Kumar', 'Sunita Mehta'],
      price: '₹3,000',
      status: 'Upcoming'
    },
    {
      id: 6,
      title: 'GST Return Filing Deadline',
      type: 'Tax Calendar',
      date: 'Feb 20, 2025',
      time: 'All Day',
      location: 'Nationwide',
      description: 'Monthly GST return filing deadline for January 2025.',
      speakers: [],
      price: 'N/A',
      status: 'Important Date'
    }
  ];

  const filteredEvents = selectedType === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedType);

  return (
    <div className="events-page">
      <div className="container">
        <div className="events-header">
          <h1>Events & Calendar</h1>
          <p className="page-subtitle">Stay updated with upcoming conferences, webinars, and important tax calendar dates</p>
        </div>

        {/* Event Type Filter */}
        <div className="event-filter">
          {eventTypes.map(type => (
            <button
              key={type}
              className={`filter-btn ${selectedType === type ? 'active' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Featured Event */}
        <div className="featured-event">
          <div className="featured-content">
            <div className="event-badge">Featured Event</div>
            <h2>{upcomingEvents[0].title}</h2>
            <div className="event-details">
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <span>{upcomingEvents[0].date}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🕒</span>
                <span>{upcomingEvents[0].time}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>{upcomingEvents[0].location}</span>
              </div>
            </div>
            <p className="event-description">{upcomingEvents[0].description}</p>
            <div className="event-speakers">
              <strong>Speakers:</strong> {upcomingEvents[0].speakers.join(', ')}
            </div>
            <div className="event-footer">
              <span className="event-price">{upcomingEvents[0].price}</span>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
          <div className="featured-image">
            <div className="placeholder-image">Event Image</div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.slice(1).map(event => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <div className="event-type">{event.type}</div>
                <div className={`event-status ${event.status.toLowerCase().replace(' ', '-')}`}>
                  {event.status}
                </div>
              </div>
              <h3>{event.title}</h3>
              <div className="event-meta">
                <div className="meta-item">
                  <span className="meta-icon">📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🕒</span>
                  <span>{event.time}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">📍</span>
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="event-description">{event.description}</p>
              {event.speakers.length > 0 && (
                <div className="event-speakers">
                  <strong>Speakers:</strong> {event.speakers.join(', ')}
                </div>
              )}
              <div className="event-footer">
                <span className="event-price">{event.price}</span>
                <button className="register-btn">Register</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tax Calendar Section */}
        <div className="tax-calendar-section">
          <h2>Important Tax Calendar Dates</h2>
          <div className="calendar-grid">
            <div className="calendar-month">
              <h3>January 2025</h3>
              <div className="calendar-dates">
                <div className="calendar-date">
                  <span className="date">15</span>
                  <span className="event">CA Conference</span>
                </div>
                <div className="calendar-date">
                  <span className="date">20</span>
                  <span className="event">GST Workshop</span>
                </div>
                <div className="calendar-date">
                  <span className="date">25</span>
                  <span className="event">Digital Trends Webinar</span>
                </div>
              </div>
            </div>
            <div className="calendar-month">
              <h3>February 2025</h3>
              <div className="calendar-dates">
                <div className="calendar-date">
                  <span className="date">10</span>
                  <span className="event">Audit Standards Seminar</span>
                </div>
                <div className="calendar-date">
                  <span className="date">20</span>
                  <span className="event">GST Filing Deadline</span>
                </div>
              </div>
            </div>
            <div className="calendar-month">
              <h3>March 2025</h3>
              <div className="calendar-dates">
                <div className="calendar-date">
                  <span className="date">31</span>
                  <span className="event">ITR Filing Deadline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
