import { useRef } from "react";

export const Drawing = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Flowchart Designer</h1>
          <p className="paragraph">
            We develop a microsoft application which help user in drawing differnt flowcharts with ease.
          </p>
        </div>

        {/* 🎥 Video Section */}
        <div
          className="video-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            width="500"
            muted
            preload="none"
            className="rounded-lg shadow-lg"
          >
            <source src="/videos/drawing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
};
