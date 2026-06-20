import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Camera, Send, CheckCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../config'

export default function Contact(){
  const [form,setForm] = useState({name:'',phone:'',email:'',message:''})
  const [submitted,setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  
  function handleSubmit(e){
    e.preventDefault()
    if(form.name && form.phone && form.message) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setForm({name:'',phone:'',email:'',message:''})
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: '0 0 0 3px rgba(27, 94, 94, 0.1)' },
    blur: { scale: 1 }
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-teal to-tealLight text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-elegant font-bold">
            Get In Touch
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6, delay:0.2}} className="mt-2 text-lg">
            We'd love to hear from you. Reach out for inquiries or custom orders.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-teal mb-2">Your Name *</label>
                <motion.input 
                  variants={inputVariants}
                  animate={focusedField === 'name' ? 'focus' : 'blur'}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required 
                  value={form.name} 
                  onChange={e=>setForm({...form,name:e.target.value})} 
                  placeholder="Enter your name" 
                  className="w-full border-2 border-gold/30 px-4 py-3 rounded-lg focus:outline-none focus:border-teal transition bg-white/80" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-teal mb-2">Phone Number *</label>
                <motion.input 
                  variants={inputVariants}
                  animate={focusedField === 'phone' ? 'focus' : 'blur'}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  required 
                  value={form.phone} 
                  onChange={e=>setForm({...form,phone:e.target.value})} 
                  placeholder="+92 300 1234567" 
                  className="w-full border-2 border-gold/30 px-4 py-3 rounded-lg focus:outline-none focus:border-teal transition bg-white/80" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-teal mb-2">Email</label>
                <motion.input 
                  variants={inputVariants}
                  animate={focusedField === 'email' ? 'focus' : 'blur'}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  value={form.email} 
                  onChange={e=>setForm({...form,email:e.target.value})} 
                  placeholder="your@email.com" 
                  className="w-full border-2 border-gold/30 px-4 py-3 rounded-lg focus:outline-none focus:border-teal transition bg-white/80" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-teal mb-2">Message *</label>
                <motion.textarea 
                  variants={inputVariants}
                  animate={focusedField === 'message' ? 'focus' : 'blur'}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  value={form.message} 
                  onChange={e=>setForm({...form,message:e.target.value})} 
                  placeholder="Tell us about your inquiry or custom jewelry request..." 
                  className="w-full border-2 border-gold/30 px-4 py-3 rounded-lg focus:outline-none focus:border-teal transition bg-white/80 h-32" 
                />
              </div>

              <motion.button 
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                type="submit" 
                className="w-full btn-luxury text-lg font-semibold py-4 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>

              {submitted && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Thank you! We'll contact you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="space-y-6">
            {/* Business Info Card */}
            <div className="bg-white card-premium p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-elegant text-teal font-bold">Contact Information</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <div>
                  <div className="font-semibold text-teal flex items-center gap-2 mb-1">
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </div>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,'')}`} className="text-gold hover:text-goldDark transition">
                    {WHATSAPP_NUMBER}
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-teal flex items-center gap-2 mb-1">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                  <a href="mailto:contact@skjewelry.com" className="text-gold hover:text-goldDark transition">
                    contact@skjewelry.com
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-teal flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4" />
                    Address
                  </div>
                  <p>Available across premium malls and markets in the city</p>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white card-premium p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-elegant text-teal font-bold">Social Media</h3>
              </div>
              <p className="text-gray-600 mb-4">Follow us on Instagram for latest designs and updates</p>
              <motion.a 
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                href="https://www.instagram.com/sk_jewelry_handmade/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block btn-luxury flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                @sk_jewelry_handmade
              </motion.a>
            </div>

            {/* Locations Card */}
            <div className="bg-white card-premium p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-elegant text-teal font-bold">Visit Us</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Gohar Complex Mall
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Saima Mall
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Millennium Mall
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Malir Liaquat Market
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Babar Market
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
