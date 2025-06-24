import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-panel">
        <p className="tagline">Full Stack Web Developer</p>
        <h1 className="name">Surendhar K</h1>
        <p className="desc">
          Building modern, scalable, and responsive web applications.<br />
          Passionate about clean UI/UX, backend logic, and cloud deployment.
        </p>

        <ul className="highlights">
          <h3>🌐 Expertise in React, Node.js, and MySQL</h3>
          <h3>🎨 UI/UX focused design approach</h3>
          <h3>⚙️ RESTful APIs & Spring Boot backend integration</h3>
          <h3>☁️ Cloud deployment with AWS & Netlify</h3>
        </ul>
        <br/>
        <button className="hello-btn"><a
  href="https://www.linkedin.com/in/surendhar-k-9477b9256/"  
  target="_blank"
  rel="noopener noreferrer"
  className="hello-btn"
>
  Let's Connect
</a>
</button>
      </div>

      <div className="right-panel">
        <img src={profileImage} alt="profile" className="profile-img" />
      </div>
    </div>
  );
};

export default Home;

