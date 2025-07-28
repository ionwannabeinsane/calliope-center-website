import React from 'react';
import './HeroSection.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactCardStyle = {
  background: 'rgba(255,255,255,0.18)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  border: '1px solid rgba(255,255,255,0.28)',
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  borderRadius: '24px',
  padding: '2rem',
  marginBottom: '2rem',
  maxWidth: '100%',
  textAlign: 'center'
};

const iconStyle = {
  fontSize: '2rem',
  color: '#6A0DAD',
  marginBottom: '1rem'
};

const Contact = () => (
  <div>
    <div className="hero-section">
      <h1>Contact Us</h1>
      <p className="hero-subtext">Get in touch with our team. We're here to help and answer any questions you may have.</p>
    </div>
    <div className="page-content" style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 2rem' }}>
      <div style={contactCardStyle}>
        <FaPhone style={iconStyle} />
        <h3>Phone</h3>
        <p style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>(512) 555-0123 (Placeholder)</p>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>Monday - Friday, 9:00 AM - 5:00 PM (Placeholder)</p>
      </div>

      <div style={contactCardStyle}>
        <FaEnvelope style={iconStyle} />
        <h3>Email</h3>
        <p style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>info@calliopecenter.org (Placeholder)</p>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>We typically respond within 24 hours</p>
      </div>

      <div style={contactCardStyle}>
        <FaMapMarkerAlt style={iconStyle} />
        <h3>Location</h3>
        <p style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Austin, Texas</p>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>Serving the greater Austin metropolitan area</p>
      </div>

      <div style={contactCardStyle}>
        <FaClock style={iconStyle} />
        <h3>Office Hours</h3>
        <p style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Monday - Friday</p>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>9:00 AM - 5:00 PM CST</p>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>Emergency support available 24/7</p>
      </div>

      <div style={{ ...contactCardStyle, marginTop: '3rem' }}>
        <h2 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>Get Involved</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Whether you're a family seeking support, a healthcare professional looking to collaborate, 
          or someone who wants to volunteer or donate, we'd love to hear from you.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          Our team is committed to providing compassionate support and connecting you with the resources you need.
        </p>
      </div>
    </div>
  </div>
);

export default Contact; 