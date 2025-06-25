import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/profile.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <div className="about-wrapper">
      <aside className="about-left">
        <img src={profileImage} alt="Surendhar K" className="about-img" />
      </aside>

      <main className="about-right">
        <div className="about-content">
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
            <li><strong>Saveetha Engineering College, Chennai (2022 – 2026)</strong><br />B.E., CSE – CGPA: 8.2/10</li>
            <li><strong>Kendriya Vidyalaya No.1, Kalpakkam (2020 – 2022)</strong><br />HSE – 81.5%</li>
            <li><strong>Kendriya Vidyalaya No.1, Kalpakkam (2010 – 2019)</strong><br />SSE – 89%</li>
          </ul>

          <h2 className="section-title">Projects</h2>
          <ul>
            <li><strong>Patient Management System:</strong> Java, Spring Boot, MongoDB, React.js</li>
            <li><strong>Blog Web Platform:</strong> React, Node.js, MongoDB, Express, JWT</li>
            <li><strong>Keylogger (Educational):</strong> Python, Smtplib, Pynput</li>
            <li><strong>Food Waste Emission Prediction System:</strong> Python, Pandas, Sklearn</li>
            <li><strong>Sustainable Food Waste Management:</strong> MERN Stack</li>
            <li><strong>Weather App:</strong> React.js, OpenWeatherMap API</li>
            <li><strong>Cipher App:</strong> React.js</li>
            <li><strong>Faculty Attendance & Salary Monitoring:</strong> MERN Stack</li>
          </ul>

          <h2 className="section-title">Achievements & Hackathons</h2>
          <ul>
            <li>Microsoft AI Engineer Associate</li>
            <li>AWS Cloud Practitioner Essentials</li>
            <li>1st Place – Dash Dashboard Hackathon</li>
            <li>Best Event Award – Drestien’24</li>
            <li>Internship – NSIC, Ekkattuthangal</li>
            <li>Regional/Zonal level Volleyball (Under-19/Under-14)</li>
          </ul>

          <h2 className="section-title">Technical Skills</h2>
          <ul className="skills-list">
            <li>Java, Python, C, C++</li>
            <li>Spring Boot, Maven, Hibernate</li>
            <li>React, Node, Express, MongoDB</li>
            <li>MySQL, HTML, CSS, JS</li>
            <li>Data Structures, OOPs, ML</li>
            <li>Linux Administration</li>
          </ul>

          <h2 className="section-title">Soft Skills</h2>
          <ul className="skills-list">
            <li>Teamwork, Leadership, Communication</li>
            <li>Time Management, Problem Solving</li>
            <li>Adaptability, Collaboration</li>
          </ul>

          <h2 className="section-title">Languages</h2>
          <ul>
            <li>English – Read, Write, Speak</li>
            <li>Hindi – Read, Write, Speak</li>
            <li>Tamil – Read, Speak</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default About;
