import React, { useState } from 'react';
import { Mail, Linkedin, Smartphone, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulated submission
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    const contactInfo = [
        { icon: <Mail className="text-indigo-400" size={20} />, label: "Email", value: "wallisonsk88@gmail.com" },
        { icon: <Linkedin className="text-indigo-400" size={20} />, label: "LinkedIn", value: "https://www.linkedin.com/in/wallison-rangel-93749aa2/" },
        { icon: <Smartphone className="text-indigo-400" size={20} />, label: "WhatsApp", value: "(99) 98135-1593" }
    ];

    return (
        <section id="contact" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Vamos Trabalhar Juntos?</h2>
                        <p className="text-slate-400 mb-8">
                            Preencha o formulário ou entre em contato direto pelas redes sociais. Respondo geralmente em até 24 horas.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">{info.label}</h4>
                                        <p className="text-slate-400 text-sm">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
                    >
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                                    placeholder="Fale um pouco sobre seu projeto..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus === 'submitting' || formStatus === 'success'}
                                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${formStatus === 'success'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20'
                                    }`}
                            >
                                {formStatus === 'idle' && (
                                    <>Enviar Mensagem <Send size={18} /></>
                                )}
                                {formStatus === 'submitting' && (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                )}
                                {formStatus === 'success' && (
                                    <>Mensagem Enviada! <CheckCircle size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
