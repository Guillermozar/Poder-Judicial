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
          {/* Authorities - Full Width */}
          <div className="w-full">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="h-8 w-2 bg-primary-900 rounded-full"></div>
              <h2 className="text-3xl font-extrabold text-slate-800 uppercase tracking-tight">{t('transparency.council')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {authorities.map((a, i) => (
                <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center hover:shadow-lg transition-all group hover:-translate-y-1">
                  <div className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-white shadow-md bg-primary-100 flex items-center justify-center text-primary-600 overflow-hidden">
                    {a.image ? (
                      <img src={a.image} alt={a.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <User size={56} strokeWidth={1.5} />
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg leading-tight min-h-[3rem] flex items-center justify-center px-2">{a.name}</h4>
                  <p className="text-sm text-primary-700 font-bold mt-2 uppercase tracking-wide">{a.role}</p>
                  <div className="mt-6 pt-6 border-t border-slate-200 flex justify-center gap-4">
                    <button className="text-slate-400 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors" aria-label="Enviar correo"><Mail size={18} /></button>
                    <button className="text-slate-400 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors" aria-label="Abrir perfil"><ExternalLink size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyBoard;
