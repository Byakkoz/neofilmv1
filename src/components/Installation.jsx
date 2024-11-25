import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useMediaQuery } from 'react-responsive'; // Ajout pour le responsive
import legerImage from '../assets/legerimg.png'; // Import de l'image "legerimg.png"
import exploreIcon from '../assets/explore.svg';

// Composant pour la lueur avec animation
const GlowingCircle = ({ size, top, left, gradient }) => {
  const props = useSpring({
    loop: true,
    from: { transform: 'scale(0.9)', opacity: 0.2 },
    to: { transform: 'scale(1.1)', opacity: 0.3 },
    config: { duration: 2000 },
  });

  return (
    <motion.div
      style={{
        ...props,
        position: 'absolute',
        width: size,
        height: size,
        top: top,
        left: left,
        background: gradient,
        borderRadius: '50%',
        filter: 'blur(100px)', // Ajout de flou pour l'effet de lueur
        opacity: 0.2, // Opacité à 20%
      }}
      animate={{
        rotate: 360, // Animation de rotation continue
      }}
      transition={{
        duration: 20, // Durée d'une rotation complète
        ease: 'linear',
        repeat: Infinity, // Répétition infinie
      }}
    />
  );
};

const Installation = () => {
  const isBelow768 = useMediaQuery({ maxWidth: 768 }); // Détection de l'écran en dessous de 768px
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  return (
    <section className="relative w-full min-h-screen bg-[#121212] flex flex-col justify-center items-center">
      
      {/* Titre en deux lignes avec la police Adieu */}
      <div className={`text-center mb-8 ${isBelow768 ? 'relative top-[-30px] left-[-5px]' : 'relative top-[-50px] left-[-450px]'}`}>
          <h2
      className={`${isBelow768 ? 'text-4xl' : 'text-7xl'} font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE5DFB] to-[#11E8FA] leading-tight ${
        isWidth1440 ? 'ml-[340px]' : '' // Décale le titre vers la droite pour 1440px
      }`}
      style={{ fontFamily: 'Adieu, sans-serif' }}
    >
      NEOFILM LED - <br /> INSTALLATION
    </h2>

      </div>

      {/* Ligne verticale à gauche */}
      <div
        className={`${
          isBelow768
            ? 'left-[5%] top-[20%] h-[40%] w-[2px]'
            : `absolute left-[9%] ${
                isWidth1440 ? 'top-[37%]' : 'top-[35%]' // Baisse légèrement pour 1440px
              } h-[55%] w-[3px]`
        } bg-gradient-to-b from-[#79071E] via-[#EE5DFB] to-[#11E8FA]`}
      >
      </div>


      {/* Bloc des étapes avec lignes horizontales collées à la ligne verticale */}
      <div className={`relative ${isWidth1440 ? 'w-[66.5%] space-y-4' : 'w-[70%] space-y-8'} flex flex-col`}>
              
        {/* Étape 1 */}
        <div className={`flex items-start ${isBelow768 ? 'relative top-[10px] left-[-10px]' : 'relative top-[-20px] left-[-80px]'}`}>
          {/* Déplace uniquement les chiffres vers la gauche et modifie la hauteur en version desktop */}
          <div
            className={`text-white ${isBelow768 ? 'text-3xl' : 'text-5xl'} font-bold mr-6`}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              transform: !isBelow768 ? 'translate(-80px, 60px)' : 'none' // Décale de 70px à gauche et de 20px en hauteur en desktop
            }}
          >
            1
          </div>

          <div className={`flex-grow ${isBelow768 ? 'top-[0px] left-[-10px]' : 'relative top-[45px] left-[-30px]'}`}> {/* Position originale en version desktop */}
            <h3 className={`${isBelow768 ? 'text-2xl' : 'text-4xl'} text-white font-bold mb-2`} style={{ fontFamily: 'Adieu, sans-serif' }}>
              Évaluation des besoins
            </h3>
            <p className={`${isBelow768 ? 'text-sm' : 'text-base'} text-white mb-2`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Nos experts évaluent vos besoins spécifiques et vous <br />
              conseillent sur la meilleure solution à mettre en place.
            </p>
          </div>
        </div>


        <div className={`${isBelow768 ? 'w-[70%]' : 'w-[50%]'} h-[3px] bg-gradient-to-r from-[#79071E] via-[#EE5DFB] to-[#11E8FA] relative top-[20px] left-[-108px]`}></div>

      {/* Étape 2 */}
      <div className={`flex items-start ${isBelow768 ? 'relative top-[20px] left-[-10px]' : 'relative top-[60px] left-[-80px]'}`}>
        {/* Déplace uniquement les chiffres vers la gauche et modifie la hauteur en version desktop */}
        <div
          className={`text-white ${isBelow768 ? 'text-3xl' : 'text-5xl'} font-bold mr-6`}
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            transform: !isBelow768 ? 'translate(-80px, -30px)' : 'none' // Décale de 80px à gauche et de 20px en hauteur en desktop
          }}
        >
          2
        </div>

        <div className={`flex-grow ${isBelow768 ? 'top-[0px] left-[-10px]' : 'relative top-[-35px] left-[-40px]'}`}> {/* Position originale en version desktop */}
          <h3 className={`${isBelow768 ? 'text-2xl' : 'text-4xl'} text-white font-bold mb-2`} style={{ fontFamily: 'Adieu, sans-serif' }}>
            Installation Rapide
          </h3>
          <p className={`${isBelow768 ? 'text-sm' : 'text-base'} text-white mb-2`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Adhésif se fixant directement sur les surfaces vitrées <br />
            à la suite d’une simple pulvérisation d’eau. Aucun <br />
            câble apparent pour un rendu élégant.
          </p>
        </div>
      </div>


        <div className={`${isBelow768 ? 'w-[70%]' : 'w-[50%]'} h-[3px] bg-gradient-to-r from-[#79071E] via-[#EE5DFB] to-[#11E8FA] relative top-[30px] left-[-109px]`}></div>

      {/* Étape 3 */}
      <div className={`flex items-start ${isBelow768 ? 'relative top-[30px] left-[-10px]' : 'relative top-[80px] left-[-80px]'}`}>
        {/* Déplace uniquement le chiffre 3 vers la gauche et modifie la hauteur en version desktop */}
        <div
          className={`text-white ${isBelow768 ? 'text-3xl' : 'text-5xl'} font-bold mr-6`}
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            transform: !isBelow768 ? 'translate(-80px, -50px)' : 'none' // Décale de 80px à gauche et de 20px en hauteur en desktop
          }}
        >
          3
        </div>

        <div className={`flex-grow ${isBelow768 ? 'top-[0px] left-[-10px]' : 'relative top-[-55px] left-[-50px]'}`}> {/* Position originale en version desktop */}
          <h3 className={`${isBelow768 ? 'text-2xl' : 'text-4xl'} text-white font-bold mb-2`} style={{ fontFamily: 'Adieu, sans-serif' }}>
            Maintenance et gestion
          </h3>
          <p className={`${isBelow768 ? 'text-sm' : 'text-base'} text-white mb-2`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Grâce à la durabilité des LEDs utilisées, la <br />
            maintenance de nos produits est réduite au minimum.
          </p>
        </div>
      </div>

      </div>

      {/* Lueur animée derrière le cadre dégradé */}
      <GlowingCircle
        size={isBelow768 ? '300px' : '600px'}  // Taille ajustée en responsive
        top={isBelow768 ? '50px' : '150px'}   // Position ajustée en responsive
        left={isBelow768 ? '-50px' : '-100px'} // Position ajustée en responsive
        gradient="linear-gradient(180deg, #11E8FA, #EE5DFB)"  // Dégradé
      />

      {/* Cadre dégradé avec image animée */}
      {!isBelow768 && ( // L'image n'apparaît que sur les grands écrans (au-dessus de 768px)
        <div className="absolute right-0 top-[-1.7%] left-[72.5%] z-10 p-4">
          <div
            className="bg-gradient-to-b from-[#11E8FA] to-[#EE5DFB] rounded-lg p-0"
            style={{
              width: '510px', // Taille du cadre
              height: isWidth1440 ? '776px' : '945px', // Diminution de la hauteur pour 1440px
            }}
          >
            <motion.img
              src={legerImage}
              alt="Légèreté Image"
              className="rounded-lg shadow-lg object-cover object-left"
              whileHover={{ x: 10, y: 10 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%', objectPosition: 'right' }}
            />
          </div>
        </div>
      )}


      <div className={`${isBelow768 ? 'absolute bottom-[10px] left-[45%] transform -translate-x-1/2 z-20' : 'absolute bottom-[10px] left-1/2 transform -translate-x-1/2 z-20'}`}>
        <motion.img 
          src={exploreIcon} 
          alt="Explore Icon" 
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            width: isBelow768 ? '35px' : '50px',  // Taille ajustée en responsive
            height: isBelow768 ? '35px' : '50px',
          }}
        />
      </div>
    </section>
  );
};

export default Installation;
