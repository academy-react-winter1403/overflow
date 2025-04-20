import React from "react";
import backupImg from "../../assets/common/cardImg.png"
const SmartImage = ({ src, fallback, alt = "Image", className = "" }) => {
  const handleError = (e) => {
    e.target.onerror = null; 
    e.target.src = fallback || backupImg;
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