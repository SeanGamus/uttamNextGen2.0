"use client";

import Description from "@/components/description";
import React, { useEffect, useRef } from "react";

const Language = () => {
  const videoRef = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    videoRef.current.play();
  }, []);
  const text =
    "A new programming language is developed by our team which can be customized based on requirements.";
  return (
    <div className="bg-linear-to-br from-green-100 to-green-400">
      <Description title="SN programming language" height="75vh" dscrptn={text}>
        <video
          ref={videoRef}
          className="w-auto h-auto px-1 rounded-2xl"
          src="/videos/SNProgramLang.mp4"
          preload="metadata"
          autoPlay
          loop
          muted
        />
      </Description>
    </div>
  );
};

export default Language;
