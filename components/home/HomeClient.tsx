'use client';

import { motion } from 'framer-motion';
import BentoItem from "@/components/BentoItem";
import GlitchText from "@/components/GlitchText";
import { PROFILE } from "@/data/profile";
import Navigation from "@/components/Navigation";

export default function HomeClient() {
    return (
        <div className="min-h-screen w-full flex items-start md:items-center justify-center px-4 md:px-12 lg:px-32 pb-8 pt-24 md:pt-8 relative overflow-hidden selection:bg-white/20 selection:text-white">

            {/* Dynamic Background Gradient */}
            <motion.div
                animate={{ backgroundColor: PROFILE.themeColor }}
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
                <div className="w-full h-auto md:aspect-[16/9] lg:aspect-[2/1] relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 h-full w-full"
                    >
                        {/* Home Content (Oreki Profile) */}
                        <BentoItem
                            colSpan="md:col-span-8"
                            rowSpan="md:row-span-3"
                            className="!bg-gradient-to-br from-white/10 to-transparent border-white/20"
                        >
                            <div className="flex flex-col justify-between h-full relative z-10">
                                <svg className="w-12 h-12 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00012 13.1784 11.3514 10.7466 14.1627 10.2269L14.7351 9.17697C11.5165 9.77389 9.0001 12.6009 9 16V21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16.0001 13.1784 18.3514 10.7466 21.1627 10.2269L21.7351 9.17697C18.5165 9.77389 16.0001 12.6009 16 16V21H21.017Z" />
                                </svg>

                                <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    <GlitchText text={PROFILE.quote} triggerKey={PROFILE.id} />
                                </h2>

                                <div className="mt-6 flex items-center gap-3">
                                    <div className="h-px w-12 bg-white"></div>
                                    <span className="text-white font-mono text-sm uppercase tracking-widest">
                                        my motto
                                    </span>
                                </div>
                            </div>
                        </BentoItem>

                        <BentoItem
                            colSpan="md:col-span-4"
                            rowSpan="md:row-span-4"
                            delay={0.1}
                            className="!p-0 group relative order-first md:order-none w-64 h-64 md:w-full md:h-full mx-auto md:mx-0 !rounded-full md:!rounded-3xl mt-6 md:mt-0"
                        >
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${PROFILE.imageUrl})` }}
                                initial={{ filter: "grayscale(100%) brightness(0.5)" }}
                                animate={{ filter: "grayscale(0%) brightness(1)" }}
                                transition={{ duration: 1 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />


                            <div className="absolute top-4 left-4 flex items-center gap-4 text-white/80 text-sm font-mono">
                                {/* Removed REC based on previous restore, but keeping just in case user wants it here. Actually user said 'keep oreki page same' */}
                            </div>

                            <div className="absolute top-4 right-4 hidden md:block">
                                <div className="w-16 h-16 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center">
                                    <span className="font-mono text-xl font-bold">ME</span>
                                </div>
                            </div>
                        </BentoItem>

                        <BentoItem
                            colSpan="md:col-span-8"
                            rowSpan="md:row-span-3"
                            delay={0.2}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{PROFILE.name}</h3>
                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white border border-white/5">
                                            {PROFILE.role}
                                        </span>
                                    </div>
                                    <div className="hidden md:flex items-center gap-2">
                                        <span className="text-[10px] font-bold text-white tracking-widest">SPEAKING</span>
                                        <div className="flex gap-1 items-end h-4">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`w-0.5 rounded-full ${i < 2 || i > 3 ? 'bg-white' : 'bg-white'}`}
                                                    animate={{
                                                        height: [4, 12, 6, 14, 4],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                        delay: i * 0.1,
                                                        ease: "easeInOut"
                                                    }}
                                                    style={{ height: 4 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-white text-lg leading-relaxed font-light space-y-4">
                                    {PROFILE.description.split('\n').map((paragraph, index) => {
                                        const text = paragraph.trim();
                                        if (!text) return null;
                                        return <p key={index}>{text}</p>;
                                    })}
                                </div>
                            </div>
                        </BentoItem>

                        <BentoItem
                            colSpan="md:col-span-4"
                            rowSpan="md:row-span-2"
                            delay={0.3}
                        >
                            <div className="h-full flex flex-col justify-center gap-6 p-2">
                                <div>
                                    <span className="text-white uppercase text-[10px] font-bold tracking-[0.2em] block mb-3">Likes</span>
                                    <div className="flex flex-wrap gap-2">
                                        {PROFILE.likes.map(like => (
                                            <span key={like} className="text-xs font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default">
                                                {like}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="text-white uppercase text-[10px] font-bold tracking-[0.2em] block mb-3">Dislikes</span>
                                    <div className="flex flex-wrap gap-2">
                                        {PROFILE.hates.map(hate => (
                                            <span key={hate} className="text-xs font-medium bg-red-500/5 border border-red-500/10 px-3 py-1.5 rounded-full text-white hover:text-white hover:bg-red-500/10 transition-all duration-300 hover:scale-105 cursor-default">
                                                {hate}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BentoItem>
                    </motion.div>
                </div>

            </main >
        </div >
    );
}
