import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Sparkles, Gift, Heart, Mail, Phone } from 'lucide-react'

const steps = [
  {icon: <Gift className="w-6 h-6" />, title: 'Share Your Idea', desc: 'Tell us about your design or send a sketch/image'},
  {icon: <Sparkles className="w-6 h-6" />, title: 'Design & Quote', desc: 'We create a mockup and provide a quote'},
  {icon: <Heart className="w-6 h-6" />, title: 'Craft & Deliver', desc: 'We handmake your piece with care'}
]

const features = [
  'Choose any material: Gold, Silver, Gemstones',
  'Personalized designs with your specifications',
  'High-quality handmade craftsmanship',
  'Express or Standard delivery options',
  'Lifetime care and maintenance support'
]

export default function Custom(){
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-teal to-tealLight text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{opacity:0, y:-20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6}} 
            className="text-4xl md:text-5xl font-elegant font-bold flex items-center justify-center gap-3"
          >
            <Sparkles className="w-8 h-8" />
            Custom Jewelry Design
          </motion.h1>
          <motion.p 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{duration:0.6, delay:0.2}} 
            className="mt-4 text-lg max-w-2xl mx-auto"
          >
            Bring your dream jewelry to life with our custom design service
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* How It Works */}
        <motion.section initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} viewport={{once:true}} className="mb-20">
          <h2 className="text-3xl font-elegant text-teal font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{opacity:0, y:20}} 
                whileInView={{opacity:1, y:0}} 
                transition={{duration:0.5, delay:i*0.1}}
                viewport={{once:true}}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cream to-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal to-gold rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-teal mb-2">{i+1}. {step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {i < 2 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gold/30 transform -translate-y-1/2"></div>}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} viewport={{once:true}} className="mb-20">
          <h2 className="text-3xl font-elegant text-teal font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{opacity:0, x:-20}} 
                whileInView={{opacity:1, x:0}} 
                transition={{duration:0.5, delay:i*0.1}}
                viewport={{once:true}}
                className="flex items-center gap-4 p-4 bg-cream rounded-lg hover:bg-gold/10 transition"
              >
                <Check className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{opacity:0}} 
          whileInView={{opacity:1}} 
          transition={{duration:0.6}} 
          viewport={{once:true}}
          className="bg-gradient-to-r from-teal/10 to-gold/10 p-8 rounded-xl mb-12"
        >
          <h2 className="text-2xl font-elegant text-teal font-bold mb-6">Ready to Start?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">Contact us today with your design ideas and we'll create something beautiful for you.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a 
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
              href="https://wa.me/923001234567?text=Hello%20SK%20Jewelry,%20I%20want%20to%20create%20a%20custom%20jewelry%20piece"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-teal to-tealLight text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-shadow"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Now
            </motion.a>
            
            <motion.a 
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
              href="mailto:contact@skjewelry.com?subject=Custom Jewelry Inquiry"
              className="flex items-center justify-center gap-3 border-2 border-teal text-teal px-8 py-4 rounded-lg font-bold hover:bg-teal/5 transition"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </motion.a>
          </div>
        </motion.section>

        {/* Gallery Placeholder */}
        <motion.section initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} viewport={{once:true}}>
          <h2 className="text-2xl font-elegant text-teal font-bold mb-6">Previous Custom Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{scale: 1.05}}
                className="aspect-square bg-gradient-to-br from-cream to-gold/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                  Custom Design {i}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
