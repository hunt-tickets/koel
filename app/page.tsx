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

export default function Home() {
  return (
    <main className="min-h-screen">
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
    </main>
  );
}
