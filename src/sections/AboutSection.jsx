import React from 'react';
import { Server, Database, Code, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import '../styles/about.css';

export function AboutSection() {
  const pillars = [
    {
      icon: Server,
      title: "Backend API Engineering",
      desc: "Building clean, maintainable REST APIs with Java (Spring Boot) and Python (Django / DRF), leveraging layered architectures and DTOs."
    },
    {
      icon: Database,
      title: "Relational Database Design",
      desc: "Designing normalized schemas, managing entity relationships, and executing optimized SQL queries with PostgreSQL and MySQL."
    },
    {
      icon: Code,
      title: "Full-Stack Integration",
      desc: "Connecting high-performance backends with modern, reactive React.js single-page applications with clean state management."
    },
    {
      icon: ShieldCheck,
      title: "Clean Code & Quality",
      desc: "Writing readable, maintainable code following OOP principles, stateless JWT authentication, and structured error handling."
    }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Professional Background"
          title="About"
          highlight="Me"
          subtitle="A dedicated 2024 Computer Science graduate focused on architecting reliable backend systems and full-stack web applications."
        />

        <div className="about-grid">
          {/* Left: Prominent Portrait Showcase Card */}
          <div className="about-portrait-card">
            <div className="portrait-image-wrapper">
              <img
                src={personalInfo.profileImage || '/Myself.jpeg'}
                alt={personalInfo.name}
                className="about-portrait-img"
                onError={(e) => {
                  e.target.src = '/profile.svg';
                }}
              />
              <div className="portrait-status-badge">
                <span className="badge-dot" />
                <span>{personalInfo.availability}</span>
              </div>
            </div>

            <div className="portrait-card-details">
              <h3 className="portrait-name">{personalInfo.name}</h3>
              <span className="portrait-role">{personalInfo.role}</span>
              <div className="portrait-meta-row">
                <span className="portrait-meta-tag">{personalInfo.degree}</span>
                <span className="portrait-meta-tag">{personalInfo.location}</span>
              </div>
              <div className="portrait-tech-pills">
                <span className="portrait-tech-pill">Java</span>
                <span className="portrait-tech-pill">Spring Boot</span>
                <span className="portrait-tech-pill">Python</span>
                <span className="portrait-tech-pill">Django</span>
                <span className="portrait-tech-pill">React</span>
                <span className="portrait-tech-pill">SQL</span>
              </div>
            </div>
          </div>

          {/* Right: Bio, Target Roles & Engineering Pillars */}
          <div className="about-text-column">
            <p className="about-paragraph">
              I am a <strong>2024 B.Tech Computer Science and Engineering graduate</strong> and software engineer fresher with practical experience developing end-to-end web applications and backend systems.
            </p>

            <p className="about-paragraph">
              My technical expertise centers on <strong>Java, Spring Boot, Python, Django, React, RESTful APIs, and SQL</strong>. Rather than building simple prototypes, I focus on engineering production-style architectures with clean layer separation (Controller-Service-Repository), robust input validation, relational database modeling, and secure JWT authentication.
            </p>

            <p className="about-paragraph">
              I have a solid foundation in Data Structures, Object-Oriented Design, and Software Engineering practices. I am actively seeking full-time opportunities in <strong>Bengaluru, India, as well as Remote or Hybrid roles</strong>.
            </p>

            <div className="about-target-roles-box">
              <h4 className="about-roles-title">Target Roles & Specializations</h4>
              <div className="about-roles-grid">
                {personalInfo.targetRoles.map((role) => (
                  <Badge key={role} variant="default">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 4 Engineering Pillars */}
            <div className="about-pillars-grid" style={{ marginTop: '0.75rem' }}>
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="about-pillar-card">
                    <div className="pillar-icon-box">
                      <Icon size={20} />
                    </div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
