'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

interface HeaderWrapperProps {
  isTransitioning: boolean;
}

const HeaderWrapper = memo(function HeaderWrapper({ isTransitioning }: HeaderWrapperProps) {
  return (
    <motion.div
      animate={{ opacity: isTransitioning ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        pointerEvents: isTransitioning ? 'none' : 'auto',
      }}
    >
      <Header />
    </motion.div>
  );
});

export default HeaderWrapper;
