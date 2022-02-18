import React from "react";

const Countdown = ({ number, title }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p class="text-4xl font-bold text-primary font-tangerine italic">
        {number}
      </p>
      <p className="text-gray-600 text-lg -mt-1 font-cormorant-garamond italic">
        {title}
      </p>
    </div>
  );
};

export default Countdown;
