import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Tag } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { portfolioItems } from '@/lib/data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return portfolioItems.map(item => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioItems.find(p => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} | MyC Technologies`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = portfolioItems.find(p => p.slug === slug)
  if (!project) notFound()

  const gradients: Record<string,string> = {
    'desktop-customisation': 'radial-gradient(circle at 70% 30%,rgba(139,92,246,0.6),transparent 60%),radial-gradient(circle at 30% 70%,rgba(59,130,246,0.4),transparent 60%)',
    'website-creation':      'radial-gradient(circle at 30% 30%,rgba(59,130,246,0.6),transparent 60%),radial-gradient(circle at 70% 70%,rgba(6,182,212,0.4),transparent 60%)',
    'computer-repair':       'radial-gradient(circle at 50% 30%,rgba(245,158,11,0.5),transparent 60%),radial-gradient(circle at 50% 70%,rgba(239,68,68,0.3),transparent 60%)',
    'cybersecurity-assessment': 'radial-gradient(circle at 50% 30%,rgba(16,185,129,0.5),transparent 60%),radial-gradient(circle at 50% 70%,rgba(6,182,212,0.3),transparent 60%)',
  }

  const sections = [
    { label: 'The Challenge', body: project.challenge },
    { label: 'Our Approach',  body: project.approach  },
    { label: 'The Outcome',   body: project.outcome   },
  ]

  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />

      <div style={{ position:'relative', zIndex:0 }}>
        <Navbar />

        <main style={{ maxWidth:'1200px', margin:'0 auto', padding:'3rem 1.5rem 6rem' }}>

          {/* Back link */}
          <Link href="/#portfolio" className="footer-link" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', fontSize:'0.875rem', fontWeight:500, marginBottom:'3rem' }}>
            <ArrowLeft style={{width:'1rem',height:'1rem'}}/> Back to Portfolio
          </Link>

          {/* Hero */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'2rem', alignItems:'center', marginBottom:'4rem' }} className="proj-hero">
            {/* Copy */}
            <div>
              <span style={{ display:'inline-block', marginBottom:'1rem', fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.2em', color:'var(--accent-light)', padding:'0.3rem 0.875rem', borderRadius:'999px', border:'1px solid rgba(59,130,246,0.35)', background:'rgba(59,130,246,0.08)' }}>
                {project.category}
              </span>
              <h1 className="font-display" style={{ fontSize:'clamp(2rem,4vw,3.25rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.1, color:'var(--text)', marginBottom:'1.25rem' }}>
                {project.headline}
              </h1>
              <p style={{ fontSize:'1.05rem', color:'var(--text-muted)', lineHeight:1.75, maxWidth:'600px', marginBottom:'1.75rem' }}>
                {project.summary}
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', fontSize:'0.78rem', fontWeight:500, color:'var(--text-muted)', padding:'0.35rem 0.75rem', borderRadius:'999px', border:'1px solid var(--border)', background:'var(--bg-card)' }}>
                    <Tag style={{width:'0.7rem',height:'0.7rem'}}/>{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div style={{ borderRadius:'1.5rem', overflow:'hidden', aspectRatio:'16/9', position:'relative', border:'1px solid var(--border)', background:'#0f172a' }}>
              <div style={{ position:'absolute', inset:0, opacity:0.7, backgroundImage: gradients[project.slug] || 'none' }}/>
              <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'40px 40px' }}/>
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'5rem', opacity:0.3 }}>{project.icon}</div>
            </div>
          </div>

          {/* Challenge / Approach / Outcome */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem', marginBottom:'4rem' }} className="proj-sections">
            {sections.map((s, i) => (
              <div key={s.label} className="card-elevated" style={{ padding:'clamp(1.75rem,4vw,2.5rem)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.875rem', marginBottom:'1.125rem' }}>
                  <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:'2rem', height:'2rem', borderRadius:'50%', background:'var(--gradient)', color:'white', fontSize:'0.8rem', fontWeight:700, flexShrink:0 }}>{i + 1}</span>
                  <h2 className="font-display" style={{ fontSize:'1.25rem', fontWeight:700, color:'var(--text)', letterSpacing:'-0.02em' }}>{s.label}</h2>
                </div>
                <p style={{ fontSize:'0.975rem', color:'var(--text-muted)', lineHeight:1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>

          {/* Outcome highlight */}
          <div style={{ padding:'1.5rem 2rem', borderRadius:'1.25rem', border:'1px solid rgba(16,185,129,0.25)', background:'rgba(16,185,129,0.06)', display:'flex', alignItems:'flex-start', gap:'1rem', marginBottom:'4rem' }}>
            <CheckCircle2 style={{ width:'1.5rem', height:'1.5rem', color:'var(--emerald)', flexShrink:0, marginTop:'0.1rem' }}/>
            <div>
              <p style={{ fontSize:'0.875rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em', color:'var(--emerald)', marginBottom:'0.375rem' }}>Result</p>
              <p style={{ fontSize:'1rem', color:'var(--text)', lineHeight:1.7 }}>{project.outcome}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section" style={{ padding:'clamp(2rem,4vw,3rem)', textAlign:'center' }}>
            <p className="eyebrow" style={{ marginBottom:'1rem' }}>Interested in similar work?</p>
            <h2 className="font-display" style={{ fontSize:'clamp(1.5rem,3vw,2.25rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.2, color:'var(--text)', marginBottom:'0.875rem' }}>
              Let&apos;s talk about what you need.
            </h2>
            <p style={{ fontSize:'1rem', color:'var(--text-muted)', marginBottom:'1.75rem', maxWidth:'480px', margin:'0 auto 1.75rem' }}>
              No obligation. No jargon. Just a clear conversation about your project.
            </p>
            <Link href="/#contact" className="btn-primary">
              Get in Touch <ArrowRight style={{width:'1rem',height:'1rem'}}/>
            </Link>
          </div>
        </main>

        <Footer />
      </div>

      <style>{`
        @media(min-width:768px){ .proj-sections{grid-template-columns:repeat(3,1fr)!important} }
        @media(min-width:900px){ .proj-hero{grid-template-columns:1.1fr 0.9fr!important} }
      `}</style>
    </>
  )
}
