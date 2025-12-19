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
        className="w-full flex items-center justify-between py-6 text-left hover:text-koel-blue transition-colors duration-300"
      >
        <span className="text-lg font-semibold text-koel-neutral-900">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-koel-blue"
        >
          {isExpanded ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiPlus className="w-6 h-6" />
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
            <div className="pb-6 text-koel-neutral-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
