import React from 'react';

const About = () => {
  return (
    <main className="page-container about-container">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Optional: Add an image here if you want */}
        {/* <img src="/path/to/your/other-image.jpg" alt="Anna Sabatini" className="about-image" /> */}

        <p>
        Hey there! I’m Sarah Ishimwe, a passionate tech enthusiast and advocate for women’s growth across Africa. 
        My journey into the world of technology has been driven by a deep desire to break barriers, 
        challenge norms, and empower others to do the same.
        </p>
        <p>
        As someone <span className="highlight">with a background in Business, Information, and Technology</span>, I’m passionate about 
        blending business strategy with technical innovation. I aim to use tech as a force for good—whether 
        it’s empowering women in Africa or contributing to the business and tech sectors in my region.
        </p>
        <p>
          My role as a <span className="highlight">Virtual Assistant, Digital Marketer,</span> and{' '}
          <span className="highlight">Customer Care Agent,</span> have equipped me with a wide range of valuable skills. 
          From effective communication and client management to digital marketing strategies and troubleshooting technical issues, 
          I’ve honed my ability to adapt, problem-solve, and manage projects efficiently. 
          These experiences have shaped me into a versatile professional, 
          ready to tackle any challenge and support growth in the tech and business sectors..
        </p>
        
        <p>
          Beyond that ,  I enjoy exploring nature, empowering young girls,
           or brainstorming ideas that could change the world. But above all,
           I’m always eager to learn, grow, and connect with others.


        </p>
         {/* Add more sections like Skills, Experience, Education if desired */}
      </div>
    </main>
  );
};

export default About;