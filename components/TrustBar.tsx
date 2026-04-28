import { stats, trustPoints } from '@/lib/data'

export default function TrustBar() {
  return (
    <section style={{ padding:'0 1.5rem 4rem', maxWidth:'1200px', margin:'0 auto' }}>
      <div className="card-elevated" style={{ padding:'2.5rem', overflow:'hidden', position:'relative' }}>
        <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle,rgba(6,182,212,0.1),transparent 70%)', pointerEvents:'none' }}/>
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'2.5rem' }} className="trust-inner">

          {/* Key facts */}
          <div>
            <p className="eyebrow" style={{ marginBottom:'1.5rem' }}>Our service at a glance</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1rem' }}>
              {stats.map(stat => (
                <div key={stat.label} style={{ padding:'1.25rem', borderRadius:'1.125rem', border:'1px solid var(--border)', background:'var(--bg-card)', backdropFilter:'blur(12px)' }}>
                  <div className="font-display" style={{ fontSize:'2.25rem', fontWeight:700, letterSpacing:'-0.04em', lineHeight:1, background:'var(--gradient-text)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:'0.375rem' }}>{stat.value}</div>
                  <div style={{ fontSize:'0.875rem', fontWeight:600, color:'var(--text)', marginBottom:'0.25rem' }}>{stat.label}</div>
                  <div style={{ fontSize:'0.78rem', color:'var(--text-muted)', lineHeight:1.5 }}>{stat.caption}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why clients trust us */}
          <div>
            <p className="eyebrow" style={{ marginBottom:'1.5rem' }}>Why clients trust us</p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.875rem' }}>
              {trustPoints.map(point => {
                const Icon = point.icon
                return (
                  <div key={point.title} style={{ display:'flex', alignItems:'flex-start', gap:'1rem', padding:'1rem 1.125rem', borderRadius:'1rem', border:'1px solid var(--border)', background:'var(--bg-card)' }}>
                    <span className="icon-chip"><Icon style={{width:'1.1rem',height:'1.1rem'}}/></span>
                    <div>
                      <div style={{ fontSize:'0.9rem', fontWeight:600, color:'var(--text)', marginBottom:'0.25rem' }}>{point.title}</div>
                      <div style={{ fontSize:'0.82rem', color:'var(--text-muted)', lineHeight:1.6 }}>{point.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
