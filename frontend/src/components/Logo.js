import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg className="logo-svg" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Icon moderne avec forme géométrique */}
        <circle cx="30" cy="30" r="20" stroke="#2563eb" strokeWidth="3" fill="none"/>
        <circle cx="30" cy="30" r="12" fill="#2563eb"/>
        <circle cx="30" cy="30" r="6" fill="white"/>
        
        {/* Texte Kalentis */}
        <text x="65" y="25" className="logo-text-main" fill="#1e293b">
          KALENTIS
        </text>
        <text x="65" y="42" className="logo-text-sub" fill="#64748b">
          FORMATION & CONSEIL
        </text>
      </svg>
    </div>
  );
};

export default Logo;