import Description from "@/components/description";
import { LICENSES } from "@/constants";
import React from "react";

const ChatBot = () => {
  const text =
    "License Chatbot is a conversational AI designed to assist developers and users in understanding various software licenses.";
  return (
    <div className="bg-linear-to-br from-green-100 to-green-400">
      <Description title="License Chatbot" height="75vh" dscrptn={text}>
        <>
          <h1 className="font-bold text-2xl text-left">Supported Licenses</h1>
          <ul>
            {LICENSES.map((license, index) => (
              <li className="text-sm" key={index}>
                {license}
              </li>
            ))}
          </ul>
        </>
      </Description>
    </div>
  );
};

export default ChatBot;
