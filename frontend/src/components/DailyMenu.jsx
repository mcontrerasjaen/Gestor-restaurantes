import React from 'react';

const DailyMenu = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 overflow-hidden relative shadow-2xl">
        {/* Adorno visual de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
              Hoy • 07 Abril
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Menú del Día</h2>
            <p className="text-slate-400 max-w-md italic">
              "Una selección fresca y equilibrada preparada cada mañana por nuestro Chef."
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center min-w-[160px]">
            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Precio Cerrado</p>
            <p className="text-4xl font-black text-orange-500">14,90€</p>
            <p className="text-white/60 text-[10px] mt-2">Bebida y postre incluido</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
          {/* Primeros */}
          <div className="space-y-3">
            <h4 className="text-orange-500 font-bold uppercase text-xs tracking-widest">Primeros</h4>
            <ul className="text-slate-200 space-y-2 text-sm">
              <li>• Crema de Calabaza con Jengibre</li>
              <li>• Ensalada César con Pollo Crispy</li>
              <li>• Salmorejo Cordobés con Virutas</li>
            </ul>
          </div>
          {/* Segundos */}
          <div className="space-y-3">
            <h4 className="text-orange-500 font-bold uppercase text-xs tracking-widest">Segundos</h4>
            <ul className="text-slate-200 space-y-2 text-sm">
              <li>• Merluza a la Vizcaína</li>
              <li>• Entrecot con Patatas Panaderas</li>
              <li>• Lasagna Vegetal de Espinacas</li>
            </ul>
          </div>
          {/* Postres */}
          <div className="space-y-3">
            <h4 className="text-orange-500 font-bold uppercase text-xs tracking-widest">Postres</h4>
            <ul className="text-slate-200 space-y-2 text-sm">
              <li>• Fruta de Temporada</li>
              <li>• Tarta de Queso Casera</li>
              <li>• Café o Infusión</li>
            </ul>
          </div>
        </div>

        <button className="mt-10 w-full md:w-auto bg-white text-slate-900 px-8 py-3 rounded-2xl font-bold hover:bg-orange-500 hover:text-white transition-all active:scale-95">
          Reservar este Menú
        </button>
      </div>
    </section>
  );
};

export default DailyMenu;