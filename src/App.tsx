import { Analytics } from '@vercel/analytics/react'
import { Hero } from './components/Hero'
import { Trust } from './components/Trust'
import { Features } from './components/Features'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background glow effect */}
      <div className="gradient-hero fixed inset-0 pointer-events-none" />

      <main className="relative z-10">
        <Hero />
        <Trust />
        <Features />
        <FAQ />
      </main>

      <Footer />
      <Analytics />
    </div>
  )
}
