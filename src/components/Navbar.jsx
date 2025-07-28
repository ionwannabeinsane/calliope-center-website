import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import SocialIcons from './SocialIcons';
import butterflyLogo from '../assets/butterfly.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src={butterflyLogo} alt="Calliope Center Logo" style={{ height: '48px', width: 'auto', verticalAlign: 'middle' }} />
    </div>
    <ul className="navbar-links">
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/team">Our Team</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/newsletter">Newsletter</NavLink></li>
    </ul>
    <div className="navbar-actions">
      <SocialIcons />
      <NavLink to="/donate" className="donate-btn">Donate</NavLink>
    </div>
  </nav>
);

export default Navbar; 