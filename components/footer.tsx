import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const Footer = () => {
  return (
    <footer className="flex items-center w-full flex-col gap-14 mt-5 px-4 z-0">
      <div className="flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/">
            <label className="text-2xl font-bold cursor-pointer">
              Uttam<span className="text-emerald-500">NexGen.</span>
            </label>
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn title={column.title} key={column.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-500">
                  {column.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
