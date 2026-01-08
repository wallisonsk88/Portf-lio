import React from 'react';
import { Code, Database, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Code size={32} />,
        title: "Desenvolvimento Web",
        description: "Sites institucionais, Landing Pages de alta conversão e blogs. Código limpo, rápido e otimizado para SEO (Google).",
        color: "indigo",
        borderColor: "hover:border-indigo-500/50",
        bgIcon: "bg-indigo-500/10",
        iconColor: "text-indigo-400",
        hoverIcon: "group-hover:bg-indigo-500"
    },
    {
        icon: <Database size={32} />,
        title: "Sistemas Complexos",
        description: "Dashboards administrativos, painéis de controle, e-commerces e integrações com APIs e bancos de dados.",
        color: "purple",
        borderColor: "hover:border-purple-500/50",
        bgIcon: "bg-purple-500/10",
        iconColor: "text-purple-400",
        hoverIcon: "group-hover:bg-purple-500"
    },
    {
        icon: <Palette size={32} />,
        title: "UI/UX Design",
        description: "Interfaces modernas, intuitivas e responsivas. Criação de identidade visual e protótipos de alta fidelidade.",
        color: "pink",
        borderColor: "hover:border-pink-500/50",
        bgIcon: "bg-pink-500/10",
        iconColor: "text-pink-400",
        hoverIcon: "group-hover:bg-pink-500"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Como posso ajudar seu negócio
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        className="h-1 bg-indigo-500 mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-slate-400 max-w-2xl mx-auto"
                    >
                        Combino conhecimento técnico profundo with sensibilidade estética to entregar soluções completas.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`bg-slate-950 p-8 rounded-2xl border border-slate-800 ${service.borderColor} transition-all group`}
                        >
                            <div className={`w-14 h-14 ${service.bgIcon} rounded-xl flex items-center justify-center mb-6 ${service.hoverIcon} transition-colors`}>
                                <div className={`${service.iconColor} group-hover:text-white transition-colors`}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
