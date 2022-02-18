import React from "react";

const PlaceAndTime = ({ title, caption, className }) => {
  return (
    <div className={`text-center py-4 ${className}`}>
      <p className="text-white font-cormorant-garamond text-xl italic">
        {title}
      </p>
      <p className="text-white font-cormorant-garamond text-xl font-semibold">
        {caption}
      </p>
    </div>
  );
};

export default PlaceAndTime;
