import React, { useState } from 'react';
import Reservas from './components/Reservas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contacto from './components/Contacto';
import MenuGrid from './components/Carta';

function App() {
  const [view, setView] = useState('inicio');

  return (
    <div className="relative h-screen w-full bg-white selection:bg-slate-200 overflow-hidden">
      
      {/* 1. NAVBAR GLOBAL (Debe tener fixed top-0 w-full en su componente) */}
      <Navbar setView={setView} currentView={view} />

      <div className="flex h-full w-full">
        
        {/* PANEL IZQUIERDO: Branding Fijo */}
        <aside 
          className={`h-full bg-[#F2F0EB] p-12 lg:p-24 flex flex-col justify-between border-r border-slate-200/50 relative overflow-hidden transition-all duration-700 ease-in-out z-20
            ${view === 'inicio' ? 'w-[45%] opacity-100' : 'w-0 opacity-0 -translate-x-full pointer-events-none'}`}
        >
          {/* Capa de textura */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://vercel.app')]"></div>

          {/* Bloque Superior: Logo y Texto */}
          <div className="relative z-10 space-y-12 mt-12 lg:mt-0">
            <div className="w-16 h-16 border border-slate-900 rounded-full flex items-center justify-center text-slate-900 text-2xl font-light italic">
              B
            </div>

            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B7E74]">Siente, disfruta</span>
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black text-slate-900 tracking-tighter lowercase leading-[0.8]">
                Restaurantes
                <p><span className="text-orange-600">Únicos</span></p>
              </h1>
              <p className="text-lg text-slate-600 font-serif italic max-w-sm leading-relaxed">
                "Una cocina sencilla pero intensa en sabores y texturas."
              </p>
            </div>
          </div>

          {/* Bloque Inferior: Redes Sociales (Recuperados) */}
          <div className="relative z-10 space-y-4">
            <div className="h-[1px] w-12 bg-slate-900/20"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Madrid, España</p>
            <div className="flex gap-6 items-center">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.46-2.46L20 4"></path>
                </svg>
              </a>
            </div>
          </div>
        </aside>

        {/* PANEL DERECHO: Contenido Dinámico */}
        <main 
          className={`h-full relative transition-all duration-700 ease-in-out bg-white
            ${view === 'inicio' ? 'w-[55%]' : 'w-full'}`}
        >
          {/* Contenedor interno: En inicio no tiene scroll para la imagen, en otros sí */}
          <div className={`h-full w-full ${view === 'inicio' ? 'overflow-hidden' : 'overflow-y-auto pt-32 pb-20 px-8'}`}>
            
            <div className={`w-full ${view === 'inicio' ? 'h-full' : 'max-w-5xl mx-auto'}`}>
              {view === 'inicio' && <Hero />}
              {view === 'menus' && <MenuGrid />}
              {view === 'contacto' && <Contacto />}
              {view === 'reservas' && <Reservas />}
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;