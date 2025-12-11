'use client';

import { motion } from 'framer-motion';
import { THOUGHTS } from '@/data/thoughts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Use this for static generation if you want, but since it's a client component, 
// we might iterate over it or just use dynamic params. 
// However, since we are using 'use client', generateStaticParams is still useful for static export.
// But for now let's just use standard dynamic routing. Note: generateStaticParams runs at build time.
// Since we are strictly in 'use client' file, we can't use generateStaticParams nicely in the same file if we want it to be a server text.
// Actually, in App Router, you can mix. But to keep it simple and given the user context, I'll make it a standard client component page receiving params.
// Wait, params in client components are promises in Next.js 15, or just props in 14. 
// Assuming Next.js 14+ based on 'portfolio-26' (2026 implies future/modern).
// I will structure it to be safe.

import { useParams } from 'next/navigation';

export default function ThoughtPage() {
    const params = useParams();
    const thought = THOUGHTS.find(t => t.id === params.id);

    if (!thought) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-white/60">Thought not found.</p>
                    <Link href="/thoughts" className="mt-8 text-white hover:underline block">Back to thoughts</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex justify-center bg-[#0a0a0a] selection:bg-white/20 selection:text-white pb-32">
            {/* Dynamic Background Gradient */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="fixed inset-0 z-0 pointer-events-none bg-[#1a1a1a]"
            />

            <div className="relative z-10 w-full max-w-3xl px-6 md:px-12 pt-32 flex flex-col gap-12">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/thoughts" className="text-white/40 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest flex items-center gap-2 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to thoughts
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-sm text-white/40">{thought.date}</span>
                        <div className="h-px bg-white/10 flex-grow max-w-[100px]" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight">
                        {thought.title}
                    </h1>
                </motion.header>

                {/* Images */}
                {thought.images && thought.images.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-full aspect-video relative rounded-lg overflow-hidden border border-white/10"
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
                    className="prose prose-invert prose-lg max-w-none text-white/70 font-light leading-relaxed space-y-6"
                >
                    {(thought.content || '').split('\n').map((paragraph, index) => {
                        // Trim whitespace and ignore empty lines if they are just formatting noise
                        const text = paragraph.trim();
                        if (!text) return null;

                        return (
                            <p key={index}>
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
                    <p className="text-white/40 italic font-serif">
                        Written by <span className="text-white/60">Aryayama</span>.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
