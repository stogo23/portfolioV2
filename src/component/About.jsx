import React from 'react'
import Aboutimg from '../assets/Aboutimg.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"



const About = () => {
  return (
    <div className=''>
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 0.5}}
        className='my-20 text-center text-4xl text-white'>A propos de moi
            <span className='text-neutral-500'></span>
        </motion.h1>
        <div className='flex flex-wrap w-full '>
           <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity:0, x: -100}}
            transition={{ duration: 1 }}
           className='w-full flex lg:w-1/2  lg:p-8'>
              <div className='flex items-center justify-center w-full'>
                <img src={Aboutimg} alt="" className=" w-full h-full rounded-2xl" />
              </div>
              <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{ opacity:0, x: 100 }}
                transition={{ duration: 1 }}

              className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start'>
                <p className='p-5 my-2 max-w-xl py-6 font-light tracking-tighter text-white'>{ABOUT_TEXT}</p>
              </div>

              </motion.div>
           </motion.div>
        </div>
      
    </div>
  )
}

export default About
