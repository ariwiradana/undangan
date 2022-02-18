import React from "react";

const GalleryImage = ({ src, alt, className, onClick }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={1000}
      className={`w-full bg-cover overflow-hidden relative h-64 cursor-pointer ${className}`}
    >
      <img
        onClick={onClick}
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-110 transition ease-in-out duration-700 grayscale hover:grayscale-0"
      />
    </div>
  );
};

export default GalleryImage;
