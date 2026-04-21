import React, { useState } from 'react';
import { Accessibility, Sun, Type as FontIcon, ZoomIn, X } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { fontSize, setFontSize, highContrast, setHighContrast, dyslexicFont, setDyslexicFont } = useAccessibility();

  const handleFontSizeCycle = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-4 bg-white text-slate-800 p-5 rounded-2xl shadow-2xl w-64 border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-primary-900 flex items-center gap-2">
              <Accessibility size={18} /> Accesibilidad
            </h4>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-700">
              <X size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={handleFontSizeCycle}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ZoomIn size={16} className="text-primary-600" /> Tamaño Texto
              </div>
              <span className="text-xs bg-slate-100 px-2 py-1 rounded-md font-bold text-slate-600 uppercase">
                {fontSize === 'normal' ? 'Normal' : fontSize === 'large' ? 'Grande' : 'Max'}
              </span>
            </button>

            <button 
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full flex items-center justify-between p-3 rounded-xl border transition-colors ${highContrast ? 'bg-primary-50 border-primary-200' : 'border-slate-100 hover:bg-slate-50'}`}
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sun size={16} className={highContrast ? 'text-primary-600' : 'text-slate-500'} /> Alto Contraste
              </div>
              <div className={`w-8 h-4 rounded-full flex items-center transition-colors ${highContrast ? 'bg-primary-600 justify-end' : 'bg-slate-200 justify-start'}`}>
                <div className="w-3 h-3 bg-white rounded-full mx-0.5 shadow-sm"></div>
              </div>
            </button>

            <button 
              onClick={() => setDyslexicFont(!dyslexicFont)}
              className={`w-full flex items-center justify-between p-3 rounded-xl border transition-colors ${dyslexicFont ? 'bg-primary-50 border-primary-200' : 'border-slate-100 hover:bg-slate-50'}`}
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <FontIcon size={16} className={dyslexicFont ? 'text-primary-600' : 'text-slate-500'} /> Fuente Dislexia
              </div>
              <div className={`w-8 h-4 rounded-full flex items-center transition-colors ${dyslexicFont ? 'bg-primary-600 justify-end' : 'bg-slate-200 justify-start'}`}>
                <div className="w-3 h-3 bg-white rounded-full mx-0.5 shadow-sm"></div>
              </div>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary-700 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary-800 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-primary-500/50"
        aria-label="Menú de Accesibilidad"
      >
        <Accessibility size={26} />
      </button>
    </div>
  );
};

export default AccessibilityPanel;
