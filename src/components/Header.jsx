import React, { useState } from 'react';
import panneauxImage from '../assets/panneaux.png';
import exploreIcon from '../assets/explore.svg'; // Importation de l'icône
import { useSpring } from '@react-spring/web';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'; // Importation de react-responsive

// Composant pour les lueurs avec animation de rotation
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
        rotate: 360, // Animation de rotation infinie
      }}
      transition={{
        duration: 20, // Durée d'une rotation complète (en secondes)
        ease: 'linear', // Animation linéaire
        repeat: Infinity, // Répétition infinie
      }}
    />
  );
};

const Header = () => {
  // État pour gérer l'ouverture du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Constantes pour vérifier les tailles d'écran
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isVerySmallScreen = useMediaQuery({ maxWidth: 559 });
  const isExtraSmallScreen = useMediaQuery({ maxWidth: 475 });
  const isTinyScreen = useMediaQuery({ maxWidth: 439 }); 
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#121212] flex flex-col items-center py-4 md:py-2">
      <div className="relative w-[90%] max-w-6xl md:w-full">
        {/* Menu Hamburger pour les écrans mobiles */}
        <div className="md:hidden absolute top-4 right-4 z-20">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Icône hamburger */}
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Barre de navigation complète pour les écrans de taille moyenne et plus */}
        <nav className="relative z-10 flex items-center justify-between h-16 rounded-full text-white px-8 md:flex hidden"
          style={{
            backgroundColor: '#2E2E2E',
            borderRadius: '9999px',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(#2E2E2E, #2E2E2E), linear-gradient(90deg, #79071E, #11E8FA)',
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'border-box',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '18px',
            marginTop: '20px',
          }}>
          <a href="#" className="px-4 py-2 transition-colors duration-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#79071E] to-[#11E8FA]">ACCUEIL</a>
          <a href="#" className="px-4 py-2 transition-colors duration-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#79071E] to-[#11E8FA]">QUI SOMMES NOUS ?</a>
          <a href="#" className="px-4 py-2 transition-colors duration-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#79071E] to-[#11E8FA]">LE NEOFILM LED</a>
          <a href="#" className="px-4 py-2 transition-colors duration-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#79071E] to-[#11E8FA]">CONTACT</a>
        </nav>

        {/* Menu déroulant pour mobile (s'affiche quand le menu est ouvert) */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-[#2E2E2E] p-4 rounded-lg text-white space-y-4 z-10 md:hidden">
            <a href="#" className="block">ACCUEIL</a>
            <a href="#" className="block">QUI SOMMES NOUS ?</a>
            <a href="#" className="block">LE NEOFILM LED</a>
            <a href="#" className="block">CONTACT</a>
          </div>
        )}
      </div>

      {/* Texte NEOFILMLED avec responsive */}
      <div className="relative mt-4 w-full flex justify-start">
        <div
          className={`absolute ${isSmallScreen ? 'top-[80px] left-4 ml-0' : 'top-[250px] left-20 ml-[20px]'} w-[95%] max-w-4xl`}
        >
          <h1
            className={`${isSmallScreen ? 'text-6xl ml-[-2px]' : 'text-9xl'} font-bold tracking-wide`}
            style={{
              fontFamily: 'ArtGallery',
              background: 'linear-gradient(90deg, #EE5DFB, #79071E 47%, #11E8FA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            NEOFILMLED
          </h1>
        </div>
      </div>

      {/* Cadre transparent avec le texte aligné */}
      <div className="relative mt-8 w-full flex justify-start">
        <div className={`absolute ${isSmallScreen ? 'top-[150px] left-2' : 'top-[120px] left-0 ml-[-20px]'} w-[95%] max-w-4xl h-[50px] flex items-center justify-center`}
            style={{
              border: '1px solid rgba(217, 217, 217, 0.3)',
              borderRadius: '5px',
              backgroundColor: 'rgba(255, 255, 255, 0)',
              fontFamily: 'Adieu',
              color: '#D9D9D9',
              letterSpacing: '0.3em',
              padding: isSmallScreen ? '3px 10px' : '5px 15px',
              textAlign: 'center',
              fontSize: isSmallScreen ? '14px' : '18px',
            }}>
          Illuminez votre message avec la clarté de la 3D
        </div>
      </div>

    {/* Texte de description sous NEOFILMLED avec barre blanche */}
    <div className="relative mt-6 w-full flex justify-start">
      <div className={`absolute ${isSmallScreen ? 'top-[250px] left-6 max-w-[300px]' : 'top-[350px] left-20 max-w-[820px]'} flex`}>
        {/* Barre blanche verticale réduite sur mobile */}
        <div className={`${
          isTinyScreen
            ? 'w-[1px] h-[210px]' // Hauteur réduite pour TinyScreen (440px ou moins)
            : isExtraSmallScreen
            ? 'w-[1px] h-[200px]' // Hauteur réduite pour ExtraSmallScreen (475px ou moins)
            : isVerySmallScreen
            ? 'w-[1px] h-[200px]' // Hauteur réduite pour VerySmallScreen (entre 380px et 559px)
            : isSmallScreen
            ? 'w-[1px] h-[300px]' // Hauteur pour SmallScreen (640px ou moins)
            : 'w-[2px] h-auto' // Hauteur par défaut pour grands écrans
        } bg-white opacity-30 mr-4`}></div>

        {/* Texte de description réduit et étendu en longueur */}
        <p className={`${isVerySmallScreen ? 'text-xs' : isSmallScreen ? 'text-sm' : 'text-base'}`}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#D9D9D9',
            lineHeight: '1.6em',
          }}>
          Basée à Clermont-Ferrand, Néofilm LED est votre fournisseur de signalétiques innovantes.
          Spécialisée dans les films transparents numériques à LED, notre entreprise propose des solutions sur-mesure
          pour captiver votre public. Avec une technologie de pointe et un design élégant, nos produits sont idéaux pour
          toute entreprise moderne cherchant à transformer sa communication visuelle.
        </p>
      </div>
    </div>


                
        {/* Bouton "En savoir plus !" */}
        <div className="relative mt-8 w-full flex justify-start">
          <div className={`absolute ${isTinyScreen ? 'top-[600px] left-[20px]' : isVerySmallScreen ? 'top-[500px] left-[20px]' : isSmallScreen ? 'top-[540px] left-[100px]' : 'top-[500px] left-44'} ml-[20px]`}>
            <button className={`px-8 py-3 font-bold text-md ${isTinyScreen ? 'w-[300px]' : 'w-[400px]'}`}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      border: '1px solid #79071E',
                      borderRadius: '30px',
                      background: 'linear-gradient(90deg, #11E8FA, #EE5DFB)',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                    }}>
              EN SAVOIR PLUS !
            </button>
          </div>
        </div>
        {/* Image à droite avec animation de flottement */}
        <motion.div
        className={`absolute ${
          isTinyScreen
            ? 'top-[550px] right-[130px] w-[180px]'
            : isExtraSmallScreen
            ? 'top-[350px] right-[-30px] w-[180px]'
            : isVerySmallScreen
            ? 'top-[350px] right-0 w-[200px]'
            : isSmallScreen
            ? 'top-[350px] right-0 w-[280px]'
            : isWidth1440
            ? 'top-[350px] right-[60px] w-[500px]' // Déplacement spécifique pour 1440px
            : 'top-[350px] right-[180px] w-[500px]' // Par défaut
        }`}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <img src={panneauxImage} alt="Panneaux" className="w-full" />
      </motion.div>

      {/* Lueurs animées avec rotation */}
      <GlowingCircle
        size="680px"
        top="100px"
        left={isWidth1440 ? '-350px' : '-300px'} // Décalage vers la gauche pour 1440px
        gradient="linear-gradient(180deg, #11E8FA, #EE5DFB)"
      />
      <GlowingCircle
        size="400px"
        top="400px"
        left={isWidth1440 ? '900px' : '1200px'} // Décalage vers la gauche pour 1440px
        gradient="linear-gradient(290deg, #11E8FA, #EE5DFB)"
      />

      {/* Icône "explore" au bas, centré avec animation de flottement */}
      <motion.div
        className={`absolute bottom-[20px] ${isTinyScreen ? 'left-[42%]' : isSmallScreen ? 'left-[45%]' : 'left-1/2'} transform -translate-x-1/2`}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <img 
          src={exploreIcon} 
          alt="Explore Icon" 
          className={`${isTinyScreen ? 'w-[30px] h-[30px]' : 'w-[60px] h-[60px]'}`} 
        />
      </motion.div>
    </header>
  );
};

export default Header;
