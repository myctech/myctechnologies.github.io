import type { LucideIcon } from 'lucide-react'
import {
  Wrench, LayoutTemplate, ShieldCheck, MonitorSmartphone, Bug,
  HardDriveDownload, Settings2, Shield, TimerReset, Workflow,
  Activity, MessagesSquare, LifeBuoy, LockKeyhole, TrendingUp,
  Sparkles, Monitor, MapPin, PhoneCall, Mail,
} from 'lucide-react'

export const stats = [
  { value: '8',      label: 'Services offered',  caption: 'Repair, design, cybersecurity, recovery, and more — all under one partner.' },
  { value: 'London', label: 'Based',              caption: 'A local IT partner for businesses and individuals who value speed, clarity, and genuine trust.' },
  { value: '24h',    label: 'Response target',    caption: 'We aim to respond to all enquiries within one business day.' },
  { value: 'UK',     label: 'IT & cyber',         caption: 'Computer repair, website design, cybersecurity, and data recovery in one place.' },
]

export type Service = {
  title: string; description: string; outcome: string
  icon: LucideIcon; color: 'blue'|'cyan'|'emerald'|'amber'|'violet'; featured?: boolean
}

export const services: Service[] = [
  { title:'Computer Repair',            description:'Fast, reliable diagnosis and repair of hardware and software issues — from sluggish machines to total system failures. We restore stability so your devices can be trusted again.',                                                          outcome:'Cut downtime. Restore performance. Rebuild confidence in your tech.',                   icon:Wrench,          color:'blue',    featured:true },
  { title:'Website Design',             description:'Polished, mobile-first websites that make your business look established, trustworthy, and easy to contact. Built for performance, SEO, and genuine conversion.',                                                                          outcome:'Turn first impressions into stronger enquiries and real growth.',                       icon:LayoutTemplate,  color:'cyan',    featured:true },
  { title:'Cybersecurity Assessments',  description:'Identify vulnerabilities before they become incidents. We review your risk landscape and deliver practical, prioritised guidance — not jargon.',                                                                                           outcome:'Smarter security decisions before gaps become expensive problems.',                      icon:ShieldCheck,     color:'emerald'                },
  { title:'Desktop Customisation',      description:'Configure your workspace around how you actually work. Cleaner setups, fewer friction points, better daily flow.',                                                                                                                        outcome:'A workspace that feels faster, smoother, and built for you.',                           icon:MonitorSmartphone,color:'violet'               },
  { title:'Virus & Malware Removal',    description:'Find and eliminate malicious software completely, then tighten your system to reduce the risk of re-infection. Data protection throughout.',                                                                                               outcome:'Recover performance and regain full control of compromised devices.',                   icon:Bug,             color:'amber'                  },
  { title:'Data Backup & Recovery',     description:'Protect critical files with robust backup strategies. Recover lost data from accidental deletion, hardware failure, or corruption — quickly and safely.',                                                                                 outcome:'Stronger continuity. Reduced risk of catastrophic data loss.',                          icon:HardDriveDownload,color:'blue'                  },
  { title:'Hardware Checks',            description:'Thorough inspection of key components — hard drives, RAM, thermals, connections. Surface failures before they interrupt your workflow.',                                                                                                   outcome:'Catch avoidable problems early. Extend the life of your devices.',                      icon:Settings2,       color:'cyan'                   },
  { title:'Security Policy Development',description:'Clear, practical policies that help your team handle devices, access, and data more securely — documentation that actually gets used in real operations.',                                                                                outcome:'Safer daily habits supported by policies built for the real world.',                    icon:Shield,          color:'emerald'                },
]

export const processSteps = [
  { number:'01', title:'Reach Out',          kicker:'Discovery', description:'Start with your issue, objective, or improvement. The first conversation focuses on understanding your setup and what success looks like for you.' },
  { number:'02', title:'Develop a Strategy', kicker:'Planning',  description:'Receive a focused plan shaped around your devices, website, workflows, or risks — with clear priorities and practical next steps, not guesswork.' },
  { number:'03', title:'Implementation',     kicker:'Delivery',  description:'The agreed work is carried out carefully: repair, design, security, or recovery — with regular communication and transparent progress throughout.' },
  { number:'04', title:'Review & Follow-Up', kicker:'Analysis',  description:'Confirm what improved, validate the outcome, and identify any follow-on actions that keep your systems stronger and more resilient over time.' },
]

export const aboutPillars = [
  { title:'One partner. Multiple capabilities.', description:'Repair, design, cybersecurity, and continuity — brought together so you are never forced to coordinate between different providers for connected problems.',  icon:Monitor,        color:'blue'    as const },
  { title:'Clear advice without noise.',         description:'Technical complexity is translated into straightforward recommendations so decisions feel simpler, faster, and more confident.',                               icon:MessagesSquare, color:'cyan'    as const },
  { title:'Modern standards, practical delivery.',description:'Work that is credible, secure, and easy to maintain — not impressive only on a spec sheet but genuinely useful in real-world operations.',                   icon:Sparkles,       color:'emerald' as const },
]

export const trustPoints = [
  { title:'London-based support',    description:'A local IT partner for businesses and individuals who value speed, clarity, and genuine trust — not a faceless helpdesk.',                            icon:LifeBuoy    },
  { title:'Security-aware delivery', description:'Website, device, and policy work approached with resilience and protection built in from the outset.',                                               icon:LockKeyhole },
  { title:'Outcome-driven service',  description:'Recommendations shaped around what actually helps your setup run better — not around upsells or unnecessary complexity.',                            icon:TrendingUp  },
]

export const differentiators = [
  { title:'Fast, focused support',        description:'Urgent issues handled with a response mindset that prioritises stability, clarity, and momentum — not queues and waiting.',                       icon:TimerReset,  color:'blue'    as const },
  { title:'Tailored recommendations',     description:'Advice based on your actual setup, goals, and risk profile — not generic one-size-fits-all fixes copy-pasted from a script.',                   icon:Workflow,    color:'cyan'    as const },
  { title:'Security built into the work', description:'From websites to workstation setup, performance and protection are considered together — not bolted on as an afterthought.',                    icon:ShieldCheck, color:'emerald' as const },
  { title:'Professional communication',   description:'Clear updates, sensible explanations, and delivery that feels organised from first contact to final result — every time.',                       icon:Activity,    color:'violet'  as const },
]

export const portfolioItems = [
  { title:'Professional Services Redesign', category:'Website Design',      summary:'A service-led layout built to improve clarity, trust, and lead quality for a London-based consultancy.', icon:'🌐' },
  { title:'Business Presence Refresh',      category:'UX & Responsive',     summary:'A modern digital front door with stronger hierarchy, mobile polish, and clearer calls to action.',        icon:'✦'  },
  { title:'Security-Focused Service Site',  category:'Trust-Led Messaging', summary:'A presentation balancing professionalism, reassurance, and technical credibility for a security firm.',  icon:'🔒' },
  { title:'Launch-Ready Showcase Page',     category:'Conversion Design',   summary:'Built to communicate value quickly and make the next step feel effortless for prospective clients.',      icon:'⚡' },
]

export const capabilityHighlights = ['Computer Repair','Website Design','Cybersecurity','Backup & Recovery','Desktop Setup','Security Policies']

export const contactDetails = [
  { label:'Email us',    value:'info@myctechnologies.com', href:'mailto:info@myctechnologies.com', icon:Mail      },
  { label:'Call us',     value:'+44 7514 679634',          href:'tel:+447514679634',               icon:PhoneCall },
  { label:'Second line', value:'+44 7503 577956',          href:'tel:+447503577956',               icon:PhoneCall },
  { label:'Location',    value:'London, United Kingdom',   href:null,                              icon:MapPin    },
]

export const serviceOptions = services.map((s) => s.title)
