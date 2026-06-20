import React from 'react'
import { products as allProducts } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Necklaces(){
  const necklaces = allProducts.filter(p => /necklace/i.test(p.name))
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-elegant font-bold mb-4">Necklaces</h1>
        <p className="text-gray-600 mb-8">Handpicked necklace collections</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {necklaces.map(p=> (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
