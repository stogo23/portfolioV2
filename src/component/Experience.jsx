import React from "react";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 0.5}}

      className=" text-white my-20 text-center text-4xl">Experience</motion.h2>{" "}
      
      <div className="flex flex-col gap-2 items-center justify-center">
        {EXPERIENCE.map((experience, i) => (
          <motion.div 
           whileInView={{opacity: 1, x:0 }}
           initial={{ opacity: 0, x: -100 }}
           transition= {{ duration: 1}}

          key={i} className="flex justify-between rounded-md p-2  text-white">
            <p>{experience.annee}</p>
            <motion.div 
             whileInView={{ opacity: 1, x:0}}
             initial={{ opacity: 0, x:100 }}
              transition= {{ duration: 1}}
            className="w-2/3">
              <p>
                {experience.compagnie} - {experience.role}
              </p>
              <p>{experience.description}</p>
              <div className="flex gap-2 p-2">
                {Array.isArray(experience?.techno) &&
                  experience.techno.map((tech, j) => <p  className="p-2 rounded-sm bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-blue-700 hover:to-cyan-600"  key={j}>{tech}</p>)}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
