import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, you can reach me at:</p>
      <address>
        Email: <a href="mailto:sibanandasahoo13@gmail.com">sibanandasahoo13@gmail.com</a><br />
        LinkedIn: <a href="https://www.linkedin.com/in/sibananda-sahoo-a978b0209" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </address>
    </div>
  );
}

export default Contact;
