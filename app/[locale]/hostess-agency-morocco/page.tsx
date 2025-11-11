import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { CheckCircle, Star, Users, Award, Clock, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Hostess Agency Morocco | Event Hostesses Casablanca, Marrakech, Rabat',
  description: 'Leading hostess agency in Morocco. Professional event hostesses, trade show staff, and VIP reception services. 500+ events across Casablanca, Marrakech, Rabat. Bilingual team available 24/7.',
  keywords: 'hostess agency morocco, event hostesses morocco, hostess agency casablanca, hostess agency marrakech, trade show hostesses morocco, event staff morocco, VIP hostesses morocco, professional hostesses casablanca, bilingual hostesses morocco, corporate event staff morocco, exhibition hostesses morocco',
  openGraph: {
    title: 'Premier Hostess Agency in Morocco | Smile & Greet',
    description: 'Professional event hostesses, trade show staff, and VIP reception services across Morocco. Serving Casablanca, Marrakech, Rabat with excellence.',
    url: 'https://smileandgreet.ma/en/hostess-agency-morocco',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does your hostess agency in Morocco offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smile & Greet offers comprehensive hostess services including event hostesses, trade show staff, VIP reception services, brand ambassadors, guest registration, and multilingual event staff across Morocco.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which cities in Morocco do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all major cities in Morocco including Casablanca, Marrakech, Rabat, Tangier, Agadir, Fes, and other locations nationwide with our professional hostess agency services.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are your event hostesses multilingual?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our hostesses are fluent in French, English, and Arabic. We also have staff speaking Spanish, Russian, and other languages upon request for international events.'
      }
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book event hostesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While we can accommodate last-minute requests, we recommend booking at least 2-3 weeks in advance for optimal team selection and preparation, especially for large corporate events or trade shows.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of events do you staff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide hostess services for corporate events, trade shows, exhibitions, product launches, conferences, galas, VIP receptions, brand activations, and all types of professional events in Morocco.'
      }
    }
  ]
}

export default function HostessAgencyMorocco() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premier Hostess Agency in Morocco
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Professional Event Hostesses & Trade Show Staff in Casablanca, Marrakech, Rabat
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">500+ Events</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">150+ Professional Hostesses</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">98% Satisfaction</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Get a Free Quote
                </a>
                <a
                  href="tel:+212707776819"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-900 transition-all"
                >
                  Call +212 707 776 819
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted Hostess Agency in Morocco
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Welcome to Smile & Greet, Morocco's leading <strong>hostess agency</strong> specializing in professional event staffing solutions. With over 7 years of excellence and more than 500 successful events, we are the premier choice for businesses seeking top-tier <strong>event hostesses in Morocco</strong>. Our team of certified, multilingual professionals delivers exceptional service across Casablanca, Marrakech, Rabat, and all major Moroccan cities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you're organizing a corporate event, trade show, product launch, or VIP reception, our <strong>hostess agency in Morocco</strong> provides tailored staffing solutions that elevate your brand image and ensure seamless event execution. Every member of our team embodies professionalism, elegance, and expertise—the perfect ambassadors for your brand.
                </p>
              </div>

              {/* Services Grid */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Comprehensive Hostess Services Across Morocco
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Trade Show Hostesses',
                      description: 'Professional trade show staff for exhibitions and fairs in Morocco. Expert in visitor engagement, product presentations, and lead generation.',
                      icon: Users
                    },
                    {
                      title: 'Corporate Event Hostesses',
                      description: 'Elegant hostesses for corporate events, conferences, and business gatherings. Perfect for maintaining your professional brand image.',
                      icon: Award
                    },
                    {
                      title: 'VIP Reception Services',
                      description: 'Premium reception services for high-profile events, galas, and exclusive functions. Discreet, sophisticated, and impeccably trained.',
                      icon: Star
                    },
                    {
                      title: 'Bilingual Event Staff',
                      description: 'Multilingual hostesses fluent in French, English, Arabic, and other languages. Perfect for international events and diverse audiences.',
                      icon: Globe
                    },
                    {
                      title: 'Brand Ambassadors',
                      description: 'Dynamic brand ambassadors for product launches, promotional campaigns, and marketing activations across Morocco.',
                      icon: CheckCircle
                    },
                    {
                      title: '24/7 Availability',
                      description: 'Round-the-clock service and support. Last-minute requests welcomed. We adapt to your schedule and requirements.',
                      icon: Clock
                    },
                  ].map((service, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow border border-gray-100">
                      <service.icon className="w-12 h-12 text-primary-700 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cities Section */}
              <div className="mb-16 bg-gradient-to-br from-primary-50 to-beige-50 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Hostess Agency Services Across All Major Moroccan Cities
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-4">Casablanca Hostess Agency</h3>
                    <p className="text-gray-700 leading-relaxed">
                      As Morocco's economic capital, Casablanca hosts countless professional events, trade shows, and corporate gatherings. Our <strong>hostess agency in Casablanca</strong> provides experienced event staff for the city's major venues including the Casablanca International Fair, OFEC Exhibition Center, and prestigious hotels. Whether you need hostesses for a business conference, product launch, or networking event, we deliver exceptional service tailored to Casablanca's dynamic business environment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-4">Marrakech Event Hostesses</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Marrakech, Morocco's premier tourist and event destination, demands sophisticated event staffing. Our <strong>Marrakech hostess agency</strong> specializes in luxury events, international conferences, and high-end galas. From the Palais des Congrès to exclusive riads and luxury hotels, our bilingual hostesses bring elegance and professionalism to every occasion. Perfect for destination events, weddings, and upscale corporate functions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-4">Rabat Professional Staff</h3>
                    <p className="text-gray-700 leading-relaxed">
                      As Morocco's administrative capital, Rabat hosts governmental events, diplomatic functions, and official ceremonies. Our <strong>hostess services in Rabat</strong> include protocol-trained staff experienced in formal events, ministerial conferences, and embassy receptions. We understand the importance of discretion, etiquette, and impeccable presentation for Rabat's distinguished event landscape.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-4">Nationwide Coverage</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Beyond the major cities, our <strong>hostess agency in Morocco</strong> serves Tangier, Agadir, Fes, Meknes, and all regions. With a network of over 150 professional hostesses, we provide consistent quality service anywhere in the kingdom. Multi-city events? No problem—we coordinate seamlessly across locations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Why Choose Smile & Greet Hostess Agency?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Proven Track Record',
                      description: 'Over 500 successful events and 98% client satisfaction rate. Trusted by leading international and Moroccan brands.'
                    },
                    {
                      title: 'Certified Professionals',
                      description: 'All our hostesses undergo rigorous training in customer service, event protocols, and professional etiquette. Internationally certified standards.'
                    },
                    {
                      title: 'Multilingual Excellence',
                      description: 'French, English, and Arabic as standard. Spanish, Russian, German, and other languages available for international events.'
                    },
                    {
                      title: 'Custom Solutions',
                      description: 'Every event is unique. We tailor our services to your specific requirements, brand guidelines, and event objectives.'
                    },
                    {
                      title: 'Rapid Response',
                      description: 'Need hostesses urgently? We can mobilize qualified teams within 48 hours across Morocco. Our 24/7 availability ensures you\'re never left without support.'
                    },
                    {
                      title: 'Premium Presentation',
                      description: 'Impeccable appearance, professional attire, and sophisticated demeanor. Our hostesses embody the excellence your brand deserves.'
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      question: 'What services does your hostess agency in Morocco offer?',
                      answer: 'Smile & Greet offers comprehensive hostess services including event hostesses, trade show staff, VIP reception services, brand ambassadors, guest registration, and multilingual event staff across Morocco.'
                    },
                    {
                      question: 'Which cities in Morocco do you serve?',
                      answer: 'We serve all major cities in Morocco including Casablanca, Marrakech, Rabat, Tangier, Agadir, Fes, and other locations nationwide with our professional hostess agency services.'
                    },
                    {
                      question: 'Are your event hostesses multilingual?',
                      answer: 'Yes, our hostesses are fluent in French, English, and Arabic. We also have staff speaking Spanish, Russian, and other languages upon request for international events.'
                    },
                    {
                      question: 'How far in advance should I book event hostesses?',
                      answer: 'While we can accommodate last-minute requests, we recommend booking at least 2-3 weeks in advance for optimal team selection and preparation, especially for large corporate events or trade shows.'
                    },
                    {
                      question: 'What types of events do you staff?',
                      answer: 'We provide hostess services for corporate events, trade shows, exhibitions, product launches, conferences, galas, VIP receptions, brand activations, and all types of professional events in Morocco.'
                    },
                  ].map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-3xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Elevate Your Next Event?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Get a free quote for professional hostess services in Morocco. Response within 24 hours guaranteed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/en#contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Request Free Quote
                  </Link>
                  <a
                    href="https://wa.me/212707776819"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-900 transition-all"
                  >
                    WhatsApp Us Now
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}