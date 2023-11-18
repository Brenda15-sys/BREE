{/*import React from "react";

function Contact() {
  return (
    <div>
    <h2>Contact</h2>
    <p>Respect center</p>
    </div>
    
  )
}

export default Contact;*/}

import React from "react";
import './App.css'

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Welcome to our contact page. If you have any questions or feedback,
        feel free to reach out to us.
      </p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
