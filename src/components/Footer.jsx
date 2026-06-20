import React from 'react'
import { Link } from 'react-router-dom'
import { Camera, MessageCircle, Mail, MapPin } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-teal text-cream">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-elegant font-semibold text-gold">SK Jewelry</div>
          <div className="text-sm text-cream/80 mt-2">Premium handmade jewelry crafted with passion and precision.</div>
          <div className="mt-4 flex gap-4">
            <a href="https://instagram.com/sk_jewelry_handmade/" className="flex items-center gap-2 hover:text-gold transition">
              <Camera className="w-5 h-5" />
              Instagram
            </a>
            <a href="https://wa.me/923001234567" className="flex items-center gap-2 hover:text-gold transition">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
        
        <div>
          <div className="font-semibold text-gold text-lg">Quick Links</div>
          <ul className="mt-4 text-sm text-cream/80 space-y-2">
            <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-gold transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <div className="font-semibold text-gold text-lg">Contact</div>
          <div className="mt-4 text-sm text-cream/80 space-y-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@skjewelry.com" className="hover:text-gold">contact@skjewelry.com</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>Gohar Complex, Saima Mall, Millennium Mall</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-black/40 backdrop-blur text-cream/70 text-sm py-4 text-center border-t border-gold/20">© 2026 SK Jewelry Handmade. All Rights Reserved. | Handcrafted with ❤️</div>
    </footer>
  )
}
