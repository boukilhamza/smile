import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const locales = ['fr', 'en', 'ar']

type Props = {
  params: { locale: string }
  children: React.ReactNode
}

// SEO Metadata per locale
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params

  if (!locales.includes(locale)) {
    notFound()
  }

  const baseUrl = 'https://smileandgreet.ma'

  // French metadata
  if (locale === 'fr') {
    return {
      title: 'Smile & Greet - N°1 Agence Hôtesses Accueil Maroc | Événements & Salons',
      description: '🏆 Agence #1 d\'hôtesses d\'accueil au Maroc. +500 événements réussis. Service premium 24/7 pour salons, congrès, événements corporate. Devis gratuit en 24h.',
      keywords: 'agence hôtesses Maroc, hôtesse accueil Casablanca, hôte événementiel Marrakech, animation salon professionnel, accueil VIP Rabat, hôtesses congrès, événementiel premium Maroc, hôtesses bilingues, accueil entreprise, animation commerciale',
      authors: [{ name: 'Smile & Greet' }],
      creator: 'Smile & Greet',
      publisher: 'Smile & Greet',
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/fr`,
        languages: {
          'fr': `${baseUrl}/fr`,
          'en': `${baseUrl}/en`,
          'ar': `${baseUrl}/ar`,
          'x-default': `${baseUrl}/fr`,
        },
      },
      openGraph: {
        title: 'Smile & Greet - Leader Hôtesses Accueil Maroc | Devis Gratuit',
        description: '✨ Leader des services d\'hôtesses au Maroc. Équipe certifiée, multilingue. Spécialistes salons, congrès, lancements produits. 98% clients satisfaits.',
        url: `${baseUrl}/fr`,
        siteName: 'Smile & Greet',
        locale: 'fr_FR',
        type: 'website',
        images: [
          {
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Smile & Greet - Agence Hôtesses Premium Maroc',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Smile & Greet - Top Agence Hôtesses Maroc',
        description: '🔝 Agence hôtesses premium au Maroc. Service 24/7, équipe expérimentée, devis gratuit.',
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
  }

  // English metadata
  if (locale === 'en') {
    return {
      title: 'Smile & Greet - Top Hostess Agency Morocco | Event Hostesses Casablanca Marrakech Rabat',
      description: '🏆 #1 Hostess Agency in Morocco. Professional event hostesses, trade show staff, VIP reception services. 500+ successful events. 24/7 premium service in Casablanca, Marrakech, Rabat.',
      keywords: 'hostess agency morocco, event hostesses morocco, hostess agency casablanca, hostess agency marrakech, trade show hostesses morocco, event staff morocco, VIP hostesses morocco, professional hostesses casablanca, event hostess services morocco, bilingual hostesses morocco, corporate event staff morocco, exhibition hostesses morocco',
      authors: [{ name: 'Smile & Greet' }],
      creator: 'Smile & Greet',
      publisher: 'Smile & Greet',
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/en`,
        languages: {
          'fr': `${baseUrl}/fr`,
          'en': `${baseUrl}/en`,
          'ar': `${baseUrl}/ar`,
          'x-default': `${baseUrl}/fr`,
        },
      },
      openGraph: {
        title: 'Smile & Greet - Premier Hostess Agency Morocco | Professional Event Staff',
        description: '✨ Leading hostess agency in Morocco. Certified multilingual team. Specialists in trade shows, corporate events, product launches. 98% client satisfaction.',
        url: `${baseUrl}/en`,
        siteName: 'Smile & Greet - Hostess Agency Morocco',
        locale: 'en_US',
        type: 'website',
        images: [
          {
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Smile & Greet - Top Hostess Agency in Morocco',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Smile & Greet - Top Hostess Agency Morocco',
        description: '🔝 Premium hostess agency in Morocco. 24/7 service, experienced team. Casablanca, Marrakech, Rabat.',
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
  }

  // Arabic metadata
  return {
    title: 'Smile & Greet - وكالة مضيفات رقم 1 في المغرب | فعاليات و معارض',
    description: '🏆 وكالة #1 لخدمات المضيفات في المغرب. +500 حدث ناجح. خدمة متميزة 24/7 للمعارض والمؤتمرات والفعاليات.',
    keywords: 'وكالة مضيفات المغرب, مضيفات الدار البيضاء, مضيفات مراكش, خدمات الفعاليات المغرب',
    authors: [{ name: 'Smile & Greet' }],
    creator: 'Smile & Greet',
    publisher: 'Smile & Greet',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/ar`,
      languages: {
        'fr': `${baseUrl}/fr`,
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
        'x-default': `${baseUrl}/fr`,
      },
    },
    openGraph: {
      title: 'Smile & Greet - وكالة مضيفات رائدة في المغرب',
      description: '✨ وكالة مضيفات رائدة في المغرب. فريق محترف متعدد اللغات. متخصصون في المعارض والفعاليات الرسمية.',
      url: `${baseUrl}/ar`,
      siteName: 'Smile & Greet',
      locale: 'ar_MA',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Smile & Greet - وكالة مضيفات المغرب',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Smile & Greet - وكالة مضيفات متميزة',
      description: '🔝 وكالة مضيفات متميزة في المغرب. خدمة 24/7.',
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
}

// JSON-LD data per locale
function getJsonLd(locale: string) {
  const baseUrl = 'https://smileandgreet.ma'

  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    priceRange: '$$$',
    foundingDate: '2020',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247'
    },
    areaServed: [
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'City', name: 'Rabat' },
      { '@type': 'City', name: 'Marrakech' },
      { '@type': 'City', name: 'Tanger' },
      { '@type': 'City', name: 'Agadir' },
      { '@type': 'City', name: 'Fès' }
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
  }

  if (locale === 'fr') {
    return {
      ...baseJsonLd,
      name: 'Smile & Greet - Agence Hôtesses Premium',
      alternateName: 'Smile & Greet',
      slogan: 'Votre sourire, Notre expertise',
      description: 'Leader des services d\'hôtesses d\'accueil au Maroc. Spécialistes événementiel, salons professionnels et accueil corporate.',
      inLanguage: 'fr',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services Hôtesses & Accueil',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Hôtesses Accueil & Réception',
              description: 'Service d\'accueil professionnel pour événements au Maroc'
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
  }

  if (locale === 'en') {
    return {
      ...baseJsonLd,
      name: 'Smile & Greet - Premier Hostess Agency Morocco',
      alternateName: 'Smile & Greet Hostess Agency',
      slogan: 'Your smile, Our expertise',
      description: 'Leading hostess agency in Morocco. Professional event hostesses, trade show staff, VIP reception services. Specialists in corporate events, exhibitions and product launches.',
      inLanguage: 'en',
      knowsAbout: ['Event Hosting', 'Trade Show Services', 'VIP Reception', 'Corporate Events', 'Exhibition Services', 'Bilingual Staff'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Hostess & Event Services Morocco',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Event Hostesses & Reception Services',
              description: 'Professional hostess services for corporate events, trade shows, and exhibitions in Morocco. Bilingual staff available in Casablanca, Marrakech, Rabat.',
              serviceType: 'Event Hosting',
              areaServed: 'Morocco'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Trade Show & Exhibition Staff',
              description: 'Experienced trade show hostesses and exhibition staff for professional events across Morocco.',
              serviceType: 'Exhibition Services',
              areaServed: 'Morocco'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'VIP Reception & Corporate Events',
              description: 'Premium VIP reception services and corporate event staff in Morocco.',
              serviceType: 'VIP Services',
              areaServed: 'Morocco'
            }
          }
        ]
      }
    }
  }

  // Arabic
  return {
    ...baseJsonLd,
    name: 'Smile & Greet - وكالة مضيفات متميزة',
    alternateName: 'Smile & Greet',
    slogan: 'ابتسامتك، خبرتنا',
    description: 'وكالة رائدة لخدمات المضيفات في المغرب. متخصصون في الفعاليات والمعارض المهنية.',
    inLanguage: 'ar',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات المضيفات والفعاليات',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'مضيفات الاستقبال',
            description: 'خدمات استقبال احترافية للفعاليات في المغرب'
          }
        }
      ]
    }
  }
}

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = params

  if (!locales.includes(locale)) {
    notFound()
  }

  const jsonLd = getJsonLd(locale)
  const lang = locale === 'ar' ? 'ar' : locale

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}