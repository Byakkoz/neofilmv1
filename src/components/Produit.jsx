import React from 'react';
import { motion } from 'framer-motion';
import { animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive'; // Importation de react-responsive
import ledImage1 from '../assets/ledImage1.jpg';
import ledImage2 from '../assets/ledImage2.png';
import exploreIcon from '../assets/explore.svg';

const Produit = () => {
  // Constantes pour vérifier différentes largeurs d'écran
  const isBelow768 = useMediaQuery({ maxWidth: 768 });
  const isBelow480 = useMediaQuery({ maxWidth: 480 });
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  return (
    <section
      id="produit"
      className={`relative w-full ${isBelow768 ? 'min-h-[150vh]' : 'h-[100vh]'} bg-[#121212] flex flex-col items-center justify-center overflow-hidden`}
    >
      {/* Lueur circulaire centrée avec dégradé vertical et flou */}
      <animated.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(238,93,251,0.3), rgba(17,232,250,0.3))',
          width: '90%',
          height: '90%',
          opacity: 0.3,
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      ></animated.div>

      {/* Titre */}
              <h2
          className="relative font-bold bg-gradient-to-r from-[#EE5DFB] to-[#11E8FA] bg-clip-text text-transparent z-10"
          style={{
            fontFamily: 'Adieu, sans-serif',
            top: isWidth1440 ? '50px' : isBelow768 ? '-420px' : '0px', // Abaisser pour 1440px
            fontSize: isBelow480 ? '1.5rem' : isBelow768 ? '2rem' : '6rem', // Ajustement progressif du titre
          }}
        >
          LE NEOFILM LED
        </h2>


      {/* Première image (en bas à droite) */}
      <div className={`relative inline-block ${isBelow768 ? 'mt-[150px] ml-[50px]' : 'mt-[380px] ml-[900px]'} z-10`}>
        {/* Texte au-dessus de la première image */}
        <p
          className={`absolute ${isBelow480 ? 'top-[-120px] text-sm' : isBelow768 ? 'top-[-90px] text-sm' : 'top-[-140px] text-xl'} text-white`}
          style={{ fontFamily: 'JetBrains Mono, monospace', maxWidth: '420px', textAlign: 'justify' }}
        >
          Nous transformons fenêtres et façades de verre en vidéo dynamique, par collage direct du module sur la surface du verre.
        </p>

        {/* Cadre en dégradé */}
        <div
          className="bg-gradient-to-b from-[#11E8FA] to-[#EE5DFB] rounded-lg p-0"
          style={{
            width: isBelow480 ? '250px' : isBelow768 ? '350px' : '550px', // Réduction progressive de la taille de l'image
            height: isBelow480 ? '150px' : isBelow768 ? '200px' : '400px',
          }}
        >
          <motion.img
            src={ledImage1}
            alt="LED Image 1"
            className="rounded-lg shadow-lg"
            whileHover={{ x: 10, y: 10 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Deuxième image (en haut à gauche) */}
      <div
        className={`absolute ${isBelow768 ? 'top-[80px]' : 'top-[150px]'} ${isBelow768 ? 'left-[50px]' : 'left-[100px]'} z-10`}
      >
        {/* Cadre en dégradé */}
        <div
          className="bg-gradient-to-b from-[#11E8FA] to-[#EE5DFB] rounded-lg p-0"
          style={{
            width: isBelow480 ? '250px' : isBelow768 ? '400px' : '700px', // Réduction progressive de la taille de l'image
            height: isBelow480 ? '150px' : isBelow768 ? '200px' : '250px',
          }}
        >
          <motion.img
            src={ledImage2}
            alt="LED Image 2"
            className="rounded-lg shadow-lg"
            whileHover={{ x: 10, y: 10 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', height: '102%' }}
          />
        </div>

        {/* Texte sous la deuxième image */}
        <p
          className={`mt-4 ${isBelow480 ? 'text-xs mt-[5px]' : isBelow768 ? 'text-sm mt-[5px]' : 'text-xl'} text-white`}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            maxWidth: isBelow480 ? '300px' : isBelow768 ? '350px' : '700px',
            textAlign: 'justify',
          }}
        >
          Le film vidéo LED, sans cadre et ultra léger, garantit la transparence mais aussi le poids le plus bas possible.
          <br />
          <br />
          En raison de sa conception ultra fine et découplable, cette solution d’affichage s’adapte à toutes les tailles.
          Avec un niveau de luminosité réglable allant jusqu’à 8000 px, l’écran à film mince LED adhésif est l’écran
          transparent le plus lumineux et le plus léger au monde.
        </p>
      </div>

      {/* Petit cadre avec bouton Explore */}
      {!isBelow768 && ( // Le bouton n'apparaît qu'au-dessus de 768px
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 z-20">
          <div
            className="bg-[#11E8FA] rounded-lg shadow-lg flex items-center justify-center"
            style={{
              width: '50px',
              height: '70px',
              opacity: 0.38,
            }}
          >
            <motion.img
              src={exploreIcon}
              alt="Explore Icon"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{
                width: '40px',
                height: '40px',
                filter: 'invert(100%)',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Produit;
