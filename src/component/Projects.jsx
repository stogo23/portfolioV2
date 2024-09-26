import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className='border-b font-light  border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl text-white'>Projects</h2> 
      <div className="space-y-10"> {/* Ajout d'un espacement vertical entre les projets */}
        {PROJECTS.map((Project, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-8"> {/* Utilisation de Flexbox pour aligner l'image et le texte */}
            {/* Image avec taille ajustée */}
            <div className="flex w-[]">
              <img 
                src={Project.image} 
                alt={Project.titre} 
                className="w-64 h-auto rounded-md" /> {/* Taille de l'image réduite avec "w-64" */}
            </div>
            {/* Texte à côté de l'image */}
            <div className="flex-grow text-left">
              <h3 className="text-white text-xl mb-2">{Project.titre}</h3> {/* Titre du projet */}
              <p className="text-white">{Project.description}</p> {/* Description du projet */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


