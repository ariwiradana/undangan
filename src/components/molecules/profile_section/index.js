import React from "react";
import { CircleImage } from "../../atoms";

const ProfileSection = ({
  className,
  nama,
  ortuSubtitle,
  ortuTitle,
  asal,
  src,
  alt,
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <CircleImage alt={alt} src={src} />
      <p className="text-4xl font-black mt-4 text-primary font-tangerine">
        {nama}
      </p>
      <p className="font-cormorant-garamond text-gray-700 mt-1 text-lg">
        {ortuSubtitle}
      </p>
      <p className="font-cormorant-garamond text-gray-900 my-1 font-bold italic text-lg">
        {ortuTitle}
      </p>
      <p className="font-cormorant-garamond text-gray-900 font-bold italic text-xl">
        {asal}
      </p>
    </div>
  );
};

export default ProfileSection;
