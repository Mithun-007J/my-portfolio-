import React from 'react';
import './Resume.css';

const Resume = () => {
  const education = [
    {
      degree: 'DIPLOMA COMPUTER SCIENCE & ENGINEERING',
      period: '2023 - 2026',
      institution: 'SDM Polytechnic, Ujire, IN',
      cgpa: '8.88/10'
    },
    {
      degree: 'DIPLOMA IN COMPUTER SCIENCE & ENGINEERING',
      period: '2015 - 2018',
      institution: 'SDM Polytechnic, Ujire, IN',
      cgpa: '6.5/10'
    }
  ];

  const experience = [
    {
      position: 'SOFTWARE DEVELOPEMENT ENGINEER - ANDROID/IOS',
      period: '2022 - Present',
      company: 'Nous Infosystems, Bengaluru',
      responsibilities: [
        'Working Mobile Application Developer using Flutter and React Native',
        'Developed Internal Application end to end for Attendance Tracking, Resource Management, Resume Extractor',
        'Developed Medical Porduct - "Medinous" in-house product',
        'Worked on Client Project as Web Developer'
      ]
    },
    {
      position: 'SOFTWARE DEVELOPMENT ENGINEER',
      period: '2021 - 2022',
      company: 'LogiSian, Bengaluru',
      responsibilities: [
        'Worked on https://logisian.in/careers/ the careers site for company using React JS',
        'Worked as Digital Marketer and performed SEO, Ads Management for 2-3 Sites',
        'Use Firestar library to interact with Firestore, NoSQL database',
        'Worked with Firebase to integrate it with React Apps'
      ]
    },
    {
      position: 'FREELANCE WEB DEVELOPER AND GRAPHIC DESIGNER',
      period: '2017 - 2024',
      company: 'Bengaluru, IN',
      responsibilities: []
    }
  ];

  return (
    <div className="resume-container">
      {/* Header Section */}
      <div className="resume-header">
        <h1>Resume</h1>
        <p>
          Are you searching for a Web Developer/Android/iOS Developer, Designer, Digital Marketer? 
          Wanna Hire me for your Vacant role? Check out my Resume here...
        </p>
        <a href="/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">View/Download Resume</a>
      </div>

      <div className="resume-content">
        {/* Left Column */}
        <div className="resume-left">
          {/* Summary Section */}
          <div className="resume-section">
            <h2>Summary</h2>
            <div className="summary-content">
              <h3>KISHAN NAYAK</h3>
              <p>
                Innovative and deadline-driven Web Developer with 4+ years of Freelance experience 
                designing and developing Web Application for many clients.
              </p>
              <div className="contact-list">
                <div className="contact-item">Bangalore, India</div>
                <div className="contact-item">+91 97406 84686</div>
                <div className="contact-item">kishannk11@gmail.com (Personal)</div>
                <div className="contact-item">contactkishan20@gmail.com (Business)</div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h2>Education</h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="period-badge">{edu.period}</div>
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <p className="cgpa">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="resume-right">
          {/* Professional Experience Section */}
          <div className="resume-section">
            <h2>Professional Experience</h2>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="period-badge">{exp.period}</div>
                    <h4>{exp.position}</h4>
                    <p className="company">{exp.company}</p>
                    {exp.responsibilities.length > 0 && (
                      <ul className="responsibilities">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
