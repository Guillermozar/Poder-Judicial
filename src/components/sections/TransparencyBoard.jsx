import React from 'react';
import { Mail, ExternalLink, ShieldCheck, ChevronRight, User } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

// Magistrates photos
import vargasImg from '../../assets/vargas.jpg';
import monzonImg from '../../assets/monzon.jpg';
import scappiniImg from '../../assets/scappini.jpg';

const TransparencyBoard = () => {
  const { t } = useTranslation();
  
  const authorities = [
    { name: "Mag. Miguel Ángel Vargas Díaz", role: t('transparency.pres'), image: vargasImg },
    { name: "Mag. Nilsa Inés Monzón", role: t('transparency.vp1'), image: monzonImg },
    { name: "Mag. Claudia A. Scappini", role: t('transparency.vp2'), image: scappiniImg }
  ];

  return (
    <section className="bg-white py-20 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Authorities */}
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-2 bg-primary-900 rounded-full"></div>
              <h2 className="text-3xl font-extrabold text-slate-800 uppercase tracking-tight">{t('transparency.council')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {authorities.map((a, i) => (
                <div key={i} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 text-center hover:shadow-lg transition-shadow group">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md bg-primary-100 flex items-center justify-center text-primary-600 overflow-hidden">
                    {a.image ? (
                      <img src={a.image} alt={a.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <User size={48} strokeWidth={1.5} />
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 leading-tight min-h-[3rem] flex items-center justify-center">{a.name}</h4>
                  <p className="text-sm text-primary-700 font-semibold mt-1">{a.role}</p>
                  <div className="mt-4 pt-4 border-t border-slate-200 flex justify-center gap-3">
                    <button className="text-slate-400 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors" aria-label="Enviar correo"><Mail size={16} /></button>
                    <button className="text-slate-400 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors" aria-label="Abrir perfil"><ExternalLink size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Transparency Law */}
          <div className="lg:w-1/3 bg-primary-50 rounded-3xl p-8 border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-primary-900 w-8 h-8" />
              <h2 className="text-2xl font-bold text-primary-900">{t('transparency.active')}</h2>
            </div>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              {t('transparency.desc1')}<strong>{t('transparency.desc_bold')}</strong>{t('transparency.desc2')}
            </p>
            <div className="space-y-3">
              {[t('transparency.list_func'), t('transparency.list_pres'), t('transparency.list_inv')].map((item) => (
                <button key={item} className="w-full bg-white p-4 rounded-xl text-left flex justify-between items-center text-sm font-bold text-slate-700 hover:bg-primary-900 hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                  {item} <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyBoard;
