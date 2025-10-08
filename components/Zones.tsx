'use client'

import { motion } from 'framer-motion'
import MapMaroc from './MapMaroc'
import { useLanguage } from '@/contexts/LanguageContext'

const Zones = () => {
  const { t } = useLanguage()

  return (
    <section id="zones" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full text-sm font-medium shadow-md mb-6">
            {t.zones.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              {t.zones.subtitle}
              <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-primary-700 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.zones.description}
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <MapMaroc />
        </motion.div>

      </div>
    </section>
  )
}

export default Zones
