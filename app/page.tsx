'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from './components/layout';
import {
  HeroSection,
  ProductSystemSection,
  TutorialSection,
  ValuePropositionSection,
  FAQSection,
} from './components/sections';
import VideoPlayer from './components/ui/VideoPlayer';
import LoadingScreen from './components/ui/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsTransitioning(true);

    // Hide transition after animation completes (2800ms for full animation + buffer)
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <>
      {/* Initial blocking overlay - prevents flash of content on load */}
      {isLoading && (
        <div className="fixed inset-0 bg-koel-neutral-100 z-[9998]" />
      )}

      {/* Header - Always visible but fades during transition */}
      <motion.div
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          pointerEvents: isTransitioning ? 'none' : 'auto'
        }}
      >
        <Header />
      </motion.div>

      {/* Splash Screen */}
      <LoadingScreen minDuration={2500} onLoadingComplete={handleLoadingComplete} />

      {/* Main Content - White background during loading and transition */}
      <main className={`min-h-screen relative transition-colors duration-300 ${
        isLoading || isTransitioning ? 'bg-koel-neutral-100' : ''
      }`}>
        {/* Content Container */}
        <div className="relative z-10">
          {/* Hero Section - receives loading state for transition animation */}
          <HeroSection isLoading={isLoading} isTransitioning={isTransitioning} />

          {/* Product System Section */}
          <ProductSystemSection />

          {/* Tutorial Section (1-2-3) */}
          <TutorialSection />

          {/* Value Proposition Section */}
          <ValuePropositionSection />

          {/* FAQ Section */}
          <FAQSection />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
