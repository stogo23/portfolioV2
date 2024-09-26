import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilPic from '../assets/profilPic.jpg';

const Hero = () => {
  return (
    <div className=" "> {/* Aucune couleur de fond ajoutée */}
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className=' p-5 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white'> {/* Couleur de texte blanche */}
              Abdou Nouroudine
            </h1>
            <span className=' p-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Developpeur junior</span>
            <p className='p-5 my-2 max-w-xl py-6 font-light tracking-tighter text-white'>{HERO_CONTENT}

            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className='flex justify-center'>
              <img src={profilPic} alt="Abdou Nouroudine"  className="rounded-lg" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
