import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { GitHubSection } from './sections/GitHubSection';
import { ContactSection } from './sections/ContactSection';
import './styles/global.css';
import { CertificationsSection } from './sections/CertificationsSection';
export function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  const sectionIds = [
    'hero',
    'about',
    'skills',
    'projects',
    'experience',
    'education',
    'github',
    'certifications',
    'contact'
  ];

  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <div className="app-container">
      {/* Header & Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <GitHubSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
