import React from 'react'
import { Sparkles, ShieldCheck, Diamond, Package, Clock3, Heart } from 'lucide-react'

const faqs = [
  {q: 'What materials do you use for custom jewelry?', a: 'We work with gold, silver, rose gold, brass, gemstones, pearls, and crystals. Every piece is selected for quality and crafted to last.'},
  {q: 'Can I request a fully custom design?', a: 'Yes — share your idea, photo, or sketch, and our design team will create a personalized mockup and price estimate for approval.'},
  {q: 'How long does a custom order take?', a: 'Custom jewelry usually takes 10-14 business days, depending on materials and detailing. Express options are available on request.'},
  {q: 'Do you offer styling guidance?', a: 'Absolutely! We can help choose the right finish, stone combination, and design style to match your look and occasion.'},
  {q: 'What is your care recommendation for jewelry?', a: 'Keep pieces dry, avoid perfumes near them, and store in a soft pouch. Regular gentle cleaning helps preserve their shine.'},
  {q: 'Do you ship internationally?', a: 'Yes — international shipping is available with tracking. Delivery times vary by destination and customs processing.'}
]

const faqBenefits = [
  {icon: <Sparkles className="w-5 h-5" />, title: 'Handcrafted Details', desc: 'Each jewel is made with care and premium finishing.'},
  {icon: <ShieldCheck className="w-5 h-5" />, title: 'Trusted Quality', desc: 'We use trusted materials and inspect every order.'},
  {icon: <Diamond className="w-5 h-5" />, title: 'Premium Materials', desc: 'Choose from gold, silver, gemstone, and more.'},
  {icon: <Package className="w-5 h-5" />, title: 'Secure Delivery', desc: 'Tracked shipping with careful packaging.'}
]

export default function FAQ(){
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-cream to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="rounded-[2rem] border border-gold/10 bg-gradient-to-br from-white to-gold/10 p-10 shadow-2xl shadow-gold/10">
            <div className="inline-flex items-center gap-3 rounded-full bg-teal/10 px-4 py-2 text-sm font-semibold text-teal mb-6">
              <Sparkles className="w-4 h-4" /> Premium FAQ
            </div>
            <h1 className="text-5xl font-elegant font-bold leading-tight text-teal">Frequently Asked Questions</h1>
            <p className="mt-6 max-w-2xl text-gray-700 text-lg">Answers to the most common questions about our handmade jewelry, custom process, styling help, and premium care.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {faqBenefits.map((item,i) => (
                <div key={i} className="rounded-3xl border border-gold/15 bg-white/90 p-5 shadow-lg shadow-gold/5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-teal mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-teal mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group overflow-hidden rounded-[1.5rem] border border-gold/15 bg-white/90 p-6 shadow-xl shadow-gold/5 transition hover:-translate-y-1 duration-300">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-teal">
                  <span>{f.q}</span>
                  <span className="text-gold group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
