'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { EmpathySection } from '@/components/sections/empathy-section';
import { SolutionSection } from '@/components/sections/solution-section';
import { ReasonsSection } from '@/components/sections/reasons-section';
import { ProfileSection } from '@/components/sections/profile-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ProcessSection } from '@/components/sections/process-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { ClosingSection } from '@/components/sections/closing-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <EmpathySection />
        <SolutionSection />
        <ReasonsSection />
        <ProfileSection />
        <TestimonialsSection />
        <ProcessSection />
        <PricingSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
