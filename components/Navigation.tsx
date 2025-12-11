'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'crafts', label: 'Crafts', path: '/crafts' },
    { id: 'thoughts', label: 'Thoughts', path: '/thoughts' },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-2 p-1.5 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
            {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                return (
                    <Link
                        key={item.id}
                        href={item.path}
                        className={`relative px-4 py-2 md:px-6 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${isActive ? 'text-black' : 'text-white/60 hover:text-white'
                            }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-white rounded-full z-0"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 capitalize">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
