import React, {useState, useRef, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Award, Gift, Heart, Star, Sparkles, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import ReviewCard from '../components/ReviewCard'
import MarketCard from '../components/MarketCard'
import GoharComplex from '../images/markets/Gohar_complex.jfif'
import SaimaMall from '../images/markets/Saima_mall.jpg'
import MillenniumMall from '../images/markets/Millennium_Mall.jpg'
// import GoharComplex from '../images/markets/Gohar_complex.jfif'
import LuckyOneMall from '../images/markets/LuckyOne_Mall.jpg'
import Crafting from '../images/Customize_images/crafting.png'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {name:'Ayesha Khan', rating:4, text:'Beautiful craftsmanship! Exactly what I wanted. Will definitely order again.'},
  {name:'Umama Qasim', rating:5, text:'Premium quality and amazing designs. Highly recommend SK Jewelry!'},
  {name:'Sara Malik', rating:5, text:'The custom necklace was stunning and shipped quickly. Such amazing detail.'},
  {name:'Ali Rehman', rating:5, text:'Excellent service and beautiful pieces — the best jewelry shopping experience.'},
  {name:'Hina Noor', rating:5, text:'I loved the handmade bracelet and the premium finish. Highly recommend SK Jewelry.'}
]

const markets = [
  {
    title:'Gohar Complex Mall',
    desc:'Premium shopping hub',
    image:[GoharComplex,]
  },
  {
    title:'Saima Mall',
    desc:'Luxury retail spaces',
    image:[SaimaMall]
  },
  {
    title:'Millennium Mall',
    desc:'Contemporary marketplace',
    image:[MillenniumMall]
  },
  {
    title:'Malir Liaquat Market',
    desc:'Classic jewelry market',
    image:[LuckyOneMall]
  },
  {
    title:'Lucky One Mall',
    desc:'Handmade artisan hub',
    image:[LuckyOneMall]
  }
]

export default function Home(){
  const [activeReview, setActiveReview] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

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
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="w-6 h-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-elegant text-teal font-bold">Featured Collections</h2>
          </div>
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
<section
  ref={(el) => (sectionRefs.current[1] = el)}
  className="bg-gradient-to-r from-teal/10 via-cream to-gold/10 py-16"
>
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex items-center gap-3 mb-2">
      <Zap className="w-6 h-6 text-gold" />

      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-elegant text-teal font-bold"
      >
        Hot Selling Items
      </motion.h2>
    </div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.slice(0, 3).map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="bg-white rounded-lg overflow-hidden card-premium hover-lift">

            {/* Image */}
            <div className="h-64 relative overflow-hidden group">
              {/* First Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${p.images?.[0]})`,
                }}
              />

              {/* Second Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 scale-100 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${
                    p.images?.[1] || p.images?.[0]
                  })`,
                }}
              />

              <div className="absolute top-3 right-3 bg-gold text-teal px-3 py-1 rounded-full text-sm font-semibold">
                Top Pick
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="font-semibold text-lg text-teal">
                {p.name}
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Rs {p.price} • ★ {p.rating}
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/923001234567?text=${encodeURIComponent(
                  "Hello, I'm interested in " + p.name
                )}`}
                className="mt-3 inline-block btn-luxury text-sm"
              >
                Order Now
              </motion.a>
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
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-6 h-6 text-teal" />
            <h2 className="text-3xl md:text-4xl font-elegant text-teal font-bold">Our Jewelry Across Markets</h2>
          </div>
          <p className="mt-2 text-gray-600 max-w-2xl">SK Jewelry Handmade supplies handmade jewelry to premium malls and thriving local markets across the city. Visit us at any of these locations!</p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {markets.map((m, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:i*0.1}} viewport={{once:true}}>
              <MarketCard title={m.title} desc={m.desc} image={m.image} />
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
              <div className="flex items-center gap-3 mb-2">
                <Gift className="w-6 h-6 text-gold" />
                <h2 className="text-3xl md:text-4xl font-elegant text-teal font-bold">Custom Jewelry Available</h2>
              </div>
              <p className="text-gray-600 mt-4">Have a unique design in mind? We create personalized custom-made jewelry with careful handmade craftsmanship. Share your vision and let us bring it to life.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gold text-teal rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span>Custom-made service tailored to your needs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gold text-teal rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span>Personalized designs with your style</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gold text-teal rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span>Premium handmade craftsmanship</span>
                </li>
              </ul>
              <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} className="mt-6 inline-flex w-full md:w-auto">
                <Link to="/custom" className="inline-flex items-center justify-center w-full btn-luxury py-4 text-center font-semibold">Start Your Custom Order</Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="h-72 bg-cover bg-center rounded-lg shadow-lg hover-lift" style={{backgroundImage:`url(${Crafting})`}}></motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={el => sectionRefs.current[4] = el} className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-6 h-6 text-gold" />
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-elegant text-deepBlack font-bold">Customer Reviews</motion.h2>
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeReview}
                initial={{opacity:0, y:30}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-30}}
                transition={{duration:0.5}}
              >
                <ReviewCard review={reviews[activeReview]} />
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex justify-center gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setActiveReview(i)}
                  className={`h-3 w-3 rounded-full transition ${i === activeReview ? 'bg-teal' : 'bg-gray-300 hover:bg-teal/70'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
