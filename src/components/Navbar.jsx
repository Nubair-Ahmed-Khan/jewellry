import React, {useState, useRef, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { Menu, X, Sparkles, Moon, Sun } from 'lucide-react'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const navRef = useRef(null)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    // slide the mobile nav in from right
    if(!navRef.current) return
    gsap.to(navRef.current, {
      x: open ? 0 : 300,
      opacity: open ? 1 : 0,
      duration: 0.35,
      ease: open ? 'power2.out' : 'power2.in'
    })
  }, [open])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gold/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-10 h-10 bg-gradient-to-br from-teal to-tealLight rounded-full shadow-md flex items-center justify-center text-white font-bold text-sm">SK</div>
          <div className="hidden sm:block">
            <div className="font-elegant text-lg font-semibold text-teal">SK Jewelry</div>
            <div className="text-xs text-gray-500">Handmade Luxury</div>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({isActive})=>isActive? 'text-teal font-semibold underline-animated':'text-gray-700 underline-animated'}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=>isActive? 'text-teal font-semibold underline-animated':'text-gray-700 underline-animated'}>Products</NavLink>
          <NavLink to="/necklaces" className={({isActive})=>isActive? 'text-teal font-semibold underline-animated':'text-gray-700 underline-animated'}>Necklaces</NavLink>
          <NavLink to="/bracelets" className={({isActive})=>isActive? 'text-teal font-semibold underline-animated':'text-gray-700 underline-animated'}>Bracelets</NavLink>
          <NavLink to="/custom" className={({isActive})=>isActive? 'text-teal font-semibold underline-animated':'text-gray-700 underline-animated'}>Custom</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'text-teal font-semibold underline-animated':'text-gray-700 underline-animated'}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'text-teal font-semibold underline-animated':'text-gray-700 underline-animated'}>Contact</NavLink>
          <NavLink to="/faq" className={({isActive})=>isActive? 'text-teal font-semibold underline-animated':'text-gray-700 underline-animated'}>FAQ</NavLink>
        </nav>
        
        <div className="flex items-center gap-2">
          <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} aria-label="theme" className="p-2 rounded hover:bg-gold/10 transition">
            {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-teal" />}
          </button>

          <div className="md:hidden">
            <button onClick={()=>setOpen(!open)} aria-label="menu" className="p-2 hover:bg-gold/20 rounded transition">
              {open ? <X className="w-6 h-6 text-teal" /> : <Menu className="w-6 h-6 text-teal" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Side drawer mobile nav */}
      <div ref={navRef} className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85%] backdrop-blur border-l border-gold/10 shadow-lg transform ${theme==='dark' ? 'bg-neutral-900/95 text-white' : 'bg-white/95 text-gray-800'}`} style={{transform: 'translateX(100%)', opacity:0}}>
        <div className="px-6 py-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal to-tealLight rounded-full flex items-center justify-center text-white font-bold">SK</div>
              <div>
                <div className="font-elegant font-semibold text-teal">SK Jewelry</div>
                <div className="text-xs text-gray-500">Handmade Luxury</div>
              </div>
            </div>
            <button onClick={()=>setOpen(false)} aria-label="close" className="p-2 rounded hover:bg-gold/10"><X className="w-5 h-5 text-teal"/></button>
          </div>

            <nav className="flex flex-col gap-3 text-lg">
            <NavLink to="/" onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'text-teal font-semibold':'text-gray-700'}>Home</NavLink>
            <NavLink to="/products" onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'text-teal font-semibold':'text-gray-700'}>Products</NavLink>
            <NavLink to="/necklaces" onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'text-teal font-semibold':'text-gray-700'}>Necklaces</NavLink>
            <NavLink to="/bracelets" onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'text-teal font-semibold':'text-gray-700'}>Bracelets</NavLink>
            <NavLink to="/custom" onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'text-teal font-semibold':'text-gray-700'}>Custom</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'text-teal font-semibold':'text-gray-700'}>About</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'text-teal font-semibold':'text-gray-700'}>Contact</NavLink>
            <NavLink to="/faq" onClick={()=>setOpen(false)} className={({isActive})=>isActive? 'text-teal font-semibold':'text-gray-700'}>FAQ</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
