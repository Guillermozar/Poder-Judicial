import React from 'react';
import { Scale, Globe, Mail, ChevronRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="text-white w-10 h-10" />
              <div>
                <h3 className="text-white font-bold text-lg leading-none">ITAPÚA</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">{t('footer.sede')}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>

          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t('footer.links')}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://www.pj.gov.py/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> {t('footer.csj')}</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> {t('footer.penal')}</a></li>
              <li><a href="https://www.csj.gov.py/portal" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> Gestión de Expedientes</a></li>
              <li><a href="https://ingresosjudiciales.csj.gov.py/LiquidacionesWeb/home.seam" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> Tasas Judiciales</a></li>
              <li><Link to="/calendario" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> Calendario (Agenda)</Link></li>
              <li><a href="https://mail.pj.gov.py/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.pj.gov.py%2fowa%2f" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 focus:outline-none"><ChevronRight size={14} /> Correo Institucional</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{t('footer.hq')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary-500 shrink-0" size={18} />
                <span>{t('footer.addr')}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary-500 shrink-0" size={18} />
                <span>{t('footer.phone')}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-center text-xs">
          <p className="text-center">{t('footer.copy').replace('{{year}}', currentYear)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
