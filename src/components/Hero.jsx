import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-2 mb-6"
                >
                    <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 text-xs font-semibold tracking-wider text-accent uppercase">
                        <Terminal size={14} /> Available for projects
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="relative inline-block"
                >
                    <motion.span
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="block text-5xl md:text-8xl font-black tracking-tight leading-tight mb-4"
                    >
                        Building Digital <span className="text-gradient">Excellence</span>
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed"
                >
                    I'm a <span className="text-white font-medium">Full Stack Developer</span> passionate about crafting high-performance, visually stunning web experiences that push the boundaries of design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-5"
                >
                    <button
                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </button>

                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-2xl transition-all hover:scale-105 active:scale-95"
                    >
                        Get In Touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
