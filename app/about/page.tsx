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
              {/* Placeholder for MMA photo */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">MMA Photo Placeholder</span>
              </div>
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