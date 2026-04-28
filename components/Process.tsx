import { processSteps } from '@/lib/data'

export default function Process() {
  return (
    <section id="process" style={{ padding:'0 1.5rem 6rem', scrollMarginTop:'7rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div className="card-elevated" style={{ padding:'clamp(1.75rem,4vw,3rem)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 40% at 50% 0%,rgba(59,130,246,0.06),transparent)', pointerEvents:'none' }}/>
          <div style={{ textAlign:'center', maxWidth:'560px', margin:'0 auto 3rem', position:'relative' }}>
            <p className="eyebrow" style={{ marginBottom:'0.875rem' }}>Our Process</p>
            <h2 className="font-display" style={{ fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.2, color:'var(--text)', marginBottom:'1rem' }}>
              A simple path from first message to <span className="text-gradient">finished result</span>.
            </h2>
            <p style={{ fontSize:'1rem', color:'var(--text-muted)', lineHeight:1.7 }}>Whether it is a repair, a redesign, or a security review — the process stays consistent, transparent, and outcome-driven.</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem', position:'relative' }} className="process-grid">
            {processSteps.map(step => (
              <article key={step.title} className="card" style={{ padding:'1.625rem', position:'relative', zIndex:1, display:'flex', flexDirection:'column', gap:'1rem' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'0.75rem' }}>
                  <span className="step-number">{step.number}</span>
                  <span style={{ fontSize:'0.7rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', color:'var(--text-subtle)', padding:'0.3rem 0.75rem', borderRadius:'999px', border:'1px solid var(--border)', background:'var(--bg-card)' }}>{step.kicker}</span>
                </div>
                <h3 className="font-display" style={{ fontSize:'1.175rem', fontWeight:700, color:'var(--text)', letterSpacing:'-0.02em', lineHeight:1.25 }}>{step.title}</h3>
                <p style={{ fontSize:'0.875rem', color:'var(--text-muted)', lineHeight:1.7 }}>{step.description}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop:'2.5rem', padding:'1.25rem 1.5rem', borderRadius:'1.25rem', border:'1px solid var(--border)', background:'var(--accent-dim)', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
            <div>
              <p style={{ fontSize:'1rem', fontWeight:600, color:'var(--text)', marginBottom:'0.2rem' }}>Ready to get started?</p>
              <p style={{ fontSize:'0.875rem', color:'var(--text-muted)' }}>First contact is always free — no pressure, no commitment.</p>
            </div>
            <a href="#contact" className="btn-primary" style={{ whiteSpace:'nowrap' }}>Start the Conversation</a>
          </div>
        </div>
      </div>
    </section>
  )
}
