import Image from 'next/image'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">From the Cage to Your Corner</h1>
            <p className="text-xl">
              My journey from professional MMA fighter to life insurance advisor has taught me valuable lessons about discipline, strategy, and protecting what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/champImage.jpg"
                alt="MMA Champion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">The Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-display text-accent mb-4">
                    {index + 1}
                  </div>
                  <h3 className="heading-sm mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">My Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-accent">
                  {value.icon}
                </div>
                <h3 className="heading-sm mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">Our Insurance Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'National Life Group (NLG)',
              'Ethos',
              'Mutual of Omaha',
              'Americo',
              'F&G'
            ].map((company) => (
              <div key={company} className="p-6 bg-white rounded-lg shadow-sm text-center">
                <h3 className="heading-sm">{company}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Check Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">No Doctor Visit Required</h2>
            <p className="text-gray-600 text-lg">
              We understand your time is valuable. That's why our health check process is designed to be quick and convenient - no doctor visits necessary. We'll work with you to find the best coverage that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-6">Get in Touch</h2>
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
            <div>
              <h2 className="heading-lg mb-6">Certified States</h2>
              <p className="text-gray-600">
                I am licensed to sell insurance in the following states:
              </p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                {['CA', 'CO', 'DE', 'FL', 'MD', 'MI', 'MN', 'NY', 'NC', 'OH', 'PA', 'SC', 'SD', 'WY'].map((state) => (
                  <div key={state} className="bg-gray-50 p-2 rounded text-center">
                    {state}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

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
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Strategy',
    description: 'Careful planning and execution for optimal results.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Protection',
    description: 'Ensuring your financial future is secure.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Growth',
    description: 'Building wealth and securing your legacy.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
] 