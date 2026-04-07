import React, { useState, useEffect, useRef } from 'react';
import Reservas from './components/Reservas';
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [isReserving, setIsReserving] = useState(false);
  const mainRef = useRef(null);

  
  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop;
   
    setIsReserving(scrollPosition > 200);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white selection:bg-slate-200">

      {/* PANEL IZQUIERDO: Branding Fijo (45%) */}
      <aside className="w-full lg:w-[45%] h-auto lg:h-screen lg:sticky lg:top-0 bg-[#F2F0EB] p-12 lg:p-24 flex flex-col justify-between border-r border-slate-200/50 relative overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://vercel.app')]"></div>
        <div className="relative z-10 space-y-12">

          <div className="w-16 h-16 border border-slate-900 rounded-full flex items-center justify-center text-slate-900 text-2xl font-light italic">
            B
          </div>

          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B7E74]">Siente, disfruta</span>
            <h1 className="text-6xl lg:text-9xl font-black text-slate-900 tracking-tighter lowercase leading-[0.8]">
              Restaurantes
              <p><span className="text-orange-600">Únicos</span></p>
            </h1>
            <p className="text-lg text-slate-600 font-serif italic max-w-sm leading-relaxed">
              "Una cocina sencilla pero intensa en sabores y texturas."
            </p>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block space-y-4">
          <div className="h-[1px] w-12 bg-slate-900/20"></div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Madrid, España</p>
          <div className="flex gap-6 items-center">
            {/* Instagram */}
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.46-2.46L20 4"></path>
              </svg>
            </a>
          </div>
        </div>
      </aside>
      {/* PANEL DERECHO: Ventana Visual (55%) */}
    <main className="w-full lg:w-[55%] relative h-screen overflow-y-auto scroll-smooth bg-white">
  <div className="sticky top-0 z-50 bg-white/95">
    <Navbar />
  </div>

  {/* Si quieres que desaparezca la imagen al entrar en reserva, 
      puedes envolver el Hero en un div que se oculte */}
  <div className="h-full w-full target:hidden"> 
    <Hero />
  </div>
  
  <section id="reservar" className="min-h-screen bg-white py-20 px-8 lg:px-16">
    <Reservas />
  </section>
</main>
    </div>
  )
}

export default App