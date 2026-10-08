import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export function Toast({
  message,
  type = 'success', // 'success' | 'error'
  onClose,
  duration = 4000
}) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 20px',
        borderRadius: 'var(--radius-md)',
        backgroundColor: type === 'success' ? '#065f46' : '#991b1b',
        color: '#ffffff',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        fontSize: '0.9375rem',
        fontWeight: '500',
        animation: 'modal-slide-up 0.2s ease'
      }}
    >
      {type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          padding: '2px',
          marginLeft: '8px',
          opacity: 0.8
        }}
        aria-label="Dismiss toast"
      >
        <X size={16} />
      </button>
    </div>
  );
}
