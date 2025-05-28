'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const companies = [
  {
    name: 'National Life Group (NLG)',
    description: 'A leading provider of life insurance and annuity solutions.',
  },
  {
    name: 'Ethos',
    description: 'Modern life insurance with a simple, digital-first approach.',
  },
  {
    name: 'Mutual of Omaha',
    description: 'Trusted provider of insurance and financial products for over 100 years.',
  },
  {
    name: 'Americo',
    description: 'Specialized insurance solutions for diverse needs.',
  },
  {
    name: 'F&G',
    description: 'Innovative life insurance and annuity products.',
  },
]

const certifiedStates = [
  'CA', 'CO', 'DE', 'FL', 'MD', 'MI', 'MN', 'NY', 'NC', 'OH', 'PA', 'SC', 'SD', 'WY'
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Insurance() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="relative py-32 bg-primary text-white"
      >
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1 
              variants={fadeInUp}
              className="heading-xl mb-6"
            >
              Strategic Insurance Solutions
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl"
            >
              Protecting your future with the same discipline and strategy I brought to professional fighting.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <hr className="border-accent/20" />

      {/* Companies Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="section"
      >
        <div className="container">
          <motion.h2 
            variants={fadeInUp}
            className="heading-lg text-center mb-12"
          >
            Our Insurance Partners
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <motion.div 
                key={company.name}
                variants={fadeInUp}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="heading-sm mb-3">{company.name}</h3>
                <p className="text-gray-600">{company.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <hr className="my-12 border-accent/20" />

      {/* Health Check Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="section bg-gray-50"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-32 h-32 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="heading-lg mb-6">No Doctor Visit Required</h2>
              <p className="text-gray-600 text-lg">
                We understand your time is valuable. That's why our health check process is designed to be quick and convenient - no doctor visits necessary. We'll work with you to find the best coverage that fits your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <hr className="my-12 border-accent/20" />

      {/* Certified States Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="section"
      >
        <div className="container">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-lg mb-6">Certified States</h2>
            <p className="text-gray-600 mb-8">
              I am licensed to sell insurance in the following states:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {certifiedStates.map((state) => (
                <div key={state} className="bg-white p-3 rounded-lg shadow-sm text-accent font-semibold">
                  {state}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="section bg-primary text-white"
      >
        <div className="container text-center">
          <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can protect your financial future together.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </motion.section>
    </div>
  )
} 