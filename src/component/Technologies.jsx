import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiTailwindcss,
  SiPhp,
  SiJquery,
  SiSymfony,
  SiLaravel,
  SiMysql,
  SiExpo,
  SiGo,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl text-white">Technologie</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />{" "}
          {/* React: cyan */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />{" "}
          {/* MongoDB: green */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-sky-500" />{" "}
          {/* Tailwind CSS: sky */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPhp className="text-7xl text-indigo-600" /> {/* PHP: indigo */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJquery className="text-7xl text-blue-500" /> {/* jQuery: blue */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSymfony className="text-7xl text-white" /> {/* Symfony: black */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLaravel className="text-7xl text-red-600" /> {/* Laravel: red */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-600" /> {/* MySQL: blue */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpo className="text-7xl text-white" /> {/* Expo: black */}
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-500" /> {/* HTML5: orange */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-500" /> {/* CSS3: blue */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-500" />{" "}
          {/* JavaScript: yellow */}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
