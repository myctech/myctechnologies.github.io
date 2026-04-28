'use client'
import Image from 'next/image'
import { Mail, PhoneCall } from 'lucide-react'

const navLinks = [
  { label:'Services',  href:'#services'  },
  { label:'Process',   href:'#process'   },
  { label:'About',     href:'#about'     },
  { label:'Portfolio', href:'#portfolio' },
  { label:'Contact',   href:'#contact'   },
]

const services = [
  'Computer Repair','Website Design','Cybersecurity Assessments',
  'Virus & Malware Removal','Data Backup & Recovery',
  'Hardware Checks','Desktop Customisation','Security Policy Development',
]

const socialLinks = [
  {
    label: 'Instagram',
    href:  'https://www.instagram.com/myctechnologies?igsh=MXJiNWN2dm1haXN6ag%3D%3D&utm_source=qr',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href:  'https://www.facebook.com/p/Myctechnologies-61561119772758/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop:'1px solid var(--border)', background:'var(--bg-elevated)', padding:'4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'3rem', marginBottom:'3rem' }} className="footer-grid">

          {/* Brand */}
          <div>
            <a href="#home" style={{ display:'inline-flex', alignItems:'center', textDecoration:'none', marginBottom:'1.25rem' }}>
              <Image
                src="/logo.png"
                alt="MyC Technologies"
                width={1156}
                height={287}
                className="h-8 w-auto"
              />
            </a>
            <p style={{ fontSize:'0.875rem', color:'var(--text-muted)', lineHeight:1.7, maxWidth:'280px', marginBottom:'1.25rem' }}>
              IT services for businesses and individuals in London. Repair, design, cybersecurity, and recovery — under one trusted partner.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.625rem', marginBottom:'1.25rem' }}>
              <a href="mailto:info@myctechnologies.com" className="footer-link" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem' }}>
                <Mail style={{width:'0.875rem',height:'0.875rem'}}/>info@myctechnologies.com
              </a>
              <a href="tel:+447514679634" className="footer-link" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem' }}>
                <PhoneCall style={{width:'0.875rem',height:'0.875rem'}}/>+44 7514 679634
              </a>
              <a href="tel:+447503577956" className="footer-link" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem' }}>
                <PhoneCall style={{width:'0.875rem',height:'0.875rem'}}/>+44 7503 577956
              </a>
            </div>

            {/* Social links */}
            <div style={{ display:'flex', gap:'0.625rem' }}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`MyC Technologies on ${s.label}`}
                  style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:'2.25rem', height:'2.25rem', borderRadius:'0.625rem', border:'1px solid var(--border)', background:'var(--bg-card)', color:'var(--text-muted)', transition:'border-color 0.2s,color 0.2s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='var(--border-hover)'; el.style.color='var(--accent-light)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='var(--border)'; el.style.color='var(--text-muted)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 style={{ fontSize:'0.78rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'var(--text-subtle)', marginBottom:'1.125rem' }}>Navigation</h3>
            <nav style={{ display:'flex', flexDirection:'column', gap:'0.625rem' }}>
              {navLinks.map(l => <a key={l.href} href={l.href} className="footer-link">{l.label}</a>)}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize:'0.78rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'var(--text-subtle)', marginBottom:'1.125rem' }}>Services</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.625rem' }}>
              {services.map(s => <a key={s} href="#services" className="footer-link">{s}</a>)}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 style={{ fontSize:'0.78rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'var(--text-subtle)', marginBottom:'1.125rem' }}>Get started</h3>
            <p style={{ fontSize:'0.875rem', color:'var(--text-muted)', lineHeight:1.7, marginBottom:'1.25rem' }}>Ready to make your technology work for you? Get in touch for a free, no-obligation conversation.</p>
            <a href="#contact" className="btn-primary" style={{ fontSize:'0.875rem' }}>Get a Free Quote</a>
            <div style={{ marginTop:'1.5rem', display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.5rem 0.875rem', borderRadius:'999px', border:'1px solid var(--border)', background:'var(--bg-card)', fontSize:'0.78rem', color:'var(--text-muted)' }}>
              <span style={{ width:'0.5rem', height:'0.5rem', borderRadius:'50%', background:'var(--emerald)', boxShadow:'0 0 6px var(--emerald)', display:'inline-block' }}/>
              London, United Kingdom
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom:'1.75rem' }}/>

        <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'0.875rem' }}>
          <p style={{ fontSize:'0.82rem', color:'var(--text-subtle)' }}>© {year} MyC Technologies. All rights reserved.</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'1.5rem' }}>
            {['Services','Portfolio','Contact'].map(label => (
              <a key={label} href={`#${label.toLowerCase()}`} className="footer-link" style={{ fontSize:'0.82rem' }}>{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
