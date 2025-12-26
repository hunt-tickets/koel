'use client';

import { Header, Footer } from './components/layout';
import {
  HeroSection,
  ProductSystemSection,
  TutorialSection,
  ValuePropositionSection,
  EmailCaptureSection,
  FAQSection,
} from './components/sections';
import VideoPlayer from './components/ui/VideoPlayer';
import LoadingScreen from './components/ui/LoadingScreen';

export default function Home() {
  return (
    <>
      {/* Splash Screen - Se superpone al contenido */}
      <LoadingScreen minDuration={2500} />

      {/* Main Content - Siempre renderizado (el splash lo cubre) */}
      <main className="min-h-screen relative">
      {/* Fixed Full-Page Background - Image on mobile, Video on desktop */}
      <div className="video-background-fixed z-0">
        {/* Mobile: Image */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-mobile-bg.jpg)' }}
        />

        {/* Desktop: Video */}
        <div className="hidden md:block w-full h-full">
          <VideoPlayer
            src="/hero-video.mp4"
            className="w-full h-full"
            autoPlay
            loop
            muted
            showMuteButton={false}
            playbackRate={0.75}
          />
        </div>

        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
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
