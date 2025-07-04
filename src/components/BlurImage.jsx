import React, { useState } from 'react';

/**
 * Simple image component that displays a low quality placeholder
 * and fades in the high resolution image once loaded.
 */
const BlurImage = ({ src, placeholder, alt = '', className = '' }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={placeholder}
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover filter blur-xl scale-110 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default BlurImage;
