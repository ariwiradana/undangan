import React from "react";

const Video = ({ ...props }) => {
  return <iframe title="video" className="min-w-full h-64" {...props}></iframe>;
};

export default Video;
