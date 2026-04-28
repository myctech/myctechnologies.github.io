import { ArrowUpRight } from 'lucide-react'
import { portfolioItems } from '@/lib/data'

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding:'0 1.5rem 6rem', scrollMarginTop:'7rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', maxWidth:'580px', margin:'0 auto 3.5rem' }}>
          <p className="eyebrow" style={{ marginBottom:'0.875rem' }}>Portfolio</p>
          <h2 className="font-display" style={{ fontSize:'clamp(1.875rem,3.5vw,2.75rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.15, color:'var(--text)', marginBottom:'1rem' }}>Work that speaks for itself.</h2>
          <p style={{ fontSize:'1.05rem', color:'var(--text-muted)', lineHeight:1.7 }}>A selection of projects delivered for businesses and individuals across London. Real work, real results.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem' }} className="portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.title} className="portfolio-card" style={{ border:'1px solid var(--border)', aspectRatio:'4/5' }}>
              <div className="portfolio-card-inner" style={{ background:'#0f172a' }}>
                <div style={{ position:'absolute', inset:0, opacity:0.7, backgroundImage:item.gradient }}/>
                <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'40px 40px' }}/>
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'4rem', opacity:0.3 }}>{item.icon}</div>
              </div>

              <div className="portfolio-overlay">
                {/* Category at top */}
                <span style={{ display:'inline-block', fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'rgba(255,255,255,0.6)', padding:'0.3rem 0.75rem', borderRadius:'999px', border:'1px solid rgba(255,255,255,0.12)', background:'rgba(255,255,255,0.06)', width:'fit-content' }}>
                  {item.category}
                </span>

                {/* Spacer pushes title+link to bottom */}
                <div style={{ flex:1 }} />

                {/* Title and link always pinned to bottom — consistent alignment */}
                <div>
                  <h3 className="font-display" style={{ fontSize:'1.175rem', fontWeight:700, color:'white', letterSpacing:'-0.02em', lineHeight:1.25, marginBottom:'0.875rem' }}>
                    {item.title}
                  </h3>
                  <a
                    href={`/portfolio/${item.slug}/`}
                    style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', fontSize:'0.825rem', fontWeight:600, color:'rgba(255,255,255,0.85)', textDecoration:'none' }}
                  >
                    View project <ArrowUpRight style={{width:'0.875rem',height:'0.875rem'}}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:'2.5rem' }}>
          <p style={{ fontSize:'1rem', color:'var(--text-muted)', marginBottom:'1.25rem' }}>Want to see what we could build for you?</p>
          <a href="#contact" className="btn-primary">Start a Project</a>
        </div>
      </div>
    </section>
  )
}
