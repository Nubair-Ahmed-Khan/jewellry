import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)

  const defaultImage = product.images?.[0] || product.image
  const hoverImage = product.images?.[1] || product.image

  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(
    /\D/g,
    ''
  )}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE + ' Product: ' + product.name
  )}`

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden card-premium cursor-pointer flex flex-col h-full"
    >
      {/* Image Section */}
      <div
        className="h-56 relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* First Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
            hovered
              ? 'opacity-0 scale-110'
              : 'opacity-100 scale-100'
          }`}
          style={{
            backgroundImage: `url(${defaultImage})`,
          }}
        />

        {/* Second Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
            hovered
              ? 'opacity-100 scale-110'
              : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url(${hoverImage})`,
          }}
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-teal hover:text-tealLight transition underline-animated">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {product.description}
              </p>
            </div>

            <div className="text-right flex-shrink-0">
              <div className="text-xl font-bold text-gold">
                Rs {product.price}
              </div>

              <div className="text-sm text-yellow-500 font-semibold">
                ★ {product.rating}
              </div>
            </div>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block w-full text-center btn-luxury hover:text-teal"
        >
          Shop Now
        </motion.a>
      </div>
    </motion.div>
  )
}