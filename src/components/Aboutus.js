import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  const personalDetails = [
    { label: 'Birthday', value: '28 Dec 2007' },
    { label: 'Phone', value: '+91 6366636405' },
    { label: 'City', value: 'Mangalore, India' }
  ];

  const personalDetailsRight = [
    { label: 'Age', value: '18' },
    { label: 'Degree', value: 'Diploma, CS' },
    { label: 'Freelance', value: 'Available' }
  ];

  const careerStats = [
    { 
      icon: '😊', 
      number: '11', 
      label: 'Happy Clients',
      description: 'Satisfied customers who love our work'
    },
    { 
      icon: '💼', 
      number: '30', 
      label: 'Projects',
      description: 'Mobile, Web, UI/UX, Branding, Video, Marketing'
    },
    { 
      icon: '👥', 
      number: '6', 
      label: 'Active Team members',
      description: 'Skilled professionals working together'
    }
  ];

  const skills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3', percentage: 85 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'Video Editing', percentage: 70 },
    { name: 'Graphic Design', percentage: 80 },
    { name: 'Photoshop', percentage: 70 }
  ];

  return (
    <div className="aboutus-container">
      {/* About Section */}
      <section className="about-section">
        <div className="section-header">
          <h2>About</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate and creative designer with over 5 years of experience in web development, 
              mobile app development, and graphic design. I specialize in creating user-friendly, 
              responsive websites and mobile applications that deliver exceptional user experiences.
            </p>
            
            <div className="personal-details">
              <h3>Web Developer & Mobile Developer</h3>
              <div className="details-grid">
                <div className="details-left">
                  {personalDetails.map((detail, index) => (
                    <div key={index} className="detail-item">
                      <span className="detail-label">{detail.label}:</span>
                      <span className="detail-value">{detail.value}</span>
                    </div>
                  ))}
                </div>
                <div className="details-right">
                  {personalDetailsRight.map((detail, index) => (
                    <div key={index} className="detail-item">
                      <span className="detail-label">{detail.label}:</span>
                      <span className="detail-value">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-illustration">
            <div className="illustration-placeholder">
              <div className="desk-illustration">
                <div className="person">
                  <div className="head">
                    <div className="glasses"></div>
                  </div>
                  <div className="body"></div>
                </div>
                <div className="desk">
                  <div className="monitor"></div>
                  <div className="keyboard"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freelance Career Section */}
      <section className="career-section">
        <div className="section-header">
          <h2>Freelance Career</h2>
          <div className="underline"></div>
        </div>
        
        <div className="career-content">
          <p>
            I have been working as a freelance developer and designer for over 4 years, 
            helping businesses and individuals bring their digital ideas to life. 
            My journey has been filled with exciting projects and amazing clients.
          </p>
          
          <div className="stats-container">
            {careerStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <h2>Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-content">
          <p>
            I have developed expertise in various technologies and tools over the years. 
            Here's a breakdown of my technical skills and proficiency levels.
          </p>
          
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
