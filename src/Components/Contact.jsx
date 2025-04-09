import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // To show submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // --- Form Submission Logic ---
    // In a real application, you would send this data to a backend server,
    // an email service (like EmailJS), or a form handler (like Formspree/Netlify Forms).
    console.log('Form data submitted:', formData);
    setStatus('Thank you for your message! (Simulated submission)'); // Provide feedback
    setFormData({ name: '', email: '', message: '' }); // Clear the form

    // Example using Formspree (replace YOUR_FORM_ID):
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        setStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            setStatus(data["errors"].map(error => error["message"]).join(", "));
          } else {
            setStatus('Oops! There was a problem submitting your form');
          }
        })
      }
    })
    .catch(error => {
      setStatus('Oops! There was a problem submitting your form');
    });
    */
    // --- End Submission Logic ---
  };

  return (
    <main className="page-container contact-container">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-intro">
          Have a question, a project idea, or just want to say hi?
          Feel free to reach out using the form below or connect with me elsewhere.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>

        {/* Optional: Add other contact methods */}
        <div className="contact-info">
          <p>You can also find me on:</p>
          {/* Replace '#' with your actual links */}
          <Link to ="#" target="_blank" rel="noopener noreferrer">LinkedIn</Link> | {' '}
          <Link to="#" target="_blank" rel="noopener noreferrer">GitHub</Link> | {' '}
          <Link to="#" target="_blank" rel="noopener noreferrer">Twitter</Link>
          {/* Add email if you want it publicly visible */}
          {/* <p>Email: your.email@example.com</p> */}
        </div>
      </div>
    </main>
  );
};

export default Contact;