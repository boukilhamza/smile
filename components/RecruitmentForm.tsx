'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Upload, User, Mail, MessageSquare, FileText, X, Camera } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function RecruitmentForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [selectedCVFile, setSelectedCVFile] = useState<File | null>(null)
  const [selectedPhotoFile, setSelectedPhotoFile] = useState<File | null>(null)
  const cvFileInputRef = useRef<HTMLInputElement>(null)
  const photoFileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCVFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const fileType = file.type
      const validTypes = ['application/pdf']
      const maxSize = 5 * 1024 * 1024 // 5MB en bytes
      
      if (!validTypes.includes(fileType)) {
        alert('Veuillez sélectionner un fichier PDF uniquement. Les fichiers Word ne sont pas acceptés.')
        e.target.value = ''
        return
      }
      
      if (file.size > maxSize) {
        alert('Le fichier CV est trop volumineux. Taille maximale autorisée : 5MB')
        e.target.value = ''
        return
      }
      
      setSelectedCVFile(file)
    }
  }

  const handlePhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const fileType = file.type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png']
      const maxSize = 10 * 1024 * 1024 // 10MB en bytes
      
      if (!validTypes.includes(fileType)) {
        alert('Veuillez sélectionner une photo au format JPG ou PNG uniquement.')
        e.target.value = ''
        return
      }
      
      if (file.size > maxSize) {
        alert('La photo est trop volumineuse. Taille maximale autorisée : 10MB')
        e.target.value = ''
        return
      }
      
      setSelectedPhotoFile(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation des fichiers obligatoires
    if (!selectedCVFile) {
      alert('Veuillez joindre votre CV en format PDF.')
      return
    }
    
    if (!selectedPhotoFile) {
      alert('Veuillez joindre votre photo professionnelle.')
      return
    }
    
    // Validation de la taille totale pour l'envoi par email
    const totalSize = selectedCVFile.size + selectedPhotoFile.size
    const maxTotalSize = 20 * 1024 * 1024 // 20MB total
    
    if (totalSize > maxTotalSize) {
      const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(1)
      alert(`La taille totale des fichiers (${totalSizeMB}MB) dépasse la limite de 20MB pour l'envoi par email. Veuillez réduire la taille de vos fichiers.`)
      return
    }
    
    // Construct email body
    const emailBody = `
Candidature de: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Objet: ${formData.subject}

Message:
${formData.message}

${selectedCVFile ? `CV: ${selectedCVFile.name} (${(selectedCVFile.size / (1024 * 1024)).toFixed(1)}MB)` : ''}
${selectedPhotoFile ? `Photo professionnelle: ${selectedPhotoFile.name} (${(selectedPhotoFile.size / (1024 * 1024)).toFixed(1)}MB)` : ''}

Taille totale: ${(totalSize / (1024 * 1024)).toFixed(1)}MB

Note: Veuillez demander au candidat d'envoyer le CV et la photo séparément car ils ne peuvent pas être automatiquement attachés via mailto.
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:${t.common.email}?subject=Candidature - ${formData.subject}&body=${encodeURIComponent(emailBody)}`
    
    // Open email client
    window.location.href = mailtoLink
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full text-sm font-medium shadow-md mb-6">
              <Send className="w-4 h-4 mr-2" />
              {t.recruitment.form.title}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.recruitment.form.subtitle}
            </h2>
            <p className="text-lg text-gray-600">
              {t.recruitment.form.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Prénom */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  {t.recruitment.form.firstName} *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent transition-all duration-300"
                  placeholder={t.recruitment.form.firstName}
                />
              </div>

              {/* Nom */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  {t.recruitment.form.lastName} *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent transition-all duration-300"
                  placeholder={t.recruitment.form.lastName}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent transition-all duration-300"
                placeholder="email@example.com"
              />
            </div>

            {/* Objet */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                {t.recruitment.form.subject} *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent transition-all duration-300"
                placeholder={t.recruitment.form.subject}
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                {t.recruitment.form.message} *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent transition-all duration-300 resize-none"
                placeholder={t.recruitment.form.message}
              />
            </div>

            {/* CV Upload */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                <Upload className="w-4 h-4 inline mr-2" />
                {t.recruitment.form.uploadCV} *
              </label>
              <div className="relative">
                <input
                  ref={cvFileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleCVFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => cvFileInputRef.current?.click()}
                  className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-700 transition-colors duration-300 text-gray-600 hover:text-primary-700"
                >
                  {selectedCVFile ? (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        {selectedCVFile.name}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedCVFile(null)
                          if (cvFileInputRef.current) cvFileInputRef.current.value = ''
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Upload className="w-5 h-5" />
                      {t.recruitment.form.uploadCV}
                    </span>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {t.recruitment.form.uploadCVNote}
              </p>
            </div>

            {/* Photo Upload */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">
                <Camera className="w-4 h-4 inline mr-2" />
                {t.recruitment.form.uploadPhoto} *
              </label>
              <div className="relative">
                <input
                  ref={photoFileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handlePhotoFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => photoFileInputRef.current?.click()}
                  className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-700 transition-colors duration-300 text-gray-600 hover:text-primary-700"
                >
                  {selectedPhotoFile ? (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        {selectedPhotoFile.name}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedPhotoFile(null)
                          if (photoFileInputRef.current) photoFileInputRef.current.value = ''
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Camera className="w-5 h-5" />
                      {t.recruitment.form.uploadPhoto}
                    </span>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {t.recruitment.form.uploadPhotoNote}
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-primary-700 to-primary-900 text-white py-4 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {t.recruitment.form.submit}
            </motion.button>

            <p className="text-sm text-gray-500 text-center mt-4">
              * {t.common.required}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}