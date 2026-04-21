import React from 'react';
import { Scale } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 transition-opacity duration-300">
      <div className="relative">
        {/* Pulsing outer ring */}
        <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-60"></div>
        {/* Solid inner circle with border */}
        <div className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl border-2 border-primary-100">
          <Scale className="w-10 h-10 text-primary-900 animate-pulse" />
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center gap-3">
        <h3 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">
          Poder Judicial
        </h3>
        
        {/* Modern Dot Loader */}
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 bg-primary-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2.5 h-2.5 bg-primary-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2.5 h-2.5 bg-primary-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
