// src/components/AnimatedBackground.js
import React from 'react';
import './AnimatedBackground.css'; // We'll define the CSS animation here

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      {/* Add more balls as needed */}
    </div>
  );
};

export default AnimatedBackground;
