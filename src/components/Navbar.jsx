import React from 'react';
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-full bg-surface/50 backdrop-blur-xl border-white/5 shadow-2xl">
                <div className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform cursor-pointer">
                    YASH<span className="text-accent">.DEV</span>
                </div>

                <div className="hidden md:flex items-center gap-10 font-medium text-sm text-white/70">
                    <a href="#home" className="hover:text-accent transition-colors">Home</a>
                    <a href="#work" className="hover:text-accent transition-colors">Projects</a>
                    <a href="#about" className="hover:text-accent transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-5">
                    <a href="https://github.com" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:yashmangade1923@gmail.com" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
