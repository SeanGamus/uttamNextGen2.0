"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { useState } from "react";

const Navbar = () => {
 
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between relative z-30 px-8 py-4 ">
      <Link href="/">
        <label className="text-2xl font-bold cursor-pointer">
          Uttam<span className="text-emerald-500">NexGen.</span>
        </label>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </ul>      

      <div className="relative flex lg:hidden">
        <Image
          src="menu.svg"
          width={32}
          height={32}
          alt="Hamburger"
          className="cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="absolute origin-bottom-left top-10 right-0 rounded border-0 shadow-md w-max ">
            <ul className="flex flex-col bg-white">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 cursor-pointer pb-1.5 transition-all px-6 pt-1.5 hover:bg-gray-200"
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
