'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage();
  const images = [
    '/images/hero/1.jpeg',
    '/images/hero/2.jpeg',
    '/images/hero/3.jpeg',
    '/images/hero/4.jpeg'
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images without fade */}
      <div className="absolute inset-0 z-0">
        <Image 
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Hôtesses d'accueil professionnelles au Maroc"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={95}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            >
              <span dangerouslySetInnerHTML={{ __html: t.hero.title.replace(', ', ',<br />') }} />
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 font-light mb-8 max-w-2xl mx-auto"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold shadow-lg border border-white/30"
              >
                <Star className="w-5 h-5 mr-2 text-primary-700" />
                {t.hero.stats.agency}
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold shadow-lg border border-white/30"
              >
                <Award className="w-5 h-5 mr-2 text-primary-700" />
                {t.hero.stats.certified}
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold shadow-lg border border-white/30"
              >
                <Users className="w-5 h-5 mr-2 text-primary-700" />
                {t.hero.stats.events}
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                href="#contact"
                className="relative inline-flex items-center justify-center group px-8 py-4 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-700 to-primary-800 rounded-full" />
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-800 to-primary-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center text-white font-bold text-lg">
                  {t.common.quoteButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="/recrutement"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.common.joinButton}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
