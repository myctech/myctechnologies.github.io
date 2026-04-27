import { Lock, MapPin, Users, Wrench } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper'

const highlights = [
  {
    icon: MapPin,
    title: 'London-based',
    body: 'We operate across London, supporting both home users and small businesses in person and remotely.',
  },
  {
    icon: Lock,
    title: 'Security built in',
    body: 'Every piece of work we do — repair, build, or configure — is carried out with your security in mind.',
  },
  {
    icon: Users,
    title: 'People, not a portal',
    body: 'No ticket queues or automated replies. You speak directly to the person handling your case.',
  },
  {
    icon: Wrench,
    title: '8 services, one team',
    body: 'From your first virus scan to a full cybersecurity assessment, the same trusted team is behind all of it.',
  },
]

export function AboutSection() {
  return (
    <SectionWrapper id="about" tinted>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left: highlight cards */}
        <div className="order-last lg:order-first grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 shadow-sm"
            >
              <div aria-hidden="true" className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center shrink-0">
                <Icon
                  size={17}
                  className="text-indigo-600 dark:text-indigo-400"
                  strokeWidth={1.75}
                />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">
                  {title}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: copy */}
        <div>
          <SectionHeading eyebrow="About us" heading="Technology that works for you" />

          <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              MyC Technologies is a London-based IT services company focused on helping
              individuals and small businesses get the most from their technology — securely,
              reliably, and without unnecessary complexity.
            </p>
            <p>
              We cover everything from a single device repair to designing your website, removing
              malware, recovering lost data, and building the security policies that protect your
              organisation. Eight services, handled by one team that knows your history and takes
              ownership of your outcomes.
            </p>
            <p>
              We do not outsource your problem or hand you off to an automated system. When you
              contact us, you speak to the people who will actually do the work.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              See our services
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
