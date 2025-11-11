'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSelectorNew from './LanguageSelectorNew'

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: t.home.title, href: '/' },
    { name: t.services.title, href: '/services' },
    { name: t.common.joinButton, href: '/recrutement' },
  ]

  return (
    <>
      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <nav className="container-custom">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                <Image 
                  src="/images/logo.jpg" 
                  alt="Logo" 
                  width={50} 
                  height={50}
                  className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
                />
                <span className="text-lg font-bold" style={{ color: '#4a0e03' }}>
                  Smile & Greet
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
              {navigation.map((item) => (
                item.href === '/' || item.href.startsWith('/') && !item.href.includes('#') ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-900 font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-900 font-medium transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>

            {/* CTA Button and Language Selector */}
            <div className="hidden lg:flex items-center space-x-3">
              <LanguageSelectorNew />
              <a
                href="/#contact"
                className="btn-primary"
              >
                {t.common.quoteButton}
              </a>
            </div>

            {/* Mobile language selector and menu button */}
            <div className="lg:hidden ml-auto flex items-center space-x-3">
              <LanguageSelectorNew />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-900 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {navigation.map((item) => (
                  item.href === '/' || item.href.startsWith('/') && !item.href.includes('#') ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-primary-900 font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-primary-900 font-medium transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <a
                  href="/#contact"
                  className="btn-primary inline-block text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.common.quoteButton}
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header
