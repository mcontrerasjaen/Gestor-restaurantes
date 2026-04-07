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
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900">Nuestra Carta</h2>
                    <p className="text-slate-500">Selecciona tus platos y conoce el valor de tu reserva.</p>
                </div>
                <div className="bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg shadow-orange-200">
                    <span className="text-xs uppercase font-bold block opacity-80">Total Menú</span>
                    <span className="text-xl font-bold">{totalValue.toFixed(2)}€</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {dishes.map((dish, index) => (
                    <motion.div 
                        key={dish.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase text-slate-700">
                                {dish.category}
                            </span>
                        </div>

                        <div className="p-5">
                            <h3 className="font-bold text-slate-800 mb-1">{dish.name}</h3>
                            <p className="text-orange-600 font-bold text-lg mb-4">{dish.price.toFixed(2)}€</p>

                            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl">
                                <button
                                    onClick={() => updateQuantity(dish.id, -1)}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 hover:bg-orange-50 active:scale-90 transition-all cursor-pointer"
                                >-</button>
                                <span className="font-bold text-slate-700">{cart[dish.id] || 0}</span>
                                <button
                                    onClick={() => updateQuantity(dish.id, 1)}
                                    className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 active:scale-90 transition-all cursor-pointer"
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