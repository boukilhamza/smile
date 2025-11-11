'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Calendar } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

// Fichier GeoJSON du Maroc
const geoUrl = "https://raw.githubusercontent.com/manalhama/Morocco-geojson/master/maroc.geojson"

const MapMaroc = () => {
  const { t } = useLanguage()
  type CityKey = 'tanger' | 'rabat' | 'casablanca' | 'fes' | 'marrakech' | 'agadir' | 'oujda' | 'laayoune' | 'dakhla'
  
  const [selectedCity, setSelectedCity] = useState<CityKey | null>('casablanca')
  const [hoveredCity, setHoveredCity] = useState<CityKey | null>(null)
  const [showCities, setShowCities] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowCities(true)
          } else {
            setShowCities(false)
          }
        })
      },
      {
        threshold: 0.3 // Trigger when 30% of the map is visible
      }
    )

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current)
      }
    }
  }, [])

  const cities: Record<CityKey, {
    name: string
    region: string
    description: string
    highlights: string[]
    image: string
    coordinates: [number, number]
  }> = {
    tanger: {
      name: 'Tanger',
      region: 'Tanger-Tétouan-Al Hoceïma',
      description: t.zones.cityDescriptions.tanger,
      highlights: t.map.cityHighlights.tanger,
      image: '/images/villes/tanger.png',
      coordinates: [-5.8, 35.76] as [number, number]
    },
    rabat: {
      name: 'Rabat',
      region: 'Rabat-Salé-Kénitra',
      description: t.zones.cityDescriptions.rabat,
      highlights: t.map.cityHighlights.rabat,
      image: '/images/villes/rabat.png',
      coordinates: [-6.83, 33.97] as [number, number]
    },
    casablanca: {
      name: 'Casablanca',
      region: 'Grand Casablanca',
      description: t.zones.cityDescriptions.casablanca,
      highlights: t.map.cityHighlights.casablanca,
      image: '/images/villes/casablanca.png',
      coordinates: [-7.62, 33.57] as [number, number]
    },
    fes: {
      name: 'Fès',
      region: 'Fès-Meknès',
      description: t.zones.cityDescriptions.fes,
      highlights: t.map.cityHighlights.fes,
      image: '/images/villes/fès.png',
      coordinates: [-5.0, 34.03] as [number, number]
    },
    marrakech: {
      name: 'Marrakech',
      region: 'Marrakech-Safi',
      description: t.zones.cityDescriptions.marrakech,
      highlights: t.map.cityHighlights.marrakech,
      image: '/images/villes/marrakech.png',
      coordinates: [-8.0, 31.63] as [number, number]
    },
    agadir: {
      name: 'Agadir',
      region: 'Souss-Massa',
      description: t.zones.cityDescriptions.agadir,
      highlights: t.map.cityHighlights.agadir,
      image: '/images/villes/agadir.png',
      coordinates: [-9.6, 30.42] as [number, number]
    },
    oujda: {
      name: 'Oujda',
      region: 'Oriental',
      description: t.zones.cityDescriptions.oujda,
      highlights: t.map.cityHighlights.oujda,
      image: '/images/villes/oujda.png',
      coordinates: [-1.91, 34.68] as [number, number]
    },
    laayoune: {
      name: 'Laâyoune',
      region: 'Laâyoune-Sakia El Hamra',
      description: t.zones.cityDescriptions.laayoune,
      highlights: t.map.cityHighlights.laayoune,
      image: '/images/villes/laayoune.png',
      coordinates: [-13.18, 27.15] as [number, number]
    },
    dakhla: {
      name: 'Dakhla',
      region: 'Dakhla-Oued Ed-Dahab',
      description: t.zones.cityDescriptions.dakhla,
      highlights: t.map.cityHighlights.dakhla,
      image: '/images/villes/dakhla.png',
      coordinates: [-15.95, 23.72] as [number, number]
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start" ref={mapRef}>
      {/* Map Section */}
      <div className="w-full lg:flex-1 relative">
      <div className="w-full overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1600,
          center: [-8, 28]
        }}
        width={800}
        height={600}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%"
        }}
        className="w-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { 
                    fill: "#e7e6b8", 
                    stroke: "#4a0e03",
                    strokeWidth: 2,
                    outline: "none" 
                  },
                  hover: { 
                    fill: "#d4d3a6", 
                    stroke: "#4a0e03",
                    strokeWidth: 2.5,
                    outline: "none",
                    cursor: "pointer"
                  },
                  pressed: { 
                    fill: "#c1c094", 
                    outline: "none" 
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* City Markers */}
        {(Object.entries(cities) as [CityKey, typeof cities[CityKey]][]).map(([key, city], index) => {
          // Calculate animation delay based on latitude (north to south)
          const sortedCities = Object.entries(cities).sort((a, b) => b[1].coordinates[1] - a[1].coordinates[1])
          const delayIndex = sortedCities.findIndex(([k]) => k === key)
          const animationDelay = delayIndex * 0.1

          return (
          <Marker
            key={key}
            coordinates={city.coordinates}
            onClick={() => setSelectedCity(key)}
            onMouseEnter={() => setHoveredCity(key)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <motion.g 
              className="cursor-pointer group"
              initial={{ scale: 0, opacity: 0 }}
              animate={showCities ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ 
                delay: animationDelay,
                duration: 0.5,
                type: "spring", 
                stiffness: 260, 
                damping: 20 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shadow */}
              <circle 
                r={8} 
                fill={selectedCity === key ? "#4a0e03" : "#4a0e03"} 
                opacity={0.1}
                transform="translate(1, 1)"
              />
              {/* Pulsing circle */}
              <circle 
                r={selectedCity === key ? 8 : 6} 
                fill={selectedCity === key ? "#4a0e03" : "#4a0e03"} 
                className="animate-ping opacity-40"
              />
              {/* Outer ring */}
              <circle 
                r={6} 
                fill="#fff" 
                stroke="#4a0e03"
                strokeWidth={selectedCity === key ? 2.5 : 2}
                className="transition-all duration-300"
                style={{ outline: 'none' }}
              />
              {/* Main circle */}
              <motion.circle 
                r={4} 
                fill={selectedCity === key ? "#4a0e03" : "#4a0e03"} 
                className="group-hover:fill-[#6a1e07] transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
                animate={{ 
                  scale: selectedCity === key ? 1.5 : 1,
                  fill: selectedCity === key ? "#4a0e03" : "#4a0e03"
                }}
              />
              {/* City name on hover */}
              {/* Background for text - Hidden on mobile */}
              <rect
                x={-35}
                y={-25}
                width={70}
                height={18}
                rx={9}
                fill="white"
                stroke={selectedCity === key ? "#4a0e03" : "#4a0e03"}
                strokeWidth={1.5}
                opacity={hoveredCity === key || selectedCity === key ? 0.95 : 0}
                className="transition-all duration-200 hidden lg:block"
              />
              <text
                textAnchor="middle"
                y={-12}
                style={{
                  fontFamily: "system-ui",
                  fontSize: "13px",
                  fill: selectedCity === key ? "#4a0e03" : "#4a0e03",
                  fontWeight: "bold",
                  opacity: hoveredCity === key || selectedCity === key ? 1 : 0,
                  pointerEvents: "none",
                  transition: "all 0.2s"
                }}
                className="hidden lg:block"
              >
                {city.name}
              </text>
            </motion.g>
          </Marker>
        )
        })}
      </ComposableMap>
      </div>
      </div>

      {/* City Details - New Dynamic Display */}
      <AnimatePresence mode="wait">
        {selectedCity && (
          <motion.div
            key={selectedCity}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut"
            }}
            className="w-full lg:w-96 relative"
          >
            {/* Sleek info display with glass morphism */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden mx-4 lg:mx-0">
              {/* Header with image background */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={cities[selectedCity].image}
                  alt={cities[selectedCity].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4a0e03]/90 to-[#6a1e07]/80 backdrop-blur-sm" />
                
                {/* City name overlay */}
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <div>
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-1"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {cities[selectedCity].name}
                    </motion.h3>
                    <motion.p 
                      className="text-white/80 text-sm flex items-center gap-2"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <MapPin className="w-4 h-4" />
                      {cities[selectedCity].region}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Content sections */}
              <div className="p-6 space-y-4">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-[#e7e6b8]/20 to-transparent p-4 rounded-xl border-l-4 border-[#4a0e03]"
                >
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {cities[selectedCity].description}
                  </p>
                </motion.div>

                {/* Highlights with modern design */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                    {t.map.specialties}
                  </h4>
                  <div className="grid gap-2">
                    {cities[selectedCity].highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                        className="group flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-gradient-to-r from-gray-50 to-transparent rounded-lg hover:from-[#e7e6b8]/30 transition-all cursor-pointer"
                      >
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#4a0e03]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4a0e03]/20 transition-colors flex-shrink-0">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#4a0e03] rounded-full" />
                        </div>
                        <span className="text-xs lg:text-sm text-gray-700 font-medium">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href="#contact"
                    className="block w-full bg-gradient-to-r from-[#4a0e03] to-[#6a1e07] text-white font-semibold py-4 px-6 rounded-xl text-center transition-all hover:shadow-lg transform hover:-translate-y-0.5 group"
                    onClick={() => setSelectedCity(null)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t.map.quoteFor} {cities[selectedCity].name}
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#e7e6b8]/20 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state with animated hint */}
      {!selectedCity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-96 relative"
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <motion.div 
              className="text-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#4a0e03] to-[#6a1e07] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t.map.explore.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.map.explore.description}
              </p>
            </motion.div>

            {/* Animated dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#4a0e03] rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default MapMaroc