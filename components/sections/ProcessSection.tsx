import { ProcessStep } from '../ui/ProcessStep'
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper'

const steps = [
  {
    number: 1,
    title: 'Reach Out',
    description:
      'Send us a message or give us a call. Tell us what is going on and we will listen — no commitment required.',
  },
  {
    number: 2,
    title: 'Develop a Strategy',
    description:
      'We assess the situation and put together a clear plan. You will know exactly what we intend to do and why before anything starts.',
  },
  {
    number: 3,
    title: 'Implementation',
    description:
      'We carry out the work — repair, build, or secure — with minimal disruption to you and your day.',
  },
  {
    number: 4,
    title: 'Review & Analyse',
    description:
      'We walk you through the outcome, confirm everything is working, and advise on anything worth addressing next.',
  },
]

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <SectionHeading
        eyebrow="How it works"
        heading="A clear process from start to finish"
        subheading="No surprises. No unexplained work. Just a straightforward path from your first message to a resolved problem."
        centred
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {steps.map((step, i) => (
          <ProcessStep key={step.number} {...step} isLast={i === steps.length - 1} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-colors"
        >
          Start with a free conversation
        </a>
      </div>
    </SectionWrapper>
  )
}
