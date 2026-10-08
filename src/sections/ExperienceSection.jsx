import React from 'react';
import { Server, Database, Shield, Layout, Wrench, Info } from 'lucide-react';
import { practicalExperience } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import '../styles/experience.css';

export function ExperienceSection() {
  const icons = [Server, Database, Shield, Layout, Wrench];

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Practical Application"
          title="Software Development"
          highlight="Experience"
          subtitle="Hands-on engineering competencies developed by architecting and delivering full-stack web applications from database modeling to UI integration."
        />

        <div className="experience-list">
          {practicalExperience.map((exp, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-wrap">
                    <div className="exp-icon-box">
                      <Icon size={18} />
                    </div>
                    <h3 className="experience-category-title">{exp.category}</h3>
                  </div>
                  <Badge variant="default">Project Engineering</Badge>
                </div>

                <p className="experience-desc">{exp.description}</p>

                <div className="experience-skills-list">
                  {exp.keySkills.map((skill) => (
                    <Badge key={skill} variant="tech">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Fresher Experience Context Box */}
        <div className="experience-disclaimer-box">
          <Info size={20} className="disclaimer-icon" />
          <div className="disclaimer-text">
            <strong>Recruiter Note:</strong> As an entry-level software engineer (2024 Graduate), my practical software development experience is demonstrated through end-to-end full-stack projects adhering to industry architecture patterns, clean coding standards, relational schema normalization, and RESTful API best practices.
          </div>
        </div>
      </div>
    </section>
  );
}
