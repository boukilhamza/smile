'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useState, useRef } from 'react'

const PartnersCarousel = () => {
  const { t } = useLanguage()
  const [counts, setCounts] = useState({ clients: 0, events: 0, sectors: 0, retention: 0 });
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const animateValue = (key: string, endValue: number, delay: number) => {
        setTimeout(() => {
          let current = 0;
          const increment = endValue / 50;
          const interval = setInterval(() => {
            current += increment;
            if (current >= endValue) {
              setCounts(prev => ({ ...prev, [key]: endValue }));
              clearInterval(interval);
            } else {
              setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
            }
          }, 30);
        }, delay);
      };

      animateValue('clients', 100, 0);
      animateValue('events', 500, 300);
      animateValue('sectors', 15, 600);
      animateValue('retention', 98, 900);
    }
  }, [isInView]);

  const partners = [
    {
      name: 'Chambre des Pêches Maritimes',
      logo: '/images/partners/Chambre-des-Peches-Maritimes-Atlantique-Centre-Agadir (1).jpg'
    },
    {
      name: 'Marrakech du Rire',
      logo: '/images/partners/Marrakech_du_rire_-_logo.jpg'
    },
    {
      name: 'Partenaire 1',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.01.15.jpeg'
    },
    {
      name: 'Partenaire 2',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.01.16 (1).jpeg'
    },
    {
      name: 'Partenaire 3',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.01.16 (2).jpeg'
    },
    {
      name: 'Partenaire 4',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.01.16.jpeg'
    },
    {
      name: 'Partenaire 5',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.01.17 (1).jpeg'
    },
    {
      name: 'Partenaire 6',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.01.17 (2).jpeg'
    },
    {
      name: 'Partenaire 7',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.01.17 (3).jpeg'
    },
    {
      name: 'Partenaire 8',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.01.17.jpeg'
    },
    {
      name: 'Partenaire 9',
      logo: '/images/partners/WhatsApp Image 2025-11-09 at 20.06.37.jpeg'
    },
    {
      name: 'Environmental Defense Fund',
      logo: '/images/partners/environmental-defense-fund248.logowik.com.jpg'
    },
    {
      name: 'GIZ',
      logo: '/images/partners/gizlogo-unternehmen-de-rgb-300.jpg'
    },
    {
      name: 'Partenaire 10',
      logo: '/images/partners/th.jpg'
    },
    {
      name: 'Partenaire 11',
      logo: '/images/partners/unnamed.png'
    }
  ]


  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full text-sm font-medium shadow-md mb-6">
            {t.partners.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.partners.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.partners.description}
          </p>
        </motion.div>

        {/* Défilement automatique des logos */}
        <div className="relative mb-16">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: [0, -100 * partners.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Premier set de logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 h-24 md:w-48 md:h-32 relative bg-white rounded-lg shadow-sm p-4 flex items-center justify-center"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 p-2"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              ))}
              {/* Dupliquer les logos pour un défilement infini */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 h-24 md:w-48 md:h-32 relative bg-white rounded-lg shadow-sm p-4 flex items-center justify-center"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 p-2"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-800 mb-2">
              {counts.clients}+
            </div>
            <div className="text-sm text-gray-600">{t.partners.stats.clients}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-800 mb-2">
              {counts.events}+
            </div>
            <div className="text-sm text-gray-600">{t.partners.stats.events}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-800 mb-2">
              {counts.sectors}+
            </div>
            <div className="text-sm text-gray-600">{t.partners.stats.sectors}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-800 mb-2">
              {counts.retention}%
            </div>
            <div className="text-sm text-gray-600">{t.partners.stats.retention}</div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
              "{t.partners.testimonial}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-900 font-bold">M.B</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Mohammed Benali</div>
                <div className="text-sm text-gray-600">Directeur Événementiel</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersCarousel
