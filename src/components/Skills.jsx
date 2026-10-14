import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'AI Integration', category: 'Modern' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Vite', category: 'Build' },
];

const Skills = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Mastered <span className="text-gradient">Technologies</span></h2>
                    <p className="text-white/50 max-w-xl mx-auto">Exploring the cutting edge of web development with a focused and modern stack.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                            className="px-6 py-8 glass rounded-3xl text-center flex flex-col items-center justify-center gap-3 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <span className="text-2xl font-black text-accent">{skill.name[0]}</span>
                            </div>
                            <div>
                                <div className="font-bold text-lg">{skill.name}</div>
                                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{skill.category}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
