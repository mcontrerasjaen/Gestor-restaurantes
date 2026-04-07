import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
    >
     
      <div className="w-full px-8 md:px-16 py-5 flex justify-between items-center">

        
        <div className="text-2xl font-black text-[#1A1A1A] tracking-tighter italic">

        </div>

     
        <div className="hidden md:flex gap-12 text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Inicio</a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Menús</a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Contacto</a>
        </div>

        
        <a href="#reservar">
          <button className="bg-[#1A1A1A] text-white px-8 py-2.5 rounded-full text-xs font-bold hover:bg-orange-500 transition-all shadow-lg active:scale-95 cursor-pointer">
            Reservar Mesa
          </button>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;