import React, {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Target, Lightbulb, Rocket, Award, Heart, MapPin } from 'lucide-react'

export default function About(){
  const [counters, setCounters] = useState({years: 1, products: 200, customers: 500})
  const counterRefs = useRef([])

  useEffect(() => {
    counterRefs.current.forEach((ref, idx) => {
      if(ref) {
        const target = [1, 200, 500][idx]
        const duration = 2
        
        gsap.fromTo(ref, 
          {textContent: 0},
          {
            textContent: target,
            duration,
            ease: 'power2.out',
            snap: {textContent: 1},
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal to-tealLight text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-elegant font-bold">
            About SK Jewelry Handmade
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6, delay:0.2}} className="mt-4 text-xl font-light">
            Crafting Premium Handmade Jewelry with Passion & Precision
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}}>
            <h2 className="text-3xl font-elegant text-teal font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SK Jewelry Handmade is a passionate 1-year-old handmade jewelry business built on creativity, quality, and craftsmanship. Every piece is carefully crafted by hand, ensuring uniqueness and premium quality.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're proud to supply our exclusive collections to multiple premium malls and thriving local markets across the city, serving customers who appreciate fine handmade jewelry.
            </p>
            
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-semibold text-teal">Our Presence</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              {[
                'Gohar Complex Mall',
                'Saima Mall',
                'Millennium Mall',
                'Malir Liaquat Market',
                'Babar Market',
                'Other local markets'
              ].map((loc, i) => (
                <motion.li key={i} initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}} transition={{duration:0.4, delay:i*0.1}} viewport={{once:true}} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  {loc}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}}>
            <div className="grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1520975682117-8f0b8b181b39?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=b1b6e6d5d5f4f4e3',
                'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c3f0a7f9f1a2f4b',
                'https://images.unsplash.com/photo-1519741490176-9efefb7407d5?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=123456',
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a8b0a3c9d8a2b5c6d4e4f3a1b2c'
              ].map((img, i) => (
                <motion.div key={i} initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration:0.5, delay:i*0.1}} viewport={{once:true}}>
                  <div className="w-full h-40 bg-cover bg-center rounded-lg shadow-md card-premium hover-lift cursor-pointer" style={{backgroundImage:`url(${img})`}}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-teal/10 via-cream to-gold/10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-elegant text-center text-teal font-bold mb-12">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {label: 'Years Experience', ref: 0},
              {label: 'Products Crafted', ref: 1},
              {label: 'Happy Customers', ref: 2}
            ].map((stat, i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:i*0.15}} viewport={{once:true}} className="text-center">
                <div className="text-5xl font-bold text-gold mb-2" ref={el => counterRefs.current[i] = el}>0</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-elegant text-teal font-bold mb-12 text-center">Our Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-8 h-8 text-gold" />,
              title: 'Vision',
              text: 'To be recognized as a premier handmade jewelry brand known for timeless designs, quality craftsmanship, and exceptional customer service.'
            },
            {
              icon: <Heart className="w-8 h-8 text-gold" />,
              title: 'Mission',
              text: 'Create beautiful, sustainable handmade jewelry using premium materials and ethical practices, enriching lives through artisanal craftsmanship.'
            },
            {
              icon: <Rocket className="w-8 h-8 text-gold" />,
              title: 'Future',
              text: 'Expand to online bespoke services, collaborate with wholesale partners, and bring SK Jewelry to international markets.'
            }
          ].map((item, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:i*0.15}} viewport={{once:true}} className="bg-white card-premium p-6 hover-lift">
              <div className="mb-4">{item.icon}</div>
              <div className="text-2xl font-elegant text-teal font-bold mb-3">{item.title}</div>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
