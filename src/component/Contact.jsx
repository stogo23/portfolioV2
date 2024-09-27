import React from 'react';
import { CONTACTS } from '../constants';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className=''>
      {/* Titre animé */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }}  
        transition={{ duration: 0.5 }} 
        className='my-10 text-center text-4xl text-white'
      >
        Contact
      </motion.h2>

      {/* Contenu du contact animé */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }}  // Animation cohérente avec le titre
        transition={{ duration: 0.5, delay: 0.2 }}  // Léger délai pour plus de fluidité
        className='text-center tracking-tighter text-white'
      >
        {/* Adresse email animée */}
        <motion.p 
          whileHover={{ scale: 1.1 }}  // Zoom léger au survol
          whileTap={{ scale: 0.95 }}   // Réduction légère quand l'utilisateur clique
          transition={{ duration: 0.3 }}
          className='my-4'
        >
          {CONTACTS.email}
        </motion.p>

        {/* Numéro de téléphone animé */}
        <motion.p 
          whileHover={{ scale: 1.1 }}  // Zoom léger au survol
          whileTap={{ scale: 0.95 }}   // Réduction légère quand l'utilisateur clique
          transition={{ duration: 0.3 }}
          className='my-4'
        >
          {CONTACTS.telephone}
        </motion.p>

        {/* Lien email avec animation au survol */}
        {/* <motion.a
          href={`mailto:${CONTACTS.email}`}  // Lien email avec `mailto`
          whileHover={{ scale: 1.2, color: '#FFD700' }}  // Zoom et changement de couleur au survol
          whileTap={{ scale: 0.95 }}   // Réduction légère quand l'utilisateur clique
          transition={{ duration: 0.3 }}
          className='text-blue-400 my-4 block'  // Style pour le lien
        >
          Envoyer un email
        </motion.a> */}
      </motion.div>
    </div>
  );
};

export default Contact;
