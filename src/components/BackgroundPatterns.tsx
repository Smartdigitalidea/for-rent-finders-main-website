
import React from 'react';

interface BackgroundPatternsProps {
  variant?: 'bubbles' | 'waves' | 'dots' | 'grid';
  className?: string;
}

const BackgroundPatterns: React.FC<BackgroundPatternsProps> = ({ 
  variant = 'bubbles', 
  className = '' 
}) => {
  const generateBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 100 + 20;
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = 15 + Math.random() * 10;
      
      bubbles.push(
        <div
          key={i}
          className="floating-bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    return bubbles;
  };

  const renderPattern = () => {
    switch (variant) {
      case 'bubbles':
        return (
          <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {generateBubbles()}
            <div className="absolute inset-0 pattern-bubbles" />
          </div>
        );
      case 'waves':
        return (
          <div className={`absolute inset-0 pattern-waves ${className}`} />
        );
      case 'dots':
        return (
          <div className={`absolute inset-0 pattern-dots ${className}`} />
        );
      case 'grid':
        return (
          <div className={`absolute inset-0 pattern-grid ${className}`} />
        );
      default:
        return null;
    }
  };

  return renderPattern();
};

export default BackgroundPatterns;
