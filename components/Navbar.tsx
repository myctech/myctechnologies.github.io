'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label:'Services',  href:'#services'  },
  { label:'Process',   href:'#process'   },
  { label:'About',     href:'#about'     },
  { label:'Portfolio', href:'#portfolio' },
  { label:'Contact',   href:'#contact'   },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pill: React.CSSProperties = {
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    width:'2.5rem', height:'2.5rem', borderRadius:'50%',
    border:'1px solid var(--border)', background:'var(--bg-card)',
    color:'var(--text-muted)', cursor:'pointer',
  }

  return (
    <header style={{ position:'sticky', top:0, zIndex:50, padding:'1rem 1.5rem' }}>
      <div className="nav-shell" style={{
        maxWidth:'1200px', margin:'0 auto',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0.625rem 1rem 0.625rem 1.25rem', gap:'1rem',
        boxShadow: scrolled
          ? '0 16px 48px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.07)'
          : '0 8px 32px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.05)',
      }}>
        {/* Logo */}
        <a href="#home" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
          <Image
            src="/logo.png"
            alt="MyC Technologies"
            width={1156}
            height={287}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav style={{ display:'none', alignItems:'center', gap:'0.25rem' }} className="desk-nav">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              style={{ padding:'0.5rem 1rem', borderRadius:'999px', fontSize:'0.875rem', fontWeight:500, color:'var(--text-muted)', textDecoration:'none', transition:'color 0.2s,background 0.2s' }}
              onMouseEnter={e=>{ const el=e.target as HTMLElement; el.style.color='var(--text)'; el.style.background='var(--accent-dim)'; }}
              onMouseLeave={e=>{ const el=e.target as HTMLElement; el.style.color='var(--text-muted)'; el.style.background='transparent'; }}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div style={{ display:'flex', alignItems:'center', gap:'0.625rem' }}>
          <a href="#contact" className="btn-primary hide-mobile" style={{ padding:'0.625rem 1.25rem', fontSize:'0.875rem' }}>Get a Quote</a>
          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" style={pill} className="show-mobile">
            {open ? <X style={{width:'1.125rem',height:'1.125rem'}}/> : <Menu style={{width:'1.125rem',height:'1.125rem'}}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding:'0.5rem 0 0' }}>
          <div className="nav-shell" style={{ maxWidth:'1200px', margin:'0 auto', padding:'1rem', display:'flex', flexDirection:'column', gap:'0.375rem' }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ padding:'0.875rem 1rem', borderRadius:'0.875rem', fontSize:'0.95rem', fontWeight:500, color:'var(--text-muted)', textDecoration:'none', border:'1px solid transparent', transition:'all 0.2s' }}
                onMouseEnter={e=>{ const el=e.target as HTMLElement; el.style.borderColor='var(--border)'; el.style.background='var(--accent-dim)'; el.style.color='var(--text)'; }}
                onMouseLeave={e=>{ const el=e.target as HTMLElement; el.style.borderColor='transparent'; el.style.background='transparent'; el.style.color='var(--text-muted)'; }}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop:'0.5rem', justifyContent:'center' }}>Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}
