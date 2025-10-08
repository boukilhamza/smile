'use client'

import { motion } from 'framer-motion'
import { Check, MapPin, Briefcase } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Image from 'next/image'
import RecruitmentForm from '@/components/RecruitmentForm'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Recrutement() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t.recruitment.hero.title}
          </h2>
        </div>
      </section>

      {/* Contenu Principal Condensé */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Colonne Gauche - Ce que nous recherchons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.recruitment.whatWeLookFor.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {t.recruitment.hero.subtitle}
              </p>
              <ul className="space-y-3">
                {Object.values(t.recruitment.whatWeLookFor.qualities).map((quality, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-800 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{quality}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Colonne Droite - Ce que nous offrons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.recruitment.whatWeOffer.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {t.recruitment.hero.subtitle}
              </p>
              <ul className="space-y-3">
                {Object.values(t.recruitment.whatWeOffer.benefits).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA Simple avant formulaire */}
      <section className="py-8 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t.recruitment.cta.title}
          </h2>
        </div>
      </section>

      {/* Recruitment Form */}
      <div id="postuler">
        <RecruitmentForm />
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}