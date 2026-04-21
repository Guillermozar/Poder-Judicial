import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Clock, Scale, Search, Menu, X, Info, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar si estamos cerca del fondo de la página
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      setIsNearBottom(windowHeight + scrollTop >= documentHeight - 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'gn' : 'es');
  };

  const navItems = [
    { name: t('header.nav.home'), path: '/' },
    { name: t('header.nav.institutional'), path: '/institucional' },
    { name: t('header.nav.services'), path: '/#servicios' },
    { name: t('header.nav.transparency'), path: '/#transparencia' },
    { name: t('header.nav.districts'), path: '/#distritos' }
  ];

  const getIsActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>


      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary-900 p-2 rounded-lg shadow-sm">
              <Scale className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-900 leading-tight">{t('header.title')}</h1>
              <p className="text-sm font-semibold text-slate-500 tracking-widest">{t('header.subtitle')}</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active = getIsActive(item.path);
              return (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary-700 ${active ? 'text-primary-700 border-b-2 border-primary-700' : 'text-slate-600'}`}
                >
                  {item.name}
                </Link>
              );
            })}
            <button className="bg-primary-900 text-white px-6 py-2 rounded-full font-bold text-sm hover:focus:ring-2 focus:ring-primary-500 hover:bg-primary-800 transition-all flex items-center gap-2">
              <Search size={16} /> {t('header.search_case')}
            </button>
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-1.5 ml-1 px-3 py-1.5 border border-slate-200 hover:border-primary-500 rounded-full text-xs font-bold text-slate-600 hover:text-primary-700 transition-all uppercase tracking-wider bg-white shadow-sm"
              title="Cambiar idioma / Ñe'ẽ mboambue"
            >
              <Globe size={14} className={i18n.language === 'gn' ? 'text-primary-500' : ''} />
              {i18n.language}
            </button>
          </nav>

          <button className="lg:hidden text-slate-800 focus:outline-none" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-6 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-10">
            <Scale className="text-primary-900 w-10 h-10" />
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-6 text-2xl font-bold text-slate-800">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-left hover:text-primary-700 transition" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
          <button className="mt-auto bg-primary-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-800 transition">{t('header.search_case')}</button>
          <button 
            onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} 
            className="mt-4 flex justify-center items-center gap-2 border border-slate-200 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition uppercase"
          >
            <Globe size={20} />
            {i18n.language === 'es' ? t('header.lang_gn') : t('header.lang_es')}
          </button>
        </div>
      )}

      {/* Botón flotante de información */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isNearBottom ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100'}`}>
        {showInfo && (
          <div className="absolute bottom-full right-0 mb-4 bg-white text-slate-800 p-5 rounded-2xl shadow-2xl w-72 animate-in slide-in-from-bottom-2 duration-200 border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-primary-900">{t('header.info_layer.title')}</h4>
              <button onClick={() => setShowInfo(false)} className="text-slate-400 hover:text-slate-700">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-50 p-2.5 rounded-full text-primary-700">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">{t('header.info_layer.phone')}</p>
                  <p className="text-sm font-bold">(071) 219 2000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary-50 p-2.5 rounded-full text-primary-700">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">{t('header.info_layer.hours')}</p>
                  <p className="text-sm font-bold">{t('header.info_layer.hours_value')}</p>
                </div>
              </div>
            </div>

            <hr className="my-4 border-slate-100" />
            
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-primary-700 hover:text-primary-900 font-semibold flex items-center gap-2 transition-colors">
                • {t('header.info_layer.link_pj')}
              </a>
              <a href="#" className="text-sm text-primary-700 hover:text-primary-900 font-semibold flex items-center gap-2 transition-colors">
                • {t('header.info_layer.link_csj')}
              </a>
            </div>
          </div>
        )}
        <button 
          onClick={() => setShowInfo(!showInfo)}
          className={`p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${showInfo ? 'bg-primary-800 text-white scale-110' : 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-105'}`}
          aria-label="Información útil"
        >
          <Info size={28} />
        </button>
      </div>
    </>
  );
};

export default Header;
