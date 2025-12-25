'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, ReactNode } from 'react';
import { HiPlus, HiX } from 'react-icons/hi';

interface ExpandableSectionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export default function ExpandableSection({
  title,
  children,
  defaultExpanded = false,
  className = '',
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`border-b border-koel-neutral-200 last:border-b-0 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-4 sm:py-6 text-left hover:text-koel-blue transition-colors duration-300 gap-3"
      >
        <span className="text-sm sm:text-lg font-semibold text-koel-neutral-900 text-left">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-koel-blue flex-shrink-0"
        >
          {isExpanded ? (
            <HiX className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <HiPlus className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 sm:pb-6 text-sm sm:text-base text-koel-neutral-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
