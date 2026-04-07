import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Reservas = () => {
    const [step, setStep] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [pax, setPax] = useState(2); // Estado para número de personas
    const [formData, setFormData] = useState({ nombre: '', apellido: '', telf: '', email: '' });

    const MAX_PAX_DIARIOS = 60;

    // Simulación de base de datos de ocupación (Fecha : Total Personas)
    const ocupacionActual = {
        [new Date(2026, 3, 20).toDateString()]: 58, // Casi lleno (mes 3 es Abril)
        [new Date(2026, 3, 21).toDateString()]: 60, // Lleno total
    };

    // CONFIGURACIÓN DE BLOQUEOS
    const festivosNacionales = [
        new Date(2026, 1, 1).toDateString(),   // Año Nuevo
        new Date(2026, 1, 6).toDateString(),   // Reyes
        new Date(2026, 3, 29).toDateString(),  // Viernes Santo
        new Date(2026, 5, 1).toDateString(),   // Fiesta del Trabajo
        new Date(2026, 6, 15).toDateString(),  // Asunción
        new Date(2026, 9, 12).toDateString(),  // Fiesta Nacional
        new Date(2026, 11, 1).toDateString(),  // Todos los Santos
        new Date(2026, 12, 6).toDateString(),  // Constitución
        new Date(2026, 12, 25).toDateString(), // Navidad
    ];

    // Función para decidir qué días son "clicables" y cuáles no
    const esDiaHabilitado = (date) => {
        const dateStr = date.toDateString();
        const esLunes = date.getDay() === 1;
        const esFestivo = festivosNacionales.includes(dateStr);
        const estaLlenoTotal = (ocupacionActual[dateStr] || 0) >= MAX_PAX_DIARIOS;

        return !esLunes && !esFestivo && !estaLlenoTotal;
    };
    // Función para asignar clases CSS (colores)
    const getDayClass = (date) => {
        const dateStr = date.toDateString();
        if (ocupacionActual[dateStr] >= MAX_PAX_DIARIOS) return "dia-lleno"; // Rojo en CSS
        if (!esDiaHabilitado(date)) return "dia-cerrado";
        return "dia-disponible";
    };

    const horas = ["13:30", "14:00", "20:30", "21:00", "21:30"];

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const hayEspacio = (pax + (ocupacionActual[startDate.toDateString()] || 0)) <= MAX_PAX_DIARIOS;

    if (step === 3) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center animate-in fade-in zoom-in duration-700">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600 mb-6">Confirmado</span>
                <h2 className="text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter lowercase leading-[0.8] mb-8">
                    Reserva <br /> <span className="text-orange-600 italic font-serif font-light">finalizada</span> <br /> con éxito
                </h2>
                <p className="text-slate-500 font-serif italic mb-10 text-lg">Gracias por elegirnos. Nos vemos pronto.</p>
                <button onClick={() => { setStep(1); setSelectedTime(null); }} className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors border-b border-slate-200 pb-1">
                    Nueva reserva
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            {step === 1 ? (
                <div className="space-y-12 animate-in fade-in duration-700">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600">Paso 1 de 2</span>
                        <h2 className="text-6xl font-black text-slate-900 tracking-tighter lowercase">Reserva <span className="italic font-serif font-light text-slate-400">tu mesa</span></h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-white p-4 border border-slate-100 rounded-2xl shadow-sm">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => { setStartDate(date); setSelectedTime(null); }}
                                inline
                                minDate={new Date()}
                                dayClassName={getDayClass}
                                filterDate={esDiaHabilitado}
                            />
                            <div className="mt-4 flex gap-4 text-[8px] uppercase font-bold tracking-widest text-slate-400">
                                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Completo</div>
                                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> Cierre</div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* SELECTOR DE PERSONAS */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b pb-2">Comensales</p>
                                <select
                                    value={pax}
                                    onChange={(e) => setPax(parseInt(e.target.value))}
                                    className="w-full bg-transparent border-b border-slate-200 py-2 outline-none text-xl font-serif italic"
                                >   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                    <option key={n} value={n}>{n} personas</option>
                                ))}
                                </select>

                                {/* Mensaje grupos grandes */}
                                <p className="text-[16px] text-slate-400 italic leading-relaxed">
                                    Para grupos de más de 10 personas, por favor contacte con nosotros por
                                    <span className="text-slate-900 font-bold ml-1">teléfono</span> o
                                    <span className="text-slate-900 font-bold ml-1">email</span>.
                                </p>

                            </div>

                            <div className="space-y-4">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b pb-2">Horas disponibles</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {horas.map(h => (
                                        <button key={h} onClick={() => setSelectedTime(h)} className={`py-4 text-xs font-bold border transition-all ${selectedTime === h ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-white hover:border-orange-500'}`}>{h}</button>
                                    ))}
                                </div>
                            </div>

                            <button
                                disabled={!selectedTime || !hayEspacio}
                                onClick={() => setStep(2)}
                                className={`w-full py-6 mt-4 text-[10px] font-black uppercase tracking-[0.4em] transition-all ${selectedTime && hayEspacio
                                    ? 'bg-green-600 text-white shadow-xl'
                                    : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                    }`}
                            >
                                {!hayEspacio ? 'Aforo insuficiente' : 'Siguiente'}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                
                <div className="space-y-12 animate-in slide-in-from-right-8 duration-500">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600">Paso 2 de 2</span>
                        <h2 className="text-6xl font-black text-slate-900 tracking-tighter lowercase">Tus <span className="italic font-serif font-light text-slate-400">datos</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} className="pb-4 bg-transparent border-b border-slate-200 focus:border-orange-600 outline-none text-xl" />
                        <input type="text" name="apellido" placeholder="Apellido" onChange={handleInputChange} className="pb-4 bg-transparent border-b border-slate-200 focus:border-orange-600 outline-none text-xl" />
                        <input type="tel" name="telf" placeholder="Teléfono" onChange={handleInputChange} className="pb-4 bg-transparent border-b border-slate-200 focus:border-orange-600 outline-none text-xl" />
                        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} className="pb-4 bg-transparent border-b border-slate-200 focus:border-orange-600 outline-none text-xl" />
                    </div>
                    <div className="pt-10">
                        <div className="bg-[#F2F0EB] p-6 mb-8 text-[10px] uppercase tracking-widest text-slate-600">
                            Reserva para {pax} personas el {startDate.toLocaleDateString()} a las {selectedTime}
                        </div>
                        <button onClick={() => setStep(3)} className="w-full bg-slate-900 text-white py-8 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-orange-600 transition-all shadow-2xl">Confirmar Reserva</button>
                        <button onClick={() => setStep(1)} className="w-full mt-6 text-[9px] font-bold uppercase tracking-widest text-slate-400">← Volver al calendario</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reservas;