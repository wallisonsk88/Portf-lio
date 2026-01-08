import React from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
    { name: "Front-end (React/Next)", percentage: 95 },
    { name: "Back-end (Node/Python)", percentage: 85 },
    { name: "UI/UX Design", percentage: 90 },
    { name: "Banco de Dados", percentage: 80 }
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Mais que código,<br />eu construo <span className="text-indigo-400">soluções</span>.</h2>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Formado em Ciência da Computação, minha base teórica sólida me permite ir além do óbvio. Não apenas "faço sites", eu entendo a arquitetura, a segurança e a escalabilidade do que estou construindo.
                        </p>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Minha experiência abrange desde o design de interfaces intuitivas até a lógica complexa do back-end. Meu objetivo é entregar projetos que não só funcionem perfeitamente, mas que encantem seus usuários.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Anos de Experiência", value: "4+" },
                                { label: "Projetos Entregues", value: "20+" },
                                { label: "Clientes Satisfeitos", value: "100%" }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <h4 className="text-4xl font-bold text-white mb-1">{stat.value}</h4>
                                    <p className="text-slate-400 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
                        <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Terminal className="text-indigo-400" /> Stack Tecnológica
                            </h3>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-300">{skill.name}</span>
                                            <span className="text-indigo-400">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="bg-indigo-500 h-2 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
