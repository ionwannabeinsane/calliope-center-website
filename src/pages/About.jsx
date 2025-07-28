import React from 'react';
import './HeroSection.css';
import teamCollaborationImg from '../assets/team-collaboration.jpg';
import researchMicroscopeImg from '../assets/research-microscope.jpg';

const imageStyle = {
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
  margin: '2rem auto',
  display: 'block'
};

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 2rem'
};

const sectionStyle = {
  marginBottom: '3rem',
  textAlign: 'left'
};

const About = () => (
  <div>
    <div className="hero-section">
      <h1>About Us</h1>
      <p className="hero-subtext">Learn more about our story, mission, and the passionate team behind the Calliope Center.</p>
    </div>
    
    <div className="page-content" style={contentStyle}>
      <div style={sectionStyle}>
        <h2>Our Mission</h2>
        <p>The Calliope Center is dedicated to supporting children in Austin affected by rare diseases by improving medical navigation and building a strong, compassionate community. We believe every child deserves access to comprehensive care and every family deserves support on their journey.</p>
        
        <img src={teamCollaborationImg} alt="Diverse team collaborating on digital project" style={imageStyle} />
        
        <h2>Our Vision</h2>
        <p>We envision a world where children with rare diseases receive the specialized care they need, families feel supported and empowered, and communities come together to create lasting positive change. Through collaboration, innovation, and compassion, we're building a brighter future for all.</p>
      </div>

      <div style={sectionStyle}>
        <h2>Our Approach</h2>
        <p>At the Calliope Center, we take a holistic approach to care that addresses not just medical needs, but also emotional, social, and practical challenges that families face. Our team combines medical expertise with deep compassion and community understanding.</p>
        
        <img src={researchMicroscopeImg} alt="Researcher examining samples under microscope" style={imageStyle} />
        
        <h2>Research & Innovation</h2>
        <p>We're committed to advancing the understanding and treatment of rare diseases through research, collaboration with medical professionals, and staying at the forefront of medical innovation. Our work helps not just the families we serve directly, but contributes to the broader rare disease community.</p>
      </div>

      <div style={sectionStyle}>
        <h2>Community Impact</h2>
        <p>Since our founding, we've helped countless families navigate the complex world of rare disease care. From providing respite care training to building supportive communities, we're making a real difference in the lives of children and families across Austin.</p>
        
        <h2>Get Involved</h2>
        <p>Whether you're a family seeking support, a healthcare professional looking to collaborate, or someone who wants to make a difference, there are many ways to get involved with the Calliope Center. Together, we can create a more supportive and understanding world for children with rare diseases.</p>
      </div>
    </div>
  </div>
);

export default About; 