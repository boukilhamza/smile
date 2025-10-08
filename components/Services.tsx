'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Megaphone } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'ACCUEIL ÉVÉNEMENTIEL',
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'Accueil des visiteurs',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
          description: 'Accueil professionnel et chaleureux'
        },
        {
          name: 'Accompagnement VIP',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
          description: 'Service premium pour vos invités VIP'
        },
        {
          name: 'Renseignement & orientation',
          image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
          description: 'Guidance et information des visiteurs'
        },
        {
          name: 'Animation du stand',
          image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop',
          description: 'Dynamisation de votre espace'
        },
        {
          name: 'Gestion vestiaire',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
          description: 'Service vestiaire professionnel'
        },
        {
          name: 'Remise de prix',
          image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=300&fit=crop',
          description: 'Cérémonies et remises de trophées'
        },
        {
          name: 'Passage Micro',
          image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop',
          description: 'Animation micro professionnelle'
        },
        {
          name: 'Voiturier & groom',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
          description: 'Service voiturier haut de gamme'
        },
        {
          name: 'Remise de badges',
          image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
          description: 'Gestion des accréditations'
        },
        {
          name: 'Transferts aéroports',
          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
          description: 'Transport VIP gares et aéroports'
        }
      ]
    },
    {
      icon: Megaphone,
      title: 'ANIMATION',
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'Street marketing',
          image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop',
          description: 'Opérations marketing de rue'
        },
        {
          name: 'Campagne publicitaire',
          image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=300&fit=crop',
          description: 'Activation de campagnes publicitaires'
        },
        {
          name: 'Lancements de produits',
          image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop',
          description: 'Événements de lancement produit'
        },
        {
          name: 'Démonstration produits',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
          description: 'Présentation et démonstration'
        },
        {
          name: 'Dégustation',
          image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
          description: 'Animation dégustation produits'
        },
        {
          name: 'Force de vente',
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
          description: 'Équipe de vente supplétive'
        },
        {
          name: 'Animation beauté',
          image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
          description: 'Animations cosmétiques et beauté'
        },
        {
          name: 'Distribution flyers',
          image: 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=400&h=300&fit=crop',
          description: 'Distribution ciblée de supports'
        },
        {
          name: 'Roadshow',
          image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop',
          description: 'Tournées promotionnelles'
        },
        {
          name: 'Spray girls & boys',
          image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop',
          description: 'Animations parfums et cosmétiques'
        }
      ]
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
            Nos services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              Solutions complètes pour vos événements
              <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-primary-700 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De l'accueil à l'animation, nous offrons une gamme complète de services 
            pour faire de votre événement un succès mémorable.
          </p>
        </motion.div>

        {/* Services Sections */}
        <div className="space-y-24">
          {services.map((service, serviceIndex) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Section Header */}
                <div className="flex items-center justify-center gap-4 mb-12">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {service.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Overlay Text */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm font-medium">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-4">
                          <h4 className="text-lg font-semibold text-gray-800 group-hover:text-primary-800 transition-colors">
                            {item.name}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à donner vie à votre événement ?
            </h3>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-bold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Demander un devis personnalisé
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services