import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-primary text-white">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              From the Cage to Your Financial Future
            </h1>
            <p className="text-xl mb-8">
              Former MMA fighter turned life insurance advisor, helping you make the right money moves for your future.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Insurance Call
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
      </section>

      {/* Services Preview */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">Insurance Solutions That Work For You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="heading-sm mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-accent hover:text-accent-light">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">What My Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: 'Indexed Universal Life',
    description: 'Build wealth while protecting your loved ones with flexible premium payments and potential market-linked growth.',
  },
  {
    title: 'Whole Life Insurance',
    description: 'Lifetime coverage with guaranteed cash value growth and fixed premiums that never increase.',
  },
  {
    title: 'Term Life Insurance',
    description: 'Affordable protection for a specific period, perfect for covering temporary needs like mortgages or education.',
  },
]

const testimonials = [
  {
    name: 'John D.',
    content: 'Theoren helped me understand exactly what I needed for my family\'s future. His MMA background brings a unique perspective to financial planning.',
  },
  {
    name: 'Sarah M.',
    content: 'Working with Theoren was a game-changer. He made complex insurance concepts easy to understand and helped me make confident decisions.',
  },
  {
    name: 'Michael R.',
    content: 'As a business owner, I needed someone who could think strategically. Theoren\'s approach to insurance planning is as calculated as his fighting style.',
  },
] 