import { useRef } from "react";

export const ProgramLang = () => {
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
          <h1 className="heading-xl">SN programming language</h1>
          <p className="paragraph">
            A new programming language is developed by our team which can be
            customized based on requirements.
          </p>
        </div>

        {/* 🎥 Video Section */}
        <div
          className="video-wrapper flex justify-center items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            width="500"
            muted
            preload="none"
            className="rounded-lg shadow-lg w-full max-w-2xl h-[400px] object-cover"
          >
            <source src="/videos/SNProgramLang.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
};
