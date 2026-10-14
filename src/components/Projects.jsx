import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Study Buddy App",
        description: "A collaborative learning platform for students to share notes and study together in real-time.",
        tags: ["React", "Firebase", "Tailwind"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Dr. Xyp Virtual Clinic",
        description: "An AI-powered telemedicine platform featuring virtual consultations and health tracking.",
        tags: ["Next.js", "AI Integration", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "EcoTrack Dashboard",
        description: "Comprehensive analytics dashboard for monitoring environmental impact and sustainability metrics.",
        tags: ["TypeScript", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative glass rounded-[2rem] overflow-hidden flex flex-col h-full bg-surface/40"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                        <button className="p-3 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </button>
                        <button className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
                            <Github size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-white/50 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="work" className="py-24 bg-surface/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Selected <span className="text-gradient">Works</span></h2>
                        <p className="text-white/50 max-w-md">A showcase of full-stack applications built with performance and user experience at the core.</p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-bold text-sm"
                    >
                        All Repositories
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
