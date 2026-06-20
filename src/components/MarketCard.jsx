import React from 'react'

export default function MarketCard({title,desc,icon}){
  return (
    <div className="bg-white p-4 rounded shadow-md flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="w-14 h-14 bg-gradient-to-br from-gold to-goldDark flex items-center justify-center rounded text-lg font-bold text-teal">
        {icon||'M'}
      </div>
      <div>
        <div className="font-semibold text-teal">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
    </div>
  )
}
