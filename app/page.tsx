// UNDER CONSTRUCTION — replace with page.full.tsx when the site is ready to launch.
// Rename: cp app/page.full.tsx app/page.tsx

import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Coming Soon | MyC Technologies',
}

export default function Home() {
  return (
    <div style={{ position:'relative', minHeight:'100svh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'4rem 1rem' }}>

      {/* Background orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />

      <div style={{ width:'100%', maxWidth:'28rem', textAlign:'center', display:'flex', flexDirection:'column', gap:'2.5rem', position:'relative', zIndex:1 }}>

        {/* Logo */}
        <div style={{ display:'flex', justifyContent:'center' }}>
          <Image
            src="/logo.png"
            alt="MyC Technologies"
            width={1156}
            height={287}
            className="h-10 w-auto"
            priority
          />
        </div>

        {/* Badge + heading */}
        <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.45rem 1rem 0.45rem 0.625rem', borderRadius:'999px', border:'1px solid rgba(59,130,246,0.35)', background:'rgba(59,130,246,0.08)', fontSize:'0.82rem', fontWeight:600, color:'var(--accent-light)', justifyContent:'center' }}>
            <span className="badge-glow" style={{ display:'inline-block', width:'0.5rem', height:'0.5rem', borderRadius:'50%', background:'var(--accent-light)', boxShadow:'0 0 8px var(--accent-light)' }} />
            New site coming soon
          </div>
          <h1 className="font-display" style={{ fontSize:'clamp(1.75rem,5vw,2.5rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.15, color:'var(--text)' }}>
            We are working on{' '}
            <span className="text-gradient">something new</span>
          </h1>
          <p style={{ fontSize:'1rem', color:'var(--text-muted)', lineHeight:1.7 }}>
            Our new website is on its way. We are fully operational in the meantime — get in touch and we will be happy to help.
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider" aria-hidden="true" />

        {/* Contact */}
        <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
          <a
            href="mailto:info@myctechnologies.com"
            className="btn-primary"
            style={{ justifyContent:'center' }}
          >
            <Mail style={{width:'0.9rem',height:'0.9rem'}} aria-hidden="true"/>
            info@myctechnologies.com
          </a>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
            <a href="tel:+447514679634" className="contact-detail-card" style={{ justifyContent:'center', fontSize:'0.875rem', fontWeight:500 }}>
              <Phone style={{width:'0.875rem',height:'0.875rem'}} aria-hidden="true"/>
              +44 7514 679634
            </a>
            <a href="tel:+447503577956" className="contact-detail-card" style={{ justifyContent:'center', fontSize:'0.875rem', fontWeight:500 }}>
              <Phone style={{width:'0.875rem',height:'0.875rem'}} aria-hidden="true"/>
              +44 7503 577956
            </a>
          </div>
        </div>

        {/* Location */}
        <p style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.375rem', fontSize:'0.78rem', color:'var(--text-subtle)' }}>
          <MapPin style={{width:'0.75rem',height:'0.75rem'}} aria-hidden="true"/>
          London, United Kingdom — IT Services &amp; Cybersecurity
        </p>
      </div>
    </div>
  )
}
