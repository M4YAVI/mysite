'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { THOUGHTS } from "@/data/thoughts";
import Navigation from "@/components/Navigation";

// Helper to calculate read time
function getReadTime(text: string) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

export default function Thoughts() {
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

            <main className="relative z-10 w-full max-w-4xl mx-auto mt-8 flex flex-col gap-12 lg:gap-16">

                {/* Header / Navigation */}
                <header className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-left">
                        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white">
                            Fragments of my thought.
                        </h1>
                    </div>

                    <Navigation />
                </header>

                {/* Main Content */}
                <div className="w-full relative min-h-[50vh]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="thoughts"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-12"
                        >
                            {THOUGHTS.map((thought, index) => (
                                <motion.div
                                    key={thought.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex flex-col gap-2 relative pl-6 border-l border-white/10 hover:border-white/50 transition-colors duration-300"
                                >
                                    <div className="flex items-center justify-between text-white/40 group-hover:text-white/60 transition-colors text-sm font-mono uppercase tracking-widest w-full">
                                        <span>{thought.date}</span>
                                        <span>{getReadTime(thought.content || '')}</span>
                                    </div>

                                    <Link href={`/thoughts/${thought.id}`} className="block group-hover:translate-x-1 transition-transform duration-300">
                                        <h2 className="text-2xl md:text-3xl font-display font-medium text-white/90 group-hover:text-white transition-colors">
                                            {thought.title}
                                        </h2>
                                    </Link>

                                    <p className="text-white/50 group-hover:text-white/70 transition-colors font-light leading-relaxed max-w-2xl">
                                        {thought.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom X (Twitter) Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
                >
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group shadow-lg shadow-black/20">
                        <span className="font-mono text-xs tracking-widest uppercase group-hover:text-white/70 transition-colors text-white/40">Say Hi on X</span>
                        <a
                            href="https://x.com/M4Y4VI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 group-hover:text-white transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>

            </main>
        </div>
    );
}
