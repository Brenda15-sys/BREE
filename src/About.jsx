
  import React from 'react';
  import './about.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <h3>About</h3>
      <h4>About us as we innovate and create a better tomorrow</h4>

      <p>
        Being creative is the norm of having success which promotes self-care
        and awareness to oneself. We believe in pushing boundaries and exploring
        new horizons.
      </p>

      <p>
        Our team consists of passionate individuals who are dedicated to making
        a positive impact on the world through innovation and creativity.
      </p>

    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3TFS8RMjPPW2TLvZcJW66rQzts7IPufJtw&usqp=CAU'  alt='Creative Image'
       className="about-image"/>
    </div>
  )
}

export default About;