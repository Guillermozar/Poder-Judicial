import React from 'react';
import { Gavel } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 flex items-center overflow-hidden bg-primary-900">
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
          alt="Palacio de Justicia de Encarnación" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="bg-primary-600 text-white px-3 py-1 rounded text-sm font-bold mb-4 inline-block tracking-wide uppercase shadow-sm">{t('hero.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{t('hero.title')}</h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
