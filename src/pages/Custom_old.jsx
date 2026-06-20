import React from 'react'
import { Link } from "react-router-dom";

export default function Custom() {
    return (
        <div className="min-h-screen py-16 bg-gradient-to-b from-cream to-white">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl font-elegant font-bold mb-4">Custom Jewelry</h1>
                <p className="text-gray-600 mb-6">Create one-of-a-kind pieces made to your specifications. Fill out the form or contact us to start a custom design.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">How it works</h3>
                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            <li>Share your idea or photo</li>
                            <li>We provide a design and quote</li>
                            <li>Approve and we craft your piece</li>
                        </ol>
                        <Link to="/contact">
                            <button className="mt-6 inline-block btn-luxury">Request Custom Design</button>
                        </Link>
                    </div>

                    <div className="bg-gradient-to-br from-teal to-tealLight p-6 rounded-lg text-white">
                        <h3 className="font-semibold mb-2">Inspiration</h3>
                        <p className="text-cream/90">Upload sketches or photos. Choose materials and gemstones. We'll create a digital mockup for approval.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
