import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function MarketCard({title, desc, image}){
  return (
    <motion.div 
      whileHover={{scale: 1.05, y: -8}}
      whileTap={{scale: 0.98}}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all h-64 cursor-pointer"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
        style={{backgroundImage: `url(${image})`}}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gold/90 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-teal" />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">{title}</h3>
            <p className="text-sm text-gray-200 mt-1">{desc}</p>
          </div>
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 transition-all rounded-xl"></div>
    </motion.div>
  )
}
