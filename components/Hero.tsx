import { ArrowRight, BadgeCheck, Globe, Shield, Zap } from 'lucide-react'
import { capabilityHighlights, stats } from '@/lib/data'

const signals = [
  { icon:Zap,    title:'Sharper Support',    text:'Repair and recovery work that cuts downtime and restores confidence.' },
  { icon:Globe,  title:'Stronger Presence',  text:'Modern websites that make your business look credible from the first scroll.' },
  { icon:Shield, title:'Practical Security', text:'Assessments and policies that improve protection without overwhelming your team.' },
]

export default function Hero() {
  return (
    <section id="home" style={{ padding:'5rem 1.5rem 4rem', maxWidth:'1200px', margin:'0 auto', scrollMarginTop:'7rem' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'3rem', alignItems:'center' }} className="hero-grid">

        {/* Left: Copy */}
        <div style={{ position:'relative', zIndex:1 }}>
          <div className="rise-1" style={{ display:'inline-block', marginBottom:'1.75rem' }}>
            <span className="badge-glow" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.45rem 1rem 0.45rem 0.625rem', borderRadius:'999px', border:'1px solid rgba(59,130,246,0.35)', background:'rgba(59,130,246,0.08)', fontSize:'0.82rem', fontWeight:600, color:'var(--accent-light)' }}>
              <span style={{ display:'inline-block', width:'0.5rem', height:'0.5rem', borderRadius:'50%', background:'var(--accent-light)', boxShadow:'0 0 8px var(--accent-light)' }} />
              Trusted IT Partner in London
            </span>
          </div>

          <h1 className="rise-2 font-display" style={{ fontSize:'clamp(2.5rem,5vw,4.25rem)', fontWeight:700, lineHeight:1.05, letterSpacing:'-0.03em', color:'var(--text)', maxWidth:'680px', marginBottom:'1.5rem' }}>
            Technology that makes your business feel{' '}
            <span className="text-gradient">sharper</span>, safer, and unstoppable.
          </h1>

          <p className="rise-3" style={{ fontSize:'1.05rem', lineHeight:1.75, color:'var(--text-muted)', maxWidth:'560px', marginBottom:'2rem' }}>
            MyC Technologies helps businesses and individuals across London with computer repair, website design, cybersecurity assessments, virus removal, data backup &amp; recovery, hardware checks, and security policy development.
          </p>

          <div className="rise-4" style={{ display:'flex', flexWrap:'wrap', gap:'0.75rem', marginBottom:'2.25rem' }}>
            <a href="#contact" className="btn-primary">Get a Free Quote <ArrowRight style={{width:'1rem',height:'1rem'}}/></a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>

          <div className="rise-5" style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
            {capabilityHighlights.map(item => (
              <span key={item} className="trust-pill">
                <BadgeCheck style={{width:'0.875rem',height:'0.875rem',color:'var(--emerald)'}}/>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Floating card */}
        <div className="float-card" id="hero-card" style={{ display:'none' }}>
          <div className="card-elevated" style={{ padding:'1.5rem', position:'relative', overflow:'hidden' }}>
            <div style={{ marginBottom:'1.25rem' }}>
              <p className="eyebrow" style={{ marginBottom:'0.5rem' }}>What we deliver</p>
              <h2 className="font-display" style={{ fontSize:'1.35rem', fontWeight:700, color:'var(--text)', letterSpacing:'-0.02em', lineHeight:1.3 }}>
                One partner for support, design, resilience, and recovery.
              </h2>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'1.25rem' }}>
              {signals.map(s => {
                const Icon = s.icon
                return (
                  <div key={s.title} style={{ display:'flex', alignItems:'flex-start', gap:'0.875rem', padding:'0.875rem', borderRadius:'1rem', border:'1px solid var(--border)', background:'var(--bg-card)' }}>
                    <span className="icon-chip"><Icon style={{width:'1rem',height:'1rem'}}/></span>
                    <div>
                      <div style={{ fontSize:'0.875rem', fontWeight:600, color:'var(--text)', marginBottom:'0.25rem' }}>{s.title}</div>
                      <div style={{ fontSize:'0.825rem', color:'var(--text-muted)', lineHeight:1.5 }}>{s.text}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.75rem' }}>
              {stats.slice(0,3).map(stat => (
                <div key={stat.label} style={{ padding:'0.875rem 0.75rem', borderRadius:'0.875rem', border:'1px solid var(--border)', background:'var(--accent-dim)', textAlign:'center' }}>
                  <div className="font-display" style={{ fontSize:'1.25rem', fontWeight:700, letterSpacing:'-0.03em', background:'var(--gradient-text)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{stat.value}</div>
                  <div style={{ fontSize:'0.72rem', color:'var(--text-muted)', marginTop:'0.2rem', lineHeight:1.3 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ position:'absolute', top:'-60px', right:'-60px', width:'200px', height:'200px', borderRadius:'50%', background:'radial-gradient(circle,rgba(59,130,246,0.12),transparent 70%)', pointerEvents:'none' }}/>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:1024px){ .hero-grid{grid-template-columns:1.05fr 0.95fr!important} #hero-card{display:block!important} }
      `}</style>
    </section>
  )
}
