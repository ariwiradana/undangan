import React from "react";

const Description = ({
  title,
  subtitle,
  desc,
  top,
  bottom,
  className,
  children,
}) => {
  return (
    <div className={`text-center ${className}`}>
      {subtitle && (
        <p className="text-xl text-gray-600 font-cormorant-garamond italic mb-2">
          {subtitle}
        </p>
      )}
      {title && top && (
        <p className="text-3xl font-bold text-primary font-tangerine italic mb-4">
          {title}
        </p>
      )}
      {desc && (
        <>
          <p className="font-cormorant-garamond text-gray-600 italic">{desc}</p>
          {children}
        </>
      )}
      {title && bottom && (
        <p className="text-4xl font-bold text-primary font-tangerine italic mt-4">
          {title}
        </p>
      )}
    </div>
  );
};

export default Description;
