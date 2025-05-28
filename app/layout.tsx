import type { Metadata } from 'next'
import { Montserrat, Anton } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: 'Money Moves with T | Theoren Thorn - Life Insurance Advisor',
  description: 'Former MMA fighter turned life insurance advisor helping you secure your financial future with expert guidance and personalized solutions.',
  keywords: ['life insurance', 'financial planning', 'MMA fighter', 'Theoren Thorn', 'insurance advisor'],
  openGraph: {
    title: 'Money Moves with T | Theoren Thorn',
    description: 'Former MMA fighter turned life insurance advisor helping you secure your financial future.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${anton.variable}`}>
      <body className="min-h-screen bg-white font-sans">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 