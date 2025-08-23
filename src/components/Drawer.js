import React, { useState } from 'react';
import './Drawer.css';

const Drawer = ({ onPageChange, currentPage }) => {
  const [collapsed, setCollapsed] = useState(false);

  const socialLinks = [
    { icon: 'fab fa-twitter', url: 'https://twitter.com', platform: 'Twitter' },
    { icon: 'fab fa-facebook', url: 'https://facebook.com', platform: 'Facebook' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com', platform: 'Instagram' },
    { icon: 'fab fa-github', url: 'https://github.com', platform: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com', platform: 'LinkedIn' }
  ];

  const navigationItems = [
    { icon: '👤', label: 'About', page: 'about' },
    { icon: '📄', label: 'Resume', page: 'resume' },
    { icon: '✉️', label: 'Contact', page: 'contact' }
  ];

  const handlePageChange = (page) => {
    onPageChange(page);
    if (window.innerWidth <= 768) {
      setCollapsed(true);
    }
  };

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
              src="/Mithun_Jain.jpg"
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
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="navigation">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(item.page)}
              className={`nav-item ${currentPage === item.page ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="drawer-footer">
          <span className="footer-text">
            Designed by{' '}
            <a href="mailto:mithunjain755@gmail.com" className="footer-link">D.Mithun Jain</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Drawer;
