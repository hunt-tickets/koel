'use client';

import { useState } from 'react';
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

    // Hide transition after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1400);

    return () => clearTimeout(timer);
  };

  return (
    <>
      {/* Splash Screen */}
      <LoadingScreen minDuration={2500} onLoadingComplete={handleLoadingComplete} />

      {/* Main Content */}
      <main className="min-h-screen relative">
        {/* Content Container */}
        <div className="relative z-10">
          {/* Header - Hidden during hero transition */}
          {!isTransitioning && <Header />}

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
