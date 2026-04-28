'use client'
import { useEffect, useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { contactDetails, serviceOptions } from '@/lib/data'

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? ''

const RL_KEY    = 'myc_cf_times'
const RL_MAX    = 3
const RL_WINDOW = 60 * 60 * 1000
const COOLDOWN  = 30

function getRecentTimes(): number[] {
  try {
    const raw = localStorage.getItem(RL_KEY)
    const all: number[] = raw ? (JSON.parse(raw) as number[]) : []
    return all.filter(t => Date.now() - t < RL_WINDOW)
  } catch { return [] }
}

function isRateLimited(): boolean {
  return getRecentTimes().length >= RL_MAX
}

function recordSubmission() {
  try {
    const recent = getRecentTimes()
    recent.push(Date.now())
    localStorage.setItem(RL_KEY, JSON.stringify(recent))
  } catch {}
}

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'rate_limited'

export default function Contact() {
  const [status,   setStatus]   = useState<Status>('idle')
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return
    const t = setTimeout(() => setCooldown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [cooldown])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (data.get('_hp')?.toString()) return

    if (isRateLimited()) { setStatus('rate_limited'); return }

    setStatus('submitting')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  String(data.get('name')    ?? '').trim(),
          from_email: String(data.get('email')   ?? '').trim(),
          phone:      String(data.get('phone')   ?? '').trim() || 'Not provided',
          service:    String(data.get('service') ?? '').trim() || 'Not specified',
          message:    String(data.get('message') ?? '').trim(),
        },
        { publicKey: PUBLIC_KEY },
      )
      recordSubmission()
      form.reset()
      setStatus('success')
      setCooldown(COOLDOWN)
    } catch {
      setStatus('error')
    }
  }

  const busy      = status === 'submitting'
  const canSubmit = !busy && cooldown === 0 && status !== 'rate_limited'

  return (
    <section id="contact" style={{ padding:'0 1.5rem 6rem', scrollMarginTop:'7rem' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1.25rem' }} className="contact-grid">

          {/* Info panel */}
          <div className="card-elevated" style={{ padding:'clamp(1.75rem,4vw,2.5rem)' }}>
            <p className="eyebrow" style={{ marginBottom:'0.875rem' }}>Contact</p>
            <h2 className="font-display" style={{ fontSize:'clamp(1.625rem,3vw,2.25rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.2, color:'var(--text)', marginBottom:'1rem' }}>
              Tell us what needs attention and we&apos;ll help you move with <span className="text-gradient">clarity</span>.
            </h2>
            <p style={{ fontSize:'0.95rem', color:'var(--text-muted)', lineHeight:1.7, marginBottom:'2rem' }}>Use the form for a quote, a support request, or a project conversation. Direct contact details below if you prefer to reach out immediately.</p>

            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem' }}>
              {contactDetails.map(detail => {
                const Icon = detail.icon
                const inner = (
                  <>
                    <span className="icon-chip"><Icon style={{width:'1rem',height:'1rem'}}/></span>
                    <div>
                      <div style={{ fontSize:'0.72rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.12em', color:'var(--text-subtle)', marginBottom:'0.25rem' }}>{detail.label}</div>
                      <div style={{ fontSize:'0.95rem', fontWeight:600, color:'var(--text)' }}>{detail.value}</div>
                    </div>
                  </>
                )
                return detail.href
                  ? <a key={detail.value} href={detail.href} className="contact-detail-card">{inner}</a>
                  : <div key={detail.value} className="contact-detail-card">{inner}</div>
              })}
            </div>

            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
              {['Fast response mindset','Business & personal clients','London-based'].map(tag => (
                <span key={tag} className="trust-pill">
                  <CheckCircle2 style={{width:'0.875rem',height:'0.875rem',color:'var(--emerald)'}}/>{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div style={{ background:'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(6,182,212,0.04))', border:'1px solid rgba(59,130,246,0.15)', borderRadius:'2rem', padding:'clamp(1.75rem,4vw,2.5rem)' }}>

            {status === 'success' ? (
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', minHeight:'300px', textAlign:'center', gap:'1rem' }}>
                <div style={{ width:'4rem', height:'4rem', borderRadius:'50%', background:'var(--emerald-dim)', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(16,185,129,0.3)' }}>
                  <CheckCircle2 style={{width:'2rem',height:'2rem',color:'var(--emerald)'}}/>
                </div>
                <h3 className="font-display" style={{ fontSize:'1.5rem', fontWeight:700, color:'var(--text)', letterSpacing:'-0.02em' }}>Message sent!</h3>
                <p style={{ fontSize:'0.95rem', color:'var(--text-muted)', maxWidth:'340px' }}>Thank you — we will be in touch as soon as we can, usually within one business day.</p>
                <button onClick={() => setStatus('idle')} className="btn-secondary" style={{ marginTop:'0.5rem' }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>

                {/* Honeypot: hidden from real users, visible to bots */}
                <div style={{ position:'absolute', left:'-9999px', top:'-9999px' }} aria-hidden="true">
                  <label htmlFor="cf-hp">Leave this empty</label>
                  <input id="cf-hp" name="_hp" type="text" tabIndex={-1} autoComplete="off"/>
                </div>

                <div>
                  <p className="font-display" style={{ fontSize:'1.35rem', fontWeight:700, color:'var(--text)', letterSpacing:'-0.02em', marginBottom:'0.375rem' }}>Send a message</p>
                  <p style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>We respond to all enquiries within one business day.</p>
                </div>

                {status === 'error' && (
                  <div role="alert" style={{ padding:'0.875rem 1rem', borderRadius:'0.875rem', border:'1px solid rgba(239,68,68,0.3)', background:'rgba(239,68,68,0.08)', fontSize:'0.875rem', color:'#fca5a5' }}>
                    Something went wrong. Please try again, or contact us directly by phone or email.
                  </div>
                )}

                {status === 'rate_limited' && (
                  <div role="alert" style={{ padding:'0.875rem 1rem', borderRadius:'0.875rem', border:'1px solid rgba(245,158,11,0.3)', background:'rgba(245,158,11,0.08)', fontSize:'0.875rem', color:'#fcd34d' }}>
                    Too many submissions. Please contact us directly by phone or email.
                  </div>
                )}

                <div>
                  <label className="form-label" htmlFor="cf-name">Full name <span aria-hidden="true" style={{ color:'#f87171' }}>*</span></label>
                  <input id="cf-name" name="name" type="text" required placeholder="Your full name" autoComplete="name" className="form-field"/>
                </div>

                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }} className="form-row">
                  <div>
                    <label className="form-label" htmlFor="cf-email">Email address <span aria-hidden="true" style={{ color:'#f87171' }}>*</span></label>
                    <input id="cf-email" name="email" type="email" required placeholder="name@example.com" autoComplete="email" className="form-field"/>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="cf-phone">Phone number</label>
                    <input id="cf-phone" name="phone" type="tel" placeholder="+44 7000 000000" autoComplete="tel" className="form-field"/>
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="cf-service">Service needed</label>
                  <select id="cf-service" name="service" className="form-field">
                    <option value="">Select a service</option>
                    {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div>
                  <label className="form-label" htmlFor="cf-message">Project details <span aria-hidden="true" style={{ color:'#f87171' }}>*</span></label>
                  <textarea id="cf-message" name="message" required rows={5} placeholder="Tell us about your issue, goal, or project. Include anything that helps us understand the scope quickly." className="form-field" style={{ resize:'vertical', minHeight:'130px', borderRadius:'0.875rem' }}/>
                </div>

                <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
                  <p style={{ fontSize:'0.82rem', color:'var(--text-muted)' }}>
                    Or email: <a href="mailto:info@myctechnologies.com" style={{ color:'var(--accent-light)', fontWeight:600, textDecoration:'none' }}>info@myctechnologies.com</a>
                  </p>
                  <button type="submit" className="btn-primary" disabled={!canSubmit}>
                    {busy ? 'Sending…' : cooldown > 0 ? `Wait ${cooldown}s` : 'Send Message'} {!busy && cooldown === 0 && <ArrowRight style={{width:'1rem',height:'1rem'}}/>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
