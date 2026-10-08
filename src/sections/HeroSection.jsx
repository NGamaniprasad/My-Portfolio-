import React, { useState } from 'react';
import { FileDown, Eye, Github, Linkedin, Mail, ArrowRight, CheckCircle2, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Button } from '../components/common/Button';
import '../styles/hero.css';

export function HeroSection() {
  const [activeSnippetTab, setActiveSnippetTab] = useState('spring');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="ambient-glow top-right" />
      <div className="ambient-glow bottom-left" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Content & CTAs */}
          <div className="hero-content">
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-container">
                <img
                  src={personalInfo.profileImage || '/Myself.jpeg'}
                  alt={personalInfo.name}
                  className="hero-avatar-img"
                  onError={(e) => {
                    e.target.src = '/profile.svg';
                  }}
                />
              </div>
              <div className="hero-status-pill" style={{ marginBottom: 0 }}>
                <span className="badge-dot" />
                <span>{personalInfo.availability}</span>
              </div>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <h2 className="hero-headline">
              {personalInfo.headline}
            </h2>

            <p className="hero-tagline">
              {personalInfo.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-primary-actions">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                icon={Eye}
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={personalInfo.resumeUrl}
                download="Resume_Software_Engineer.pdf"
                icon={FileDown}
              >
                Download Resume
              </Button>
            </div>

            {/* Secondary Action Buttons */}
            <div className="hero-secondary-actions">
              <Button
                variant="outline"
                size="sm"
                href={personalInfo.github}
                target="_blank"
                icon={Github}
              >
                GitHub
              </Button>

              <Button
                variant="outline"
                size="sm"
                href={personalInfo.linkedin}
                target="_blank"
                icon={Linkedin}
              >
                LinkedIn
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection('contact')}
                icon={Mail}
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="hero-highlights-strip">
              {personalInfo.highlights.map((item, idx) => (
                <div key={idx} className="hero-highlight-item">
                  <span className="hero-highlight-val">{item.value}</span>
                  <span className="hero-highlight-lbl">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Developer Visual */}
          <div className="hero-visual-container">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>

                <div className="terminal-tabs">
                  <button
                    className={`terminal-tab-btn ${activeSnippetTab === 'spring' ? 'active' : ''}`}
                    onClick={() => setActiveSnippetTab('spring')}
                  >
                    FinanceAPI.java
                  </button>
                  <button
                    className={`terminal-tab-btn ${activeSnippetTab === 'django' ? 'active' : ''}`}
                    onClick={() => setActiveSnippetTab('django')}
                  >
                    views.py
                  </button>
                </div>
              </div>

              <div className="terminal-body">
                {activeSnippetTab === 'spring' ? (
                  <pre>
                    <code>
                      <span className="syntax-annotation">@RestController</span>{'\n'}
                      <span className="syntax-annotation">@RequestMapping</span>(<span className="syntax-string">"/api/v1/finance"</span>){'\n'}
                      <span className="syntax-keyword">public class</span> <span className="syntax-class">FinanceController</span> {'{\n'}
                      {'  '}<span className="syntax-keyword">private final</span> <span className="syntax-class">ExpenseService</span> service;{'\n\n'}
                      {'  '}<span className="syntax-annotation">@PostMapping</span>(<span className="syntax-string">"/transactions"</span>){'\n'}
                      {'  '}<span className="syntax-keyword">public</span> <span className="syntax-class">ResponseEntity</span>&lt;<span className="syntax-class">TransactionDTO</span>&gt; log({'\n'}
                      {'    '}<span className="syntax-annotation">@Valid</span> <span className="syntax-annotation">@RequestBody</span> <span className="syntax-class">TransactionRequest</span> req{'\n'}
                      {'  '}) {'{\n'}
                      {'    '}<span className="syntax-class">TransactionDTO</span> res = service.create(req);{'\n'}
                      {'    '}<span className="syntax-keyword">return</span> <span className="syntax-class">ResponseEntity</span>.ok(res);{'\n'}
                      {'  }'}{'\n'}
                      {'}'}
                    </code>
                  </pre>
                ) : (
                  <pre>
                    <code>
                      <span className="syntax-keyword">from</span> rest_framework.views <span className="syntax-keyword">import</span> <span className="syntax-class">APIView</span>{'\n'}
                      <span className="syntax-keyword">from</span> rest_framework.response <span className="syntax-keyword">import</span> <span className="syntax-class">Response</span>{'\n\n'}
                      <span className="syntax-keyword">class</span> <span className="syntax-class">CricketMatchListView</span>(<span className="syntax-class">APIView</span>):{'\n'}
                      {'  '}<span className="syntax-string">"""Tournament Live Scorecard API"""</span>{'\n'}
                      {'  '}<span className="syntax-keyword">def</span> <span className="syntax-class">get</span>(self, request):{'\n'}
                      {'    '}matches = <span className="syntax-class">Match</span>.objects.select_related({'\n'}
                      {'      '}<span className="syntax-string">'team_a'</span>, <span className="syntax-string">'team_b'</span>{'\n'}
                      {'    '}).filter(status=<span className="syntax-string">'LIVE'</span>){'\n'}
                      {'    '}data = <span className="syntax-class">MatchSerializer</span>(matches, many=<span className="syntax-keyword">True</span>).data{'\n'}
                      {'    '}<span className="syntax-keyword">return</span> <span className="syntax-class">Response</span>(data, status=<span className="syntax-class">200</span>)
                    </code>
                  </pre>
                )}
              </div>

              <div className="terminal-footer">
                <div className="terminal-status-ok">
                  <CheckCircle2 size={13} />
                  <span>HTTP 200 OK — Ready for Production</span>
                </div>
                <span className="terminal-latency">Latency: 12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
