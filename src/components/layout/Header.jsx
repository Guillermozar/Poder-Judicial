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

  const searchableItems = [
    { title: t('header.nav.home'), path: '/' },
    { title: t('header.nav.institutional'), path: '/institucional' },
    { title: t('header.nav.districts'), path: '/#distritos' },
    { title: 'Expediente Electrónico Judicial', path: 'https://apps.csj.gov.py/login', external: true },
    { title: 'Corte Suprema', path: 'https://www.pj.gov.py', external: true }
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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
    { name: 'PJ Oficial', path: 'https://www.pj.gov.py/', external: true }
  ];

  const getIsActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-[1440px] w-full mx-auto px-6 flex justify-between items-center">
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
              const active = !item.external && getIsActive(item.path);
              if (item.external) {
                return (
                  <a 
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary-700 text-slate-600"
                  >
                    {item.name}
                  </a>
                );
              }
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
            
            {/* Global Search Desktop */}
            {/* Global Search Desktop - Oculto temporalmente
            <div className="relative">
              {isSearchExpanded ? (
                <div className="flex items-center bg-white border-2 border-primary-500 rounded-full px-3 py-1.5 w-64 md:w-80 transition-all shadow-sm">
                  <Search size={16} className="text-primary-500 mr-2" />
                  <input 
                    autoFocus
                    type="text" 
                    placeholder="Buscar en el portal..." 
                    className="bg-transparent border-none outline-none text-sm w-full font-semibold text-slate-700"
                    value={searchQuery}
                    onChange={handleSearch}
                    onBlur={() => setTimeout(() => setIsSearchExpanded(false), 200)}
                  />
                  <button onClick={() => {setIsSearchExpanded(false); setSearchQuery('')}} className="text-slate-400 hover:text-slate-800">
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsSearchExpanded(true)}
                  className="bg-primary-900 text-white px-6 py-2 rounded-full font-bold text-sm hover:ring-2 focus:ring-primary-500 hover:bg-primary-800 transition-all flex items-center gap-2"
                >
                  <Search size={16} /> {t('header.search_case')}
                </button>
              )}

              {isSearchExpanded && searchQuery.length > 1 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                  {searchResults.length > 0 ? (
                    <ul>
                      {searchResults.map((res, i) => (
                        <li key={i}>
                          {res.external ? (
                            <a href={res.path} target="_blank" rel="noreferrer" className="block px-4 py-3 text-sm hover:bg-slate-50 border-b border-slate-50 last:border-0 font-semibold text-slate-700">
                              <Search size={12} className="inline mr-2 text-slate-400" /> {res.title}
                            </a>
                          ) : (
                            <Link to={res.path} className="block px-4 py-3 text-sm hover:bg-slate-50 border-b border-slate-50 last:border-0 font-semibold text-slate-700" onClick={() => setIsSearchExpanded(false)}>
                              <Search size={12} className="inline mr-2 text-slate-400" /> {res.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-4 text-sm text-slate-500 text-center font-medium">
                      No se encontraron resultados.
                    </div>
                  )}
                </div>
              )}
            </div>
            */}

            {/* Oculto temporalmente
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-1.5 ml-1 px-3 py-1.5 border border-slate-200 hover:border-primary-500 rounded-full text-xs font-bold text-slate-600 hover:text-primary-700 transition-all uppercase tracking-wider bg-white shadow-sm"
              title="Cambiar idioma / Ñe'ẽ mboambue"
            >
              <Globe size={14} className={i18n.language === 'gn' ? 'text-primary-500' : ''} />
              {i18n.language}
            </button>
            */}
          </nav>

          <button className="lg:hidden text-slate-800 focus:outline-none" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-6 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-8">
            <Scale className="text-primary-900 w-10 h-10" />
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>

          {/* Mobile Search - Oculto temporalmente
          <div className="relative mb-8">
            <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3 w-full">
              <Search size={20} className="text-slate-400 mr-3" />
              <input 
                type="text" 
                placeholder={t('header.search_case')} 
                className="bg-transparent border-none outline-none text-base w-full font-semibold text-slate-700"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            {searchQuery.length > 1 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-20">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((res, i) => (
                      <li key={i}>
                        {res.external ? (
                          <a href={res.path} target="_blank" rel="noreferrer" className="block px-4 py-3 text-base border-b border-slate-50 font-semibold text-slate-700">
                            {res.title}
                          </a>
                        ) : (
                          <Link to={res.path} className="block px-4 py-3 text-base border-b border-slate-50 font-semibold text-slate-700" onClick={() => {setIsMenuOpen(false); setSearchQuery('')}}>
                            {res.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-4 text-sm text-slate-500 text-center font-medium">Sin resultados.</div>
                )}
              </div>
            )}
          </div>
          */}

          <div className="flex flex-col gap-6 text-2xl font-bold text-slate-800">
             {navItems.map((item) => {
               if (item.external) {
                 return (
                   <a 
                     key={item.name} 
                     href={item.path} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-left hover:text-primary-700 transition" 
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {item.name}
                   </a>
                 );
               }
               return (
                 <Link key={item.name} to={item.path} className="text-left hover:text-primary-700 transition" onClick={() => setIsMenuOpen(false)}>
                   {item.name}
                 </Link>
               );
             })}
          </div>
          
          {/* Oculto temporalmente
          <button 
            onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} 
            className="mt-auto mb-4 flex justify-center items-center gap-2 border border-slate-200 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition uppercase"
          >
            <Globe size={20} />
            {i18n.language === 'es' ? t('header.lang_gn') : t('header.lang_es')}
          </button>
          */}
        </div>
      )}

      {/* Info Flotante */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${isNearBottom ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100'}`}>
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
