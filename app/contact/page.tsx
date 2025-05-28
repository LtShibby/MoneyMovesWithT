'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  tier: string
  event: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

function ContactForm() {
  const searchParams = useSearchParams()
  const [tier, setTier] = useState('')
  const [event, setEvent] = useState('')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    tier: '',
    event: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const t = searchParams.get('tier')
    const e = searchParams.get('event')
    if (t) {
      setTier(t)
      setFormData(prev => ({ ...prev, tier: t }))
    }
    if (e) {
      setEvent(e)
      setFormData(prev => ({ ...prev, event: e }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const calendlyUrl = new URL('https://calendly.com/thor-moneymoveswitht/30min')

      // Add required fields
      calendlyUrl.searchParams.set('name', formData.name)
      calendlyUrl.searchParams.set('email', formData.email)
      
      // Add custom fields
      calendlyUrl.searchParams.set('a1', tier || formData.tier || 'Not Specified') // Insurance Plan
      calendlyUrl.searchParams.set('a2', formData.phone) // Phone Number
      calendlyUrl.searchParams.set('a3', formData.message) // Additional Information

      // Redirect to Calendly
      window.location.href = calendlyUrl.toString()
    } catch (error) {
      console.error('Redirect failed:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
            placeholder="Tell us about your goals and any specific questions you have..."
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Redirecting...' : 'Schedule Your Call'}
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default function Contact() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="relative py-20 bg-primary text-white"
      >
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Get in Touch</h1>
            <p className="text-xl">
              Have questions about life insurance or financial planning? I'm here to help you make the right moves for your future.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:315-523-8118" className="text-accent hover:text-accent-dark">
                    315-523-8118
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:theoren2001@gmail.com" className="text-accent hover:text-accent-dark">
                    theoren2001@gmail.com
                  </a>
                </p>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.facebook.com/share/12GkfePaMJ9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/theorenzzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Certified States Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-lg mb-6">Certified States</h2>
            <p className="text-gray-600 mb-8">
              I am licensed to sell insurance in the following states:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['CA', 'CO', 'DE', 'FL', 'MD', 'MI', 'MN', 'NY', 'NC', 'OH', 'PA', 'SC', 'SD', 'WY'].map((state) => (
                <div key={state} className="bg-white p-3 rounded-lg shadow-sm text-accent font-semibold">
                  {state}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 