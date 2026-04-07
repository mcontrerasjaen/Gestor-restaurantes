import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 pb-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[120px]">
        
        {/* Caja Principal: Logo y Slogan */}
        <div className="md:col-span-2 md:row-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-orange-500">RestoGest</h2>
          <p className="text-slate-500 max-w-xs">Tecnología para disfrutar de la gastronomía sin esperas.</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold">IG</div>
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold">TW</div>
          </div>
        </div>

        {/* Caja de Estado: Tiempo Real */}
        <div className="md:col-span-2 bg-orange-50 p-6 rounded-3xl border border-orange-100 flex items-center justify-between">
          <div>
            <p className="text-orange-800 font-semibold">Estamos abiertos</p>
            <p className="text-orange-600 text-sm">Reserva ahora para cenar</p>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        </div>

        {/* Caja de Enlaces Rápidos */}
        <div className="bg-slate-900 p-6 rounded-3xl text-white flex flex-col justify-center gap-1">
          <a href="#" className="text-xs text-slate-300 hover:text-orange-400">Ver Menús</a>
          <a href="#" className="text-xs text-slate-300 hover:text-orange-400">Ayuda</a>
        </div>

        {/* Caja Newsletter */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col justify-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Newsletter</p>
          <input 
            type="email" 
            placeholder="Tu email" 
            className="w-full bg-slate-50 border-none text-xs p-2 rounded-lg focus:ring-1 focus:ring-orange-500 outline-none" 
          />
        </div>

      </div>
      <p className="text-center text-slate-400 text-[10px] mt-8">© 2026 Gestor-restaurantes. Estilo Bento Box.</p>
    </footer>
  );
};

export default Footer;