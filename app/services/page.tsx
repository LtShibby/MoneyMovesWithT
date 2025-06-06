'use client'

import Link from 'next/link'
import BeltTiers from '../components/BeltTiers'
import { motion, type Variants } from 'framer-motion'
import { FaComments, FaLightbulb, FaClipboardCheck, FaRocket } from 'react-icons/fa'

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Insurance Solutions</h1>
            <p className="text-xl">
              Customized insurance strategies to protect your future and build lasting wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Belt Tier System */}
      <BeltTiers />

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-accent flex-shrink-0 mr-2"
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
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-medium mb-2">Perfect for:</h3>
                    <p className="text-gray-600">{service.perfectFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container">
          <motion.div
            variants={fadeInDown}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-2">Your Financial Training Sequence</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Every great fighter needs a great corner. Here's how we coach you through the process.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center transition-transform duration-500 ease-out hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent text-white rounded-full flex items-center justify-center text-xl relative z-10">
                    {index === 0 && <FaComments className="w-6 h-6" />}
                    {index === 1 && <FaLightbulb className="w-6 h-6" />}
                    {index === 2 && <FaClipboardCheck className="w-6 h-6" />}
                    {index === 3 && <FaRocket className="w-6 h-6" />}
                  </div>
                  <h3 className="heading-sm mb-3 font-bold">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full transform -translate-x-1/2 w-12 h-0.5 bg-accent z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container text-center">
          <h2 className="heading-lg mb-6">Ready to Protect Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your goals and create a customized insurance strategy that works for you.
          </p>
          <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: 'Indexed Universal Life',
    description: 'A flexible life insurance policy that combines death benefit protection with potential cash value growth tied to market indexes.',
    benefits: [
      'Flexible premium payments',
      'Potential for cash value growth',
      'Tax-deferred growth',
      'Death benefit protection',
      'No direct market risk',
    ],
    perfectFor: 'Individuals seeking both protection and growth potential, with flexibility in premium payments.',
  },
  {
    title: 'Whole Life Insurance',
    description: 'Permanent life insurance with guaranteed cash value growth and fixed premiums that never increase.',
    benefits: [
      'Lifetime coverage',
      'Guaranteed cash value growth',
      'Fixed premiums',
      'Dividend potential',
      'Tax advantages',
    ],
    perfectFor: 'Those looking for stable, predictable coverage with guaranteed growth and premium stability.',
  },
  {
    title: 'Term Life Insurance',
    description: 'Affordable life insurance coverage for a specific period, providing financial protection when you need it most.',
    benefits: [
      'Lower initial premiums',
      'Simple coverage',
      'Convertible options',
      'Flexible term lengths',
      'Easy to understand',
    ],
    perfectFor: 'Individuals needing temporary coverage for specific financial obligations or family protection.',
  },
]

const process = [
  {
    title: 'Initial Consultation',
    description: 'We will discuss your goals, needs, and current financial situation.',
  },
  {
    title: 'Strategy Development',
    description: 'I will create a customized insurance strategy tailored to your specific needs.',
  },
  {
    title: 'Policy Selection',
    description: 'Together, we will choose the right insurance products for your situation.',
  },
  {
    title: 'Implementation',
    description: 'I will guide you through the application process and help you get started.',
  },
] 