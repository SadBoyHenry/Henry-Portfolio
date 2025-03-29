import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1>My Projects</h1>
      </motion.div>

      {/* Timeline */}
      <div className="timeline">
        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Portfolio Website (2025)</h3>
            <p>
              Built a modern, single-page portfolio using React, Framer Motion, and react-scroll. Features smooth scrolling, a timeline-style About Me page, and a consistent design across sections.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>React To-Do App (2024)</h3>
            <p>
              Created a simple to-do application using React to manage tasks. Includes features like adding, editing, and deleting tasks, with local storage to persist data.
            </p>
          </div>
        </motion.div>
      </div>

      {/* GitHub Link */}
      <motion.div
        className="github-link"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p>Want to see more of my work in progress?</p>
        <a
          href="https://github.com/SadBoyHenry"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Projects;