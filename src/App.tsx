import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import MobileCTA from './components/MobileCTA';
import SocialCTA from './components/SocialCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Tools />
        <Testimonials />
        <MobileCTA />
        <SocialCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;