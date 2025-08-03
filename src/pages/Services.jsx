import React from 'react';
import './HeroSection.css';
import medicalCareImg from '../assets/medical-care.jpg';
import patientConsultationImg from '../assets/patient-consultation.jpg';

const services = [
  {
    title: 'Specialized care for children with rare diseases',
    description: 'Comprehensive, individualized medical and therapeutic care tailored to the unique needs of children living with rare diseases.',
    image: medicalCareImg,
    imageAlt: 'Healthcare professionals providing care to a young child'
  },
  {
    title: 'Respite care training & service',
    description: 'Training and support for families and caregivers, as well as access to trusted respite care providers for temporary relief.',
    image: patientConsultationImg,
    imageAlt: 'Medical professional consulting with patient and family member'
  },
  {
    title: 'Community building across the Austin area',
    description: 'Events, meetups, and programs designed to connect families, professionals, and advocates throughout the Austin community.',
    image: null,
    imageAlt: null
  },
  {
    title: 'Family support services',
    description: 'Emotional, social, and practical support for families navigating the challenges of rare disease care.',
    image: null,
    imageAlt: null
  },
  {
    title: 'Developmental care',
    description: 'Therapies and interventions to support the developmental, educational, and social growth of children with rare diseases.',
    image: null,
    imageAlt: null
  },
  {
    title: 'Transition support from adolescence to adulthood',
    description: 'Guidance and resources to help young people and their families navigate the transition to adult care and independent living.',
    image: null,
    imageAlt: null
  }
];

const serviceCardStyle = {
  background: 'rgba(255,255,255,0.18)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  border: '1px solid rgba(255,255,255,0.28)',
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  borderRadius: '24px',
  padding: '2rem',
  marginBottom: '2rem',
  maxWidth: '100%'
};

const imageStyle = {
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
  margin: '1rem auto',
  display: 'block'
};

const Services = () => (
  <div>
    <div className="hero-section">
      <h1>Services & Programs</h1>
      <p className="hero-subtext">Discover our core offerings designed to support children with rare diseases and their families.</p>
    </div>
    <div className="page-content" style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 2rem' }}>
      {services.map((service, idx) => (
        <div key={idx} style={serviceCardStyle}>
          <h2 style={{ marginBottom: '1rem', color: '#6A0DAD', textAlign: 'center' }}>{service.title}</h2>
          {service.image && (
            <img src={service.image} alt={service.imageAlt} style={imageStyle} />
          )}
          <p style={{ margin: '1rem 0 0 0', textAlign: 'center', lineHeight: '1.6' }}>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services; 