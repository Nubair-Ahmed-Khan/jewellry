import React, {useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Search, Filter, Sparkles } from 'lucide-react'
import { products as allProducts } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products(){
  const [query,setQuery] = useState('')
  const [filtered, setFiltered] = useState(allProducts)
  const [sortBy, setSortBy] = useState('featured')
  const searchRef = useRef(null)

  useEffect(() => {
    let result = allProducts.filter(p=> p.name.toLowerCase().includes(query.toLowerCase()))
    
    if(sortBy === 'price-low') result.sort((a,b) => a.price - b.price)
    if(sortBy === 'price-high') result.sort((a,b) => b.price - a.price)
    if(sortBy === 'rating') result.sort((a,b) => b.rating - a.rating)
    
    setFiltered(result)
  }, [query, sortBy])

  useEffect(() => {
    gsap.fromTo(searchRef.current,
      {opacity: 0, y: -20},
      {opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'}
    )
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      <div className="bg-gradient-to-r from-teal to-tealLight text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-elegant font-bold">
            Our Collections
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6, delay:0.2}} className="mt-2 text-lg">
            Discover our handmade jewelry collections
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div ref={searchRef} className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div> 
            <label className="block text-sm font-semibold text-teal mb-2 flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search Products
            </label>
            <input 
              value={query} 
              onChange={e=>setQuery(e.target.value)} 
              placeholder="Search by name..." 
              className="w-full border-2 border-gold/30 px-4 py-3 rounded-lg focus:outline-none focus:border-teal transition bg-white/80"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-teal mb-2 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Sort By
            </label>
            <select 
              value={sortBy} 
              onChange={e=>setSortBy(e.target.value)} 
              className="w-full border-2 border-gold/30 px-4 py-3 rounded-lg focus:outline-none focus:border-teal transition bg-white/80"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="flex items-end">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-teal">{filtered.length}</span> products found
            </div>
          </div>
        </motion.div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p, i)=> (
              <motion.div key={p.id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:i*0.05}} viewport={{once:true}}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-12">
            <div className="text-lg text-gray-600">No products found for "{query}"</div>
            <motion.button 
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
              onClick={()=>setQuery('')} 
              className="mt-4 btn-luxury"
            >
              Clear Search
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
