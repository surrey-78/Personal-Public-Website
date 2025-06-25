import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section className="about-container">
      <div className="about-left">
        <img src={profileImage} alt="Surendhar K" className="about-img" />
      </div>

      <div className="about-right">
        <h5 className="highlight">About Me</h5>
        <h1 className="about-title">Surendhar K</h1>
        <p className="about-subtext">
          Experienced professional with a strong background in technology-related roles. Proficient in software development,
          system administration, and technical support. Skilled in problem-solving and optimizing performance. Capable of
          managing projects and collaborating effectively with teams. Committed to continuous learning and staying current
          with industry trends to contribute to organizational success.
        </p>

        <div className="info-grid">
          <div><strong>Email:</strong> surendhark240@gmail.com</div>
          <div><strong>Phone:</strong> +91 82208 28187</div>
          <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/surendhar-k-9477b9256" target="_blank" rel="noopener noreferrer">View Profile</a></div>
          <div><strong>Freelance:</strong> Available</div>
        </div>

        <h2 className="section-title">Education</h2>
        <ul>
          <li><strong>Saveetha Engineering College, Chennai (2022 – 2026)</strong><br />
            Bachelor of Engineering (B.E), Computer Science Engineering<br />
            CGPA: 8.2/10
          </li>
          <li><strong>Kendriya Vidyalaya No.1, Kalpakkam (2020 – 2022)</strong><br />
            Higher Secondary Education – 81.5%
          </li>
          <li><strong>Kendriya Vidyalaya No.1, Kalpakkam (2010 – 2019)</strong><br />
            Senior Secondary Education – 89%
          </li>
        </ul>

        <h2 className="section-title">Projects</h2>
        <ul>
          <li><strong>Patient Management System:</strong> Full stack healthcare solution with secure APIs and responsive UI.<br />
            <em>Tech:</em> Java, Spring Boot, Spring Data JPA, Maven, MongoDB, React.js
          </li>
          <li><strong>Blog Web Platform:</strong> Blog with post creation, authentication, commenting, and content filtering.<br />
            <em>Tech:</em> React, Node.js, MongoDB, Express, JWT
          </li>
          <li><strong>Keylogger (Educational):</strong> Python-based keylogger for ethical research with email log reporting.<br />
            <em>Tech:</em> Python, Smtplib, Pynput
          </li>
          <li><strong>Food Waste Emission Prediction System:</strong> ML model to predict CO₂ emissions from food waste.<br />
            <em>Tech:</em> Python, Pandas, Scikit-learn, Matplotlib, Jupyter Notebook
          </li>
          <li><strong>Sustainable Food Waste Management System:</strong> Web app connecting restaurants, NGOs, and users.<br />
            <em>Tech:</em> React.js, Node.js, Express, MongoDB, JWT
          </li>
          <li><strong>Weather App:</strong> Real-time weather forecasting web app using weather API.<br />
            <em>Tech:</em> React.js, OpenWeatherMap API, CSS
          </li>
          <li><strong>Cipher App:</strong> Web app for encrypting/decrypting messages with classic ciphers.<br />
            <em>Tech:</em> React.js
          </li>
          <li><strong>Faculty Attendance and Salary Monitoring System:</strong> Attendance and payroll system with dashboards.<br />
            <em>Tech:</em> React.js, Node.js, Express, MongoDB, JWT
          </li>
        </ul>

        <h2 className="section-title">Achievements & Hackathons</h2>
        <ul>
          <li>Certified Microsoft AI Engineer Associate</li>
          <li>Certified AWS Cloud Practitioner Essentials</li>
          <li>1st place – Dash Dashboard Hackathon at Jeppiaar Engineering College</li>
          <li>Best Event Award – Cryptographic Treasure Hunt at Drestien’24</li>
          <li>Internship project at NSIC, Ekkattuthangal</li>
          <li>Regional level Volleyball Under-19 – KV Kalpakkam at KV Sulur, Coimbatore</li>
          <li>Zonal level Volleyball Winner Under-19 – KV Kalpakkam at KV Ashok Nagar, Chennai</li>
          <li>Zonal level Volleyball Runner-up Under-14 – KV Kalpakkam at KV Ashok Nagar, Chennai</li>
        </ul>

        <h2 className="section-title">Technical Skills</h2>
        <ul className="skills-list">
          <li>Java, Python, C, C++</li>
          <li>Spring Boot, Maven, Hibernate JPA</li>
          <li>ReactJS, NodeJS, ExpressJS, MongoDB (MERN)</li>
          <li>MySQL, MongoDB</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Data Structures and OOPs</li>
          <li>Machine Learning</li>
          <li>Linux Administration</li>
        </ul>

        <h2 className="section-title">Soft Skills</h2>
        <ul className="skills-list">
          <li>Teamwork</li>
          <li>Time Management</li>
          <li>Leadership</li>
          <li>Effective Communication</li>
          <li>Critical Thinking</li>
          <li>Problem Solving</li>
          <li>Adaptability</li>
          <li>Collaboration</li>
        </ul>

        <h2 className="section-title">Languages</h2>
        <ul>
          <li>English – Read, Write, Speak</li>
          <li>Hindi – Read, Write, Speak</li>
          <li>Tamil – Read, Speak</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
