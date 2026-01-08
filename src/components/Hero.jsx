import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
            />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                    Disponível para Projetos Freelance
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                >
                    Transformando ideias em <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        Realidade Digital
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10"
                >
                    Olá, sou o Wallison. Cientista da Computação especializado em criar sistemas web de alta performance e designs modernos que convertem visitantes em clientes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                    >
                        Ver Portfólio <ChevronRight size={20} />
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                        Solicitar Orçamento
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
