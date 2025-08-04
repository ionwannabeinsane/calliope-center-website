import React from 'react';
import { FaInstagram, FaXTwitter, FaTiktok, FaFacebook } from 'react-icons/fa6';
import './SocialIcons.css';

const icons = [
  { name: 'Instagram', href: 'https://www.instagram.com/calliopecenter/', icon: <FaInstagram /> },
  { name: 'X', href: 'https://twitter.com/CalliopeCenter', icon: <FaXTwitter /> },
  { name: 'TikTok', href: '#', icon: <FaTiktok /> },
  { name: 'Facebook', href: '#', icon: <FaFacebook /> },
];

const SocialIcons = () => {
  const handleClick = (name, href) => {
    console.log(`Clicking ${name} link: ${href}`);
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="social-icons">
      {icons.map(({ name, href, icon }) => (
        <a 
          key={name} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={name} 
          className="social-icon"
          onClick={(e) => {
            e.preventDefault();
            handleClick(name, href);
          }}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 