import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg className="logo-svg" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* K moderne avec design géométrique */}
        <g className="logo-k">
          {/* Base verticale du K */}
          <rect x="10" y="10" width="4" height="40" fill="#2563eb" rx="2"/>
          
          {/* Barre diagonale supérieure */}
          <path d="M14 10 L30 10 L22 30 L18 30 Z" fill="#2563eb"/>
          
          {/* Barre diagonale inférieure */}
          <path d="M18 30 L22 30 L30 50 L14 50 Z" fill="#3b82f6"/>
          
          {/* Accent moderne */}
          <circle cx="32" cy="30" r="3" fill="#60a5fa"/>
        </g>
        
        {/* Texte KALENTIS */}
        <text x="45" y="25" className="logo-text-main" fill="#1e293b">
          KALENTIS
        </text>
        <text x="45" y="42" className="logo-text-sub" fill="#64748b">
          FORMATION & DÉVELOPPEMENT
        </text>
      </svg>
    </div>
  );
};

export default Logo;