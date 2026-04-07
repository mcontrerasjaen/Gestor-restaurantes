import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      // La clase "fixed" y el posicionamiento van solo aquí
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50"
    >
      {/* Ya no ponemos otro <nav>, vamos directo al diseño */}
      <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          RestoGest
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
          <a href="#" className="hover:text-orange-500 transition-colors">Inicio</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Menús</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Contacto</a>
        </div>

        {/* Botón Acción */}
        <button className="bg-orange-500 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all shadow-md shadow-orange-200 active:scale-95 cursor-pointer">
          Reservar Mesa
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;