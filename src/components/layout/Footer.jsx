import React from 'react';
import { Scale, Globe, Mail, ChevronRight, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="text-white w-10 h-10" />
              <div>
                <h3 className="text-white font-bold text-lg leading-none">ITAPÚA</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Sede Encarnación</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Comprometidos con la excelencia judicial y la transparencia institucional en el séptimo departamento del país.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-800 p-2 rounded hover:bg-primary-600 cursor-pointer transition-colors focus:outline-none" aria-label="Sitio web"><Globe size={18} /></button>
              <button className="bg-slate-800 p-2 rounded hover:bg-primary-600 cursor-pointer transition-colors focus:outline-none" aria-label="Correo electrónico"><Mail size={18} /></button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> Corte Suprema de Justicia</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> Antecedentes Penales</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> Sistema Judisoft</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> Tasas Judiciales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Sede Central</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary-500 shrink-0" size={18} />
                <span>Palacio de Justicia de Encarnación, Luis Maria Argaña y Jovenes por la Democracia.</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary-500 shrink-0" size={18} />
                <span>(071) 219 2000 - Central Telefónica</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {new Date().getFullYear()} Poder Judicial - Tercera Circunscripción de Itapúa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
