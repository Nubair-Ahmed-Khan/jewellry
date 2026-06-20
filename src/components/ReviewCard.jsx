import React from 'react'
import { motion } from 'framer-motion'
import { Star, MessageSquare } from 'lucide-react'

export default function ReviewCard({review}){
  return (
    <motion.div whileHover={{scale:1.02}} className="bg-gradient-to-br from-white to-cream p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-all border border-gold/10">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold/60">
          <img src={review.avatar} alt="avatar" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-teal">{review.name}</div>
              <div className="text-sm text-gray-500">Verified Customer</div>
            </div>