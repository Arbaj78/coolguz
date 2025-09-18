// src/components/Preloader.jsx

import React from 'react';
import './Preloader.css';

const Preloader = ({ isVisible }) => {
  return (
    <div className={`preloader ${!isVisible ? 'fade-out' : ''}`}>
      {/* पुराना लोगो: <img 
          src="/titlelogo.jpg" 
          alt="Company Logo Loading" 
          className="preloader-logo" 
        /> 
      */}

      {/* नया GIF */}
      <img 
        src="/camel-chewing.gif" // <-- अपने GIF का सही पाथ यहाँ दें
        alt="FatCamel Loading - Chewing Camel" 
        className="preloader-gif" // <-- नई क्लास का नाम
      />

      <div className="loading-text">
        Loading
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default Preloader;