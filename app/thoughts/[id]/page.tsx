'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { THOUGHTS } from '@/data/thoughts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

// Helper to calculate read time
function getReadTime(text: string) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

export default function ThoughtPage() {
    const params = useParams();
    const thought = THOUGHTS.find(t => t.id === params.id);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const scaleHeight = useTransform(scaleX, value => `${value * 100}%`);

    // Convert 0-1 to 0-100 for display
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setProgress(Math.round(latest * 100));
        })
    }, [scrollYProgress]);

    if (!thought) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-white">Thought not found.</p>
                    <Link href="/thoughts" className="mt-8 text-white hover:underline block">Back to thoughts</Link>
                </div>
            </div>
        );
    }

    const readTime = getReadTime(thought.content || '');

    return (
        <div className="min-h-screen w-full flex items-start justify-center px-4 md:px-12 lg:px-32 pb-8 pt-24 md:pt-8 relative overflow-hidden bg-[#0a0a0a] selection:bg-white/20 selection:text-white">

            {/* Reading Progress Tracker */}
            <motion.div
                className="fixed right-8 bottom-8 z-50 flex flex-col items-center gap-2 mix-blend-difference pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="text-xs font-mono text-white tracking-widest tabular-nums">
                    {progress.toString().padStart(3, '0')}%
                </div>
                <div className="h-24 w-[1px] bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-white"
                        style={{ height: scaleHeight }}
                    />
                </div>
                <div className="text-[10px] font-mono text-white uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>
                    Reading
                </div>
            </motion.div>

            {/* Dynamic Background Gradient */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="fixed inset-0 z-0 pointer-events-none bg-[#1a1a1a]"
            />

            <div className="relative z-10 w-full max-w-3xl px-6 md:px-12 mt-8 flex flex-col gap-10">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/thoughts" className="text-white hover:text-white transition-colors font-mono text-xs uppercase tracking-widest flex items-center gap-2 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to thoughts
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex flex-col gap-8 md:gap-12"
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between text-white text-sm font-mono w-full border-b border-white/10 pb-4">
                            <span>{thought.date}</span>
                            <span>{readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white leading-[1.1] tracking-tight">
                            {thought.title}
                        </h1>
                    </div>
                </motion.header>

                {/* Images */}
                {thought.images && thought.images.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-full aspect-video relative rounded-lg overflow-hidden border border-white/10 mt-2"
                    >
                        <Image
                            src={thought.images[0]}
                            alt={thought.title}
                            fill
                            className="object-cover opacity-80"
                        />
                    </motion.div>
                )}

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="prose prose-invert prose-xl max-w-none text-white leading-loose space-y-8 mt-4"
                >
                    {(thought.content || '').split('\n').map((paragraph, index) => {
                        // Trim whitespace and ignore empty lines if they are just formatting noise
                        const text = paragraph.trim();
                        if (!text) return null;

                        return (
                            <p key={index} className={index === 0 ? "first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-4 first-letter:mt-[-8px] first-letter:leading-none" : ""}>
                                {text}
                            </p>
                        );
                    })}
                </motion.div>

                {/* Footer / Contact for thought */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-12 border-t border-white/10 mt-12"
                >
                    <p className="text-white italic font-serif">
                        Written by <span className="text-white">Aryayama</span>.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
