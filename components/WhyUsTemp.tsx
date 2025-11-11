'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Users, Award, Heart, Sparkles, TrendingUp, Star, Headphones } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WhyUsTemp() {
  const { t } = useLanguage()
  const reasons = [
    {
      icon: Shield,
      title: t.whyUsTemp.reasons[0].title,
      description: t.whyUsTemp.reasons[0].description,
      stats: t.whyUsTemp.reasons[0].title,
      color: 'from-blue-500 to-blue-600',
      image: '/images/whyus/1.jpg',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
    },
    {
      icon: Clock,
      title: t.whyUsTemp.reasons[1].title,
      description: t.whyUsTemp.reasons[1].description,
      stats: t.whyUsTemp.reasons[1].title,
      color: 'from-purple-500 to-purple-600',
      image: '/images/whyus/2.jpg',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)'
    },
    {
      icon: Heart,
      title: t.whyUsTemp.reasons[2].title,
      description: t.whyUsTemp.reasons[2].description,
      stats: t.whyUsTemp.reasons[2].title,
      color: 'from-green-500 to-green-600',
      image: '/images/whyus/3.jpg',
      bgPattern: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)'
    },
    {
      icon: Users,
      title: t.whyUsTemp.reasons[3].title,
      description: t.whyUsTemp.reasons[3].description,
      stats: t.whyUsTemp.reasons[3].title,
      color: 'from-red-500 to-red-600',
      image: '/images/whyus/4.jpg',
      bgPattern: 'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)'
    },
    {
      icon: Star,
      title: t.whyUsTemp.reasons[4].title,
      description: t.whyUsTemp.reasons[4].description,
      stats: t.whyUsTemp.reasons[4].title,
      color: 'from-primary-700 to-primary-900',
      image: '/images/whyus/5.jpg',
      bgPattern: 'radial-gradient(circle at 80% 80%, rgba(217, 119, 6, 0.15) 0%, transparent 50%)'
    },
    {
      icon: TrendingUp,
      title: t.whyUsTemp.reasons[5].title,
      description: t.whyUsTemp.reasons[5].description,
      stats: t.whyUsTemp.reasons[5].title,
      color: 'from-orange-500 to-orange-600',
      image: '/images/whyus/6.jpg',
      bgPattern: 'radial-gradient(circle at 50% 20%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)'
    }
  ]

  return (
    <section id="why-us" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full text-sm font-medium shadow-md mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4" />
            {t.whyUsTemp.badge}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.whyUsTemp.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-900"> {t.whyUsTemp.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.whyUs.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl h-full overflow-hidden relative transform transition-all duration-300 hover:shadow-2xl">
                  <div className="absolute inset-0 opacity-10" style={{ background: reason.bgPattern }} />
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  </div>
                  <div className="p-6 relative">
                    <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors mb-6">
                      {reason.description}
                    </p>
                    <motion.div 
                      className="flex items-center gap-3 border-t pt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center shadow-lg`}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                          {reason.title}
                        </h3>
                        <p className="text-sm text-gray-500">{reason.stats}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <TrendingUp className="w-16 h-16 mx-auto text-white/80" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                {t.whyUsTemp.cta.ready}
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                <strong>{t.whyUsTemp.stats.satisfaction.number} {t.whyUsTemp.stats.satisfaction.label}</strong>. 
                {t.whyUs.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="#contact" 
                  className="bg-white text-primary-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.common.quoteButton}
                </motion.a>
                <motion.a 
                  href="https://wa.me/212707776819" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center backdrop-blur-sm hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.common.callButton}
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
