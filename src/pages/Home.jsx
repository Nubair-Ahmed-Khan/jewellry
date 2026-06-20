import React, {useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Award, Gift, Heart, Star, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import ReviewCard from '../components/ReviewCard'
import MarketCard from '../components/MarketCard'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {name:'Ayesha Khan', rating:5, text:'Beautiful craftsmanship! Exactly what I wanted. Will definitely order again.', avatar:'https://i.pravatar.cc/100?img=5'},
  {name:'Zain Ahmed', rating:5, text:'Premium quality and amazing designs. Highly recommend SK Jewelry!', avatar:'https://i.pravatar.cc/100?img=12'}
]

export default function Home(){
  const sectionRefs = useRef([])

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if(section) {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 }, 
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
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
      <HeroCarousel />

      {/* Featured Section */}
      <section ref={el => sectionRefs.current[0] = el} className="max-w-6xl mx-auto px-6 py-16">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}}>
          <h2 className="text-3xl md:text-4xl font-elegant text-teal font-bold">✨ Featured Collections</h2>
          <p className="text-gray-600 mt-2">Handpicked pieces from our latest collection</p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, i)=> (
            <motion.div key={p.id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:i*0.1}} viewport={{once:true}}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hot Selling Section */}
      <section ref={el => sectionRefs.current[1] = el} className="bg-gradient-to-r from-teal/10 via-cream to-gold/10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-elegant text-teal font-bold">🔥 Hot Selling Items</motion.h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0,3).map((p, i)=> (
              <motion.div key={p.id} initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration:0.5, delay:i*0.15}} viewport={{once:true}} className="group">
                <div className="bg-white rounded-lg overflow-hidden card-premium hover-lift">
                  <div className="h-64 bg-cover bg-center relative overflow-hidden" style={{backgroundImage:`url(${p.image})`}}>
                    <div className="absolute top-3 right-3 bg-gold text-teal px-3 py-1 rounded-full text-sm font-semibold">Top Pick</div>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-lg text-teal">{p.name}</div>
                    <div className="text-sm text-gray-500 mt-1">Rs {p.price} • ★ {p.rating}</div>
                    <a href={`https://wa.me/923001234567?text=${encodeURIComponent('Hello, I\'m interested in ' + p.name)}`} className="mt-3 inline-block btn-luxury text-sm">Order Now</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Presence */}
      <section ref={el => sectionRefs.current[2] = el} className="max-w-6xl mx-auto px-6 py-16">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}}>
          <h2 className="text-3xl md:text-4xl font-elegant text-teal font-bold">🏬 Our Jewelry Is Available Across Multiple Markets</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">SK Jewelry Handmade supplies handmade jewelry to premium malls and thriving local markets across the city. Visit us at any of these locations!</p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {title:'Gohar Complex Mall', desc:'Premium shopping hub'},
            {title:'Saima Mall', desc:'Luxury retail spaces'},
            {title:'Millennium Mall', desc:'Contemporary marketplace'},
            {title:'Malir Liaquat Market', desc:'Classic jewelry market'},
            {title:'Babar Market', desc:'Handmade artisan hub'}
          ].map((m, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:i*0.1}} viewport={{once:true}}>
              <MarketCard title={m.title} desc={m.desc} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-teal via-tealLight to-teal py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-elegant text-center mb-12 font-bold">Why Choose SK Jewelry</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {icon: <Sparkles className="w-8 h-8" />, title: 'Handmade', desc: 'Each piece is crafted by hand'},
              {icon: <Award className="w-8 h-8" />, title: 'Premium Quality', desc: 'Only finest materials used'},
              {icon: <Heart className="w-8 h-8" />, title: 'Custom Orders', desc: 'Personalized designs available'},
              {icon: <Star className="w-8 h-8" />, title: 'Trusted Brand', desc: '5-star rated by customers'}
            ].map((item, i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:i*0.1}} viewport={{once:true}} className="text-center">
                <div className="flex justify-center mb-4 text-gold">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-cream/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Jewelry Section */}
      <section ref={el => sectionRefs.current[3] = el} className="bg-gradient-to-b from-cream to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}}>
              <h2 className="text-3xl md:text-4xl font-elegant text-teal font-bold">💎 Custom Jewelry Available</h2>
              <p className="text-gray-600 mt-4">Have a unique design in mind? We create personalized custom-made jewelry with careful handmade craftsmanship. Share your vision and let us bring it to life.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gold text-teal rounded-full flex items-center justify-center text-sm">✓</span>
                  <span>Custom-made service tailored to your needs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gold text-teal rounded-full flex items-center justify-center text-sm">✓</span>
                  <span>Personalized designs with your style</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gold text-teal rounded-full flex items-center justify-center text-sm">✓</span>
                  <span>Premium handmade craftsmanship</span>
                </li>
              </ul>
              <Link to="/custom" className="mt-6 inline-block btn-luxury">Start Your Custom Order</Link>
            </motion.div>
            <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="h-72 bg-cover bg-center rounded-lg shadow-lg hover-lift" style={{backgroundImage:'url(https://images.unsplash.com/photo-1519741490176-9efefb7407d5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=123456)'}}></motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={el => sectionRefs.current[4] = el} className="bg-gradient-to-r from-teal to-tealLight py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-elegant text-white font-bold">⭐ Customer Reviews</motion.h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i)=> (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:i*0.15}} viewport={{once:true}}>
                <ReviewCard review={r} />
              </motion.div>
            ))}
          </div>
        </