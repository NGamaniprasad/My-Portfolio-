import React from 'react';
import { Github, ExternalLink, Server, CheckCircle, Database, Layers, ShieldCheck } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  const modalFooter = (
    <>
      <Button variant="secondary" size="md" onClick={onClose}>
        Close
      </Button>
      {project.githubUrl && (
        <Button
          variant="primary"
          size="md"
          href={project.githubUrl}
          target="_blank"
          icon={Github}
        >
          View Repository
        </Button>
      )}
      {project.liveUrl && (
        <Button
          variant="outline"
          size="md"
          href={project.liveUrl}
          target="_blank"
          icon={ExternalLink}
        >
          Live Demo
        </Button>
      )}
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      footer={modalFooter}
    >
      <div className="project-modal-content">
        {/* Subtitle & Badge */}
        <div>
          <p className="project-subtitle" style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>
            {project.subtitle}
          </p>
          <div className="project-tech-list">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div>
          <h4 className="modal-section-title">
            <Layers size={18} />
            <span>Project Overview</span>
          </h4>
          <p style={{ lineHeight: '1.7' }}>{project.description}</p>
        </div>

        {/* Problem Solved */}
        {project.problemSolved && (
          <div className="project-problem-box" style={{ margin: 0 }}>
            <span className="project-problem-label">Engineering Problem Solved</span>
            <p>{project.problemSolved}</p>
          </div>
        )}

        {/* Architecture Breakdown */}
        {project.architecture && (
          <div>
            <h4 className="modal-section-title">
              <Server size={18} />
              <span>System Architecture & Technical Design</span>
            </h4>
            <div className="architecture-box">
              <div className="arch-layer">
                <span className="arch-layer-title">Frontend / Client Layer:</span>
                <span className="arch-layer-desc">{project.architecture.client}</span>
              </div>
              <div className="arch-layer">
                <span className="arch-layer-title">Backend / API Layer:</span>
                <span className="arch-layer-desc">{project.architecture.server}</span>
              </div>
              <div className="arch-layer">
                <span className="arch-layer-title">Database / Persistence Layer:</span>
                <span className="arch-layer-desc">{project.architecture.database}</span>
              </div>
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="modal-section-title">
              <CheckCircle size={18} />
              <span>Core Implemented Features</span>
            </h4>
            <div className="features-list">
              {project.features.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-bullet">•</span>
                  <div className="feature-text">
                    <strong>{feat.title}</strong>
                    <span>{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engineering Highlights */}
        {project.engineeringHighlights && project.engineeringHighlights.length > 0 && (
          <div>
            <h4 className="modal-section-title">
              <ShieldCheck size={18} />
              <span>Key Engineering & Code Highlights</span>
            </h4>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.engineeringHighlights.map((hl, idx) => (
                <li key={idx} style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                  {hl}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Modal>
  );
}
