'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { useLanguage } from '@/contexts/LanguageContext'

const ContactNew = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message in natural language
    const whatsappMessage = t.whatsapp.defaultMessage

    // WhatsApp API URL
    const whatsappNumber = "212707776819" // Replace with actual number
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full text-sm font-medium shadow-md mb-6">
            {t.contactNew.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contactNew.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-900"> {t.contactNew.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contactNew.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleWhatsAppSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contactNew.form.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contactNew.form.fullName} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-700 focus:outline-none"
                    placeholder={t.contactNew.form.fullName}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contactNew.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-700 focus:outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contactNew.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-700 focus:outline-none"
                    placeholder="+212 707-776819"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contactNew.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-700 focus:outline-none"
                    placeholder={t.contactNew.form.company}
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contactNew.form.eventType}
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-700 focus:outline-none"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="un salon professionnel">{t.contactNew.form.eventTypes.fair}</option>
                    <option value="un congrès">{t.contactNew.form.eventTypes.congress}</option>
                    <option value="un événement corporate">{t.contactNew.form.eventTypes.corporate}</option>
                    <option value="un gala">{t.contactNew.form.eventTypes.gala}</option>
                    <option value="un lancement de produit">{t.contactNew.form.eventTypes.launch}</option>
                    <option value="un autre type d'événement">{t.contactNew.form.eventTypes.other}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contactNew.form.details}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-700 focus:outline-none resize-none"
                    placeholder={t.contactNew.form.details}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  {t.contactNew.cta.whatsapp}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contactNew.contactInfo.title}
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="https://maps.google.com/maps?q=RUE+MOUHAMED+V,+QU+TRAB+SINI.+SAFI,Maroc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-900 transition-colors">
                    <MapPin className="w-6 h-6 text-primary-800 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600 group-hover:text-primary-900">
                      RUE MOUHAMED V, QU TRAB SINI.<br />
                      SAFI, Maroc
                    </p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/212707776819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                    <WhatsAppIcon className="w-6 h-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contactNew.whatsappLabel}</h4>
                    <p className="text-gray-600 group-hover:text-primary-900">
                      +212 707-776819
                    </p>
                  </div>
                </a>

                <a 
                  href="mailto:Contact@smileandgreet.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-900 transition-colors">
                    <Mail className="w-6 h-6 text-primary-800 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contactNew.form.email}</h4>
                    <p className="text-primary-800 group-hover:text-primary-900">
                      Contact@smileandgreet.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.095!2d-7.6319!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNyc1NC44Ilc!5e0!3m2!1sfr!2sma!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Smile & Greet"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactNew