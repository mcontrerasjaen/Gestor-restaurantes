import React, { useState } from 'react';
import FloatingCart from './FloatingCart';
import imgTartar from '../assets/Tartar-de-atun-rojo.jpg';
import imgEntrecot from '../assets/Entrecot-brasa.jpg';
import imgRissotto from '../assets/Rissotto-setas.jpg';
import imgCoulant from '../assets/coulant-de-chocolate.jpg';
import { motion } from 'framer-motion';

const dishes = [
    { id: 1, name: "Tartar de Atún Rojo", price: 18.50, category: "Entrante", img: imgTartar },
    { id: 2, name: "Entrecot a la Brasa", price: 24.00, category: "Principal", img: imgEntrecot },
    { id: 3, name: "Risotto de Setas", price: 16.00, category: "Principal", img: imgRissotto },
    { id: 4, name: "Coulant de Chocolate", price: 7.50, category: "Postre", img: imgCoulant },
];

const MenuGrid = () => {
    const [cart, setCart] = useState({});

    const updateQuantity = (id, delta) => {
        setCart(prev => ({
            ...prev,
            [id]: Math.max(0, (prev[id] || 0) + delta)
        }));
    };

    const totalValue = dishes.reduce((sum, dish) => sum + (dish.price * (cart[dish.id] || 0)), 0);

     return (
        <section className="w-full max-w-6xl mx-auto px-6 py-12">
            {/* Cabecera: Cambiamos text-white por text-slate-900 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Nuestra Carta</h2>
                    <p className="text-slate-500 mt-2 font-medium">Selecciona tus platos y personaliza tu reserva.</p>
                </div>
                
                {/* Badge de total: Lo mantenemos naranja porque es un elemento de acción clave */}
                <div className="w-full md:w-auto bg-orange-500 text-white px-8 py-4 rounded-3xl shadow-xl shadow-orange-500/20 flex flex-row md:flex-col items-center justify-between md:justify-center">
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-80 md:mb-1">Total Reserva</span>
                    <span className="text-2xl font-black">{totalValue.toFixed(2)}€</span>
                </div>
            </div>

            {/* Grid adaptativo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {dishes.map((dish, index) => (
                    <motion.div 
                        key={dish.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        // CAMBIO: Fondo blanco suave con borde fino para resaltar sobre el cristal de App
                        className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
                    >
                        <div className="relative h-56 overflow-hidden">
                            <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                                {dish.category}
                            </span>
                        </div>

                        <div className="p-6">
                            {/* CAMBIO: Textos a Slate-900 y Slate-600 */}
                            <h3 className="font-bold text-slate-900 text-lg mb-1">{dish.name}</h3>
                            <p className="text-orange-500 font-black text-xl mb-6">{dish.price.toFixed(2)}€</p>

                            {/* Selector de cantidad: Colores más suaves y limpios */}
                            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-2xl border border-slate-100">
                                <button
                                    onClick={() => updateQuantity(dish.id, -1)}
                                    className="w-10 h-10 flex items-center justify-center bg-white text-slate-400 rounded-xl border border-slate-200 hover:text-red-500 hover:border-red-100 transition-all cursor-pointer shadow-sm"
                                >-</button>
                                <span className="font-bold text-slate-900 text-lg">{cart[dish.id] || 0}</span>
                                <button
                                    onClick={() => updateQuantity(dish.id, 1)}
                                    className="w-10 h-10 flex items-center justify-center bg-slate-900 text-white rounded-xl shadow-lg hover:bg-orange-500 transition-all cursor-pointer"
                                >+</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <FloatingCart total={totalValue} />
        </section>
    );
};

export default MenuGrid;