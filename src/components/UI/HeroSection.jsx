import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const images = [
  "/images/1.jpg",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png"
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="hero-section">
      <div className="slideshow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Hero banner"
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="heading-xl">
          Together, <br /> We Build the Future of IT.
        </h1>
        <p className="paragraph">
          Crafting Intelligent Solutions, Delivering Exceptional Services,
          and Accelerating Tomorrow
        </p>
        <button className="btn btn-darken btn-inline bg-white-box">
          Start Exploring <FaLongArrowAltRight />
        </button>
      </div>
    </main>
  );
};
