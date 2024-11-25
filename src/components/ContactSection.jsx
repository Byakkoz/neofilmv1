import React from 'react';
import { useMediaQuery } from 'react-responsive'; // Ajout pour le responsive
import filmBg from '../assets/filmbg.jpg'; // Import de l'image depuis le dossier assets

const ContactSection = () => {
  const isBelow768 = useMediaQuery({ maxWidth: 768 }); // Détection de l'écran
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-start"
      style={{
        backgroundImage: `url(${filmBg})`, // Utilisation de l'image importée
        backgroundSize: 'cover', // L'image couvre toute la section
        backgroundPosition: 'center', // L'image est centrée
        backgroundRepeat: 'no-repeat', // Pas de répétition de l'image
      }}
    >
      {/* Titre avec dégradé */}
      <div
        className="text-left mb-8 absolute"
        style={{
          top: isBelow768 ? '10%' : '5%', // Ajuste la position en mobile
          left: isBelow768 ? '3%' : '5%', // Ajuste la position en mobile
        }}
      >
        <h2
          className={`${isBelow768 ? 'text-3xl' : 'text-6xl'} font-bold leading-tight`}
          style={{
            fontFamily: 'Adieu, sans-serif',
            background: 'linear-gradient(90deg, #EE5DFB, #11E8FA)', // Dégradé violet vers bleu
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          PRENONS RENDEZ VOUS ET <br /> DISCUTONS DE VOTRE PROJET
        </h2>
      </div>

        {/* Cadre arrière (plus grand) avec opacité */}
        <div
          className={`${isBelow768 ? 'w-[95%] h-[440px]' : 'w-[75%] h-[600px]'} mx-auto absolute`}
          style={{
            backgroundColor: '#121212', // Fond en #121212
            opacity: 0.48, // Opacité du cadre arrière
            borderRadius: '20px', // Coins arrondis à 20px
            top: isWidth1440 ? '28%' : isBelow768 ? '35%' : '27%', // Ajuste la position verticale pour 1440px
            left: isWidth1440 ? '14%' : isBelow768 ? '2.5%' : '12.5%', // Ajuste la position horizontale pour 1440px
            width: isWidth1440 ? '70%' : undefined, // Réduit la largeur pour 1440px
            height: isWidth1440 ? '400px' : undefined, // Réduit la hauteur pour 1440px
            zIndex: 1, // Arrière-plan par rapport au formulaire
          }}
        ></div>


        {/* Cadre existant avec bordure en dégradé et fond en dégradé */}
        <div
          className={`${isBelow768 ? 'w-[90%] h-[400px]' : 'w-[70%] h-[500px]'} mx-auto relative`}
          style={{
            borderRadius: '20px', // Coins arrondis à 20px pour le cadre externe
            marginTop: isWidth1440 ? '12%' : isBelow768 ? '30%' : '10%', // Descend un peu pour 1440px
            width: isWidth1440 ? '68%' : undefined, // Réduit légèrement la largeur pour 1440px
            height: isWidth1440 ? '480px' : undefined, // Réduit légèrement la hauteur pour 1440px
            border: '2px solid', // Bordure avec épaisseur
            borderImage: 'linear-gradient(90deg, #EE5DFB, #11E8FA)', // Bordure en dégradé linéaire
            zIndex: 2, // Cadre par-dessus celui en 121212
          }}
        >

        {/* Fond avec opacité */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundColor: '#121212', // Fond en #121212
            opacity: 0.48, // Opacité du fond
            borderRadius: '20px', // Coins arrondis
          }}
        ></div>

        {/* Nouveau cadre interne au-dessus avec fond en dégradé */}
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          style={{
            background: 'linear-gradient(90deg, #EE5DFB, #11E8FA)', // Couleurs de l'image 1
            opacity: 0.23, // Opacité à 23% du fond du cadre interne
            borderRadius: '20px', // Coins arrondis du cadre interne
          }}
        ></div>

        {/* Formulaire opaque au-dessus du fond */}
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          style={{ zIndex: 3 }} // Formulaire au-dessus du fond
        >
          <form className="w-full h-full flex flex-col justify-center items-center p-4 space-y-4"
            style={{
              opacity: 1, // Formulaire 100% opaque
            }}
          >
            <div className="w-full">
              <label className="text-white mb-2 block">Nom et Prénom</label>
              <input
                type="text"
                className="w-full p-2 rounded-md text-black"
                placeholder="Votre nom et Prénom"
              />
            </div>
            <div className="w-full">
              <label className="text-white mb-2 block">Entreprise</label>
              <input
                type="text"
                className="w-full p-2 rounded-md text-black"
                placeholder="Nom de l’entreprise, de l’association..."
              />
            </div>
            <div className="w-full">
              <label className="text-white mb-2 block">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded-md text-black"
                placeholder="Saisissez votre email"
              />
            </div>
            <div className="w-full">
              <label className="text-white mb-2 block">Message</label>
              <textarea
                className="w-full p-2 rounded-md text-black"
                placeholder="Entrez votre message"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-white text-black rounded-md font-bold"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
