import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Download from '../components/Download';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Download />
      <Footer />
    </main>
  );
};

export default HomePage; 