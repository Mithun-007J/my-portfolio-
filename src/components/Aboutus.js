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
          
          <div className="about-image">
            <img 
              src="/Mithun_Jain.jpg" 
              alt="Profile" 
              className="profile-image"
            />
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

      {/* Location Section */}
      <section className="location-section">
        <div className="section-header">
          <h2>My Location</h2>
          <div className="underline"></div>
        </div>
        
        <div className="location-content">
          <div className="location-info">
            <p>
              I'm based in Mangalore, India, and work with clients from around the world. 
              Feel free to reach out if you'd like to collaborate on exciting projects!
            </p>
            
            <div className="location-details">
              <div className="location-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Dhamrasthala, Kootadhakallu, Belthangady, Karnataka, India</span>
              </div>
              <div className="location-item">
                <i className="fas fa-city"></i>
                <span>Mangalore, Karnataka, India</span>
              </div>
              <div className="location-item">
                <i className="fas fa-globe"></i>
                <span>Available for Remote Work Worldwide</span>
              </div>
            </div>
          </div>
          
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62208.47267825811!2d74.79632182167966!3d12.914142240692818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827b3a4a4c2b3c7e!2sMangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1699881234567!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My Location - Mangalore, Karnataka, India"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
