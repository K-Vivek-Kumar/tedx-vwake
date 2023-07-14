import React from "react";

const YouTubeVideo: React.FC = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/mtykbnJEDyA`}
      title="YouTube Video"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeVideo;
