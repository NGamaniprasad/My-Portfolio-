import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, FileDown, Send, CheckCircle2, AlertCircle, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import '../styles/contact.css';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xjybzjwl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact',
          message: formData.message,
          _replyto: formData.email
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data?.errors?.[0]?.message || 'Unable to send message via Formspree. Please reach out via email directly.'
        });
      }
    } catch (error) {
      // Fallback: create mailto link gracefully
      setStatus({
        type: 'error',
        message: 'Could not connect to submission server. Opening your mail client instead...'
      });
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        {/* Dedicated Resume Banner */}
        <div className="resume-banner-box">
          <div className="resume-banner-info">
            <h3 className="resume-banner-title">
              Ready to review my full qualifications?
            </h3>
            <p className="resume-banner-desc">
              Download my complete software engineering resume featuring in-depth project architectures, academic credentials, and core technical skills.
            </p>
          </div>

          <div className="resume-actions-group">
            <Button
              variant="primary"
              size="lg"
              href={personalInfo.resumeUrl}
              download="Resume_Software_Engineer.pdf"
              icon={FileDown}
            >
              Download Resume (PDF)
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setResumeModalOpen(true)}
              icon={Eye}
            >
              View Quick Summary
            </Button>
          </div>
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact"
          highlight="Information"
          subtitle="Interested in discussing a job opportunity, interview, or project? Feel free to reach out directly via email, LinkedIn, or through the form below."
        />

        {/* Contact Grid: Direct Info Cards + Interactive Form */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Cards */}
          <div className="contact-info-column">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-info-card"
            >
              <div className="contact-info-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <span className="contact-info-label">Email Address</span>
                <span className="contact-info-value">{personalInfo.email}</span>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >
              <div className="contact-info-icon-box">
                <Linkedin size={22} />
              </div>
              <div>
                <span className="contact-info-label">LinkedIn Profile</span>
                <span className="contact-info-value">Connect on LinkedIn</span>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >
              <div className="contact-info-icon-box">
                <Github size={22} />
              </div>
              <div>
                <span className="contact-info-label">GitHub Profile</span>
                <span className="contact-info-value">View Repositories</span>
              </div>
            </a>

            <div className="contact-info-card" style={{ cursor: 'default' }}>
              <div className="contact-info-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <span className="contact-info-label">Location Preference</span>
                <span className="contact-info-value">{personalInfo.workPreference}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. recruiter@company.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Interview Invitation"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-textarea"
                  required
                />
              </div>

              {status.message && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: status.type === 'success' ? 'var(--success-bg)' : 'rgba(239, 68, 68, 0.12)',
                    color: status.type === 'success' ? 'var(--success)' : '#ef4444',
                    border: `1px solid ${status.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                  }}
                >
                  {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{status.message}</span>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                icon={Send}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>

        {/* Final Recruiter CTA Block */}
        <div className="final-recruiter-cta">
          <div className="final-cta-badge">Immediate Availability</div>
          <h3 className="final-cta-title">
            Open to Software Engineering Opportunities
          </h3>
          <p className="final-cta-desc">
            Currently looking for Java, Python, Backend, and Full Stack Software Engineering opportunities in Bengaluru, Remote, and Hybrid roles.
          </p>

          <div className="final-cta-actions">
            <Button
              variant="primary"
              size="lg"
              href={personalInfo.resumeUrl}
              download="Resume_Software_Engineer.pdf"
              icon={FileDown}
            >
              Download Resume
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={personalInfo.github}
              target="_blank"
              icon={Github}
            >
              GitHub
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={personalInfo.linkedin}
              target="_blank"
              icon={Linkedin}
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={`mailto:${personalInfo.email}`}
              icon={Mail}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Quick Summary Modal */}
      <Modal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        title="Resume Highlights & Summary"
        footer={
          <>
            <Button variant="secondary" onClick={() => setResumeModalOpen(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              href={personalInfo.resumeUrl}
              download="Resume_Software_Engineer.pdf"
              icon={FileDown}
            >
              Download Full PDF
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              {personalInfo.name} — {personalInfo.role}
            </h4>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>
              {personalInfo.degree} • {personalInfo.location}
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
            <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Core Technical Stack</h5>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <strong>Backend:</strong> Java 17/21, Spring Boot 3.x, Hibernate/JPA, Python, Django, Django REST Framework, RESTful APIs, JWT Authentication, Spring Security.<br />
              <strong>Frontend & DB:</strong> React.js, Vite, JavaScript (ES6+), HTML5, CSS3, PostgreSQL, MySQL.<br />
              <strong>Tools:</strong> Git, GitHub, Maven, Postman, Swagger/OpenAPI, IntelliJ IDEA, VS Code.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
            <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Featured Project Highlights</h5>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              • <strong>FINTRACK:</strong> Personal Finance Manager built with Java 21, Spring Boot 3, PostgreSQL, JWT Auth, and React.<br />
              • <strong>Cricket / IPL Tournament Platform:</strong> Django REST Framework + React tournament scheduling and scorecard manager.<br />
              • <strong>Employee Management System:</strong> Django & React HR management platform with role-based permissions.
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default ContactSection;