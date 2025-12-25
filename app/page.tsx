'use client';

import { useState } from 'react';
import { Header, Footer } from './components/layout';
import {
  HeroSection,
  ProductSystemSection,
  TutorialSection,
  FragrancesSection,
  ValuePropositionSection,
  EmailCaptureSection,
  FAQSection,
} from './components/sections';
import VideoPlayer from './components/ui/VideoPlayer';
import LoadingScreen from './components/ui/LoadingScreen';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* Splash Screen */}
      <LoadingScreen
        onLoadingComplete={() => setShowContent(true)}
        minDuration={2500}
      />

      {/* Main Content */}
      <main className="min-h-screen relative">
      {/* Fixed Full-Page Video Background - No zoom/parallax */}
      <div className="video-background-fixed z-0">
        <VideoPlayer
          src="/hero-video.mp4"
          className="w-full h-full"
          autoPlay
          loop
          muted
          showMuteButton={false}
          playbackRate={0.75}
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

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

        {/* Fragrances Section */}
        <FragrancesSection />

        {/* Value Proposition Section */}
        <ValuePropositionSection />

        {/* Email Capture Section */}
        <EmailCaptureSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
    </>
  );
}
