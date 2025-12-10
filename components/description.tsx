import React from "react";

interface DescriptionProps {
  dscrptn: string;
  children: React.ReactNode;
  title?: string;
  height: string;
}

const Description = ({
  dscrptn,
  title,
  height,
  children,
}: DescriptionProps) => {
  return (
    <div className={`h-[${height}] flex flex-row`}>
      <div className="flex-1 flex flex-col justify-center ">
        <h1 className="font-bold text-3xl text-center">{title}</h1>
        <span className="px-20 text-center ">{dscrptn}</span>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Description;
