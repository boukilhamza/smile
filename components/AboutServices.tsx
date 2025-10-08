'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Mic, Calendar, Heart, Target, Award, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const AboutServices = () => {
  const [selectedService, setSelectedService] = useState(0)
  const { t } = useLanguage()
  
  const services = [
    {
      icon: Users,
      title: t.aboutServices.services.reception.title,
      description: t.aboutServices.services.reception.description,
      image: '/images/special.jpeg',
      features: t.aboutServices.services.reception.features
    },
    {
      icon: Mic,
      title: t.aboutServices.services.animation.title,
      description: t.aboutServices.services.animation.description,
      image: '/images/animation.jpeg',
      features: t.aboutServices.services.animation.features
    },
    {
      icon: Calendar,
      title: t.aboutServices.services.special.title,
      description: t.aboutServices.services.special.description,
      image: '/images/accueil.jpeg',
      features: t.aboutServices.services.special.features
    }
  ]

  const values = [
    { icon: Heart, label: t.aboutServices.values.passion, color: 'from-red-500 to-red-600' },
    { icon: Target, label: t.aboutServices.values.excellence, color: 'from-blue-500 to-blue-600' },
    { icon: Award, label: t.aboutServices.values.recognition, color: 'from-primary-700 to-primary-900' }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full text-sm font-medium shadow-md mb-6">
            {t.aboutServices.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.aboutServices.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.aboutServices.description}
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-800">{value.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid with Interactive Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {t.aboutServices.servicesTitle}
            </h3>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(index)}
                className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedService === index 
                    ? 'shadow-2xl scale-105 border-2 border-primary-700' 
                    : 'shadow-lg hover:shadow-xl hover:scale-102'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${
                    selectedService === index 
                      ? 'from-primary-700 to-primary-900' 
                      : 'from-gray-400 to-gray-500'
                  } rounded-xl flex items-center justify-center flex-shrink-0 transition-colors`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    
                    {/* Features list - only show for selected service */}
                    <AnimatePresence>
                      {selectedService === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2 mt-4 pt-4 border-t border-gray-100"
                        >
                          {service.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center text-sm text-gray-700"
                            >
                              <ChevronRight className="w-4 h-4 text-primary-700 mr-2" />
                              {feature}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Image - Mobile first order */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full order-first lg:order-last"
          >
            <div className="relative h-[300px] lg:h-full rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={services[selectedService].image}
                    alt={services[selectedService].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Overlay with service title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {services[selectedService].title}
                    </motion.h4>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/90 text-lg"
                    >
                      {t.aboutServices.servicesSubtitle}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Service indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedService(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedService === index 
                      ? 'w-8 bg-primary-700' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mt-16"
        >
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-primary-700 to-primary-900 hover:from-primary-800 hover:to-primary-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.common.quoteButton}
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
          <Link 
            href="/services" 
            className="bg-white border-2 border-primary-700 text-primary-800 hover:bg-primary-50 font-bold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.aboutServices.viewServices}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
      
        </motion.div>
      </div>
    </section>
  )
}

export default AboutServices