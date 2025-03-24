// BackgroundVideo.tsx
import React from 'react';

const Background: React.FC = ( ) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        {/* Optional: Add other video formats (WebM, etc.) for better browser compatibility */}
        {/* <source src="/background-video.webm" type="video/webm" /> */}
      </video>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
      </div>
    </div>
  );
};

export default Background   ;