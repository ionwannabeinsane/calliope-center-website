import React from 'react';
import './HeroSection.css';
import { FaPenFancy } from 'react-icons/fa';

const contentCardStyle = {
  background: 'rgba(255,255,255,0.18)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  border: '1px solid rgba(255,255,255,0.28)',
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  borderRadius: '24px',
  padding: '3rem 2rem',
  marginBottom: '2rem',
  maxWidth: '100%',
  textAlign: 'center'
};

const iconStyle = {
  fontSize: '4rem',
  color: '#6A0DAD',
  marginBottom: '2rem'
};

const Blog = () => (
  <div>
    <div className="hero-section">
      <h1>Stories & Blog</h1>
      <p className="hero-subtext">Read and share stories from our community, learn about rare diseases, and stay updated on our latest programs and events.</p>
    </div>
    <div className="page-content" style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 2rem' }}>
      
      <div style={contentCardStyle}>
        <FaPenFancy style={iconStyle} />
        <h2 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>Coming Soon</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '2rem', fontSize: '1.1rem' }}>
          We're working on bringing you inspiring stories from our community, educational content about rare diseases, 
          and updates about our programs and events.
        </p>
        <p style={{ lineHeight: '1.6', fontSize: '1rem', color: '#666' }}>
          Check back soon for our first blog posts, or contact us if you'd like to share your story.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>Share Your Story</h3>
        <p style={{ lineHeight: '1.6', marginBottom: '2rem' }}>
          Have a story to share? We'd love to hear from families, healthcare professionals, and community members 
          about their experiences with rare diseases and the Calliope Center.
        </p>
        <button style={{
          background: '#6A0DAD',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Contact Us
        </button>
      </div>
    </div>
  </div>
);

export default Blog; 