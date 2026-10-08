import React from 'react';
import { Github, ExternalLink, GitBranch, FolderGit2, Code2 } from 'lucide-react';
import { githubSectionData } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import '../styles/github.css';

export function GitHubSection() {
  return (
    <section id="github" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Open Source & Repositories"
          title="GitHub"
          highlight="Repositories"
          subtitle="Explore the complete source code, commits, and project structures for my full-stack applications."
        />

        {/* GitHub Header Banner */}
        <div className="github-cta-banner">
          <div className="github-banner-info">
            <div className="github-avatar-icon">
              <Github size={32} />
            </div>
            <div>
              <h3 className="github-banner-title">
                Explore My Code Repositories
              </h3>
              <p className="github-banner-desc">
                Clean commits, documented README files, and organized folder structures showcasing Java, Python, and React engineering.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            href={githubSectionData.profileUrl}
            target="_blank"
            icon={Github}
          >
            View GitHub Profile
          </Button>
        </div>

        {/* Featured Repositories Grid */}
        <div className="github-repos-grid">
          {githubSectionData.featuredRepos.map((repo, idx) => (
            <div key={idx} className="github-repo-card">
              <div className="repo-card-top">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-name-link"
                >
                  <FolderGit2 size={18} />
                  <span>{repo.name}</span>
                </a>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)' }}
                  aria-label={`Open ${repo.name} on GitHub`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="repo-card-desc">{repo.description}</p>

              <div className="repo-card-meta">
                <div className="repo-lang">
                  <span
                    className="repo-lang-dot"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GitBranch size={13} />
                  <span>{repo.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
