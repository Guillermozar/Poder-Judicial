import React from 'react';
import { Scale, FileText, Users, ShieldCheck, BookOpen, Info } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    { title: "Judisoft", icon: <Scale className="w-8 h-8" />, desc: "Gestión de Expedientes Electrónicos", color: "bg-primary-600", link: "https://apps.csj.gov.py/login" },
    { title: "Antecedentes", icon: <ShieldCheck className="w-8 h-8" />, desc: "Informes y Certificados Penales", color: "bg-emerald-600", link: "#" },
    { title: "Tasas Judiciales", icon: <FileText className="w-8 h-8" />, desc: "Liquidación y Pago de Tasas", color: "bg-amber-600", link: "https://ingresosjudiciales.csj.gov.py/LiquidacionesWeb/home.seam" },
    { title: "Mediación", icon: <Users className="w-8 h-8" />, desc: "Resolución Alternativa de Conflictos", color: "bg-indigo-600", link: "#" },
    { title: "Formularios", icon: <BookOpen className="w-8 h-8" />, desc: "Gestión y Documentación Judicial", color: "bg-slate-700", link: "https://www.csj.gov.py/igdj/" },
    { title: "Transparencia", icon: <Info className="w-8 h-8" />, desc: "Ley 5282/14 - Información Pública", color: "bg-red-700", link: "https://transparencia.una.py/wp-content/uploads/2022/09/LEY_5282_2014.pdf" },
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
