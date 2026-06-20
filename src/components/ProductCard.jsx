import React, {useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config'

export default function ProductCard({product}){
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)

  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,'')}?text=${encodeURIComponent(WHATSAPP_MESSAGE + ' Product: ' + product.name)}`

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: 'power2.out'
    })
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3
    })
    gsap.to(cardRef.current, {
      y: -8,
      boxShadow: '0 20px 40px rgba(27, 94, 94, 0.2)',
      duration: 0.4
    })
  }

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3
    })
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: '0 10px 30px rgba(27, 94, 94, 0.1)',
      duration: 0.4
    })
  }

  return (
    <motion.div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5}}
      viewport={{once:true}}
      className="bg-white rounded-lg overflow-hidden card-premium cursor-pointer"
    >
      <div className="h-56 bg-cover bg-center relative" style={{backgroundImage:`url(${product.image})`}}>
        <div ref={imageRef} className="absolute inset-0" style={{backgroundImage:`url(${product.image})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
        <div ref={overlayRef} className="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center transition-opacity">
          <div className="text-white text-center">
            <div className="text-sm opacity-80">Explore</div>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-teal hover:text-tealLight transition underline-animated">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.description}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-xl font-bold text-gold">Rs {product.price}</div>
            <div className="text-sm text-yellow-500 font-semibold">★ {product.rating}</div>
          </div>
        </div>
        
        <a href={waLink} target="_blank" rel="noreferrer" className="mt-4 inline-block w-full text-center btn-luxury hover:text-teal">
          Shop Now
        </a>
      </div>
    </motion.div>
  )
}
