import React, { useState, useEffect } from 'react';
import { Phone, Clock, Scale, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-xs flex justify-between items-center overflow-hidden">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} />(071) 219 2000</span>
          <span className="hidden md:flex items-center gap-1"><Clock size={12} /> Lun - Vie: 07:00 a 13:00</span>
        </div>
        <div className="flex gap-3">
          <a href="#" className="hover:text-primary-400">Poder Judicial Paraguay</a>
          <a href="#" className="hover:text-primary-400">Corte Suprema</a>
        </div>
      </div>

      {/* Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary-900 p-2 rounded-lg shadow-sm">
              <Scale className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-900 leading-tight">TERCERA CIRCUNSCRIPCIÓN</h1>
              <p className="text-sm font-semibold text-slate-500 tracking-widest">PODER JUDICIAL • ITAPÚA</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Inicio', 'Institucional', 'Servicios', 'Transparencia', 'Distritos'].map((item) => (
              <button 
                key={item}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary-700 ${activeTab === item.toLowerCase() ? 'text-primary-700 border-b-2 border-primary-700' : 'text-slate-600'}`}
              >
                {item}
              </button>
            ))}
            <button className="bg-primary-900 text-white px-6 py-2 rounded-full font-bold text-sm hover:focus:ring-2 focus:ring-primary-500 hover:bg-primary-800 transition-all flex items-center gap-2">
              <Search size={16} /> CONSULTAR CAUSA
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-800 focus:outline-none" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-6 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-10">
            <Scale className="text-primary-900 w-10 h-10" />
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-6 text-2xl font-bold text-slate-800">
            {['Inicio', 'Institucional', 'Servicios', 'Transparencia', 'Distritos'].map((item) => (
              <button key={item} className="text-left hover:text-primary-700 transition" onClick={() => setIsMenuOpen(false)}>{item}</button>
            ))}
          </div>
          <button className="mt-auto bg-primary-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-800 transition">CONSULTAR CAUSA</button>
        </div>
      )}
    </>
  );
};

export default Header;
