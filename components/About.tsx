import Image from 'next/image'
import { aboutPillars } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

const colorMap: Record<string,string> = {
  blue:'icon-chip', cyan:'icon-chip icon-chip-cyan', emerald:'icon-chip icon-chip-emerald',
}

const visualStats = [
  { value:'London', label:'Based'       },
  { value:'IT & Cyber', label:'Specialist' },
  { value:'24h',    label:'Response'    },
]

export default function About() {
  return (
    <section id="about" style={{ padding:'0 1.5rem 6rem', scrollMarginTop:'7rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem', alignItems:'stretch' }} className="about-grid">

        {/* Visual panel */}
        <div style={{ background:'linear-gradient(135deg,rgba(59,130,246,0.12),rgba(6,182,212,0.08),rgba(139,92,246,0.06))', border:'1px solid var(--border)', borderRadius:'2rem', padding:'2.5rem', display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'460px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 50% 40%,rgba(59,130,246,0.12),transparent 60%)', pointerEvents:'none' }}/>
          <div style={{ position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)', width:'260px', height:'260px', borderRadius:'50%', border:'1px solid rgba(59,130,246,0.15)', pointerEvents:'none' }}/>

          <div style={{ position:'relative', zIndex:1 }}>
            <span style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.45rem 1rem', borderRadius:'999px', border:'1px solid rgba(59,130,246,0.3)', background:'rgba(59,130,246,0.1)', fontSize:'0.82rem', fontWeight:600, color:'var(--accent-light)' }}>
              <MapPin style={{width:'0.875rem',height:'0.875rem'}}/> Based in London, UK
            </span>
          </div>

          <div style={{ position:'relative', zIndex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 0' }}>
            <Image src="/logovertical.png"      alt="MyC Technologies" width={1633} height={1080} className="w-40 h-auto logo-white"/>
            <Image src="/logoverticalblack.png" alt="MyC Technologies" width={1633} height={1080} className="w-40 h-auto logo-black"/>
          </div>

          <div style={{ position:'relative', zIndex:1, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.75rem' }}>
            {visualStats.map(s => (
              <div key={s.label} style={{ padding:'0.875rem 0.5rem', borderRadius:'0.875rem', border:'1px solid rgba(255,255,255,0.1)', background:'rgba(6,13,26,0.5)', backdropFilter:'blur(12px)', textAlign:'center' }}>
                <div className="font-display" style={{ fontSize:'1rem', fontWeight:700, letterSpacing:'-0.02em', color:'white', lineHeight:1.2 }}>{s.value}</div>
                <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.5)', marginTop:'0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="card-elevated" style={{ padding:'clamp(1.75rem,4vw,3rem)' }}>
          <p className="eyebrow" style={{ marginBottom:'0.875rem' }}>About</p>
          <h2 className="font-display" style={{ fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.2, color:'var(--text)', marginBottom:'1.25rem' }}>
            Modern IT support with a <span className="text-gradient">client-first</span> experience.
          </h2>
          <p style={{ fontSize:'1rem', color:'var(--text-muted)', lineHeight:1.75, marginBottom:'1rem' }}>MyC Technologies brings together IT support, website design, cybersecurity guidance, and business continuity under one London-based partner — so you stop juggling fragmented providers and start getting clear, consistent results.</p>
          <p style={{ fontSize:'1rem', color:'var(--text-muted)', lineHeight:1.75, marginBottom:'2rem' }}>The goal is simple: make technology feel less stressful and more purposeful. Instead of confusing technical language, you get practical advice, transparent delivery, and solutions designed to work in the real world.</p>

          <div style={{ display:'flex', flexDirection:'column', gap:'0.875rem', marginBottom:'2rem' }}>
            {aboutPillars.map(pillar => {
              const Icon = pillar.icon
              const chipClass = colorMap[pillar.color] || 'icon-chip'
              return (
                <article key={pillar.title} style={{ display:'flex', alignItems:'flex-start', gap:'1rem', padding:'1rem 1.125rem', borderRadius:'1rem', border:'1px solid var(--border)', background:'var(--bg-card)' }}>
                  <span className={chipClass}><Icon style={{width:'1.1rem',height:'1.1rem'}}/></span>
                  <div>
                    <h3 style={{ fontSize:'0.925rem', fontWeight:600, color:'var(--text)', marginBottom:'0.3rem' }}>{pillar.title}</h3>
                    <p style={{ fontSize:'0.825rem', color:'var(--text-muted)', lineHeight:1.6 }}>{pillar.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <a href="#contact" className="btn-primary">Work with us <ArrowRight style={{width:'1rem',height:'1rem'}}/></a>
        </div>
      </div>
    </section>
  )
}
