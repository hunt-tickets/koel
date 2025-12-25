'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function HorizontalScroll({
  children,
  className = '',
  contentClassName = '',
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={containerRef}
      className={`relative h-[200vh] ${className}`}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className={`flex gap-8 sm:gap-12 lg:gap-16 pl-6 sm:pl-8 lg:pl-20 ${contentClassName}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

// Progress indicator for horizontal scroll
interface ScrollProgressProps {
  progress: any;
  className?: string;
}

export function ScrollProgress({ progress, className = '' }: ScrollProgressProps) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className={`h-1 bg-koel-neutral-200 rounded-full overflow-hidden ${className}`}>
      <motion.div
        style={{ width }}
        className="h-full bg-gradient-to-r from-koel-blue to-koel-bamboo"
      />
    </div>
  );
}

// Horizontal scroll section with snapping
interface HorizontalSnapScrollProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalSnapScroll({ children, className = '' }: HorizontalSnapScrollProps) {
  return (
    <div
      className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide ${className}`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {children}
    </div>
  );
}

interface SnapItemProps {
  children: ReactNode;
  className?: string;
}

export function SnapItem({ children, className = '' }: SnapItemProps) {
  return (
    <div className={`flex-shrink-0 snap-center ${className}`}>
      {children}
    </div>
  );
}
