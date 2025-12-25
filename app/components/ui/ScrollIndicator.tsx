'use client';

import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  className?: string;
  variant?: 'default' | 'line' | 'arrow';
}

export default function ScrollIndicator({
  className = '',
  variant = 'default'
}: ScrollIndicatorProps) {
  if (variant === 'line') {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-xs tracking-[0.3em] uppercase text-white/60 font-light"
        >
          Scroll
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent origin-top"
        />
      </div>
    );
  }

  if (variant === 'arrow') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className={`flex flex-col items-center gap-2 ${className}`}
      >
        <motion.span
          className="text-xs tracking-[0.2em] uppercase text-white/60"
        >
          Descubre más
        </motion.span>
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/60"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </motion.svg>
      </motion.div>
    );
  }

  // Default mouse scroll indicator
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className={`flex flex-col items-center gap-3 ${className}`}
    >
      <motion.div
        className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2 relative overflow-hidden"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0.3, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-1.5 h-3 bg-white/80 rounded-full"
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
        className="text-[10px] tracking-[0.2em] uppercase text-white/50"
      >
        Scroll
      </motion.span>
    </motion.div>
  );
}
