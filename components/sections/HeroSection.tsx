export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-svh flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-indigo-100/70 dark:bg-indigo-950/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-100/50 dark:bg-violet-950/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="max-w-3xl">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-8">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse motion-reduce:animate-none"
            />
            IT Services &amp; Cybersecurity — London
          </div>

          {/* Primary headline */}
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] text-slate-900 dark:text-slate-50 mb-6"
          >
            Repair.{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Protect.
            </span>{' '}
            Build.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-10">
            Expert IT services for individuals and small businesses across London.
            From computer repair to cybersecurity assessments — practical help,
            plain English, no jargon.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Explore Services
            </a>
          </div>

          {/* Trust tags */}
          <ul
            aria-label="Key facts"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {[
              'London-based team',
              'Security-first approach',
              'Individuals & small businesses',
            ].map((tag) => (
              <li
                key={tag}
                className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
              >
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0"
                />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
