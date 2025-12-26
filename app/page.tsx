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
