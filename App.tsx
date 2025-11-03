import React from 'react';
import Header from './components/Header';
;
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import PainPointsSection from './components/PainPointsSection';
import TeamMemberProfile from './components/TeamMemberProfile';
import CaseStudySection from './components/CaseStudySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <PainPointsSection />
        <TeamMemberProfile />
        <CaseStudySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
