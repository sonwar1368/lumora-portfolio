'use client'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { useState } from 'react'

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <>
      {showConfetti && <Confetti recycle={false} numberOfPieces={600} />}
      
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Lumora
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mt-8 max-w-lg">
              The most beautiful & high-converting landing page you'll ever need.
            </p>
            <button 
              onClick={() => setShowConfetti(true)}
              className="mt-12 px-10 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Early Access →
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 blur-3xl opacity-40 animate-pulse"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl h-96 flex items-center justify-center text-white text-5xl font-bold">
                LIVE DEMO
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Why Choose Lumora?</h2>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {['Blazing Fast', '100% Responsive', 'SEO Optimized'].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl border border-white/30">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
