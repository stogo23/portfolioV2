// import React from 'react'
// import Aboutimg from '../assets/Aboutimg.jpg'
// import { ABOUT_TEXT } from '../constants'
// import { motion } from "framer-motion"



// const About = () => {
//   return (
//     <div className=''>
//         <motion.h1 
//         whileInView={{ opacity: 1, y: 0}}
//         initial={{ opacity: 0, y: -100}}
//         transition={{ duration: 0.5}}
//         className='my-20 text-center text-4xl text-white'>A propos de moi
//             <span className='text-neutral-500'></span>
//         </motion.h1>
//         <div className='flex flex-wrap w-full '>
//            <motion.div 
//             whileInView={{ opacity: 1, x: 0}}
//             initial={{ opacity:0, x: -100}}
//             transition={{ duration: 1 }}
//            className='w-full flex lg:w-1/2  lg:p-8'>
//               <div className='flex items-center justify-center w-full'>
//                 <img src={Aboutimg} alt="" className=" w-full h-full rounded-2xl" />
//               </div>
//               <motion.div 
//                 whileInView={{opacity: 1, x: 0}}
//                 initial={{ opacity:0, x: 100 }}
//                 transition={{ duration: 1 }}

//               className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2'>
//               <div className='flex justify-center lg:justify-start'>
//                 <p className='p-5 sm:p-6 md:p-8 lg:p-10 my-4 max-w-xl py-6 font-light tracking-tighter text-white text-justify text-base sm:text-lg md:text-xl'>{ABOUT_TEXT}</p>
//               </div>

//               </motion.div>
//            </motion.div>
//         </div>
      
//     </div>
//   )
// }

// export default About
import React from 'react'
import Aboutimg from '../assets/Aboutimg.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='w-full'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl text-white'
      >
        À propos de moi
        <span className='text-neutral-500'></span>
      </motion.h1>

      <div className='flex flex-col lg:flex-row w-full lg:items-center'>
        {/* Image Section */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex items-center justify-center'
        >
          <img src={Aboutimg} alt="About" className="w-4/5 lg:w-full rounded-2xl object-cover" />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start px-4 lg:px-8'>
            <p className='text-white text-base sm:text-lg md:text-xl font-light tracking-tighter text-justify'>
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
