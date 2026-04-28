import { ArrowRight, Zap } from 'lucide-react'

export default function CTABanner() {
  return (
    <section style={{ padding:'0 1.5rem 6rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div className="cta-section" style={{ padding:'clamp(2rem,5vw,4rem)', position:'relative' }}>
          <div style={{ position:'absolute', inset:0, borderRadius:'2rem', backgroundImage:'linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)', backgroundSize:'48px 48px', pointerEvents:'none' }}/>
          <div style={{ display:'flex', flexDirection:'column', gap:'2rem', alignItems:'flex-start', position:'relative', zIndex:1 }} className="cta-inner">
            <div style={{ flex:1, maxWidth:'680px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.625rem', marginBottom:'1.25rem' }}>
                <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:'2rem', height:'2rem', borderRadius:'0.625rem', background:'var(--gradient)', boxShadow:'0 4px 12px rgba(59,130,246,0.4)' }}>
                  <Zap style={{width:'1rem',height:'1rem',color:'white'}}/>
                </span>
                <p className="eyebrow">Ready to move forward?</p>
              </div>
              <h2 className="font-display" style={{ fontSize:'clamp(1.875rem,4vw,3.25rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.15, color:'var(--text)', marginBottom:'1rem' }}>
                If your systems, website, or security need attention —{' '}
                <span className="text-gradient">let&apos;s make the next step simple</span>.
              </h2>
              <p style={{ fontSize:'1.05rem', color:'var(--text-muted)', lineHeight:1.7 }}>No obligation. No jargon. Just a clear conversation about what you need and how we can help.</p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem', alignItems:'flex-start' }} className="cta-buttons">
              <a href="#contact" className="btn-primary" style={{ fontSize:'1.05rem', padding:'1rem 2rem' }}>
                Start Your Project <ArrowRight style={{width:'1.1rem',height:'1.1rem'}}/>
              </a>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.625rem' }}>
                {['Fast response','London-based','No obligation'].map(tag => (
                  <span key={tag} style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', fontSize:'0.78rem', fontWeight:600, color:'var(--text-muted)', padding:'0.35rem 0.75rem', borderRadius:'999px', border:'1px solid var(--border)', background:'var(--bg-card)' }}>
                    <span style={{ width:'0.4rem', height:'0.4rem', borderRadius:'50%', background:'var(--emerald)', display:'inline-block' }}/>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
