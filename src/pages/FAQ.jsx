import React from 'react'

const faqs = [
  {q: 'What is your return policy?', a: 'We accept returns within 14 days for unused items.'},
  {q: 'Do you make custom designs?', a: 'Yes — contact us via the Contact page to discuss custom orders.'},
  {q: 'How long does shipping take?', a: 'Shipping typically takes 5-10 business days depending on location.'}
]

export default function FAQ(){
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-cream to-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-elegant font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((f,i)=> (
            <details key={i} className="p-4 border border-gold/20 rounded-lg bg-white/60">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <div className="mt-2 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
