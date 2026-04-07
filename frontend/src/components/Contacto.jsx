import React from 'react';

const Contacto = () => {
  return (
    <div className="space-y-20">
      {/* Encabezado y Datos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600">Ubicación</span>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter lowercase">
            Ven a <br/> <span className="italic font-serif font-light text-slate-400 text-5xl">visitarnos</span>
          </h2>
          <div className="space-y-4 pt-4">
            <p className="text-lg text-slate-600 font-serif italic">Calle de la Gastronomía, 12<br/>28001 Madrid, España</p>
            <div className="flex flex-col space-y-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <a href="tel:+34910000000" className="hover:text-orange-600 transition-colors">+34 910 000 000</a>
              <a href="mailto:hola@restauranteunico.com" className="hover:text-orange-600 transition-colors">hola@restauranteunico.com</a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600">Horarios</span>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <p className="text-[10px] font-bold uppercase text-slate-900 mb-2">Miércoles a Sábado</p>
              <p className="text-sm text-slate-500 font-serif italic">13:30 — 16:00<br/>20:30 — 23:30</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-slate-900 mb-2">Domingo</p>
              <p className="text-sm text-slate-500 font-serif italic">13:30 — 17:00</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter italic">Lunes y Martes cerrado por descanso.</p>
        </div>
      </div>

      {/* Mapa de Google Maps */}
      <div className="w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm overflow-hidden border border-slate-100 shadow-sm">
        <iframe 
          title="Ubicación Restaurante"
          src="https://google.com" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;