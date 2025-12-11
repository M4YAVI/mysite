import React from 'react';
import { motion } from 'framer-motion';

interface BentoProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  delay?: number;
  padding?: string;
}

const BentoItem: React.FC<BentoProps> = ({
  children,
  className = "",
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  delay = 0,
  padding = "p-6"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5, delay: delay, type: "spring", stiffness: 100 }}
      className={`${colSpan} ${rowSpan} ${className} relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg group hover:bg-white/10 transition-colors duration-300`}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/20 rounded-full blur-3xl" />

      <div className={`relative h-full w-full ${padding} flex flex-col`}>
        {children}
      </div>
    </motion.div>
  );
};

export default BentoItem;