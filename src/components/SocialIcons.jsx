import React from 'react';
import { FaInstagram, FaXTwitter, FaTiktok, FaFacebook } from 'react-icons/fa6';
import './SocialIcons.css';

const icons = [
  { name: 'Instagram', href: '#', icon: <FaInstagram /> },
  { name: 'X', href: '#', icon: <FaXTwitter /> },
  { name: 'TikTok', href: '#', icon: <FaTiktok /> },
  { name: 'Facebook', href: '#', icon: <FaFacebook /> },
];

const SocialIcons = () => (
  <div className="social-icons">
    {icons.map(({ name, href, icon }) => (
      <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="social-icon">
        {icon}
      </a>
    ))}
  </div>
);

export default SocialIcons; 