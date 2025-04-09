"use client";

import Link from "next/link";
import React from "react";
import { SiGithub, SiTwitter, SiLinkedin, SiX } from "react-icons/si";

const socials = [
  {
    link: "https://www.linkedin.com/in/nayankatiyara/",
    label: "LinkedIn",
    icon: SiLinkedin,
  },
  {
    link: "https://github.com/2003nayan/",
    label: "Github",
    icon: SiGithub,
  },
  {
    link: "https://twitter.com/NayanKatiyara",
    label: "Twitter",
    icon: SiTwitter,
  },
];

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between items-center border-b border-gray-900">
      <div className="text-2xl -rotate-2 underline underline-offset-8 decoration-green-400">
        Nayan 👨‍💻
      </div>
      <div className="flex items-center gap-5">
        {socials.map((social, i) => {
          const Icon = social.icon;
          return (
            <Link key={i} href={social.link} aria-label={social.label}>
              <Icon className="text-2xl hover:text-cyan-300 hover:scale-110 transition-all" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
