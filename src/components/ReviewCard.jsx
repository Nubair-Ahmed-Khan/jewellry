import React from 'react'
import { motion } from 'framer-motion'
import { Star, MessageSquare, CheckCircle } from 'lucide-react'

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase()

export default function ReviewCard({review}){
  return (
    <motion.div whileHover={{scale:1.02}} className="bg-gradient-to-br from-white to-cream p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gold/10">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-gold flex items-center justify-center text-white font-bold text-lg ring-2 ring-gold/30">
          {getInitials(review.name)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-teal">{review.name}</div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                Verified Customer
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-gold text-gold' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4 italic">"{review.text}"</p>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MessageSquare className="w-4 h-4" />
        <span>SK Jewelry Customer</span>
      </div>
    </motion.div>
  )
}
