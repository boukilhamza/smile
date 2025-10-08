import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smile & Greet - N°1 Agence Hôtesses Accueil Maroc | Événements & Salons',
  description: '🏆 Agence #1 d\'hôtesses d\'accueil au Maroc. +500 événements réussis. Service premium 24/7 pour salons, congrès, événements corporate. Devis gratuit en 24h.',
  keywords: 'agence hôtesses Maroc, hôtesse accueil Casablanca, hôte événementiel Marrakech, animation salon professionnel, accueil VIP Rabat, hôtesses congrès, événementiel premium Maroc, hôtesses bilingues, accueil entreprise, animation commerciale',
  authors: [{ name: 'Smile & Greet' }],
  creator: 'Smile & Greet',
  publisher: 'Smile & Greet',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://smileandgreet.ma'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'Smile & Greet - Leader Hôtesses Accueil Maroc | Devis Gratuit',
    description: '✨ Leader des services d\'hôtesses au Maroc. Équipe certifiée, multilingue. Spécialistes salons, congrès, lancements produits. 98% clients satisfaits. Contactez-nous!',
    url: 'https://smileandgreet.ma',
    siteName: 'Smile & Greet',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smile & Greet - Agence d\'Hôtes et Hôtesses',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smile & Greet - Top Agence Hôtesses Maroc | Service Premium',
    description: '🔝 Agence hôtesses premium au Maroc. Service 24/7, équipe expérimentée, devis gratuit. Votre succès, notre expertise!',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Smile & Greet - Agence Hôtesses Premium',
  description: 'Leader des services d\'hôtesses d\'accueil au Maroc. Spécialistes événementiel, salons professionnels et accueil corporate.',
  url: 'https://smileandgreet.ma',
  logo: 'https://smileandgreet.ma/logo.png',
  image: 'https://smileandgreet.ma/og-image.jpg',
  priceRange: '€€€',
  servesCuisine: 'Event Services',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '247'
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Casablanca'
    },
    {
      '@type': 'City',
      name: 'Rabat'
    },
    {
      '@type': 'City',
      name: 'Marrakech'
    },
    {
      '@type': 'City',
      name: 'Tanger'
    },
    {
      '@type': 'City',
      name: 'Agadir'
    },
    {
      '@type': 'City',
      name: 'Fès'
    }
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+212-707-776819',
    contactType: 'customer service',
    availableLanguage: ['French', 'English', 'Arabic']
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA',
    addressLocality: 'Safi',
    addressRegion: 'Marrakech-Safi'
  },
  sameAs: [
    'https://www.facebook.com/smileandgreet',
    'https://www.instagram.com/smileandgreet',
    'https://www.linkedin.com/company/smileandgreet'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services Hôtesses & Accueil',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hôtesses Accueil & Réception',
          description: 'Service d\'accueil professionnel pour événements'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Animation Événementielle',
          description: 'Animation professionnelle pour dynamiser vos événements'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Événements Spéciaux',
          description: 'Services sur-mesure pour événements d\'exception'
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
