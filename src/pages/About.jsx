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
        <h1 className="about-title">I Develop System<br />that Works</h1>
        <p className="about-subtext">
          Passionate and detail-oriented Full Stack Developer, building real-world projects and scalable systems.
        </p>
        <p className="about-subtext">
          Dedicated to solving real-life problems using modern web technologies. Clean, maintainable, and performant code is my priority.
        </p>

        <div className="info-grid">
          <div><strong>Name:</strong> Surendhar K</div>
          <div><strong>Phone:</strong> +91 9876543210</div>
          <div><strong>Age:</strong> 21</div>
          <div><strong>Email:</strong> surendhar@email.com</div>
          <div><strong>Occupation:</strong> Full Stack Developer</div>
          <div><strong>Nationality:</strong> Indian</div>
          <div><strong>Education:</strong> B.Tech CSE</div>
          <div><strong>Freelance:</strong> Available</div>
        </div>
      </div>
    </section>
  );
};

export default About;
