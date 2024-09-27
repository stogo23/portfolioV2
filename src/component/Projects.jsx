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
        className="space-y-10"
      >
        {PROJECTS.map((Project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}  // Animation subtile sans trop de décalage
            initial={{ opacity: 0, y: 50 }}  // Moins de décalage vertical
            transition={{ duration: 0.5, delay: index * 0.2 }}  
            className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
          >
            
            {/* Image du projet */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }} 
              initial={{ opacity: 0, scale: 0.9 }}  // Un peu moins de zoom au départ
              transition={{ duration: 1 , ease: "easeInOut" }}
              className="w-64 h-auto"
            >
              <img 
                src={Project.image} 
                alt={Project.titre} 
                className="w-64 h-auto rounded-md"
              />
            </motion.div>

            {/* Texte ajusté sans image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: 0 }}  
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex-grow text-left"
            >
              <h3 className="text-white text-xl mb-2">{Project.titre}</h3>
              <p className="text-white">{Project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
