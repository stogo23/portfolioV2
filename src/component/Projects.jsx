import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className=''>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl text-white'
      >
        Projects
      </motion.h2>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }}  
        transition={{ duration: 0.5 }} 
        className="space-y-10 px-4 lg:px-20"  
      >
        {PROJECTS.map((Project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}  // Animation subtile sans trop de décalage
            initial={{ opacity: 0, y: 50 }}  // Moins de décalage vertical
            transition={{ duration: 0.5, delay: index * 0.2 }}  
            className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16"  // Increased gap for better spacing
          >
            {/* Image du projet */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }} 
              initial={{ opacity: 0, scale: 0.9 }}  // Un peu moins de zoom au départ
              transition={{ duration: 1 , ease: "easeInOut" }}
              className="w-64 h-auto flex-shrink-0"  // Fixed width on larger screens, prevents stretching
            >
              <img 
                src={Project.image} 
                alt={Project.titre} 
                className="w-64 h-auto rounded-md"
              />
            </motion.div>

            {/* Texte et technologies */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: 0 }}  
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex-grow text-left"
            >
              <h3 className="text-white text-xl mb-2">{Project.titre}</h3>
              <p className="text-white mb-4">{Project.description}</p>

              {/* Technologies */}
              <div className="flex gap-2 flex-wrap p-2">  {/* Added flex-wrap for responsiveness */}
                {Array.isArray(Project?.techno) &&
                  Project.techno.map((tech, j) => (
                    <p className="p-2 rounded-sm bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-blue-700 hover:to-cyan-600 text-white" key={j}>
                      {tech}
                    </p>
                  ))
                }
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;

