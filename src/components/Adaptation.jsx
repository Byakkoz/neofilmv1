import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import ledImage1 from '../assets/ledImage1.jpg';
import centrecom from '../assets/centrecom.jpg';
import pharma from '../assets/pharma.jpeg';
import restau from '../assets/restau.jpg';
import adaptimg from '../assets/adaptimg.png';
import SAWER from '../assets/SAWER.jpg';

const imagesTop = [
  { src: ledImage1, title: 'CINEMA' },
  { src: centrecom, title: 'CTRE. COMMERCIAUX' },
  { src: pharma, title: 'PHARMACIE' },
];

const imagesBottom = [
  { src: restau, title: 'RESTAURANTS' },
  { src: adaptimg, title: 'AEROPORTS & GARES' },
  { src: SAWER, title: 'ENTREPRISE' },
];

const Adaptation = () => {
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  // Ajout de la constante pour détecter un écran de largeur 1440px
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controlsTop.start({ x: '-100%', transition: { duration: 15, ease: 'linear' } });
        controlsTop.set({ x: '0%' });
        await controlsBottom.start({ x: '-100%', transition: { duration: 15, ease: 'linear' } });
        controlsBottom.set({ x: '0%' });
      }
    };
    sequence();
  }, [controlsTop, controlsBottom]);

  return (
    <section className="relative w-full min-h-screen bg-[#D9D9D9] flex flex-col items-center justify-center">
      {/* Conteneur pour le titre avec possibilité de le bouger */}
      <div
        className={`relative top-[-120px] ${
          isWidth1440 ? 'left-[-300px]' : 'left-[-360px]' // Ajustement pour 1440px
        }`}
      >
      <h2
        className={`text-6xl font-bold text-black text-left leading-tight mb-4 ${
          isWidth1440 ? 'ml-[250px]' : '' // Décalage vers la droite pour 1440px
        }`}
        style={{
          fontFamily: 'Adieu, sans-serif',
          marginTop: isWidth1440 ? '90px' : '0px', // Baisse pour 1440px
        }}
      >
        UNE SIGNALETIQUE <br /> ADAPTABLE ET MODULABLE
      </h2>


      </div>

      {/* Ligne de séparation en dessous du titre */}
      <div
      className={`${
        isWidth1440 ? 'w-[90%]' : 'w-[60%]' // Augmente la largeur pour 1440px
      } h-[2px] bg-gradient-to-r from-[#11E8FA] via-[#EE5DFB] to-[#79071E] my-4 relative ${
        isWidth1440 ? 'top-[-120px] left-[-290px]' : 'top-[-130px] left-[-388px]'
      }`}
    />

{/* Galerie d'images défilante */}
<div className="relative top-[-40px] w-[90%] mx-auto"> {/* Baisse la position de la galerie et ajuste la largeur */}
  <div className="w-full overflow-hidden">
    {/* Ligne du haut */}
    <motion.div className="flex gap-4" animate={controlsTop}> {/* Ajout d'un gap pour séparer les cadres */}
      {imagesTop.map((image, index) => (
        <div key={index} className="relative w-[40%] p-2"> {/* Augmentation de la taille des images */}
          <img src={image.src} alt={image.title} className="w-full h-[200px] object-cover" /> {/* Suppression des bordures arrondies */}
          <div
            className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-r from-[#C01CCF] to-[#11E8FA] opacity-80 flex items-center justify-center"
          >
            <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {image.title}
            </h3>
          </div>
        </div>
      ))}
    </motion.div>

    {/* Ligne du bas avec décalage */}
    <motion.div className="flex mt-8 gap-4" animate={controlsBottom}> {/* Ajout d'un gap pour séparer les cadres */}
      {imagesBottom.map((image, index) => (
        <div key={index} className="relative w-[40%] p-2"> {/* Augmentation de la taille des images */}
          <img src={image.src} alt={image.title} className="w-full h-[200px] object-cover" /> {/* Suppression des bordures arrondies */}
          <div
            className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-r from-[#C01CCF] to-[#11E8FA] opacity-80 flex items-center justify-center"
          >
            <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {image.title}
            </h3>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</div>

    </section>
  );
};

export default Adaptation;
