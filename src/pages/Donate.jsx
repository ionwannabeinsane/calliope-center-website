import React from 'react';
import './HeroSection.css';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaHandshake } from 'react-icons/fa';

const impactCardStyle = {
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
  fontSize: '2.5rem',
  color: '#6A0DAD',
  marginBottom: '1rem'
};

const Donate = () => (
  <div>
    <div className="hero-section">
      <h1>Support the Calliope Center</h1>
      <p className="hero-subtext">Your generosity helps us provide vital services to children with rare diseases and their families in Austin.</p>
    </div>
    <div className="page-content" style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 2rem' }}>
      
      <div style={impactCardStyle}>
        <FaHeart style={iconStyle} />
        <h2 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>Your Impact</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Every donation directly supports our mission to improve the lives of children with rare diseases 
          and their families through comprehensive care, community building, and advocacy.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: '#6A0DAD' }}>$50</h3>
            <p style={{ fontSize: '0.9rem' }}>Provides respite care training for one family</p>
          </div>
          <div>
            <h3 style={{ color: '#6A0DAD' }}>$100</h3>
            <p style={{ fontSize: '0.9rem' }}>Supports a month of community events</p>
          </div>
          <div>
            <h3 style={{ color: '#6A0DAD' }}>$250</h3>
            <p style={{ fontSize: '0.9rem' }}>Funds specialized care consultations</p>
          </div>
        </div>
      </div>

      <div style={impactCardStyle}>
        <FaHandHoldingHeart style={iconStyle} />
        <h2 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>Ways to Give</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h3>One-Time Donation</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Make a single contribution to support our programs</p>
            <button style={{
              background: '#6A0DAD',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Donate Now
            </button>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h3>Monthly Giving</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Become a sustaining donor with monthly contributions</p>
            <button style={{
              background: '#6A0DAD',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Monthly Donation
            </button>
          </div>
        </div>
      </div>

      <div style={impactCardStyle}>
        <FaUsers style={iconStyle} />
        <h2 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>Programs You Support</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div>
            <FaGraduationCap style={{ fontSize: '1.5rem', color: '#6A0DAD', marginBottom: '0.5rem' }} />
            <h4>Respite Care Training</h4>
            <p style={{ fontSize: '0.9rem' }}>Training families and caregivers in specialized care techniques</p>
          </div>
          <div>
            <FaHandshake style={{ fontSize: '1.5rem', color: '#6A0DAD', marginBottom: '0.5rem' }} />
            <h4>Community Building</h4>
            <p style={{ fontSize: '0.9rem' }}>Creating supportive networks for families across Austin</p>
          </div>
          <div>
            <FaHeart style={{ fontSize: '1.5rem', color: '#6A0DAD', marginBottom: '0.5rem' }} />
            <h4>Family Support Services</h4>
            <p style={{ fontSize: '0.9rem' }}>Emotional and practical support for families in need</p>
          </div>
          <div>
            <FaUsers style={{ fontSize: '1.5rem', color: '#6A0DAD', marginBottom: '0.5rem' }} />
            <h4>Specialized Care</h4>
            <p style={{ fontSize: '0.9rem' }}>Individualized medical and therapeutic care programs</p>
          </div>
        </div>
      </div>

      <div style={{ ...impactCardStyle, marginTop: '3rem' }}>
        <h2 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>Thank You</h2>
        <p style={{ lineHeight: '1.6' }}>
          Your support makes a real difference in the lives of children with rare diseases and their families. 
          Together, we're building a more compassionate and supportive community in Austin.
        </p>
        <p style={{ lineHeight: '1.6', marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          The Calliope Center is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
        </p>
      </div>
    </div>
  </div>
);

export default Donate; 