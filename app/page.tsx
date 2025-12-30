'use client';

import { AppStateProvider, useAppState } from './providers/AppStateProvider';
import { Header, Footer } from './components/layout';
import HeaderWrapper from './components/layout/HeaderWrapper';
import {
  HeroSection,
  ProductSystemSection,
  TutorialSection,
  ValuePropositionSection,
  FAQSection,
} from './components/sections';
import LoadingScreen from './components/ui/LoadingScreen';
import LoadingStateOverlay from './components/ui/LoadingStateOverlay';

function HomeContent() {
  const { isLoading, isTransitioning, handleLoadingComplete } = useAppState();

  return (
    <>
      {/* Initial blocking overlay - prevents flash of content on load */}
      <LoadingStateOverlay isVisible={isLoading} />

      {/* Header - Memoized, only animates opacity based on transitioning state */}
      <HeaderWrapper isTransitioning={isTransitioning} />

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

export default function Home() {
  return (
    <AppStateProvider>
      <HomeContent />
    </AppStateProvider>
  );
}
