import React from "react";

const SmartImage = ({ src, fallback, alt = "Image", className = "" }) => {
  const handleError = (e) => {
    e.target.onerror = null; 
    e.target.src = fallback;
  };

  return (
    <img
      src={src || fallback}
      onError={handleError}
      alt={alt}
      className={className}
    />
  );
};

export default SmartImage;