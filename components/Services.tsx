'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Megaphone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  // === Images locales (respecter la casse des noms !) ===
  const hostessesLocalImages = [
    'IMG_5248.jpg',
    'IMG_5274.jpg',
    'IMG_6319.jpg',
    'IMG_6320.jpg',
    'IMG_6321.jpg',
    'IMG_6322.jpg',
    'IMG_6323.jpg',
    'IMG_6325.jpg',
    'IMG_6326.jpg',
    'IMG_6621.jpg',
    'IMG_6815.JPG',
    'IMG_6820.JPG',
    'IMG_6832.JPG',
  ].map((f) => `/images/services/${f}`)

  const transfertLocalImages = [
    'IMG_7044.JPG',
    'IMG_7045.JPG',
    'IMG_7046.WEBP',
  ].map((f) => `/images/transfert/${f}`)

  // === Données ===
  const services = [
    {
      icon: Users,
      title: t.services.categories.eventHosting.title,
      color: 'from-blue-500 to-blue-600',
      items: t.services.categories.eventHosting.items
    },
    {
      icon: Megaphone,
      title: t.services.categories.mobility.title,
      color: 'from-purple-500 to-purple-600',
      items: t.services.categories.mobility.items
    },
  ]

  return (
      <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
              {t.services.title}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              {t.services.subtitle}
              <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-primary-700 rounded-full" />
            </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.description}
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-24">
            {services.map((service) => {
              const Icon = service.icon

              return (
                  <motion.div
                      key={service.title}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                  >
                    {/* Section Header */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                      <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.5, type: 'spring' }}
                          className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {service.items.map((item, itemIndex) => {
                        // Choix de l'image locale selon la section
                        const imageSrc =
                            service.title === t.services.categories.eventHosting.title
                                ? hostessesLocalImages[itemIndex % hostessesLocalImages.length]
                                : service.title === t.services.categories.mobility.title
                                    ? transfertLocalImages[itemIndex % transfertLocalImages.length]
                                    : (item as any).image

                        return (
                            <motion.div
                                key={`${service.title}-${item.name}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer h-full"
                            >
                              {/* Carte égale hauteur */}
                              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                                {/* Image (hauteur fixe) */}
                                <div className="relative h-48 overflow-hidden">
                                  <Image
                                      src={imageSrc}
                                      alt={item.name}
                                      fill
                                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                                      priority={itemIndex < 4}
                                  />
                                  {/* Overlay description : hauteur fixe + clamp 2 lignes */}
                                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p
                                        className="text-white text-sm font-medium line-clamp-2"
                                        style={{
                                          display: '-webkit-box',
                                          WebkitLineClamp: 2,
                                          WebkitBoxOrient: 'vertical',
                                          overflow: 'hidden',
                                          minHeight: '48px', // ~2 lignes en sm
                                        }}
                                    >
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Contenu (titre) : hauteur stable */}
                                <div className="p-4 mt-auto">
                                  <h4
                                      className="text-lg font-semibold text-gray-800 group-hover:text-primary-800 transition-colors line-clamp-2"
                                      style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        minHeight: '3.5rem', // ~2 lignes pour garder la même hauteur
                                      }}
                                  >
                                    {item.name}
                                  </h4>
                                </div>
                              </div>
                            </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t.services.cta.title}
              </h3>
              <a
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-bold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                {t.services.cta.button}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Services
