import React from 'react';
import { Github, Linkedin, Facebook, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="py-20 relative overflow-hidden bg-surface">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                    <div className="max-w-md text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Let's build something <span className="text-gradient">legendary</span>.</h2>
                        <p className="text-white/50 mb-8">Ready to take your digital presence to the next level? Get in touch and let's make it happen.</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-accent font-bold">📞</span>
                                <span>+91 8766413211</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-accent font-bold">📧</span>
                                <span>yashmangade1923@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-8">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=yashmangade1923@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 bg-white text-black font-black rounded-3xl hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20"
                        >
                            Start a Conversation
                        </a>

                        <div className="flex items-center gap-6">
                            {[
                                { icon: Github, href: "https://github.com" },
                                { icon: Linkedin, href: "https://linkedin.com" },
                                { icon: Facebook, href: "https://facebook.com/yash.mangade" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all hover:-translate-y-1"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
                    <p>© 2026 YASH.DEV. Handcrafted with passion.</p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-white transition-colors group"
                    >
                        Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
