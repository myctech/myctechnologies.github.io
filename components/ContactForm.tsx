'use client'

import { useState } from 'react'
import { Button } from './ui/Button'

const SERVICES = [
  'Computer Repair',
  'Website Design',
  'Cybersecurity Assessment',
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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 px-6 py-5 text-sm space-y-1">
        <p className="font-semibold text-amber-800 dark:text-amber-300">This form is not yet connected</p>
        <p className="text-amber-700 dark:text-amber-400">
          To reach us, please use the phone numbers or email address shown on this page.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Fields marked <span aria-hidden="true" className="text-red-500">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="cf-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Full name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name" name="name" type="text" required autoComplete="name"
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cf-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email" name="email" type="email" required autoComplete="email"
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cf-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Phone number
          </label>
          <input
            id="cf-phone" name="phone" type="tel" autoComplete="tel"
            placeholder="+44 7000 000000"
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cf-service" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Service needed
          </label>
          <select id="cf-service" name="service" className={inputClass}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="cf-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message" name="message" required rows={5}
          placeholder="Describe your issue or project…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button type="submit" size="lg">
          Send Message
        </Button>
        <p className="text-xs text-amber-600 dark:text-amber-500 font-medium">
          This form is not yet connected — use the phone or email on this page to reach us.
        </p>
      </div>
    </form>
  )
}
