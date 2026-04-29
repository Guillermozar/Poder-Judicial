import React from 'react';
import { Scale, FileText, Users, ShieldCheck, BookOpen, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesGrid = () => {
  const { t } = useTranslation();
  const services = [
    { title: t('services.judicial_soft.title'), icon: <Scale className="w-8 h-8" />, desc: t('services.judicial_soft.desc'), color: "bg-primary-600", link: "https://apps.csj.gov.py/login" },
    { title: t('services.criminal_records.title'), icon: <ShieldCheck className="w-8 h-8" />, desc: t('services.criminal_records.desc'), color: "bg-emerald-600", link: "https://www.csj.gov.py/informesjudiciales/" },
    { title: t('services.judicial_fees.title'), icon: <FileText className="w-8 h-8" />, desc: t('services.judicial_fees.desc'), color: "bg-amber-600", link: "https://ingresosjudiciales.csj.gov.py/LiquidacionesWeb/home.seam" },
    { title: t('services.personnel_entry.title'), icon: <Users className="w-8 h-8" />, desc: t('services.personnel_entry.desc'), color: "bg-indigo-600", link: "https://www.pj.gov.py/contenido/1609-concursos-de-ingreso-y-promocion-de-personas/3343" },
    { title: t('services.forms.title'), icon: <BookOpen className="w-8 h-8" />, desc: t('services.forms.desc'), color: "bg-slate-700", link: "https://www.csj.gov.py/igdj/" },
    { title: t('services.transparency.title'), icon: <Info className="w-8 h-8" />, desc: t('services.transparency.desc'), color: "bg-red-700", link: "https://transparencia.una.py/wp-content/uploads/2022/09/LEY_5282_2014.pdf" },
  ];

  return (
    <section className="container mx-auto px-4 -mt-16 relative z-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {services.map((s, i) => (
          <a 
            key={i} 
            href={s.link} 
            target={s.link.startsWith('http') ? "_blank" : "_self"} 
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform cursor-pointer border border-slate-100 group block"
          >
            <div className={`${s.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
              {s.icon}
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
