


import React from 'react';
import { GraduationCap, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import '../styles/education.css';

export function EducationSection() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">

        <SectionHeading
          eyebrow="Academic Background"
          title="Education &"
          highlight="Foundations"
          subtitle="Academic background in Computer Science and Engineering with strong foundations in programming, databases, algorithms, and software development."
        />

        <div className="education-card-container">

          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>

              <div className="education-top-meta">

                <div>
                  <h3 className="education-degree">
                    {edu.degree}
                  </h3>

                  <h4 className="education-field">
                    {edu.field}
                  </h4>

                  <p className="education-institution">
                    <GraduationCap size={18} />

                    <span>{edu.institution}</span>

                    {edu.location && (
                      <span>• {edu.location}</span>
                    )}
                  </p>
                </div>

                <div className="education-meta-right">

                  <span className="education-year-badge">
                    {edu.status}: {edu.year}
                  </span>

                  {edu.percentage && (
                    <span className="education-percentage">
                      {edu.percentage}
                    </span>
                  )}

                </div>

              </div>

              {/* Core Coursework */}

              {edu.coreCoursework &&
                edu.coreCoursework.length > 0 && (

                <div className="coursework-container">

                  <span className="coursework-title">
                    Relevant Core Coursework
                  </span>

                  <div className="coursework-grid">

                    {edu.coreCoursework.map((course, idx) => (
                      <Badge
                        key={idx}
                        variant="default"
                      >
                        {course}
                      </Badge>
                    ))}

                  </div>

                </div>
              )}

              {/* Academic Highlights */}

              {edu.highlights &&
                edu.highlights.length > 0 && (

                <div className="education-highlights-list">

                  {edu.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="education-highlight-item"
                    >
                      <CheckCircle size={15} />

                      <span>{item}</span>
                    </div>
                  ))}

                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}