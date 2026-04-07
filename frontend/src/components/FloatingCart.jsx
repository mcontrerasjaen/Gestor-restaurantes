import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCart = ({ total }) => {
  return (
    <AnimatePresence>
      {total > 0 && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
        >
          <div className="bg-slate-900 border border-white/10 backdrop-blur-xl p-4 rounded-3xl shadow-2xl flex items-center justify-between">
            <div className="pl-2">
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Tu Selección</p>
              <p className="text-white text-xl font-black">{total.toFixed(2)}€</p>
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-orange-500/20 cursor-pointer">
              Reservar Mesa
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCart;