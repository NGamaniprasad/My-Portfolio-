import React from 'react';
import { Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import '../styles/certifications.css';

export function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Professional Development"
          title="Certifications &"
          highlight="Training"
          subtitle="Technical certifications, professional training, and internship experience supporting my full-stack software development journey."
        />

        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-top-bar">
                <div className="certification-icon">
                  <Award size={22} />
                </div>
                {cert.type && (
                  <span className="certification-type">
                    {cert.type}
                  </span>
                )}
              </div>

              <div className="certification-content">
                <h3 className="certification-name">
                  {cert.name}
                </h3>

                <p className="certification-issuer">
                  {cert.issuer}
                </p>

                <div className="certification-meta">
                  {cert.date && (
                    <div className="certification-meta-item">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  )}

                  {cert.location && (
                    <div className="certification-meta-item">
                      <MapPin size={14} />
                      <span>{cert.location}</span>
                    </div>
                  )}
                </div>

                {cert.description && (
                  <p className="certification-description">
                    {cert.description}
                  </p>
                )}

                {cert.credentialId && (
                  <p className="certification-id">
                    Credential ID: {cert.credentialId}
                  </p>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="certification-skills">
                    {cert.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credential-link"
                  >
                    Verify Credential
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}