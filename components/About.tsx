'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Users, Award, Search } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import ImageModal from './ImageModal'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage();
  const [modalImage, setModalImage] = useState<string | null>(null)
  
  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc)
  }
  
  const closeModal = () => {
    setModalImage(null)
  }

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous mettons notre cœur dans chaque mission pour créer des expériences authentiques.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Notre engagement vers la perfection dans chaque détail de nos prestations.'
    },
    {
      icon: Users,
      title: 'Équipe',
      description: 'Des professionnels sélectionnés et formés selon nos standards de qualité.'
    },
    {
      icon: Award,
      title: 'Reconnaissance',
      description: 'La confiance de nos clients témoigne de notre expertise reconnue.'
    }
  ]

  return (
    <>
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full text-sm font-medium shadow-md mb-6"
              >
                Qui sommes-nous
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Qui sommes-nous ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                <strong>Smile & Greet</strong> est une agence spécialisée dans les services d'accueil 
                et d'animation événementielle au Maroc. Depuis notre création, nous nous engageons 
                à transformer chaque événement en une expérience mémorable grâce à notre équipe 
                de professionnels passionnés.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Notre mission est de créer des moments d'exception en alliant professionnalisme, 
                élégance et authenticité marocaine. Nous croyons que chaque sourire compte et 
                que chaque interaction peut faire la différence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-primary-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image */}
                <div 
                  className="col-span-2 aspect-[16/10] rounded-2xl overflow-hidden relative cursor-pointer group"
                  onClick={() => openModal('/images/hotesses/image00002.jpeg')}
                >
                  <Image 
                    src="/images/hotesses/image00002.jpeg"
                    alt={t.about.teamTitle}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {/* Magnifying glass icon removed as requested */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">Notre équipe</p>
                  </div>
                </div>

                {/* Small Images */}
                <div 
                  className="aspect-square rounded-xl overflow-hidden relative cursor-pointer group"
                  onClick={() => openModal('/images/hotesses/image00003.jpeg')}
                >
                  <Image 
                    src="/images/hotesses/image00003.jpeg"
                    alt={t.about.hostessRole}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Magnifying glass icon removed as requested */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors opacity-0 group-hover:opacity-100"></div>
                </div>
                <div 
                  className="aspect-square rounded-xl overflow-hidden relative cursor-pointer group"
                  onClick={() => openModal('/images/hotesses/image00004.jpeg')}
                >
                  <Image 
                    src="/images/hotesses/image00004.jpeg"
                    alt="Hôtesse d'accueil"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Magnifying glass icon removed as requested */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>

              {/* Floating Stats removed as requested */}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      <ImageModal 
        isOpen={!!modalImage}
        onClose={closeModal}
        imageSrc={modalImage || ''}
        alt="Hôtesse d'accueil"
      />
    </>
  )
}

export default About
