"use client";
import Description from "@/components/description";
import React, { useEffect, useRef } from "react";

const Drawing = () => {
  const videoRef = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    videoRef.current.play();
  }, []);
  const text =
    "We develop a microsoft application which help user in drawing differnt flowcharts with ease.";
  return (
    <div className="bg-linear-to-br from-green-100 to-green-400">
      <Description title="Flowchart Designer" height="75vh" dscrptn={text}>
        <video
          ref={videoRef}
          className="w-auto h-auto px-1 rounded-2xl"
          src="/videos/drawing.mp4"
          preload="metadata"
          autoPlay
          loop
          muted
        />
      </Description>
    </div>
  );
};

export default Drawing;
