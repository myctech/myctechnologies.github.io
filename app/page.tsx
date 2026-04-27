// UNDER CONSTRUCTION — replace this file with page.full.tsx when the site is ready to launch.
// All section components remain in components/sections/ and are unchanged.

import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Coming Soon | MyC Technologies',
}

export default function Home() {
  return (
    <div className="relative min-h-svh flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">

      {/* Background blobs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-100/60 dark:bg-indigo-950/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-100/40 dark:bg-violet-950/30 blur-3xl" />
      </div>

      <div className="w-full max-w-md text-center space-y-10">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="MyC Technologies"
            width={1156}
            height={287}
            className="h-10 w-auto dark:invert"
            priority
          />
        </div>

        {/* Eyebrow + heading */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse motion-reduce:animate-none" />
            New site coming soon
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug">
            We are working on{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              something new
            </span>
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Our new website is on its way. We are fully operational in the
            meantime — get in touch and we will be happy to help.
          </p>
        </div>

        {/* Divider */}
        <div aria-hidden="true" className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mx-auto" />

        {/* Contact */}
        <div className="space-y-3">
          <a
            href="mailto:info@myctechnologies.com"
            className="flex items-center justify-center gap-2.5 w-full px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold transition-colors shadow-md shadow-indigo-500/20"
          >
            <Mail size={15} aria-hidden="true" />
            info@myctechnologies.com
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+447514679634"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Phone size={14} aria-hidden="true" />
              +44 7514 679634
            </a>
            <a
              href="tel:+447503577956"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Phone size={14} aria-hidden="true" />
              +44 7503 577956
            </a>
          </div>
        </div>

        {/* Location */}
        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400 dark:text-slate-600">
          <MapPin size={12} aria-hidden="true" />
          London, United Kingdom — IT Services &amp; Cybersecurity
        </p>

      </div>
    </div>
  )
}
