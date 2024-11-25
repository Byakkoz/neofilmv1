import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'; // Import pour le responsive
import busLedImg from '../assets/busledimg.png';
import exploreIcon from '../assets/explore.svg';
import ImageSlider from './ImageSlider';

const Avantages = () => {
  const isBelow768 = useMediaQuery({ maxWidth: 768 });
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  return (
    <section className="relative w-full min-h-[200vh] bg-[#121212] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(238,93,251,0.3), rgba(121,7,30,0.3), rgba(17,232,250,0.3))',
          width: '90%',
          height: '90%',
          opacity: 0.3,
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      ></motion.div>

      {/* Titre */}
      <h2
        className={`absolute ${isBelow768 ? 'top-[50px] text-center text-4xl w-full' : 'top-[80px] text-6xl'} font-bold bg-gradient-to-r from-[#EE5DFB] to-[#11E8FA] bg-clip-text text-transparent z-10`} 
        style={{ fontFamily: 'Adieu, sans-serif' }}
      >
        DES AVANTAGES INCROYABLES
      </h2>

      {/* Réorganisation pour les petits écrans */}
      {isBelow768 ? (
        <>
          {/* L'image est placée directement sous le titre en responsive et agrandie */}
          <div className="relative mt-[120px] w-[120%] ml-[-25%] h-auto">
            <img 
              src={busLedImg} 
              alt="Bus LED" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Barres vertes placées sous l'image */}
          <div className="mt-8 flex flex-col items-start space-y-8 z-20 w-[90%]">
            {/* Barre 1 */}
            <div className="w-full h-[80px] rounded-lg bg-gradient-to-r from-[#003034] to-[#008E9A] flex items-center pl-6 pr-6">
              <span className="text-4xl font-bold relative top-0 text-white" style={{ fontFamily: 'Adieu, sans-serif' }}>1</span> {/* Chiffre en blanc */}
              <span className="text-2xl font-bold mx-2 relative top-1 left-4 text-white" style={{ fontFamily: 'Adieu, sans-serif' }}>|</span> {/* Barre en blanc */}
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-widest relative left-[40px] top-[5px] text-white" style={{ fontFamily: 'Adieu, sans-serif', letterSpacing: '0.2em' }}>AUTO-ADHÉSIF</span> {/* Titre en blanc */}
                <span className="text-lg mt-1 ml-4 relative left-[24px] text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Installation immédiate sur surface vitrée.</span>
              </div>
            </div>

            {/* Barre 2 */}
            <div className="w-full h-[80px] rounded-lg bg-gradient-to-r from-[#003034] to-[#008E9A] flex items-center pl-6 pr-6">
              <span className="text-4xl font-bold relative top-0 text-white" style={{ fontFamily: 'Adieu, sans-serif' }}>2</span> {/* Chiffre en blanc */}
              <span className="text-2xl font-bold mx-2 relative top-1 left-4 text-white" style={{ fontFamily: 'Adieu, sans-serif' }}>|</span> {/* Barre en blanc */}
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-widest relative left-[40px] top-[5px] text-white" style={{ fontFamily: 'Adieu, sans-serif', letterSpacing: '0.2em' }}>ULTRA FIN</span> {/* Titre en blanc */}
                <span className="text-lg mt-1 ml-4 relative left-[24px] text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Seulement 2,5mm d'épaisseur.</span>
              </div>
            </div>

            {/* Barre 3 */}
            <div className="w-full h-[80px] rounded-lg bg-gradient-to-r from-[#003034] to-[#008E9A] flex items-center pl-6 pr-6">
              <span className="text-4xl font-bold relative top-0 text-white" style={{ fontFamily: 'Adieu, sans-serif' }}>3</span> {/* Chiffre en blanc */}
              <span className="text-2xl font-bold mx-2 relative top-1 left-4 text-white" style={{ fontFamily: 'Adieu, sans-serif' }}>|</span> {/* Barre en blanc */}
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-widest relative left-[40px] top-[5px] text-white" style={{ fontFamily: 'Adieu, sans-serif', letterSpacing: '0.2em' }}>MODULAIRE</span> {/* Titre en blanc */}
                <span className="text-lg mt-1 ml-4 relative left-[24px] text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Module de 1000*400 mm combinable.</span>
              </div>
            </div>

            {/* Barre 4 */}
            <div className="w-full h-[80px] rounded-lg bg-gradient-to-r from-[#003034] to-[#008E9A] flex items-center pl-6 pr-6">
              <span className="text-4xl font-bold relative top-0 text-white" style={{ fontFamily: 'Adieu, sans-serif' }}>4</span> {/* Chiffre en blanc */}
              <span className="text-2xl font-bold mx-2 relative top-1 left-4 text-white" style={{ fontFamily: 'Adieu, sans-serif' }}>|</span> {/* Barre en blanc */}
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-widest relative left-[40px] top-[5px] text-white" style={{ fontFamily: 'Adieu, sans-serif', letterSpacing: '0.2em' }}>ÉCONOME</span> {/* Titre en blanc */}
                <span className="text-lg mt-1 ml-4 relative left-[24px] text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Consommation réduite grâce aux LED.</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Configuration pour la version desktop */}
          <div className="absolute left-[-50%] bottom-[18%] w-[100%] h-full flex items-center justify-center overflow-hidden"> 
            <img 
              src={busLedImg} 
              alt="Bus LED" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Barres vertes sur la version desktop */}
          <div className="absolute right-[-2%] top-[290px] flex flex-col space-y-14 z-10 text-white">
            <div className="w-[600px] h-[80px] rounded-lg bg-gradient-to-r from-[#003034] to-[#008E9A] flex items-center pl-6 pr-6">
              <span className="text-4xl font-bold relative top-0" style={{ fontFamily: 'Adieu, sans-serif' }}>1</span>
              <span className="text-2xl font-bold mx-2 relative top-1 left-4" style={{ fontFamily: 'Adieu, sans-serif' }}>|</span>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-widest relative left-[40px] top-[5px]" style={{ fontFamily: 'Adieu, sans-serif', letterSpacing: '0.2em' }}>AUTO-ADHÉSIF</span>
                <span className="text-lg mt-1 ml-4 relative left-[24px]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Installation immédiate sur surface vitrée.</span>
              </div>
            </div>

            <div className="w-[600px] h-[80px] rounded-lg bg-gradient-to-r from-[#003034] to-[#008E9A] flex items-center pl-6 pr-6">
              <span className="text-4xl font-bold relative top-0" style={{ fontFamily: 'Adieu, sans-serif' }}>2</span>
              <span className="text-2xl font-bold mx-2 relative top-1 left-4" style={{ fontFamily: 'Adieu, sans-serif' }}>|</span>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-widest relative left-[40px] top-[5px]" style={{ fontFamily: 'Adieu, sans-serif', letterSpacing: '0.2em' }}>ULTRA FIN</span>
                <span className="text-lg mt-1 ml-4 relative left-[24px]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Seulement 2,5mm d'épaisseur.</span>
              </div>
            </div>

            <div className="w-[600px] h-[80px] rounded-lg bg-gradient-to-r from-[#003034] to-[#008E9A] flex items-center pl-6 pr-6">
              <span className="text-4xl font-bold relative top-0" style={{ fontFamily: 'Adieu, sans-serif' }}>3</span>
              <span className="text-2xl font-bold mx-2 relative top-1 left-4" style={{ fontFamily: 'Adieu, sans-serif' }}>|</span>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-widest relative left-[40px] top-[5px]" style={{ fontFamily: 'Adieu, sans-serif', letterSpacing: '0.2em' }}>MODULAIRE</span>
                <span className="text-lg mt-1 ml-4 relative left-[24px]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Module de 1000*400 mm combinable.</span>
              </div>
            </div>

            <div className="w-[600px] h-[80px] rounded-lg bg-gradient-to-r from-[#003034] to-[#008E9A] flex items-center pl-6 pr-6">
              <span className="text-4xl font-bold relative top-0" style={{ fontFamily: 'Adieu, sans-serif' }}>4</span>
              <span className="text-2xl font-bold mx-2 relative top-1 left-4" style={{ fontFamily: 'Adieu, sans-serif' }}>|</span>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold tracking-widest relative left-[40px] top-[5px]" style={{ fontFamily: 'Adieu, sans-serif', letterSpacing: '0.2em' }}>ÉCONOME</span>
                <span className="text-lg mt-1 ml-4 relative left-[24px]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Consommation réduite grâce aux LED.</span>
              </div>
            </div>
          </div>

          {/* Barres blanches en fond transparent avec bordures plus fines */}
          <div className="absolute right-[-2.5%] top-[295px] w-[620px] h-[90px] border border-white rounded-lg z-20"></div>
          <div className="absolute right-[-2.5%] top-[430px] w-[620px] h-[90px] border border-white rounded-lg z-20"></div>
          <div className="absolute right-[-2.5%] top-[567px] w-[620px] h-[90px] border border-white rounded-lg z-20"></div>
          <div className="absolute right-[-2.5%] top-[703px] w-[620px] h-[90px] border border-white rounded-lg z-20"></div>
        </>
      )}
      {/* Un Produit Innovant */}
      <div className={`absolute ${isBelow768 ? 'left-[25%] top-[950px] w-[340px]' : 'left-[-2%] top-[1200px] w-[620px]'} ${isBelow768 ? 'h-[80px]' : 'h-[100px]'} border border-white rounded-[25px] z-20 flex items-center justify-center`}>
        <span className={`${isBelow768 ? 'text-lg' : 'text-3xl'} font-bold text-white`} style={{ fontFamily: 'Adieu, sans-serif' }}>
          UN PRODUIT INNOVANT !
        </span>
      </div>

      {/* Texte Néofilm Led */}
      <div className={`absolute ${isBelow768 ? 'left-[25%] top-[1040px] w-[340px]' : 'left-[2%] top-[1340px] w-[620px]'} z-20 px-4`}>
        <p className={`${isBelow768 ? 'text-base leading-normal text-center' : 'text-lg'} text-white`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Notre Néofilm led permet de dynamiser <br /> votre espace en s’intégrant parfaitement <br /> à l’agencement de votre lieu. 
          Profitez des innovations de notre technologie.
        </p>
      </div>

      {/* Bouton RDV */}
      <div className={`absolute ${isBelow768 ? 'left-[52%] top-[1230px]' : 'left-[12%] top-[1480px]'} transform -translate-x-1/2 z-20`}>
        <button 
          className={`${isBelow768 ? 'px-14 py-2 text-sm' : 'px-24 py-3 text-lg'} text-white rounded-full font-bold border-[1.5px] border-[#EE5DFB]`} 
          style={{
            background: 'linear-gradient(90deg, #11E8FA 0%, #79071E 100%)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          PRENDRE RDV
        </button>
      </div>




      <div
  className={`w-full h-auto mt-12 ${
    isWidth1440 ? 'ml-[-490px]' : '' // Décalage vers la gauche pour 1440px
  }`}
  style={{
    marginTop: isWidth1440 ? '-20px' : '12px', // Remonte l'élément pour 1440px
  }}
>
  <ImageSlider />
</div>

    </section>
  );
};

export default Avantages;
