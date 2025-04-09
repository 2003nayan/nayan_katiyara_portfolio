"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiClerk,
  SiCloudflare,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGo,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Next",
    icon: SiNextdotjs,
  },
  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "Node JS",
    icon: SiNodedotjs,
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    title: "Express JS",
    icon: SiExpress,
  },
  {
    title: "GitHub",
    icon: SiGit,
  },
  {
    title: "Python",
    icon: SiPython,
  },
  {
    title: "Typescript",
    icon: SiTypescript,
  },
  {
    title: "Firebase",
    icon: SiFirebase,
  },
  {
    title: "Clerk",
    icon: SiClerk,
  },
  {
    title: "Cloudflare",
    icon: SiCloudflare,
  },
];
