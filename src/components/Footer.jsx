import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex justify-center gap-6 mb-6">
                    <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800">
                        <Mail size={20} />
                    </a>
                </div>
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Wallison Dev. Todos os direitos reservados.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Desenvolvido com React, Tailwind CSS e Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
