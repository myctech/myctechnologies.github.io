'use client'

import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from './ui/Button'

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? ''

const SERVICES = [
  'Computer Repair',
  'Website Design',
  'Cybersecurity Assessments',
  'Desktop Customisation',
  'Virus / Malware Removal',
  'Data Backup',
  'Data Recovery',
  'Hardware Checks',
  'Security Policy Development',
  'Other / Not Sure',
]

const inputClass =
  'w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'rate_limited'

const RL_KEY    = 'myc_cf_times'
const RL_MAX    = 3               // max submissions per window
const RL_WINDOW = 60 * 60 * 1000 // 1 hour in ms
const COOLDOWN  = 30              // seconds to wait between submissions

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

export function ContactForm() {
  const [status,   setStatus]   = useState<Status>('idle')
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return
    const t = setTimeout(() => setCooldown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [cooldown])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget // capture before any await

    const data = new FormData(form)

    // Honeypot — real users cannot reach this field; bots fill it
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
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Honeypot: off-screen via sr-only + aria-hidden. Bots see it; real users never reach it. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="cf-hp">Leave this empty</label>
        <input id="cf-hp" name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Status banners */}
      {status === 'success' && (
        <div role="status" className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 px-5 py-4 text-sm">
          <p className="font-semibold text-green-800 dark:text-green-300">Message sent — thank you!</p>
          <p className="mt-0.5 text-green-700 dark:text-green-400">We will be in touch as soon as we can.</p>
        </div>
      )}
      {status === 'error' && (
        <div role="alert" className="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 px-5 py-4 text-sm">
          <p className="font-semibold text-red-800 dark:text-red-300">Something went wrong</p>
          <p className="mt-0.5 text-red-700 dark:text-red-400">Please try again, or contact us directly by phone or email.</p>
        </div>
      )}
      {status === 'rate_limited' && (
        <div role="alert" className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 px-5 py-4 text-sm">
          <p className="font-semibold text-amber-800 dark:text-amber-300">Too many submissions</p>
          <p className="mt-0.5 text-amber-700 dark:text-amber-400">Please contact us directly by phone or email.</p>
        </div>
      )}

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Fields marked <span aria-hidden="true" className="text-red-500">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="cf-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Full name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-name" name="name" type="text" required autoComplete="name"
            placeholder="Jane Smith" className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cf-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-email" name="email" type="email" required autoComplete="email"
            placeholder="jane@example.com" className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cf-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Phone number
          </label>
          <input
            id="cf-phone" name="phone" type="tel" autoComplete="tel"
            placeholder="+44 7000 000000" className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cf-service" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Service needed
          </label>
          <select id="cf-service" name="service" className={inputClass}>
            <option value="">Select a service…</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="cf-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message" name="message" required rows={5}
          placeholder="Describe your issue or project…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button type="submit" size="lg" disabled={!canSubmit}>
          {busy ? 'Sending…' : cooldown > 0 ? `Wait ${cooldown}s` : 'Send Message'}
        </Button>
        {status !== 'rate_limited' && (
          <p className="text-xs text-slate-400 dark:text-slate-500">
            We aim to respond within one business day.
          </p>
        )}
      </div>
    </form>
  )
}
