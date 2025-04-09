import React from 'react';
import profileImage from '../assets/mine.jpg'; // Adjust path if needed

const HomePage = () => {
  return (
    <main className="home-container">
      <div className="image-container">
        <img src={profileImage} alt="Sketch portrait of Anna Sabatini" className="profile-image" />
      </div>
      <div className="text-container">
        {/* Corner Brackets */}
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>
        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>

        {/* Text Content */}
        <p className="greeting">Hey there! My name is</p>
        <h1 className="name">Sarah Ishimwe</h1>
        

        <p className="role">
          I am an administrative assistant,<br />
          Software  <span className="highlight">Developer</span>,<br />
        
        </p>

        <p className="closing">... and just a human</p>
      </div>
    </main>
  );
};

export default HomePage;