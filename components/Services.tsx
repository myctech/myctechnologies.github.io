import { ChevronRight } from 'lucide-react'
import { services } from '@/lib/data'

const colorMap = {
  blue:   { chip:'icon-chip',                 border:'rgba(59,130,246,0.25)',  glow:'rgba(59,130,246,0.08)'  },
  cyan:   { chip:'icon-chip icon-chip-cyan',  border:'rgba(6,182,212,0.25)',   glow:'rgba(6,182,212,0.08)'   },
  emerald:{ chip:'icon-chip icon-chip-emerald',border:'rgba(16,185,129,0.25)', glow:'rgba(16,185,129,0.08)'  },
  amber:  { chip:'icon-chip icon-chip-amber',  border:'rgba(245,158,11,0.25)', glow:'rgba(245,158,11,0.08)'  },
  violet: { chip:'icon-chip icon-chip-violet', border:'rgba(139,92,246,0.25)', glow:'rgba(139,92,246,0.08)'  },
}

export default function Services() {
  return (
    <section id="services" style={{ padding:'6rem 1.5rem', scrollMarginTop:'7rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', maxWidth:'640px', margin:'0 auto 3.5rem' }}>
          <p className="eyebrow" style={{ marginBottom:'0.875rem' }}>Services</p>
          <h2 className="font-display" style={{ fontSize:'clamp(1.875rem,3.5vw,2.75rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.15, color:'var(--text)', marginBottom:'1rem' }}>
            Everything your business needs to <span className="text-gradient">run smarter</span>.
          </h2>
          <p style={{ fontSize:'1.05rem', color:'var(--text-muted)', lineHeight:1.7 }}>Each service is built around a real business outcome — less downtime, stronger trust, smarter protection, and cleaner workflows.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem' }} className="services-grid">
          {services.map(service => {
            const Icon = service.icon
            const colors = colorMap[service.color]
            return (
              <article key={service.title} className={`card service-card${service.featured ? ' service-featured' : ''}`}
                style={{ padding:'1.75rem', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden', minHeight: service.featured ? '260px' : 'auto' }}>
                <div style={{ position:'absolute', top:'-40px', right:'-40px', width:'140px', height:'140px', borderRadius:'50%', background:`radial-gradient(circle,${colors.glow},transparent 70%)`, pointerEvents:'none' }}/>
                <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'1.25rem' }}>
                  <span className={colors.chip} style={{ width:'3rem', height:'3rem', borderRadius:'0.875rem' }}><Icon style={{width:'1.25rem',height:'1.25rem'}}/></span>
                  <span style={{ fontSize:'0.7rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'var(--text-subtle)', padding:'0.35rem 0.75rem', borderRadius:'999px', border:'1px solid var(--border)', background:'var(--bg-card)' }}>Service</span>
                </div>
                <h3 className="font-display" style={{ fontSize: service.featured ? '1.35rem' : '1.1rem', fontWeight:700, color:'var(--text)', letterSpacing:'-0.02em', marginBottom:'0.75rem', lineHeight:1.25 }}>{service.title}</h3>
                <p style={{ fontSize:'0.875rem', color:'var(--text-muted)', lineHeight:1.7, marginBottom:'1.25rem', flex:1 }}>{service.description}</p>
                <div style={{ padding:'0.875rem 1rem', borderRadius:'0.875rem', border:`1px solid ${colors.border}`, background:colors.glow, marginBottom:'1.125rem' }}>
                  <p style={{ fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.14em', color:'var(--text-muted)', marginBottom:'0.3rem' }}>Outcome</p>
                  <p style={{ fontSize:'0.875rem', color:'var(--text)', lineHeight:1.5 }}>{service.outcome}</p>
                </div>
                <a href="#contact" style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', fontSize:'0.875rem', fontWeight:600, color:'var(--accent-light)', textDecoration:'none' }}>
                  Discuss this service <ChevronRight style={{width:'1rem',height:'1rem'}}/>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
