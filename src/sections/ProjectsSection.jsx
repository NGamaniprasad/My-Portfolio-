import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectModal } from '../components/projects/ProjectModal';
import '../styles/projects.css';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Featured"
          highlight="Projects"
          subtitle="Real-world full-stack systems built with Spring Boot, Django, React, and SQL, featuring secure authentication, RESTful APIs, and relational database schemas."
        />

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Deep Dive Project Architecture Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseDetails}
        />
      </div>
    </section>
  );
}
