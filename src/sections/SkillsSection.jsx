import React from 'react';
import { Code2, Server, Layout, Database, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import '../styles/skills.css';

export function SkillsSection() {
  const categories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      skills: skillsData.languages
    },
    {
      id: 'backend',
      title: 'Backend Frameworks & Architecture',
      icon: Server,
      skills: skillsData.backend
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Layout,
      skills: skillsData.frontend
    },
    {
      id: 'database',
      title: 'Database Management Systems',
      icon: Database,
      skills: skillsData.database
    },
    {
      id: 'tools',
      title: 'Developer Tools & Workflows',
      icon: Wrench,
      skills: skillsData.tools
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Competencies"
          title="Skills &"
          highlight="Technologies"
          subtitle="A comprehensive toolkit spanning full-stack development, backend API design, database modeling, and version control."
        />

        {categories.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <div key={cat.id} className="skills-category-group">
              <div className="skills-category-header">
                <CatIcon size={20} color="var(--accent-primary)" />
                <h3 className="skills-category-title">{cat.title}</h3>
                <span className="skills-category-count">{cat.skills.length} skills</span>
              </div>

              <div className="skills-grid">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-card-top">
                      <h4 className="skill-name">{skill.name}</h4>
                      {skill.badge && (
                        <Badge variant="tech">
                          {skill.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="skill-detail">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
