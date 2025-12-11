'use client';

import { motion, AnimatePresence } from 'framer-motion';
import BentoItem from "@/components/BentoItem";
import { THOUGHTS } from "@/data/thoughts";
import Navigation from "@/components/Navigation";

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

            <main className="relative z-10 w-full max-w-6xl mx-auto mt-8 flex flex-col gap-12 lg:gap-16">

                {/* Header / Navigation */}
                <header className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-left">
                        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white">
                            Hey, good to see you here.
                        </h1>
                    </div>

                    <Navigation />
                </header>

                {/* Main Grid Content */}
                <div className="w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[2/1] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="thoughts"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full w-full content-start"
                        >
                            {THOUGHTS.map((thought, index) => (
                                <BentoItem
                                    key={thought.id}
                                    colSpan="md:col-span-12"
                                    rowSpan="row-span-1"
                                    delay={index * 0.1}
                                    className="!bg-white/5 border border-white/10 group hover:border-white/30 transition-all !p-8"
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div>
                                            <div className="flex items-center gap-4 mb-2">
                                                <span className="font-mono text-xs text-white/40">{thought.date}</span>
                                                <div className="h-px w-8 bg-white/10" />
                                            </div>
                                            <a href={thought.link} className="block group-hover:translate-x-2 transition-transform duration-300">
                                                <h3 className="text-3xl font-display font-bold text-white mb-2">{thought.title}</h3>
                                            </a>
                                            <p className="text-white/60 font-light max-w-xl">{thought.description}</p>
                                        </div>
                                        <div className="mt-4 md:mt-0">
                                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/40 group-hover:text-white group-hover:border-white/40 transition-colors">
                                                ↗
                                            </span>
                                        </div>
                                    </div>
                                </BentoItem>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </main>
        </div>
    );
}
