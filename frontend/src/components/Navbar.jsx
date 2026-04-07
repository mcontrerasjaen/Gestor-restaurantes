import React from 'react';
import { motion } from 'framer-motion';

// 1. Recibimos setView y currentView como props
const Navbar = ({ setView, currentView }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      // fixed top-0 left-0 w-full asegura que cruce ambos paneles
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
    >
      <div className="w-full px-8 md:px-16 py-5 flex justify-between items-center">
        
        {/* Espacio para el logo o nombre */}
        <div className="text-2xl font-black text-[#1A1A1A] tracking-tighter italic">
        
        </div>

        {/* Navegación centralizada */}
        <div className="hidden md:flex gap-12 text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em]">
          
          <button
            onClick={() => setView('inicio')}
            className={`${currentView === 'inicio' ? 'text-slate-900' : ''} hover:text-[#1A1A1A] transition-colors cursor-pointer`}
          >
            Inicio
          </button>

          <button
            onClick={() => setView('menus')}
            className={`${currentView === 'menus' ? 'text-slate-900' : ''} hover:text-[#1A1A1A] transition-colors cursor-pointer`}
          >
            Carta
          </button>

          <button
            onClick={() => setView('contacto')}
            className={`${currentView === 'contacto' ? 'text-slate-900' : ''} hover:text-[#1A1A1A] transition-colors cursor-pointer`}
          >
            Contacto
          </button>
        </div>

        {/* Botón Reservar que cambia la vista a 'reservas' */}
        <button 
          onClick={() => setView('reservas')}
          className="bg-[#1A1A1A] text-white px-8 py-2.5 rounded-full text-xs font-bold hover:bg-orange-500 transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          Reservar Mesa
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;