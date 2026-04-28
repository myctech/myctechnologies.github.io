// Full site layout — restore by replacing app/page.tsx with this file.
// Rename: cp app/page.full.tsx app/page.tsx

import Navbar    from '@/components/Navbar'
import Hero      from '@/components/Hero'
import TrustBar  from '@/components/TrustBar'
import Services  from '@/components/Services'
import Process   from '@/components/Process'
import About     from '@/components/About'
import Portfolio from '@/components/Portfolio'
import WhyUs     from '@/components/WhyUs'
import CTABanner from '@/components/CTABanner'
import Contact   from '@/components/Contact'
import Footer    from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MyC Technologies',
  description: 'IT services company in London: computer repair, website design, cybersecurity assessments, virus removal, data backup & recovery, hardware checks, desktop customisation, and security policy development.',
  url: 'https://myctechnologies.com',
  areaServed: 'London, United Kingdom',
  email: 'info@myctechnologies.com',
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+44 7514 679634', contactType: 'customer support' },
    { '@type': 'ContactPoint', telephone: '+44 7503 577956', contactType: 'customer support' },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <div style={{ position:'relative', zIndex:0 }}>
        <Navbar />
        <main id="main-content">
          <Hero />
          <TrustBar />
          <Services />
          <Process />
          <About />
          <Portfolio />
          <WhyUs />
          <CTABanner />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
