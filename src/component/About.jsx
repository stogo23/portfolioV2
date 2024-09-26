import React from 'react'
import Aboutimg from '../assets/Aboutimg.jpg'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className='border-b border-x-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl text-white'>A propos de moi
            <span className='text-neutral-500'></span>
        </h1>
        <div className='flex flex-wrap w-full '>
           <div className='w-full flex lg:w-1/2  lg:p-8'>
              <div className='flex items-center justify-center w-full'>
                <img src={Aboutimg} alt="" className=" w-full h-full rounded-2xl" />
              </div>
              <div className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start'>
                <p className='p-5 my-2 max-w-xl py-6 font-light tracking-tighter text-white'>{ABOUT_TEXT}</p>
              </div>

              </div>
           </div>
        </div>
      
    </div>
  )
}

export default About
