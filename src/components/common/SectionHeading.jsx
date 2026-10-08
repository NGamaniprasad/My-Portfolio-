import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = ''
}) {
  return (
    <div className={`section-heading-container align-${align} ${className}`}>
      {eyebrow && (
        <div className="section-eyebrow">
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="section-title">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
