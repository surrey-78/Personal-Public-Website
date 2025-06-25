import React from 'react';
import '../styles/Resume.css';
import profileImage from '../assets/profile.jpg';

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <div className="resume-container">
        {/* Resume Header */}
        <div className="resume-header">
          <img src={profileImage} alt="Profile" className="resume-photo" />
          <div className="resume-name-section">
            <h1 className="resume-name">Surendhar K</h1>
            <p className="resume-contact">
              <strong>Email:</strong> surendhark240@gmail.com | 
              <strong> Phone:</strong> +91 82208 28187 | 
              <strong> LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/surendhar-k-9477b9256"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </p>
          </div>
        </div>

        {/* Resume Sections */}
        <h2>Profile</h2>
        <p>
          Experienced professional with a strong background in technology-related roles. Proficient in software development,
          system administration, and technical support. Skilled in problem-solving and optimizing performance. Capable of
          managing projects and collaborating effectively with teams. Committed to continuous learning and staying current
          with industry trends to contribute to organizational success.
        </p>

        <h2>Education</h2>
        <ul>
          <li><strong>Saveetha Engineering College, Chennai (2022–2026)</strong><br />B.E. in Computer Science Engineering – CGPA: 8.2/10</li>
          <li><strong>Kendriya Vidyalaya No.1, Kalpakkam (2020–2022)</strong><br />Higher Secondary Education – 81.5%</li>
          <li><strong>Kendriya Vidyalaya No.1, Kalpakkam (2010–2019)</strong><br />Senior Secondary Education – 89%</li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li><strong>Patient Management System:</strong> Java, Spring Boot, MongoDB, React.js</li>
          <li><strong>Blog Web Platform:</strong> React, Node.js, MongoDB, Express, JWT</li>
          <li><strong>Keylogger (Educational):</strong> Python, Smtplib, Pynput</li>
          <li><strong>Food Waste Emission Prediction:</strong> Python, Sklearn, Pandas</li>
          <li><strong>Sustainable Food Waste Management:</strong> MERN Stack</li>
          <li><strong>Weather App:</strong> React.js, OpenWeatherMap API</li>
          <li><strong>Cipher App:</strong> React.js</li>
          <li><strong>Faculty Attendance & Salary System:</strong> MERN Stack</li>
        </ul>

        <h2>Achievements & Hackathons</h2>
        <ul>
          <li>Microsoft AI Engineer Associate (Certified)</li>
          <li>AWS Cloud Practitioner Essentials (Certified)</li>
          <li>Best Event Award – Cryptographic Treasure Hunt (Drestien'24)</li>
          <li>1st Place – Dash Dashboard Hackathon (Jeppiaar Engineering College)</li>
          <li>Internship – NSIC, Ekkattuthangal</li>
          <li>Volleyball: Regional (Under-19) – KV Sulur, Coimbatore</li>
          <li>Volleyball: Zonal Winner (Under-19) – KV Ashok Nagar, Chennai</li>
          <li>Volleyball: Zonal Runner-up (Under-14) – KV Ashok Nagar, Chennai</li>
        </ul>

        <h2>Technical Skills</h2>
        <ul>
          <li>Languages: Java, Python, C, C++</li>
          <li>Frameworks: Spring Boot, Hibernate, Maven</li>
          <li>Frontend: ReactJS, HTML, CSS, JavaScript</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Databases: MongoDB, MySQL</li>
          <li>Concepts: Data Structures, OOPs, Machine Learning</li>
          <li>Other: Linux Administration</li>
        </ul>

        <h2>Soft Skills</h2>
        <ul>
          <li>Teamwork, Leadership, Time Management</li>
          <li>Effective Communication, Adaptability</li>
          <li>Critical Thinking, Collaboration, Problem Solving</li>
        </ul>

        <h2>Languages</h2>
        <ul>
          <li>English – Read, Write, Speak</li>
          <li>Hindi – Read, Write, Speak</li>
          <li>Tamil – Read, Speak</li>
        </ul>
      </div>

      {/* Download button linked to a public PDF */}
      <div className="print-button-wrapper">
        <a
          href="/Surendhar-K-resume-new.pdf"
          download="Surendhar_K_Resume.pdf"
          className="print-button"
        >
          Download as PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;
