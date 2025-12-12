'use client';

import { motion } from 'framer-motion';

interface SmoothTextProps {
    text: string;
    className?: string;
    triggerKey?: string;
    delay?: number;
}

export default function SmoothText({ text, className, triggerKey, delay = 0 }: SmoothTextProps) {
    const characters = Array.from(text);

    return (
        <span className={className}>
            {characters.map((char, index) => (
                <motion.span
                    key={`${triggerKey}-${index}`}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                        duration: 0.4,
                        delay: delay + index * 0.02,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className="inline-block whitespace-pre"
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
}
