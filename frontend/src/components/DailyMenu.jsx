import React from 'react';

const DailyMenu = () => {
  return (
    <section className="w-full p-8 md:p-12 relative overflow-hidden">
      {/* FONDO: Ahora es blanco sólido o muy suave para resaltar sobre el cristal de App.jsx */}
      <div className="bg-white rounded-[32px] p-8 md:p-10 relative shadow-sm border border-slate-100">
        
        {/* Adorno visual de fondo (mantenemos el toque de color suave) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
              Hoy • 07 Abril
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Menú del Día</h2>
            <p className="text-slate-500 max-w-md italic">
              "Una selección fresca y equilibrada preparada cada mañana por nuestro Chef."
            </p>
          </div>

          {/* Precio con fondo claro para contraste elegante */}
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl text-center min-w-[160px]">
            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Precio Cerrado</p>
            <p className="text-4xl font-black text-orange-500">14,90€</p>
            <p className="text-slate-400 text-[10px] mt-2 font-medium">Bebida y postre incluido</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
          {/* Primeros */}
          <div className="space-y-3">
            <h4 className="text-orange-500 font-bold uppercase text-xs tracking-widest">Primeros</h4>
            <ul className="text-slate-700 space-y-2 text-sm font-medium">
              <li>• Crema de Calabaza con Jengibre</li>
              <li>• Ensalada César con Pollo Crispy</li>
              <li>• Salmorejo Cordobés con Virutas</li>
            </ul>
          </div>
          {/* Segundos */}
          <div className="space-y-3">
            <h4 className="text-orange-500 font-bold uppercase text-xs tracking-widest">Segundos</h4>
            <ul className="text-slate-700 space-y-2 text-sm font-medium">
              <li>• Merluza a la Vizcaína</li>
              <li>• Entrecot con Patatas Panaderas</li>
              <li>• Lasagna Vegetal de Espinacas</li>
            </ul>
          </div>
          {/* Postres */}
          <div className="space-y-3">
            <h4 className="text-orange-500 font-bold uppercase text-xs tracking-widest">Postres</h4>
            <ul className="text-slate-700 space-y-2 text-sm font-medium">
              <li>• Fruta de Temporada</li>
              <li>• Tarta de Queso Casera</li>
              <li>• Café o Infusión</li>
            </ul>
          </div>
        </div>

        <button className="mt-10 w-full md:w-auto bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-orange-500/20 cursor-pointer">
          Reservar este Menú
        </button>
      </div>
    </section>
  );
};

export default DailyMenu;