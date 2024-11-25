import React from 'react';
import '../App.css'; // Assurez-vous que le CSS est importé
import qsnimg from '../assets/qsnimg.png'; // Import de l'image
import exploreIcon from '../assets/explore.svg'; // Import de l'icône
import { motion } from 'framer-motion'; // Import de framer-motion pour l'animation
import { useMediaQuery } from 'react-responsive'; // Importation de react-responsive

const QuiSommesNous = () => {
  // Constantes pour vérifier les tailles d'écran
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isExploreScreen = useMediaQuery({ maxWidth: 600 });
  const isVerySmallScreen = useMediaQuery({ maxWidth: 559 });
  const isExtraSmallScreen = useMediaQuery({ maxWidth: 475 });
  const isTinyScreen = useMediaQuery({ maxWidth: 439 });
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  return (
    <section id="qui-sommes-nous" className="w-full h-screen flex items-center bg-[#D9D9D9]">
      <div className="relative w-full h-full max-w-6xl mx-auto">
        {/* Barre de titre */}
        <div
          className={`absolute ${
            isSmallScreen ? 'top-[60px] left-[10%] w-[80%]' : isWidth1440   ? 'top-[140px] left-[230px] w-[76%]' : 'top-[100px] left-0 w-[76%]'
          } h-[60px] flex items-center border border-[#121212] rounded-md bg-transparent`}
          style={{
            marginTop: isSmallScreen ? '0px' : '0px', // Ajustement pour les écrans petits
            transform: isSmallScreen ? 'none' : 'translateX(-45%)', // Décale vers la gauche uniquement sur grand écran
          }}
        >
          <h2
            className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#79071E] to-[#EE5DFB] ${
              isTinyScreen ? 'ml-[-10px]' : isExtraSmallScreen ? 'ml-[-13px]' : isVerySmallScreen ? 'ml-[-7px]' : isExploreScreen ? 'ml-[-15px]' : 'ml-[20px]'
            } pl-12 ${
              isTinyScreen ? 'text-xl' : isVerySmallScreen ? 'text-2xl' : isSmallScreen ? 'text-3xl' : 'text-5xl'
            }`}
            style={{
              fontFamily: 'Adieu',
            }}
          >
            QUI SOMMES-NOUS ?
          </h2>
        </div>

        {/* Texte de description en un seul bloc */}
        <div className={`mt-[220px] ${isSmallScreen ? 'mt-[145px] ml-[20%] text-center': isWidth1440  ? 'mt-[230px] ml-[-40px]' : 'ml-[-290px]'} max-w-[60%]`}>
          <p
            className={`${
              isTinyScreen ? 'text-[1.25rem]' : isExtraSmallScreen ? 'text-[1.3rem]' : isVerySmallScreen ? 'text-[1.4rem]' : 'text-2xl'
            } font-bold leading-relaxed`}
            style={{
              fontFamily: 'JetBrains Mono',
              color: '#121212',
              textIndent: isSmallScreen ? '0' : '2em', // Retrait supprimé en isSmallScreen
            }}
          >
            NEOFILM LED <span className="font-normal">est l’agence de communication </span>
            <span className="italic font-bold">spécialisée dans la communication urbaine digitale 2.0.</span>
            <span className="font-normal">
              {' '}
              Notre solution intègre une technologie innovante venue d'Asie pour révolutionner la communication urbaine
              grâce à notre technologie de réalité augmentée.
            </span>
          </p>
        </div>

        {/* Bouton "En savoir plus" */}
        <div className={`mt-8 ${isTinyScreen ? 'ml-[8%]' : isExtraSmallScreen ? 'ml-[6%]' : isVerySmallScreen ? 'ml-[12%]' : isSmallScreen ? 'ml-[15%]' : isWidth1440 ? 'ml-[60px]' : 'ml-[-290px]'}`}>
          <button
            className="px-6 py-3 text-md font-bold rounded-full text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              background: 'linear-gradient(90deg, #11E8FA, #79071E)', // Dégradé horizontal
              border: '1px solid #EE5DFB', // Bordure
              width: isTinyScreen ? '320px' : isVerySmallScreen ? '400px' : '450px', // Largeur ajustée pour isTinyScreen
              cursor: 'pointer',
            }}
          >
            EN SAVOIR PLUS !
          </button>
        </div>

        {/* Image : supprimée en version mobile */}
        {!isSmallScreen && (
          <div className="absolute top-0 right-[-350px] w-[55%] h-full overflow-hidden">
            <img src={qsnimg} alt="Image" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Icône "explore" en noir avec animation de flottement */}
        <motion.div
          className={`absolute ${
            isExploreScreen ? 'bottom-[5px] left-[50%]' : isSmallScreen ? 'bottom-10 left-[47%]' : 'bottom-10 left-[20%]'
          } transform -translate-x-1/2`}
          animate={{
            y: [0, -10, 0], // Mouvement de haut en bas
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity, // Répétition infinie de l'animation
            repeatType: 'loop',
          }}
        >
          <img
            src={exploreIcon}
            alt="Explore Icon"
            className={`${isExploreScreen ? 'w-9 h-9' : 'w-14 h-14'}`} // Réduction de taille pour isExploreScreen
            style={{ filter: 'invert(1)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QuiSommesNous;
