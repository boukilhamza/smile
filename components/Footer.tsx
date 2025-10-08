'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com/smileandgreet',
      name: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/smileandgreet',
      name: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/smileandgreet',
      name: 'LinkedIn'
    }
  ]

  return (
    <footer className="bg-primary-900">
      <div className="container-custom py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo and Company Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="p-2 rounded-full" style={{ backgroundColor: '#e7e6b8' }}>
              <Image 
                src="/images/logo.jpg" 
                alt="Logo" 
                width={50} 
                height={50}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ color: '#e7e6b8' }}>
                Smile & Greet
              </h3>
              <p className="text-sm" style={{ color: '#e7e6b8' }}>
                Agence des Hôtesses d'accueil au Maroc
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 text-sm"
            style={{ color: '#e7e6b8' }}
          >
            <a href="tel:+212707776819" className="flex items-center hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4 mr-1" />
              +212 707-776819
            </a>
            <a href="mailto:Contact@smileandgreet.com" className="flex items-center hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4 mr-1" />
              Contact@smileandgreet.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-9 h-9 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-4 h-4" style={{ color: '#e7e6b8' }} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 pt-4 border-t border-primary-800 text-center"
        >
          <p className="text-xs" style={{ color: '#e7e6b8' }}>
            © {currentYear} Agence des Hôtesses d'accueil au Maroc. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer