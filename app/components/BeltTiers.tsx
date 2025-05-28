'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const beltTiers = [
  {
    name: "White Belt: Risk Awareness",
    color: "bg-gray-100 text-black",
    features: [
      "Free consultation",
      "Basic insurance education",
      "Family risk assessment"
    ],
    cta: "Start for Free",
    calendlyEvent: "white-belt-consultation"
  },
  {
    name: "Blue Belt: Protection Plan",
    color: "bg-blue-600 text-white",
    features: [
      "Term life insurance setup",
      "Budget-friendly monthly premiums",
      "Short-term financial coverage"
    ],
    cta: "Book This Plan",
    calendlyEvent: "blue-belt-consultation"
  },
  {
    name: "Brown Belt: Wealth Builder",
    color: "bg-amber-800 text-white",
    features: [
      "Indexed universal life policy",
      "Flexible premium structure",
      "Market-linked growth potential"
    ],
    cta: "Build My Wealth",
    calendlyEvent: "brown-belt-consultation"
  },
  {
    name: "Black Belt: Legacy Mastery",
    color: "bg-black text-white",
    features: [
      "Whole life + estate strategy",
      "Guaranteed lifetime growth",
      "Generational wealth planning"
    ],
    cta: "Secure My Legacy",
    calendlyEvent: "black-belt-consultation"
  }
]

export default function BeltTiers() {
  return (
    <section className="section bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="heading-lg text-center mb-12 relative"
        >
          <span className="relative z-10">Belt-Tier Insurance Plans</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-xl" />
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {beltTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl p-6 shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-between
                ${tier.color} 
                ${index === 0 ? 'border border-gray-300' : ''}
                ${index === 1 ? 'ring-2 ring-blue-300' : ''}
                ${index === 2 ? 'ring-2 ring-amber-400' : ''}
                ${index === 3 ? 'ring-4 ring-yellow-500 shadow-2xl' : ''}
              `}
            >
              <div>
                <h3 className="heading-md mb-4 flex items-center justify-between">
                  {tier.name}
                  <span className="text-2xl ml-2">
                    {index === 0 && '🥋'}
                    {index === 1 && '💠'}
                    {index === 2 && '🥉'}
                    {index === 3 && '🥇'}
                  </span>
                </h3>
                <ul className="mb-6 space-y-3">
                  {tier.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (i * 0.1) }}
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/contact?tier=${encodeURIComponent(tier.name)}&event=${tier.calendlyEvent}`}
                className={`btn w-full font-semibold py-2 px-4 rounded transition-all duration-300
                  ${index === 0 ? 'bg-white text-black hover:bg-gray-200' : ''}
                  ${index === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90' : ''}
                  ${index === 2 ? 'bg-gradient-to-r from-amber-500 to-orange-700 text-white hover:opacity-90' : ''}
                  ${index === 3 ? 'bg-gradient-to-r from-yellow-400 to-yellow-700 text-black hover:opacity-90' : ''}
                `}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 