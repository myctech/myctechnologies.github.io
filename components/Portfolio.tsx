import { ArrowUpRight } from 'lucide-react'
import { portfolioItems } from '@/lib/data'

const gradients: Record<string,string> = {
  'Professional Services Redesign':'radial-gradient(circle at 30% 30%,rgba(59,130,246,0.6),transparent 60%),radial-gradient(circle at 70% 70%,rgba(6,182,212,0.4),transparent 60%)',
  'Business Presence Refresh':'radial-gradient(circle at 70% 30%,rgba(139,92,246,0.6),transparent 60%),radial-gradient(circle at 30% 70%,rgba(59,130,246,0.4),transparent 60%)',
  'Security-Focused Service Site':'radial-gradient(circle at 50% 30%,rgba(16,185,129,0.5),transparent 60%),radial-gradient(circle at 50% 70%,rgba(6,182,212,0.3),transparent 60%)',
  'Launch-Ready Showcase Page':'radial-gradient(circle at 30% 60%,rgba(245,158,11,0.5),transparent 60%),radial-gradient(circle at 70% 30%,rgba(239,68,68,0.3),transparent 60%)',
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding:'0 1.5rem 6rem', scrollMarginTop:'7rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', maxWidth:'580px', margin:'0 auto 3.5rem' }}>
          <p className="eyebrow" style={{ marginBottom:'0.875rem' }}>Portfolio</p>
          <h2 className="font-display" style={{ fontSize:'clamp(1.875rem,3.5vw,2.75rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.15, color:'var(--text)', marginBottom:'1rem' }}>Work that speaks for itself.</h2>
          <p style={{ fontSize:'1.05rem', color:'var(--text-muted)', lineHeight:1.7 }}>A selection of website and digital projects delivered for businesses across London. Real work, real results.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem' }} className="portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.title} className="portfolio-card" style={{ border:'1px solid var(--border)', aspectRatio:'4/5' }}>
              <div className="portfolio-card-inner" style={{ background:'#0f172a' }}>
                <div style={{ position:'absolute', inset:0, opacity:0.7, backgroundImage: gradients[item.title] || 'none' }}/>
                <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'40px 40px' }}/>
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'4rem', opacity:0.3 }}>{item.icon}</div>
              </div>
              <div className="portfolio-overlay">
                <span style={{ display:'inline-block', marginBottom:'0.75rem', fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'rgba(255,255,255,0.6)', padding:'0.3rem 0.75rem', borderRadius:'999px', border:'1px solid rgba(255,255,255,0.12)', background:'rgba(255,255,255,0.06)', width:'fit-content' }}>{item.category}</span>
                <h3 className="font-display" style={{ fontSize:'1.175rem', fontWeight:700, color:'white', letterSpacing:'-0.02em', lineHeight:1.25, marginBottom:'0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize:'0.825rem', color:'rgba(255,255,255,0.6)', lineHeight:1.6, marginBottom:'1rem' }}>{item.summary}</p>
                <div style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', fontSize:'0.825rem', fontWeight:600, color:'rgba(255,255,255,0.8)' }}>View project <ArrowUpRight style={{width:'0.875rem',height:'0.875rem'}}/></div>
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
