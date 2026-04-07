import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carta = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('entrantes');

  const categorias = [
    { id: 'entrantes', label: 'Entrantes' },
    { id: 'huerta', label: 'Huerta' },
    { id: 'ensaladas', label: 'Ensaladas' },
    { id: 'sopas', label: 'Sopas & Cremas' },
    { id: 'carnes', label: 'Carnes' },
    { id: 'pescados', label: 'Pescados' },
    { id: 'mariscos', label: 'Mariscos' },
    { id: 'postres', label: 'Postres' },
    { id: 'vinoteca', label: 'Vinoteca' }
  ];

  const productos = [
    { id: 1, cat: 'entrantes', nombre: 'Ostra al natural', precio: 6, desc: 'Con aire de lima y pimienta de Jamaica.' },
    { id: 2, cat: 'carnes', nombre: 'Solomillo al Carbón', precio: 32, desc: 'Maduración 45 días, con reducción de Oporto.' },
  ];

  return (
    <div className="w-full">
      {/* BANNER PANORÁMICO */}
      <div className="fixed top-20 left-0 w-screen h-[22vh] z-30 overflow-hidden">
        <img 
          src="https://unsplash.com" 
          className="w-full h-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-5xl font-black lowercase italic tracking-tighter">la carta</h2>
        </div>
      </div>

      <div className="h-[22vh] mb-16"></div>

      <div className="flex flex-row w-full gap-8 lg:gap-16 relative z-10 px-4">
        
        {/* COLUMNA IZQUIERDA: ENVOLTURA DE CARTA FÍSICA */}
        <aside className="w-1/3 lg:w-1/4 sticky top-48 h-fit">
          <div className="relative bg-[#F9F8F6] border border-slate-200/60 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-tr-lg rounded-br-lg p-8 lg:p-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-slate-300/30">
            
            {/* Detalle decorativo: "Remache" o marca de la carta */}
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-orange-600/20"></div>

            <div className="space-y-12">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">Índice</span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter lowercase italic">Menú</h3>
              </div>

              <nav className="flex flex-col space-y-6">
                {categorias.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="group text-left relative"
                  >
                    <span className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 block ${
                      activeCategory === cat.id ? 'text-slate-900 translate-x-3' : 'text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1'
                    }`}>
                      {cat.label}
                    </span>
                    
                    {/* Trazo de selección elegante */}
                    {activeCategory === cat.id && (
                      <motion.div 
                        layoutId="activeTabMarker"
                        className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-slate-900"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      />
                    )}
                  </button>
                ))}
              </nav>

              <div className="pt-12">
                <p className="text-[9px] font-serif italic text-slate-400 leading-relaxed">
                  Todos nuestros productos son de temporada y proximidad.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* COLUMNA DERECHA: PLATOS */}
        <main className="w-2/3 lg:w-3/4 pb-32 pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-16"
            >
              {productos.filter(p => p.cat === activeCategory).map(plato => (
                <div key={plato.id} className="flex justify-between items-start group border-b border-slate-50 pb-10">
                  <div className="max-w-md space-y-3">
                    <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-orange-600 transition-colors">
                      {plato.nombre}
                    </h4>
                    <p className="text-sm text-slate-500 font-serif italic leading-relaxed">
                      {plato.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <span className="text-lg font-bold text-slate-900">{plato.precio}€</span>
                    <button 
                      onClick={() => addToCart(plato)}
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Carta;