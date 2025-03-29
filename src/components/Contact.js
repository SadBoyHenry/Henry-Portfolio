import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [emailVisible, setEmailVisible] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // Initialize EmailJS with your Public Key
  emailjs.init('rXNYpcsDjWHNintCS'); // Replace with your EmailJS Public Key

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xmr4p2f', // Replace with your EmailJS Service ID
        'template_mh5b0by', // Replace with your EmailJS Template ID
        form.current
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setFormStatus('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormStatus('Failed to send your message. Please try again.');
        }
      );
  };

  const toggleEmail = () => {
    setEmailVisible(!emailVisible);
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1>Get in Touch</h1>
      </motion.div>

      {/* Background Shape */}
      <div className="background-shape"></div>

      {/* Contact Form */}
      <motion.div
        className="contact-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="social-links"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3>Connect with Me</h3>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/henry-romero-637265331 "
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SadBoyHenry"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#" onClick={toggleEmail}>
            Email
          </a>
        </div>
        {emailVisible && (
          <motion.a
            href="mailto:henry.romero@example.com"
            className="email-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            henrito243@gmail.com
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Contact;