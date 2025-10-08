'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
    </svg>
  )

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.form.phone,
      details: [t.common.phone],
      action: 'tel:+212707776819'
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      details: ['+212 707-776819'],
      action: 'https://wa.me/212707776819'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [t.common.email],
      action: 'mailto:Contact@smileandgreet.com'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['RUE MOUHAMED V, QU TRAB SINI.', 'SAFI, Maroc'],
      action: 'https://maps.google.com/search/?api=1&query=RUE+MOUHAMED+V,+QU+TRAB+SINI.+SAFI,+Maroc'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-400"></div>
      
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
            {t.contact.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            <span className="gradient-text-animated">{t.contact.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="premium-card p-8 border-2 border-primary-200 overflow-hidden relative cta-glow">
              {/* Premium decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full opacity-20 animate-pulse animation-delay-400"></div>
              
              <div className="relative">
                <h3 className="text-3xl font-black text-gray-900 mb-2">
                  <span className="text-gradient">{t.contact.form.title}</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Réponse personnalisée en moins de 24h - Garanti
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-800 transition-colors">
                        {t.contact.form.fullName} *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="premium-input"
                          placeholder={t.contact.form.fullName}
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-800 transition-colors">
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="premium-input"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-800 transition-colors">
                        {t.contact.form.phone}
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="premium-input"
                          placeholder={t.common.phone}
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-800 transition-colors">
                        {t.contact.form.company}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="premium-input"
                          placeholder={t.contact.form.company}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-800 transition-colors">
                      {t.contact.form.eventType}
                    </label>
                    <div className="relative">
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="premium-input appearance-none"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="congress">{t.contact.form.eventTypes.congress}</option>
                        <option value="fair">{t.contact.form.eventTypes.fair}</option>
                        <option value="inauguration">{t.contact.form.eventTypes.inauguration}</option>
                        <option value="launch">{t.contact.form.eventTypes.launch}</option>
                        <option value="gala">{t.contact.form.eventTypes.gala}</option>
                        <option value="animation">{t.contact.form.eventTypes.animation}</option>
                        <option value="roadshow">{t.contact.form.eventTypes.roadshow}</option>
                        <option value="other">{t.contact.form.eventTypes.other}</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-800 transition-colors">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="premium-input resize-none"
                        placeholder={t.contact.form.details}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-cta flex items-center justify-center py-5 text-lg font-bold shadow-2xl"
                  >
                    <Send className="w-5 h-5 mr-2 animate-pulse" />
                    {t.contact.form.submit}
                  </button>
                  
                  {/* Trust indicators */}
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t.contact.guarantee.secure}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t.contact.guarantee.noCommitment}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-blue-500" />
                      {t.contact.guarantee.quickResponse}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={info.action}
                    className="block premium-card p-6 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:from-primary-800 group-hover:to-primary-900 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        <info.icon className="w-6 h-6 text-primary-800 group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Urgency banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6"
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
                <h4 className="font-bold text-gray-900">{t.contact.offer.title}</h4>
              </div>
              <p className="text-gray-700 mb-4">
                <strong className="text-red-600">{t.contact.offer.discount}</strong> {t.contact.offer.description}
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                Valable encore {new Date().getDate() <= 15 ? (30 - new Date().getDate()) : (30 - new Date().getDate())} jours
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-600 rounded-xl shadow-xl p-8 text-white"
            >
              <h4 className="text-2xl font-black mb-3 relative z-10">{t.contact.whatsapp.title}</h4>
              <p className="text-white/90 mb-6 text-base relative z-10">
                {t.contact.whatsapp.description}
              </p>
              <a
                href="https://wa.me/212707776819"
                className="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl relative z-10 group"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                </svg>
                {t.common.whatsappButton}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
