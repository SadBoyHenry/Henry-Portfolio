import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1>About Me</h1>
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
            <h3>2021 - Graduated High School</h3>
            <p>
            Graduated high school with the intent to pursue a future in computer science!
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
            <h3>2023 - On To The Next Step</h3>
            <p>
              Finished community college with an Associates degree in Software Development.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024 - Much To Learn</h3>
            <p>
            Chose to forgo the conventional path to college and instead pursued an online bootcamp, which significantly enhanced my coding skills and deepened my understanding of programming languages. While making substantial progress, recognizing that there is still much more to learn and explore in this field.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2025 - Looking for Opportunities</h3>
            <p>
              Currently seeking new challenges to apply my expertise in software development, eager to contribute to innovative projects.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;