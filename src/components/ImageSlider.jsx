import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import adaptImg from '../assets/adaptimg.png';
import transparenceImg from '../assets/transparenceimg.png';
import legerImg from '../assets/legerimg.png';

const images = [
  { src: transparenceImg, title: 'TRANSPARENCE', description: '94% de transparence, préservant la lumière des espaces' },
  { src: legerImg, title: 'LÉGÈRETÉ', description: 'Seulement 1,3kg/m²' },
  { src: adaptImg, title: 'ADAPTABILITÉ', description: 'S\'adapte à toutes les formes, arrondi, carré, triangulaire (découpe possible)' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Détection de la largeur de l'écran
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // UseEffect for automatic sliding
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <section className="relative min-h-[80vh]">
      {/* Conteneur du Slider */}
      <div
        className={`absolute top-[450px] ${
          isWidth1440 ? 'left-[950px]' : 'left-[1020px]' // Ajustement pour 1440px
        } w-[580px] h-[750px] bg-transparent rounded-lg overflow-hidden border-2 border-white shadow-lg`}
      >
        {/* Animation des images en arrière-plan */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cadre dégradé en haut avec le texte descriptif en avant-plan */}
        <div
          className="relative z-10 w-full h-[120px] flex flex-col justify-center items-center px-4"
          style={{
            background: 'linear-gradient(90deg, #79071E 0%, #11E8FA 100%)',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
        >
          {/* Application de la police Adieu au titre */}
          <h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: 'Adieu, sans-serif' }}>
            {images[currentIndex].title}
          </h2>
          {/* Barre de séparation */}
          <div className="w-[107%] h-[1px] bg-white my-2"></div>
          {/* Application de la police Plus Jakarta Sans au texte descriptif */}
          <p className="text-2sm text-white text-center" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {images[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Boutons de navigation à gauche et à droite du conteneur */}
      <div
        className={`absolute top-[120%] ${
          isWidth1440 ? 'left-[890px]' : 'left-[940px]' // Ajustement pour 1440px
        } transform -translate-y-1/2 z-20`}
      >
        <div className="relative group">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-b from-[#79071E] to-[#11E8FA] p-[10px] group-hover:rotate-180 transition-transform"
          ></div>
          <button
            onClick={prevSlide}
            className="relative p-3 rounded-full bg-[#4d4d4d] text-white"
          >
            <FiArrowLeft size={24} />
          </button>
        </div>
      </div>

      <div
        className={`absolute top-[120%] ${
          isWidth1440 ? 'right-[-150px]' : 'right-[220px]' // Ajustement pour 1440px
        } transform -translate-y-1/2 z-20`}
      >
        <div className="relative group">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-b from-[#79071E] to-[#11E8FA] p-[10px] group-hover:rotate-180 transition-transform"
          ></div>
          <button
            onClick={nextSlide}
            className="relative p-3 rounded-full bg-[#4d4d4d] text-white"
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </div>

      <div
      className={`absolute ${
        isWidth1440 ? 'bottom-[-550px]' : 'bottom-[-510px]'
      } ${isWidth1440 ? 'left-[calc(50%+500px)]' : 'left-[calc(50%+330px)]'} flex items-center justify-center space-x-2 p-[4px] rounded-full`}
      style={{
        background: 'linear-gradient(90deg, #79071E 0%, #11E8FA 100%)',
      }}
    >
      <div className="flex space-x-2 p-1 bg-[#444444] rounded-full">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-[#79071E]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>

    </section>
  );
};

export default ImageSlider;
