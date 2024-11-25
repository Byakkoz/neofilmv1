import React from 'react';
import Header from './components/Header';
import QuiSommesNous from './components/QuiSommesNous';
import Produit from './components/Produit';
import Avantages from './components/Avantages';
import Adaptation from './components/Adaptation'; // Importation du composant Adaptation
import Installation from './components/Installation'; // Importation du composant Installation
import PartenaireSection from './components/PartenaireSection'; // Importation du composant PartenaireSection
import NeofilmSection from './components/NeofilmSection'; // Importation du nouveau composant NeofilmSection
import ContactSection from './components/ContactSection'; // Importation du composant ContactSection

function App() {
  return (
    <div>
      {/* Section Header */}
      <section id="header" className="h-screen">
        <Header />
      </section>

      {/* Section Qui Sommes-Nous */}
      <section id="qui-sommes-nous" className="h-screen">
        <QuiSommesNous />
      </section>

      {/* Section Produit */}
      <section id="produit" className="h-screen">
        <Produit />
      </section>

      {/* Section Avantages */}
      <section id="avantages" className="h-[200vh] bg-[#121212]">
        <Avantages />
      </section>

      {/* Section Adaptation */}
      <section id="adaptation" className="min-h-screen bg-[#D9D9D9] mt-[-100vh] pt-[100vh]">
        <Adaptation />
      </section>

      {/* Section Installation */}
      <section id="installation" className="min-h-screen bg-[#121212]">
        <Installation />
      </section>

      {/* Section Partenaire */}
      <section id="partenaire" className="min-h-screen bg-[#D9D9D9]">
        <PartenaireSection />
      </section>

      {/* Section Neofilm LED */}
      <section id="neofilm-led" className="min-h-screen bg-[#121212]">
        <NeofilmSection />
      </section>
      
      {/* Section Contact */}
      <section id="contact" className="min-h-screen bg-[#121212]">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
