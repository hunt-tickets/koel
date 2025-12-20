'use client';

import { Header, Footer } from './components/layout';
import {
  HeroSection,
  ProductSystemSection,
  TutorialSection,
  FragrancesSection,
  ValuePropositionSection,
  PioneerSection,
  EmailCaptureSection,
  FAQSection,
} from './components/sections';
import VideoPlayer from './components/ui/VideoPlayer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Fixed Full-Page Video Background */}
      <div className="fixed inset-0 z-0">
        <VideoPlayer
          src="/hero-video.mp4"
          className="w-full h-full"
          autoPlay
          loop
          muted
          showMuteButton={false}
          playbackRate={0.75}
        />
        <div className="absolute inset-0 bg-black/30" />
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

        {/* Pioneer Section */}
        <PioneerSection />

        {/* Email Capture Section */}
        <EmailCaptureSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
