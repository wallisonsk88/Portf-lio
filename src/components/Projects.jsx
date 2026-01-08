import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "FinTech Dashboard",
        description: "Sistema de gestão financeira completo com gráficos em tempo real e relatórios automatizados.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        tags: ["React", "Tailwind", "Node.js"],
        link: "#"
    },
    {
        title: "ShopMaster Pro",
        description: "Plataforma de e-commerce moderna com carrinho dinâmico, pagamentos via API e painel admin.",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
        link: "#"
    },
    {
        title: "Delivery & Track",
        description: "Interface de aplicativo para rastreamento de entregas com geolocalização e notificações.",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000",
        tags: ["React Native", "Firebase", "Google Maps API"],
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Projetos Recentes</h2>
                        <p className="text-slate-400">Uma seleção dos meus melhores trabalhos.</p>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors mt-4 md:mt-0"
                    >
                        Ver GitHub <Github size={18} />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800"
                        >
                            <div className="aspect-video bg-slate-800 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                            </div>
                            <div className="p-6 relative">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute -top-10 right-6 bg-indigo-600 p-3 rounded-full shadow-lg cursor-pointer"
                                >
                                    <ExternalLink size={20} className="text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="px-3 py-1 bg-slate-800 text-xs font-medium text-slate-300 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors mx-auto">
                        Ver mais no GitHub <Github size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
