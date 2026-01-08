import React from 'react';
import { Code, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const FreelanceCTA = () => {
    return (
        <section className="py-16">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Code size={120} className="text-white transform rotate-12" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                        Tem um projeto em mente?
                    </h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Estou com agenda aberta para novos projetos freelance. Vamos conversar sobre como posso elevar o nível do seu negócio digital.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/5599981351593"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-green-500/25 relative z-10"
                    >
                        <Smartphone size={20} /> Chamar no WhatsApp
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default FreelanceCTA;
