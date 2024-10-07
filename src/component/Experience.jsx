import React from "react";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 0.5}}
        className=" text-white my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-6 items-center justify-center"> {/* Increased gap for more spacing */}
        {EXPERIENCE.map((experience, i) => (
          <motion.div 
            whileInView={{opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            key={i} 
            className="flex flex-col lg:flex-row justify-between w-full max-w-4xl p-4 text-white gap-4"  // Removed bg-gray-800
          >
            {/* Colonne pour l'année */}
            <p className="lg:w-1/5 text-center lg:text-left">{experience.annee}</p> {/* Width for larger screens */}

            {/* Colonne pour les détails */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="lg:w-4/5" // Set width on large screens
            >
              <p className="text-lg font-semibold">
                {experience.compagnie} - {experience.role}
              </p>
              <p className="mb-2">{experience.description}</p>

              {/* Technologies utilisées */}
              <div className="flex flex-wrap gap-2 p-2"> {/* Added flex-wrap for responsiveness */}
                {Array.isArray(experience?.techno) &&
                  experience.techno.map((tech, j) => (
                    <p 
                      className="p-2 rounded-sm bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-blue-700 hover:to-cyan-600 text-white"  
                      key={j}
                    >
                      {tech}
                    </p>
                  ))
                }
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
