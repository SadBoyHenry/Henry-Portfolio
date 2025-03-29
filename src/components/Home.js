import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Add this import
import './Home.css';
import me from '../assets/henry.jpeg';

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Large Name */}
      <div className="large-name">
        <h1>Henry Romero</h1>
      </div>

      {/* Picture of You */}
      <div className="profile-picture">
        <img src={me} alt="A picture of Henry Romero" />
      </div>

      {/* Tagline */}
      <div className="tagline">
        <h2>Software Developer</h2>
      </div>

      {/* Intro Text */}
      <div className="intro-text">
        <p>Welcome to my portfolio!</p>
      </div>

      {/* Call to Action Button */}
      <div className="cta-button">
        <Link to="projects" smooth={true} duration={500}>
          View My Work
        </Link>
      </div>

      {/* 3D Shape Placeholder */}
      <div className="shape"></div>
    </motion.div>
  );
}

export default Home;