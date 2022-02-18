import React from "react";

const CircleImage = ({ ...props }) => {
  return (
    <div className="w-28 h-28 rounded-full border-4 box-border border-primary bg-cover overflow-hidden hover:scale-105 transition ease-in-out duration-200">
      <img className="w-full h-full object-cover" {...props} />
    </div>
  );
};

export default CircleImage;
