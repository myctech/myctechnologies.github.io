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

export type PortfolioProject = {
  title: string; category: string; summary: string; icon: string
  slug: string; gradient: string; headline: string; tags: string[]
  challenge: string; approach: string; outcome: string
}

export const portfolioItems: PortfolioProject[] = [
  {
    title:    'Multi-User Workstation Deployment',
    category: 'Desktop Customisation',
    summary:  'Five workstations configured from scratch for a small London team — consistent software, security baselines, and personalised layouts for each user.',
    icon:     '🖥️',
    slug:     'desktop-customisation',
    gradient: 'radial-gradient(circle at 70% 30%,rgba(139,92,246,0.6),transparent 60%),radial-gradient(circle at 30% 70%,rgba(59,130,246,0.4),transparent 60%)',
    headline: 'A complete workstation deployment built around how the team actually works.',
    tags:     ['Windows 11', 'Office 365', 'Security Baseline', 'Device Management'],
    challenge: 'A growing London consultancy needed five new workstations deployed before a Monday start date. Each team member had different software requirements, and the business needed a consistent security baseline across all devices without investing in enterprise IT infrastructure.',
    approach:  'We assessed each user\'s daily workflow and tool requirements, built a standardised base configuration with security settings applied — disk encryption, screen lock, firewall rules, automatic updates — then layered per-user software and desktop layouts on top. Each machine was labelled, tested, and handed over with a quick-start guide.',
    outcome:   'All five workstations were ready on time with a consistent security posture. No support calls in the first month. The business has a documented configuration baseline ready to replicate for future hires.',
  },
  {
    title:    'Trade Services Business Website',
    category: 'Website Creation',
    summary:  'A mobile-first website built for a London-based trade business with no prior online presence — clear services, local SEO, and a direct enquiry path.',
    icon:     '🌐',
    slug:     'website-creation',
    gradient: 'radial-gradient(circle at 30% 30%,rgba(59,130,246,0.6),transparent 60%),radial-gradient(circle at 70% 70%,rgba(6,182,212,0.4),transparent 60%)',
    headline: 'A professional online presence that turns first-time visitors into real enquiries.',
    tags:     ['Next.js', 'Tailwind CSS', 'Local SEO', 'Contact Form', 'Mobile-First'],
    challenge: 'A local trade business was relying entirely on word-of-mouth and losing work to competitors with a visible online presence. They had no website, no Google listing, and no straightforward way for potential customers to find or contact them.',
    approach:  'We designed and built a clean, fast website focused on three goals: establish credibility immediately, describe services clearly, and make it easy to get in touch. Pages were structured for local SEO, optimised for mobile, and a contact form was integrated so enquiries arrive directly by email without any third-party dependency.',
    outcome:   'The site launched within two weeks. Within 30 days it was appearing in local search results, and the business received its first inbound enquiry through the contact form in week one.',
  },
  {
    title:    'Laptop Recovery After Drive Failure',
    category: 'Computer Repair',
    summary:  'A freelancer\'s primary laptop stopped booting after an unexpected shutdown — all client project files recovered and the system restored within 24 hours.',
    icon:     '🔧',
    slug:     'computer-repair',
    gradient: 'radial-gradient(circle at 50% 30%,rgba(245,158,11,0.5),transparent 60%),radial-gradient(circle at 50% 70%,rgba(239,68,68,0.3),transparent 60%)',
    headline: 'All client files recovered and the system fully operational within 24 hours.',
    tags:     ['Hardware Diagnosis', 'Data Recovery', 'SSD Replacement', 'OS Rebuild', 'Backup Strategy'],
    challenge: 'A self-employed designer\'s laptop refused to boot after a power cut. With a client deadline the following day and no recent backup, years of project files were at risk. A local repair shop had already advised that the data was unrecoverable.',
    approach:  'We ran hardware diagnostics and identified a partial SSD failure — the drive was degrading but not fully dead. Using sector-level extraction tools, we recovered all project files to an external drive. The SSD was replaced, the operating system rebuilt, files restored, and an automatic cloud backup configured to prevent recurrence.',
    outcome:   'All files recovered successfully, including the active deadline project. The laptop was returned fully functional within 24 hours. The client now has automatic daily backups running in the background with no ongoing maintenance required.',
  },
  {
    title:    'SME Cybersecurity Assessment',
    category: 'Cybersecurity Assessment',
    summary:  'A structured security review for a London SME preparing for regulated client work — clear risk findings, prioritised fixes, and a written remediation roadmap.',
    icon:     '🔒',
    slug:     'cybersecurity-assessment',
    gradient: 'radial-gradient(circle at 50% 30%,rgba(16,185,129,0.5),transparent 60%),radial-gradient(circle at 50% 70%,rgba(6,182,212,0.3),transparent 60%)',
    headline: 'A practical security review that gave the business confidence — and documentation to prove it.',
    tags:     ['Risk Assessment', 'Network Security', 'Access Control', 'Patching Review', 'Policy Documentation'],
    challenge: 'A small business was expanding into work with regulated clients who required evidence of basic cyber hygiene before signing contracts. The team had no formal security policies, mixed personal and business device use, and no clear picture of where their actual risks sat.',
    approach:  'We conducted a structured review covering network configuration, device patching status, password and access control practices, software inventory, and data handling. Findings were grouped by risk level with plain-English explanations and specific, prioritised remediation steps — not a generic checklist.',
    outcome:   'The business resolved its highest-risk findings within two weeks, produced a security policy document from our recommendations, and successfully passed its client onboarding review. They now have a clear baseline to maintain and can evidence their security posture to future clients.',
  },
]

export const capabilityHighlights = ['Computer Repair','Website Design','Cybersecurity','Backup & Recovery','Desktop Setup','Security Policies']

export const contactDetails = [
  { label:'Email us',    value:'info@myctechnologies.com', href:'mailto:info@myctechnologies.com', icon:Mail      },
  { label:'Call us',     value:'+44 7514 679634',          href:'tel:+447514679634',               icon:PhoneCall },
  { label:'Second line', value:'+44 7503 577956',          href:'tel:+447503577956',               icon:PhoneCall },
  { label:'Location',    value:'London, United Kingdom',   href:null,                              icon:MapPin    },
]

export const serviceOptions = services.map((s) => s.title)
