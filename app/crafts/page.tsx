'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from "@/data/projects";
import Navigation from "@/components/Navigation";

export default function Crafts() {
    return (
        <div className="min-h-screen w-full flex items-start md:items-center justify-center px-4 md:px-12 lg:px-32 pb-8 pt-24 md:pt-8 relative overflow-hidden selection:bg-white/20 selection:text-white">

            {/* Dynamic Background Gradient */}
            <motion.div
                animate={{ backgroundColor: '#1a1a1a' }}
                className="fixed inset-0 opacity-10 z-0 transition-colors duration-1000 blur-[100px]"
            />

            {/* Background Graphic Elements */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>

            <main className="relative z-10 w-full max-w-6xl mx-auto mt-8 flex flex-col gap-12 lg:gap-16">

                {/* Header / Navigation */}
                <header className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-left">
                        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white">
                            Check out my crafts!
                        </h1>
                    </div>

                    <Navigation />
                </header>

                {/* Main Grid Content */}
                <div className="w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[2/1] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="crafts"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full w-full justify-between p-4"
                        >
                            <div className="flex flex-col gap-6 mt-8">
                                {PROJECTS.map((project, index) => (
                                    <motion.a
                                        key={project.id}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-white/40 transition-colors"
                                    >
                                        <h3 className="text-2xl md:text-5xl font-display font-medium text-white/50 group-hover:text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0 text-white text-2xl">
                                            ↗
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
                            >
                                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group shadow-lg shadow-black/20">
                                    <span className="font-mono text-xs tracking-widest uppercase group-hover:text-white/70 transition-colors text-white/40">For More on Github</span>
                                    <a
                                        href="https://github.com/M4YAVI"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 group-hover:text-white transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </main>
        </div>
    );
}
