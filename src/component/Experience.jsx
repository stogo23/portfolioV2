import React from "react";
import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <div className="border-b font-light  border-neutral-900 pb-4 flex justify-center flex-col">
      <h2 className=" text-white my-20 text-center text-4xl">Experience</h2>{" "}
      
      <div className="flex flex-col gap-2 items-center justify-center">
        {EXPERIENCE.map((experience, i) => (
          <div key={i} className="flex justify-between rounded-md p-2  text-white">
            <p>{experience.annee}</p>
            <div className="w-2/3">
              <p>
                {experience.compagnie} - {experience.role}
              </p>
              <p>{experience.description}</p>
              <div className="flex gap-2 p-2">
                {Array.isArray(experience?.techno) &&
                  experience.techno.map((tech, j) => <p  className="p-2 rounded-sm bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-blue-700 hover:to-cyan-600"  key={j}>{tech}</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
