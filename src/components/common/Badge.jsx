import React from 'react';

export function Badge({
  children,
  variant = 'default', // 'default' | 'tech' | 'featured' | 'status'
  icon: Icon,
  className = '',
  hasDot = false
}) {
  const classes = `badge badge-${variant} ${className}`.trim();

  return (
    <span className={classes}>
      {hasDot && <span className="badge-dot" />}
      {Icon && <Icon size={12} />}
      <span>{children}</span>
    </span>
  );
}
