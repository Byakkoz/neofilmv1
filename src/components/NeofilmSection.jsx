import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import exploreIcon from '../assets/explore.svg';
import filmlong from '../assets/filmlong.webp';

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
        filter: 'blur(100px)',
        opacity: 0.2,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      }}
    />
  );
};

const NeofilmSection = () => {
  const isBelow768 = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      className={`relative w-full min-h-screen bg-[#121212] flex flex-col justify-center items-start text-white ${
        isBelow768 ? 'px-4' : 'px-8'
      }`}
    >
      {/* Titre avec dégradé et police Adieu */}
      <div className={`mb-8 ${isBelow768 ? 'ml-0' : 'ml-4'}`}>
        <h2
          className={`${
            isBelow768 ? 'text-3xl' : 'text-6xl'
          } font-bold leading-tight text-left`}
          style={{ fontFamily: 'Adieu, sans-serif' }}
        >
          <span className="bg-gradient-to-r from-[#EE5DFB] to-[#11E8FA] bg-clip-text text-transparent">
            NEOFILM LED - FAITES VOTRE
            <br />
            PUB SUR NOS PANNEAUX!
          </span>
        </h2>
      </div>

      {/* Contenu texte et image */}
      <div
        className={`w-full ${
          isBelow768
            ? 'flex flex-col items-center'
            : 'max-w-6xl flex justify-between items-start p-6'
        }`}
      >
        {/* Texte explicatif aligné à gauche */}
        <div
          className={`${
            isBelow768 ? 'w-full text-center' : 'w-2/3 pr-8'
          }`}
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          <p
            className={`${
              isBelow768 ? 'text-base mb-4' : 'text-lg mb-4'
            } text-left`}
          >
            Maximisez la visibilité de votre marque avec NéoFilm LED, notre film
            transparent adhésif révolutionnaire qui transforme toute vitrine de
            commerce en un écran de communication vidéo dynamique.
          </p>
          <p
            className={`${
              isBelow768 ? 'text-base mb-4' : 'text-lg mb-4'
            } text-left`}
          >
            Que vous dirigiez une petite ou moyenne entreprise, un bureau
            étudiant, un restaurant ou un cinéma, saisissez l’opportunité de
            faire une impression marquante.
          </p>
          <p
            className={`${
              isBelow768 ? 'text-base mb-4 font-semibold' : 'text-lg mb-4 font-semibold'
            } text-left`}
          >
            Nous choisissons méticuleusement nos partenaires stratégiquement
            situés au cœur des centres-villes animés.
          </p>
          <p className={`${isBelow768 ? 'text-base' : 'text-lg'} text-left`}>
            Profitez de notre réseau pour faire parler de vous sur les artères
            les plus fréquentées et dynamisez votre communication locale avec
            efficacité et innovation.
          </p>
        </div>

        {/* Image avec animation */}
        <motion.div
          className={`${isBelow768 ? 'w-[90%] mt-4' : 'w-[50%] h-[350px] ml-8'} rounded-lg overflow-hidden`}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            boxShadow: '0px 10px 20px rgba(238, 93, 251, 0.6)',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <img
            src={filmlong}
            alt="Film Long"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Bouton "Demander un devis" */}
      <div
        className={`w-full flex ${
          isBelow768 ? 'justify-center mt-8' : 'justify-start mt-8 ml-32'
        }`}
      >
        <button
          className={`${
            isBelow768 ? 'px-16 py-2 text-base' : 'px-24 py-3 text-lg'
          } text-white rounded-full font-bold border-[1.5px] border-[#EE5DFB]`}
          style={{
            background: 'linear-gradient(90deg, #11E8FA 0%, #79071E 100%)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          DEMANDER UN DEVIS
        </button>
      </div>

      {/* Lueur animée */}
      <GlowingCircle
        size={isBelow768 ? '300px' : '600px'}
        top={isBelow768 ? '100px' : '150px'}
        left={isBelow768 ? '-50px' : '20px'}
        gradient="linear-gradient(180deg, #11E8FA, #EE5DFB)"
      />

      {/* Explore Icon */}
      {!isBelow768 && (
        <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 z-20">
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
              repeatType: 'loop',
            }}
            style={{
              width: '50px',
              height: '50px',
            }}
          />
        </div>
      )}
    </section>
  );
};

export default NeofilmSection;
