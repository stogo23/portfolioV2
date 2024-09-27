import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilPic from '../assets/profilPic.jpg';
import { motion } from "framer-motion"

const container = (delay) => ({
   hidden: {x: -100, opacity: 0},
   visible: {
    x: 0,
    opacity:1,
    transition:{ duration: 0.5, delay: delay},
   },

})

const Hero = () => {
  return (
    <div className=" "> {/* Aucune couleur de fond ajoutée */}
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
             variants={container(0)}
             initial="hidden"
             animate="visible"
             className=' p-5 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white'> {/* Couleur de texte blanche */}
              Abdou Nouroudine
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className=' p-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Developpeur junior</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            
            className='p-5 my-2 max-w-xl py-6 font-light tracking-tighter text-white'>{HERO_CONTENT}

            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className='flex justify-center'>
              <motion.img
              initial={{ x: 100, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 2, deplay:1.2}}
               src={profilPic} alt="Abdou Nouroudine"  className="rounded-lg" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
