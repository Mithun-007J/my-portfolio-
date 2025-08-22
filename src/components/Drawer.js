import React, { useState } from 'react';
import './Drawer.css';

const Drawer = () => {
  const [collapsed, setCollapsed] = useState(false);

  const socialLinks = [
    { icon: '🐦', url: '#', platform: 'Twitter' },
    { icon: 'f', url: '#', platform: 'Facebook' },
    { icon: '📷', url: '#', platform: 'Instagram' },
    { icon: '🐙', url: '#', platform: 'GitHub' },
    { icon: 'in', url: '#', platform: 'LinkedIn' }
  ];

  const navigationItems = [
    { icon: '🏠', label: 'Home', url: '#home' },
    { icon: '👤', label: 'About', url: '#about' },
    { icon: '📄', label: 'Resume', url: '#resume' },
    { icon: '💼', label: 'Portfolio', url: '#portfolio' },
    { icon: '🖥️', label: 'Services', url: '#services' },
    { icon: '✉️', label: 'Contact', url: '#contact' }
  ];

  return (
    <>
      <button
        className="drawer-toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Open menu' : 'Close menu'}
      >
        {collapsed ? '☰' : '✕'}
      </button>

      <div className={`drawer${collapsed ? ' collapsed' : ''}`}>
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-picture">
            <img
              src="Mithun_Jain.jpg"
              alt="D.Mithun Jain"
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="profile-placeholder" style={{ display: 'none' }}>
              <div className="placeholder-avatar">KN</div>
            </div>
          </div>
          <h2 className="profile-name">D.Mithun Jain</h2>
        </div>

        {/* Social Media Icons */}
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="social-icon"
              title={social.platform}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="navigation">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="nav-item"
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="drawer-footer">
          <span className="footer-text">
            Designed by{' '}
            <a href="#" className="footer-link">D.Mithun Jain</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Drawer;
