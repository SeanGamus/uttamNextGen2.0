import { useEffect, useState } from "react";

export const BubblesBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const bubbleArray = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 10, // 10px - 50px
      left: Math.random() * 100, // %
      delay: Math.random() * 10, // seconds
      duration: Math.random() * 20 + 10 // seconds
    }));

    setBubbles(bubbleArray);
  }, []);

  return (
    <div className="bubbles-background">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`
          }}
        />
      ))}
    </div>
  );
};
