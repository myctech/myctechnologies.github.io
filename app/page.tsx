import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      {/*
       * Skip-to-content link: visually hidden until keyboard-focused.
       * Allows keyboard and screen-reader users to jump past the navbar.
       */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:font-semibold focus:text-sm focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <PortfolioSection />
        <WhyUsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
