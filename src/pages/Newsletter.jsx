import React, { useState } from 'react';
import './HeroSection.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Reset the submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div>
      <div className="hero-section">
        <h1>Newsletter</h1>
        <p className="hero-subtext">Stay connected with the latest updates from the Calliope Center</p>
      </div>
      <div className="page-content">
        <div className="coming-soon-container">
          <div className="coming-soon-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="coming-soon-title">Coming Soon!</h2>
          <p className="coming-soon-description">
            We're working hard to bring you a comprehensive newsletter with the latest research updates, 
            patient stories, and community events. Our newsletter will feature:
          </p>
          <ul className="coming-soon-features">
            <li>Latest rare disease research breakthroughs</li>
            <li>Patient and family stories</li>
            <li>Upcoming events and community gatherings</li>
            <li>Treatment updates and clinical trial information</li>
            <li>Expert insights from our medical team</li>
          </ul>
          
          <div className="notification-signup">
            <h3>Get Notified When We Launch</h3>
            <p>Be the first to know when our newsletter goes live!</p>
            <form onSubmit={handleSubmit} className="notification-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="email-input"
              />
              <button type="submit" className="notify-button">
                {isSubmitted ? 'Thank You!' : 'Notify Me'}
              </button>
            </form>
            {isSubmitted && (
              <p className="success-message">
                Thanks! We'll notify you as soon as our newsletter is ready.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 