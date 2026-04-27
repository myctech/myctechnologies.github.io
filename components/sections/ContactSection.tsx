import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../ContactForm'
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    content: (
      <a
        href="mailto:info@myctechnologies.com"
        className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        info@myctechnologies.com
      </a>
    ),
  },
  {
    icon: Phone,
    label: 'Phone',
    content: (
      <div className="space-y-1">
        <a
          href="tel:+447514679634"
          className="block text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          +44 7514 679634
        </a>
        <a
          href="tel:+447503577956"
          className="block text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          +44 7503 577956
        </a>
      </div>
    ),
  },
  {
    icon: MapPin,
    label: 'Location',
    content: (
      <p className="text-sm text-slate-700 dark:text-slate-300">London, United Kingdom</p>
    ),
  },
]

export function ContactSection() {
  return (
    <SectionWrapper id="contact" tinted>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        {/* Left: info */}
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Get in touch"
            heading="Tell us what you need"
            subheading="Use the form or reach out directly. We will get back to you as soon as we can."
          />

          <ul className="space-y-5">
            {contactDetails.map(({ icon: Icon, label, content }) => (
              <li key={label} className="flex items-start gap-4">
                <div aria-hidden="true" className="mt-0.5 w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                    {label}
                  </p>
                  {content}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  )
}
