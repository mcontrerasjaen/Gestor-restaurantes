import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. IMPORTA TUS IMÁGENES AQUÍ (Asegúrate de que las rutas sean correctas)
import img1 from '../assets/restaurante-terraza.jpg';
import img2 from '../assets/restaurante-interior.jpg';
import img3 from '../assets/restaurante-interior2.jpg';

const Hero = () => {
    const [index, setIndex] = useState(0);

    const slides = [
        { img: img1, title: "La Experiencia", subtitle: "ESPACIOS" },
        { img: img2, title: "Cocina de Producto", subtitle: "FILOSOFÍA" },
        { img: img3, title: "Detalles Únicos", subtitle: "MOMENTOS" }
    ];

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    // Si por alguna razón el array falla, devolvemos un mensaje seguro
    if (!slides[0].img) return <div className="p-10 text-slate-400 italic">Cargando visuales...</div>;

    return (
        <section className="w-full">
           
            <div
                className="relative w-full h-full overflow-hidden cursor-pointer bg-slate-100 group"
                onClick={nextSlide}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={slides[index].img}
                        alt="Bagá"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

              
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                    <motion.div
                        key={`text-${index}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white"
                    >
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-400 mb-2">
                            {slides[index].subtitle}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-light italic font-serif">
                            {slides[index].title}
                        </h2>
                    </motion.div>
                </div>

               
                <div className="absolute right-6 bottom-12 flex flex-col gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-10 w-[2px] transition-all duration-500 ${i === index ? 'bg-orange-500' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;