import React from 'react';
import { Header, Hero, ServicesGrid, TransparencyBoard, DistrictsGuide, Footer } from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <TransparencyBoard />
        <DistrictsGuide />
      </main>
      <Footer />
    </div>
  );
};

export default App;
