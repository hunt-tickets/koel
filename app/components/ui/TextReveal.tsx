'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
}

// Text that reveals character by character as you scroll
export function TextRevealByWord({ children, className = '' }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"]
  });

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      <div className="flex flex-wrap justify-center lg:justify-start">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
}

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}

function Word({ children, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [20, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="mr-2 md:mr-3 inline-block"
    >
      {children}
    </motion.span>
  );
}

// Animated text mask reveal effect
interface MaskTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MaskText({ children, className = '', delay = 0 }: MaskTextProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1],
          delay
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Staggered text animation
interface StaggerTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
}

export function StaggerText({ text, className = '', charClassName = '', delay = 0 }: StaggerTextProps) {
  const characters = text.split('');

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className={`inline-block ${charClassName}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              rotateX: -90
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0
            }
          }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: [0.33, 1, 0.68, 1]
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Parallax text that moves with scroll
interface ParallaxTextProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxText({ children, className = '', speed = 0.5 }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
