import React from 'react';
import { useMediaQuery } from 'react-responsive';
import qsnImg from '../assets/qsnimg.png';

const PartenaireSection = () => {
  // Constante pour détecter si l'écran a une largeur de 1440px
  const isWidth1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1440 });

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: `url(${qsnImg})` }}
    >
      {/* Titre principal */}
      <div className="text-center mt-0 relative z-10">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#EE5DFB] to-[#11E8FA] font-adieu tracking-wide ${
            isWidth1440 ? 'ml-[50px]' : ''
          }`} // Exemple : ajout de décalage pour 1440px si nécessaire
          style={{ fontFamily: "'Adieu', sans-serif" }}
        >
          DEVENEZ PARTENAIRE
        </h1>
        <h2
          className="text-4xl md:text-5xl font-bold text-white font-adieu tracking-wide"
          style={{ fontFamily: "'Adieu', sans-serif" }}
        >
          RENTABILISEZ VOS ESPACES VITRÉS
        </h2>
      </div>

      {/* Premier cadre (arrière-plan sous le titre) */}
      <div
        className="gradient-box absolute md:top-[20.5%] md:w-2/3 h-[75px] flex items-center justify-center z-0"
        style={{
          top: isWidth1440 ? '25%' : '20.5%', // Ajuste la position verticale pour 1440px
          width: isWidth1440 ? '84%' : '65%', // Largeur 75% pour 1440px et w-11/12 par défaut
          padding: '2px',
          borderRadius: '20px',
          background: 'linear-gradient(90deg, #EE5DFB, #11E8FA)',
          transform: 'translateY(-50%)',
        }}
      >
        <div
          className="w-full h-full rounded-[18px]"
          style={{
            backgroundColor: '#11293A',
            borderRadius: '18px',
          }}
        ></div>
      </div>



      {/* Deuxième cadre */}
      <div
        className={`gradient-box mt-32 ${
          isWidth1440 ? 'w-[65%]' : 'w-11/12'
        } md:w-2/3 h-auto p-6 rounded-lg`}
        style={{
          padding: '1px',
          borderRadius: '20px',
          background: 'linear-gradient(90deg, #EE5DFB, #11E8FA)',
        }}
      >
        <div className="w-full h-full rounded-[18px] p-6 bg-[#11293A] pl-8">
          {/* Contenu interne avec JetBrains Mono */}
          <h3
            className="text-white text-2xl font-bold mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Vous souhaitez rentabiliser vos surfaces vitrées en accueillant nos NEOFILM LED ?
          </h3>

          {/* Texte "Comment ça marche ?" en dégradé */}
          <h4
            className="text-transparent bg-clip-text text-xl font-semibold mb-2"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              backgroundImage: 'linear-gradient(90deg, #11E8FA 0%, #EE5DFB 42%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Comment ça marche ?
          </h4>

          {/* Liste des étapes */}
          <ol
            className="text-white text-lg list-decimal ml-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <li>
              Nous venons mesurer le(s) espaces que vous souhaitez mettre à notre disposition.
            </li>
            <li>Nous installons le NEOFILM LED.</li>
            <li>
              <span className="font-bold">
                Nous vous reversons chaque mois 3% de nos bénéfices issus de nos abonnements !
              </span>
            </li>
          </ol>
          <p
            className="text-white mt-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Que vous ayez un commerce ayant pignon sur rue ou encore un espace pouvant accueillir des entreprises ou du
            public, bénéficiez de nos offres partenaires et rentabilisez vos surfaces vitrées inexploitées ! Pour en savoir
            plus, n'attendez plus, contactez-nous !
          </p>
        </div>
      </div>

{/* Bouton "En savoir plus" */}
      <div
        className="absolute"
        style={{
          top: isWidth1440 ? 'calc(80% - -35px)' : 'calc(77% - 100px)', // Descendre en 1440px
        }}
      >
        <button
          className="px-6 py-3 text-md font-bold rounded-full text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: 'linear-gradient(90deg, #11E8FA, #79071E)',
            border: '1px solid #EE5DFB',
            cursor: 'pointer',
          }}
        >
          NOUS CONTACTER
        </button>
      </div>

    </section>
  );
};

export default PartenaireSection;
