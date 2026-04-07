import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 pb-12 mt-20">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[120px]">
        
       
     <div className="md:col-span-2 md:row-span-2 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] shadow-2xl flex flex-col justify-between group hover:border-orange-500/50 transition-all duration-500">
  <div>
    <h2 className="text-3xl font-black text-white italic">RestoGest</h2>
    <p className="text-slate-400 mt-4 max-w-xs leading-relaxed">
      Elevando la tecnología de mesa para restaurantes que buscan la excelencia.
    </p>
  </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center text-xs font-bold text-white hover:bg-orange-500 transition-colors cursor-pointer">IG</div>
            <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center text-xs font-bold text-white hover:bg-orange-500 transition-colors cursor-pointer">TW</div>
          </div>
        </div>

        
        <div className="md:col-span-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 p-6 rounded-[32px] flex items-center justify-between">
          <div>
            <p className="text-orange-400 font-bold text-sm">Estamos operativos</p>
            <p className="text-white/60 text-xs">Gestión en tiempo real activa</p>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
        </div>

        
        <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-[32px] flex flex-col justify-center gap-2">
          <a href="#" className="text-xs text-slate-300 hover:text-orange-400 transition-colors">Carta Digital</a>
          <a href="#" className="text-xs text-slate-300 hover:text-orange-400 transition-colors">Soporte Técnico</a>
        </div>

        {/* Caja Newsletter: Input adaptado al modo oscuro */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-[32px] flex flex-col justify-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Newsletter</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full bg-slate-800/50 border border-white/5 text-xs p-3 rounded-xl focus:ring-1 focus:ring-orange-500 outline-none text-white placeholder:text-slate-600" 
            />
          </div>
        </div>

      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-slate-500 text-[10px] tracking-widest uppercase font-medium italic">
          © 2026 Gestor-restaurantes. Gastronomia a la vanguardia de las tech.
        </p>
      </div>
    </footer>
  );
};

export default Footer;