import React from 'react'
import { Link } from 'react-router-dom'
import { Camera, MessageCircle, Mail, MapPin } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-teal text-cream">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-3xl font-elegant font-semibold text-gold">SK Jewelry</div>
          <div className="text-sm text-cream/80 mt-3">Premium handmade jewelry crafted with passion, precision, and timeless style.</div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a target='_blank' href="https://www.facebook.com/profile.php?id=61588305457558" className="inline-flex items-center gap-2 rounded-full border border-gold/20 px-4 py-2 text-sm hover:bg-gold/10 transition">
              <MessageCircle className="w-4 h-4" />
              Facebook
            </a>
            <a target='_blank' href="https://instagram.com/sk_jewelry_handmade/" className="inline-flex items-center gap-2 rounded-full border border-gold/20 px-4 py-2 text-sm hover:bg-gold/10 transition">
              <Camera className="w-4 h-4" />
              Instagram
            </a>
              
            <a target='_blank' href="https://wa.me/923001234567" className="inline-flex items-center gap-2 rounded-full border border-gold/20 px-4 py-2 text-sm hover:bg-gold/10 transition">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
        
        <div>
          <div className="font-semibold text-gold text-lg mb-4">Quick Links</div>
          <ul className="space-y-3 text-sm text-cream/80">
            <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-gold transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            <li><Link to="/custom" className="hover:text-gold transition">Custom Jewelry</Link></li>
          </ul>
        </div>
        
        <div>
          <div className="font-semibold text-gold text-lg mb-4">Contact</div>
          <div className="space-y-4 text-sm text-cream/80">
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
              <span>Available across premium malls and artisan markets</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 text-cream/70 text-sm py-4 text-center border-t border-gold/10">© 2026 SK Jewelry Handmade. All Rights Reserved.</div>
    </footer>
  )
}
