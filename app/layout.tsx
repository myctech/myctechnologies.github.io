import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400','500','600','700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['400','500','600','700'],
})

const SITE_URL  = 'https://myctechnologies.com'
const SITE_NAME = 'MyC Technologies'
const TITLE     = 'MyC Technologies | IT Services & Cybersecurity London'
const DESCRIPTION =
  'London-based IT services for individuals and small businesses. Computer repair, cybersecurity, website design, virus removal, and data recovery. Practical help, plain English.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'IT services London',
    'computer repair London',
    'cybersecurity London',
    'website design London',
    'virus removal London',
    'malware removal London',
    'data recovery London',
    'data backup London',
    'hardware repair London',
    'IT support small business London',
    'security policy development',
    'desktop customisation London',
  ],
  authors:  [{ name: SITE_NAME, url: SITE_URL }],
  creator:  SITE_NAME,
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title:    TITLE,
    description: DESCRIPTION,
    url:      SITE_URL,
    siteName: SITE_NAME,
    locale:   'en_GB',
    type:     'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       TITLE,
    description: DESCRIPTION,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'MyC Technologies',
  description:
    'IT services for individuals and small businesses in London. Computer repair, website design, cybersecurity assessments, virus removal, data backup and recovery, hardware checks, desktop customisation, and security policy development.',
  url: SITE_URL,
  email: 'info@myctechnologies.com',
  telephone: ['+447514679634', '+447503577956'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
  areaServed: { '@type': 'City', name: 'London' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      'Computer Repair','Website Design','Cybersecurity Assessments',
      'Desktop Customisation','Virus and Malware Removal',
      'Data Backup','Data Recovery','Hardware Checks','Security Policy Development',
    ].map(name => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
