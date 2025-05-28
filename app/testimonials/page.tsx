import Image from 'next/image'

export default function Testimonials() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Client Success Stories</h1>
            <p className="text-xl">
              Hear from people who have worked with me to secure their financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    {/* Placeholder for profile photo */}
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-2xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
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
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">More Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex mb-4">
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
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    {/* Placeholder for profile photo */}
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container text-center">
          <h2 className="heading-lg mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the many satisfied clients who have secured their financial future with Money Moves with T.
          </p>
          <a
            href="/contact"
            className="btn bg-white text-accent hover:bg-gray-100"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}

const featuredTestimonials = [
  {
    name: 'John D.',
    title: 'Business Owner',
    content: 'Theoren helped me understand exactly what I needed for my family\'s future. His MMA background brings a unique perspective to financial planning, and his strategic approach to insurance solutions has been invaluable.',
    result: 'Secured comprehensive coverage for his family and business.',
  },
  {
    name: 'Sarah M.',
    title: 'Healthcare Professional',
    content: 'Working with Theoren was a game-changer. He made complex insurance concepts easy to understand and helped me make confident decisions about my financial future. His dedication to client success is unmatched.',
    result: 'Implemented a comprehensive insurance strategy that protects her family and builds wealth.',
  },
]

const testimonials = [
  {
    name: 'Michael R.',
    title: 'Entrepreneur',
    content: 'As a business owner, I needed someone who could think strategically. Theoren\'s approach to insurance planning is as calculated as his fighting style.',
  },
  {
    name: 'Lisa K.',
    title: 'Real Estate Agent',
    content: 'Theoren\'s expertise in life insurance has been crucial for my financial planning. He helped me find the perfect balance of protection and growth.',
  },
  {
    name: 'David T.',
    title: 'Tech Professional',
    content: 'I was skeptical about life insurance until I met Theoren. His clear explanations and strategic approach made all the difference.',
  },
  {
    name: 'Jennifer L.',
    title: 'Small Business Owner',
    content: 'Theoren\'s background in MMA gives him a unique perspective on risk management. He helped me protect my business and family.',
  },
  {
    name: 'Robert M.',
    title: 'Retired Military',
    content: 'Theoren\'s disciplined approach to financial planning is exactly what I needed. He helped me secure my family\'s future.',
  },
  {
    name: 'Emily S.',
    title: 'Medical Professional',
    content: 'Working with Theoren has been a game-changer for my financial planning. His expertise in life insurance is unmatched.',
  },
] 