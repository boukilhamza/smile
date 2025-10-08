'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const WhyUs = () => {
  const { t } = useLanguage()
  const reasons = [
    {
      image: '/images/whyus/1.jpg',
      title: t.whyUs.reasons.experts.title,
      description: t.whyUs.reasons.experts.description,
      color: 'from-blue-500 to-blue-600'
    },
    {
      image: '/images/whyus/2.jpg',
      title: t.whyUs.reasons.reactivity.title,
      description: t.whyUs.reasons.reactivity.description,
      color: 'from-purple-500 to-purple-600'
    },
    {
      image: '/images/whyus/3.jpg',
      title: t.whyUs.reasons.courtesy.title,
      description: t.whyUs.reasons.courtesy.description,
      color: 'from-green-500 to-green-600'
    },
    {
      image: '/images/whyus/4.jpg',
      title: t.whyUs.reasons.adaptability.title,
      description: t.whyUs.reasons.adaptability.description,
      color: 'from-red-500 to-red-600'
    },
    {
      image: '/images/whyus/5.jpg',
      title: t.whyUs.reasons.elegance.title,
      description: t.whyUs.reasons.elegance.description,
      color: 'from-primary-700 to-primary-900'
    },
    {
      image: '/images/whyus/6.jpg',
      title: t.whyUs.reasons.commitment.title,
      description: t.whyUs.reasons.commitment.description,
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full text-sm font-medium shadow-md mb-6">
            {t.whyUs.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.whyUs.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.whyUs.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${reason.color} opacity-80`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{reason.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-800 rounded-2xl p-8 md:p-12 shadow-xl text-white">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              {t.whyUs.cta.title}
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.whyUs.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
                {t.common.quoteButton}
              </a>
              <a href="tel:+212707776819" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
                {t.common.callButton}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs
