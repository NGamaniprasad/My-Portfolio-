import React from 'react';
import { MapPin, Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <h3 className="footer-brand-title">
              {personalInfo.name}
            </h3>
            <p className="footer-brand-desc">
              {personalInfo.role} • 2024 B.Tech CSE Graduate specializing in building clean, scalable backend architectures and responsive full-stack applications.
            </p>
            <div className="footer-location">
              <MapPin size={15} />
              <span>{personalInfo.location} (Open to Remote & Hybrid)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">About Me</a></li>
              <li><a href="#skills" className="footer-link">Technical Skills</a></li>
              <li><a href="#projects" className="footer-link">Featured Projects</a></li>
              <li><a href="#experience" className="footer-link">Practical Experience</a></li>
              <li><a href="#education" className="footer-link">Education</a></li>
              <li><a href="#github" className="footer-link">GitHub Repos</a></li>
              <li><a href="#certifications" className="footer-link">Certifications</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="footer-connect">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="footer-link"
                >
                  <Mail size={15} />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <Github size={15} />
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="footer-social-inline">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-btn"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="social-icon-btn"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
