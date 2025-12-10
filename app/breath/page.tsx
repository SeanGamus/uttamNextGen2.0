"use client";
import Description from "@/components/description";
import { BREATHSIGNAL } from "@/constants";
import React, { useState } from "react";

const Breath = () => {
  const text =
    "Automated breath detection using deep learning. Classifies lung sound data into three labels: Inhalation, Exhalation, and Background.";
  return (
    <div className="bg-linear-to-br from-green-100 to-green-400">
      <Description title="Breath Detection" height="90vh" dscrptn={text}>
        <SignalDropDown />
      </Description>
    </div>
  );
};

const SignalDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center justify-center text-white bg-blue-600 box-border border rounded-xl border-transparent hover:bg-brand-strong focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        Select Signal
        <svg
          className="w-4 h-4 ms-1.5 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
      {showMenu && (
        <div
          id="dropdown"
          className="z-50 bg-neutral-primary-medium rounded-2xl shadow-lg w-44 bg-amber-50 absolute top-11"
        >
          <ul
            className="text-sm text-body font-medium"
            aria-labelledby="dropdownDefaultButton"
          >
            {BREATHSIGNAL.map((signal, index) => (
              <li
                key={index}
                className="hover:bg-green-200 hover:rounded-2xl p-2"
                onClick={() => setShowMenu(false)}
              >
                <a
                  href="#"
                  className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded "
                >
                  {signal}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Breath;
