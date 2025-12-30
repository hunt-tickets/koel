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

    // Hide transition after animation completes (2000ms for slow expansion + buffer)
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 2200);

    return () => clearTimeout(timer);
  };

  return (
    <>
      {/* Splash Screen */}
      <LoadingScreen minDuration={2500} onLoadingComplete={handleLoadingComplete} />

      {/* Main Content - White background during loading and transition */}
      <main className={`min-h-screen relative transition-colors duration-300 ${
        isLoading || isTransitioning ? 'bg-koel-neutral-100' : ''
      }`}>
        {/* Content Container */}
        <div className="relative z-10">
          {/* Header - Smooth fade in/out during hero transition */}
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <motion.div
                key="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Header />
              </motion.div>
            )}
          </AnimatePresence>

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
