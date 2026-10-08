import React from 'react';
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="project-card">
      <div className="project-header">
        <span className="project-category-tag">{project.category}</span>
        {project.badge && (
          <Badge variant="featured">
            {project.badge}
          </Badge>
        )}
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>

      {project.problemSolved && (
        <div className="project-problem-box">
          <span className="project-problem-label">Problem Solved</span>
          <p>{project.problemSolved}</p>
        </div>
      )}

      <p className="project-desc">{project.description}</p>

      <div className="project-tech-list">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="tech">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="project-footer-actions">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onViewDetails(project)}
          icon={Layers}
        >
          View Architecture & Details
        </Button>

        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            icon={Github}
            title="View GitHub Repository"
          >
            Code
          </Button>
        )}

        {project.liveUrl && (
          <Button
            variant="outline"
            size="sm"
            href={project.liveUrl}
            target="_blank"
            icon={ExternalLink}
            title="View Live Demo"
          >
            Live
          </Button>
        )}
      </div>
    </article>
  );
}
