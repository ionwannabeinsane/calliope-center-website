import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import leoImg from '../assets/leo.jpg';
import leifImg from '../assets/leif.jpg';
import './HeroSection.css';

const profileImgStyle = {
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '50%',
  display: 'block',
  margin: '0 auto 1rem auto',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
};

const glassStyle = {
  background: 'rgba(255,255,255,0.18)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  border: '1px solid rgba(255,255,255,0.28)',
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  borderRadius: '24px',
  padding: '2rem 1.5rem',
  marginBottom: '2rem',
  maxWidth: '100%',
};

const Team = () => (
  <div>
    <div className="hero-section">
      <h1>Our Team</h1>
      <p className="hero-subtext">Meet the passionate people behind the Calliope Center.</p>
    </div>
    <div className="page-content" style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <div style={glassStyle}>
        <img src={leifImg} alt="Leif Ramirez" style={profileImgStyle} />
        <h2>Leif Ramirez, Co-Founder</h2>
        <p>A current high school student, Leif is a passionate advocate for rare disease research and holistic care. As a co-founder of the Calliope Center, he brings vision, leadership, and a commitment to building supportive communities for children and families.</p>
        <a href="https://www.linkedin.com/in/leif-ramirez-0978bb271/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#0A66C2' }}>
          <FaLinkedin size={28} />
        </a>
      </div>
      <div style={glassStyle}>
        <img src={leoImg} alt="Leo Ramirez" style={profileImgStyle} />
        <h2>Leo Ramirez, Co-Founder</h2>
        <p>Leo is dedicated to advancing innovative solutions in healthcare and community support. As a co-founder, he leverages his experience and drive to empower families and foster collaboration in the rare disease space.</p>
        <a href="https://www.linkedin.com/in/leoramirez/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#0A66C2' }}>
          <FaLinkedin size={28} />
        </a>
      </div>
    </div>
  </div>
);

export default Team; 