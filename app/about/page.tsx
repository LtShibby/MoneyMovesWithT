'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const journey = [
  {
    title: 'Professional MMA Career',
    description: 'Competed at the highest levels of mixed martial arts, learning the importance of preparation and protection.',
  },
  {
    title: 'Financial Education',
    description: 'Studied financial planning and insurance to help others protect their future and build wealth.',
  },
  {
    title: 'Insurance Advisor',
    description: 'Now helping clients make strategic financial decisions with the same discipline and dedication I brought to fighting.',
  },
]

const values = [
  {
    title: 'Discipline',
    description: 'Consistent action and commitment to long-term goals.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Strategy',
    description: 'Careful planning and execution for optimal results.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Protection',
    description: 'Ensuring your financial future is secure.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Growth',
    description: 'Building wealth and securing your legacy.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
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

export default function About() {
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
              From the Cage to Your Corner
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl"
            >
              From professional fighter to financial strategist — I help clients win with discipline, protection, and smart moves.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <hr className="border-accent/20" />

      {/* Story Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="section"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">The Fighter's Mindset</h2>
              <p className="text-gray-600 mb-4">
                As a professional MMA fighter, I learned that success comes from careful planning, disciplined execution, and protecting yourself from unexpected challenges. These same principles apply to financial planning and life insurance.
              </p>
              <p className="text-gray-600 mb-4">
                In the cage, you need to be prepared for anything. The same is true in life. That's why I'm passionate about helping people protect their financial future and build lasting wealth through strategic insurance solutions.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/champImage.jpg"
                alt="MMA Champion"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <hr className="my-12 border-accent/20" />

      {/* Journey Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="section bg-gray-50"
      >
        <div className="container">
          <motion.h2 
            variants={fadeInUp}
            className="heading-lg text-center mb-12"
          >
            The Journey
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((step, index) => (
              <motion.div 
                key={step.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-display text-accent mb-4">
                    {index + 1}
                  </div>
                  <h3 className="heading-sm mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <hr className="my-12 border-accent/20" />

      {/* Values Section */}
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
            My Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div 
                key={value.title}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 mx-auto mb-4 text-accent">
                  {value.icon}
                </div>
                <h3 className="heading-sm mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
          <h2 className="heading-lg mb-6">Ready to Learn More About Insurance?</h2>
          <p className="text-xl mb-8">
            Discover how I can help protect your financial future with strategic insurance solutions.
          </p>
          <Link 
            href="/insurance"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn About Insurance
          </Link>
        </div>
      </motion.section>
    </div>
  )
} 