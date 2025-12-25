'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
  glareEnabled?: boolean;
  scaleOnHover?: number;
}

export default function TiltCard({
  children,
  className = '',
  tiltStrength = 15,
  glareEnabled = true,
  scaleOnHover = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltStrength, -tiltStrength]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltStrength, tiltStrength]), springConfig);

  // Glare effect position
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);
  const glareOpacity = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);

    x.set(normalizedX * 0.5);
    y.set(normalizedY * 0.5);
    glareOpacity.set(0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: scaleOnHover }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      {children}

      {/* Glare effect overlay */}
      {glareEnabled && (
        <motion.div
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
        />
      )}
    </motion.div>
  );
}

// Simplified version for product cards
interface ProductTiltCardProps {
  children: ReactNode;
  className?: string;
}

export function ProductTiltCard({ children, className = '' }: ProductTiltCardProps) {
  return (
    <TiltCard
      tiltStrength={8}
      scaleOnHover={1.01}
      glareEnabled={true}
      className={`bg-white rounded-3xl shadow-premium hover:shadow-premium-lg transition-shadow duration-300 ${className}`}
    >
      {children}
    </TiltCard>
  );
}
