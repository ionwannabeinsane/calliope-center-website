import React from 'react';
import './HeroSection.css';
import butterflyImg from '../assets/butterfly.png';
import communityGatheringImg from '../assets/community-gathering.jpg';
import { FaRegNewspaper, FaUsers, FaCalendarAlt, FaClipboardList, FaUserPlus, FaPenFancy } from 'react-icons/fa';

const panelStyle = {
  background: 'rgba(255,255,255,0.10)',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  padding: '1.5rem',
  margin: '2rem auto',
  maxWidth: '700px',
  color: '#fff',
  textAlign: 'center',
};

const cardStyle = {
  display: 'inline-block',
  width: '140px',
  margin: '0 1rem 1.5rem 1rem',
  verticalAlign: 'top',
  textAlign: 'center',
};

const iconBoxStyle = {
  width: '100px',
  height: '100px',
  background: 'rgba(255,255,255,0.18)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 0.5rem auto',
  fontSize: '2.5rem',
  color: '#6A0DAD',
};

const imageStyle = {
  width: '100%',
  maxWidth: '700px',
  height: 'auto',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
  margin: '2rem auto',
  display: 'block'
};

const Home = () => (
  <div>
    <div className="hero-section" style={{ textAlign: 'center' }}>
      <img src={butterflyImg} alt="Welcome Butterfly" style={{ maxWidth: '220px', width: '60%', margin: '0 auto 1.5rem auto', display: 'block', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }} />
      <h1>A haven of holistic services for children with rare diseases</h1>
      <p className="hero-subtext">Our mission is to support children in Austin affected by rare diseases by improving medical navigation and building a strong, compassionate community.</p>
      <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: '#fff', fontWeight: 500 }}>
        Welcome to the Calliope Center—where hope, care, and community come together.
      </p>
    </div>
    
    <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>Building Community Together</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Join our vibrant community of families, healthcare professionals, and advocates. 
          Together, we create a supportive network that empowers families and advances care for children with rare diseases.
        </p>
        <img src={communityGatheringImg} alt="Community gathering and workshop" style={imageStyle} />
      </div>
    </div>
    
    <div style={panelStyle}>
      <h2 style={{ marginTop: 0 }}>Blog Updates</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={cardStyle}>
          <div style={iconBoxStyle}><FaRegNewspaper /></div>
          <div><strong>New Service Launch</strong><br />We are excited to announce our new respite care training program! (Placeholder)</div>
        </div>
        <div style={cardStyle}>
          <div style={iconBoxStyle}><FaUsers /></div>
          <div><strong>Community Spotlight</strong><br />Meet the families making a difference in Austin. (Placeholder)</div>
        </div>
        <div style={cardStyle}>
          <div style={iconBoxStyle}><FaCalendarAlt /></div>
          <div><strong>Upcoming Event</strong><br />Join us for our annual awareness walk this fall. (Placeholder)</div>
        </div>
      </div>
    </div>
    <div style={panelStyle}>
      <h2 style={{ marginTop: 0 }}>Recent Activity</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={cardStyle}>
          <div style={iconBoxStyle}><FaClipboardList /></div>
          <div>Added new resources to the Family Support page. (Placeholder)</div>
        </div>
        <div style={cardStyle}>
          <div style={iconBoxStyle}><FaUserPlus /></div>
          <div>Welcomed two new volunteers to our team. (Placeholder)</div>
        </div>
        <div style={cardStyle}>
          <div style={iconBoxStyle}><FaPenFancy /></div>
          <div>Shared a new blog post on developmental care. (Placeholder)</div>
        </div>
      </div>
    </div>
  </div>
);

export default Home; 