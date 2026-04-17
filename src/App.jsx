import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Institutional } from './components';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institutional />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
