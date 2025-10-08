'use client'

import { useState, useEffect } from 'react'
import { X, ZoomIn, ZoomOut } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  alt: string
}

const ImageModal = ({ isOpen, onClose, imageSrc, alt }: ImageModalProps) => {
  const [scale, setScale] = useState(1)
  
  // Reset zoom level when modal opens
  useEffect(() => {
    if (isOpen) {
      setScale(1)
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3))
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative max-w-4xl w-full h-[80vh] bg-black rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Image container with overflow for panning */}
            <div className="w-full h-full overflow-auto">
              <div 
                className="relative w-full h-full flex items-center justify-center transition-transform duration-200"
                style={{ 
                  minHeight: `${100 * scale}%`,
                  minWidth: `${100 * scale}%`
                }}
              >
                <Image
                  src={imageSrc}
                  alt={alt}
                  fill
                  className="object-contain"
                  style={{ transform: `scale(${scale})` }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            </div>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button 
                onClick={zoomIn}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <ZoomIn className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={zoomOut}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <ZoomOut className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageModal
