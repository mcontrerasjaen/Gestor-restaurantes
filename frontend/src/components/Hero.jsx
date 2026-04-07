import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImgTerraza from '../assets/restaurante-terraza.jpg';
import ImgInterior from '../assets/restaurante-interior.jpg';
import ImgInterior2 from '../assets/restaurante-interior2.jpg';

const Hero = () => {
    const [index, setIndex] = useState(0);
    
    
    const images = [ImgTerraza, ImgInterior, ImgInterior2];

    const nextImage = () => {
        
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-6xl mx-auto px-6 pt-10 pb-16 flex flex-col md:flex-row items-center gap-12"
        >
            <div className="flex-1 space-y-6 text-center md:text-left">
                <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full">
                    Experiencia Gastronómica Única
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                    Sabores que <br />
                    <span className="text-orange-500">cuentan historias.</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
                    En <strong>RestoGest</strong>, creamos momentos. Reserva tu mesa y pre-selecciona tu menú ahora mismo.
                </p>
            </div>

            {/* IMAGEN INTERACTIVA */}
            <div className="flex-1 relative w-full">
                <motion.div 
                    className="relative z-10 w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 cursor-pointer"
                    onClick={nextImage}
                    whileTap={{ scale: 0.98 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index} 
                            src={images[index]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover"
                            alt="Restaurante"
                        />
                    </AnimatePresence>

                    {/* Indicador de fotos */}
                    <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] text-white font-bold uppercase tracking-widest border border-white/10">
                        Foto {index + 1} / {images.length}
                    </div>
                </motion.div>

                {/* Adorno decorativo */}
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-orange-500/10 rounded-[40px] -z-10 -rotate-3"></div>
            </div>
        </motion.section>
    );
};

export default Hero;