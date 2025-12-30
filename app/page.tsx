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
import HeroTransition from './components/ui/HeroTransition';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Splash Screen - Se superpone al contenido */}
      <LoadingScreen minDuration={2500} onLoadingComplete={handleLoadingComplete} />

      {/* Hero Transition Layer - Smart expand animation */}
      <HeroTransition isLoading={isLoading} />

      {/* Main Content - Siempre renderizado (el splash lo cubre) */}
      <main className="min-h-screen relative">
        {/* Content Container */}
        <div className="relative z-10">
          {/* Header */}
          <Header />

          {/* Hero Section */}
          <HeroSection />

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
