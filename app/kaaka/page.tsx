import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Description from "@/components/description";

const PocketGuide = () => {
  const text =
    "Our mission is to revolutionize how people experience tours—both virtually and in person—by making them more accessible, informative, and personalized.";
  return (
    <div className="bg-linear-to-br from-green-100 to-green-400">
      <Description title="Kaaka Pocket Tour Guide" height="75vh" dscrptn={text}>
        <Image
          src={logo}
          alt="Kaaka Logo"
          className="w-auto h-auto rounded-2xl"
        />
      </Description>
    </div>
  );
};

export default PocketGuide;
