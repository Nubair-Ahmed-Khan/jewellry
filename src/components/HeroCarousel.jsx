import React, {useState, useEffect, useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ChevronRight, Sparkles } from 'lucide-react'
import bannerImage1 from '../images/hero/bannar1.png'
import bannerImage2 from '../images/hero/bannar2.jpg'

const slides = [
  { id:1, title:'Handmade Luxury', subtitle:'Exquisite jewelry crafted with passion', cta:'Explore Collection', image: bannerImage1},
  { id:2, title:'Timeless Designs', subtitle:'Premium handmade pieces that never fade', cta:'Shop Now', image: bannerImage2},
  { id:3, title:'Custom Creations', subtitle:'Your vision, our craftsmanship', cta:'Create Custom', image:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b7d6a4f3a2b1c0d'}
]

export default function HeroCarousel(){
  const [index,setIndex] = useState(0)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)
  const badgeRef = useRef(null)
  const dotsRef = useRef([])

  useEffect(()=>{
    const t = setInterval(()=> setIndex(i => (i+1)%slides.length), 6000)
    return ()=>clearInterval(t)
  },[])

  useEffect(()=>{
    if(titleRef.current && subtitleRef.current && buttonRef.current) {
      gsap.timeline()
        .to([titleRef.current, subtitleRef.current, buttonRef.current], {
          opacity: 0,
          y: -20,
          duration: 0.2
        }, 0)
        .to([badgeRef.current], {
          opacity: 0,
          y: -10,
          duration: 0.2
        }, 0)
        .to(badgeRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, 0.1)
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out'
        }, 0.2)
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out'
        }, 0.3)
        .to(buttonRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out'
        }, 0.4)
    }
    
    dotsRef.current.forEach((dot, i) => {
      gsap.to(dot, {
        backgroundColor: i === index ? '#f4d5a3' : 'rgba(255, 255, 255, 0.4)',
        scale: i === index ? 1.4 : 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)'
      })
    })
  }, [index])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="h-[60vh] md:h-[75vh] relative">
        <AnimatePresence>
          <motion.div 
            key={slides[index].id} 
            initial={{scale: 1.1, opacity:0}} 
            animate={{scale: 1, opacity:1}} 
            exit={{opacity:0, scale: 0.95}} 
            transition={{duration:0.8}} 
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{backgroundImage:`url(${slides[index].image})`}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <motion.div 
                ref={badgeRef}
                initial={{opacity:0, y:-20}}
                className="flex items-center gap-2 mb-6"
              >
                <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                <span className="text-gold font-semibold text-sm tracking-wider uppercase">SK Jewelry Handmade</span>
              </motion.div>
              
              <motion.h2 
                ref={titleRef}
                initial={{opacity:0, y:20}}
                className="hero-title font-elegant font-bold text-white leading-tight mb-6"
              >
                {slides[index].title}
              </motion.h2>
              
              <motion.p 
                ref={subtitleRef}
                initial={{opacity:0, y:20}}
                className="hero-subtitle text-gold/90 max-w-2xl font-light mb-10 leading-relaxed"
              >
                {slides[index].subtitle}
              </motion.p>
              
              <motion.div
                ref={buttonRef}
                initial={{opacity:0, y:20, scale: 0.9}}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="/products" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-goldDark hover:shadow-2xl text-teal px-8 py-4 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 group"
                >
                  {slides[index].cta}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold/10 px-8 py-4 rounded-lg font-semibold transition-all group"
                >
                  Custom Order
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-3 z-10 px-4">
        {slides.map((s,i)=> (
          <motion.button 
            key={s.id} 
            ref={el => dotsRef.current[i] = el} 
            onClick={()=>setIndex(i)} 
            whileHover={{scale: 1.3}}
            className="w-3 h-3 rounded-full transition-all duration-300" 
            style={{backgroundColor: i===index? '#f4d5a3':'rgba(255, 255, 255, 0.4)'}}
          ></motion.button>
        ))}
      </div>
      
      {/* Removed explicit arrow controls per design — only keep dots */}
    </div>
  )
}
