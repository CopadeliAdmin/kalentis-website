import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg className="logo-svg" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* K moderne avec design géométrique */}
        <g className="logo-k">
          {/* Base verticale du K */}
          <rect x="10" y="5" width="4" height="40" fill="#2563eb" rx="2"/>
          
          {/* Barre diagonale supérieure */}
          <path d="M14 5 L30 5 L22 25 L18 25 Z" fill="#2563eb"/>
          
          {/* Barre diagonale inférieure */}
          <path d="M18 25 L22 25 L30 45 L14 45 Z" fill="#3b82f6"/>
          
          {/* Accent moderne */}
          <circle cx="32" cy="25" r="3" fill="#60a5fa"/>
        </g>
        
        {/* Texte KALENTIS */}
        <text x="45" y="32" className="logo-text-main" fill="#1e293b">
          KALENTIS
        </text>
      </svg>
    </div>
  );
};

export default Logo;