import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Code2, ChevronRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import '../../styles/navbar.css';

export function Navbar({ isDark, onToggleTheme, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'github', label: 'GitHub' },
     { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
          >
            <div className="brand-icon">
              <Code2 size={20} />
            </div>
            <span className="brand-text">
             N Gamini Prasad<span className="brand-tag">_Portfolio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle, Resume CTA, Mobile Toggle */}
          <div className="navbar-actions">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            <a
              href={personalInfo.resumeUrl}
              download="Resume_Software_Engineer.pdf"
              className="btn btn-primary btn-sm navbar-resume-btn"
              title="Download Resume PDF"
            >
              <FileDown size={15} />
              <span>Resume</span>
            </a>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-menu" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} opacity={0.6} />
              </a>
            ))}

            <div className="mobile-nav-actions">
              <a
                href={personalInfo.resumeUrl}
                download="Resume_Software_Engineer.pdf"
                className="btn btn-primary btn-md"
                style={{ width: '100%' }}
              >
                <FileDown size={16} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
