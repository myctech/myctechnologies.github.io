import { differentiators } from '@/lib/data'
import { CheckCircle2 } from 'lucide-react'

const colorMap: Record<string,string> = {
  blue:'icon-chip', cyan:'icon-chip icon-chip-cyan',
  emerald:'icon-chip icon-chip-emerald', violet:'icon-chip icon-chip-violet',
}

const keyPoints = [
  'Clear call-to-action hierarchy throughout every touchpoint',
  'Stronger mobile layout and faster load times',
  'Better trust signals for support, security, and delivery',
  'Consistent, professional communication from day one',
]

export default function WhyUs() {
  return (
    <section id="why-us" style={{ padding:'0 1.5rem 6rem', scrollMarginTop:'7rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', maxWidth:'600px', margin:'0 auto 3.5rem' }}>
          <p className="eyebrow" style={{ marginBottom:'0.875rem' }}>Why Choose Us</p>
          <h2 className="font-display" style={{ fontSize:'clamp(1.875rem,3.5vw,2.75rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.15, color:'var(--text)', marginBottom:'1rem' }}>
            Built to earn trust and <span className="text-gradient">deliver results</span>.
          </h2>
          <p style={{ fontSize:'1.05rem', color:'var(--text-muted)', lineHeight:1.7 }}>We do not just fix problems — we build confidence. Here is what sets MyC Technologies apart.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem' }} className="why-grid">
          {/* Summary card */}
          <div className="card-elevated" style={{ padding:'clamp(1.75rem,4vw,2.5rem)' }}>
            <p className="eyebrow" style={{ marginBottom:'0.875rem' }}>The MyC difference</p>
            <h3 className="font-display" style={{ fontSize:'1.5rem', fontWeight:700, color:'var(--text)', letterSpacing:'-0.02em', lineHeight:1.3, marginBottom:'1rem' }}>A service that sells trust as clearly as it sells capability.</h3>
            <p style={{ fontSize:'0.9rem', color:'var(--text-muted)', lineHeight:1.7, marginBottom:'1.75rem' }}>Every touchpoint is designed to give visitors the proof they need to feel confident choosing us as their partner.</p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem' }}>
              {keyPoints.map(point => (
                <div key={point} style={{ display:'flex', alignItems:'flex-start', gap:'0.75rem', fontSize:'0.875rem', color:'var(--text-muted)', lineHeight:1.6 }}>
                  <CheckCircle2 style={{ width:'1.1rem', height:'1.1rem', color:'var(--emerald)', flexShrink:0, marginTop:'0.1rem' }}/>
                  {point}
                </div>
              ))}
            </div>
            <div style={{ padding:'1.25rem', borderRadius:'1rem', background:'linear-gradient(135deg,rgba(59,130,246,0.1),rgba(6,182,212,0.08))', border:'1px solid rgba(59,130,246,0.2)' }}>
              <p style={{ fontSize:'0.95rem', fontWeight:600, color:'var(--text)', marginBottom:'0.25rem' }}>London-based, client-focused IT</p>
              <p style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>Supporting London businesses and individuals with technology they can rely on.</p>
            </div>
          </div>

          {/* Differentiator cards */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1rem' }} className="diff-inner">
            {differentiators.map(item => {
              const Icon = item.icon
              return (
                <article key={item.title} className="card" style={{ padding:'1.5rem' }}>
                  <span className={colorMap[item.color] || 'icon-chip'} style={{ marginBottom:'1.125rem', display:'flex', width:'fit-content' }}>
                    <Icon style={{width:'1.1rem',height:'1.1rem'}}/>
                  </span>
                  <h3 className="font-display" style={{ fontSize:'1.05rem', fontWeight:700, color:'var(--text)', letterSpacing:'-0.015em', marginBottom:'0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize:'0.862rem', color:'var(--text-muted)', lineHeight:1.65 }}>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
