import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Header with Nav Bar */}
      <header>
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            Henry
          </Link>
        </div>
        <nav>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content with Sections */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-content">
          <span>Available for Hire ✦ </span>
          <span>Available for Hire ✦ </span>
          <span>Available for Hire ✦ </span>
          <span>Available for Hire ✦ </span>
          <span>Available for Hire ✦ </span>
          <span>Available for Hire ✦ </span>
          <span>Available for Hire ✦ </span>
          <span>Available for Hire ✦ </span>
        </div>
      </div>
    </div>
  );
}

export default App;