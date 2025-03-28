import Link from 'next/link'
import GlobalCTA from '@/components/GlobalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#BADED7] to-[#E8F7F1]">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#2A4D48] mb-6">
            Transform Your Mind, Transform Your Body, Transform Your Life
          </h1>
          <p className="text-xl md:text-2xl text-[#2A4D48] mb-8">
            Because diets don&apos;t work
          </p>
          <Link
            href="/contact"
            className="bg-[#2A4D48] text-[#E8F7F1] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1A3D38] transition-colors inline-block"
          >
            Start Your Weight Loss Journey
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#E8F7F1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2A4D48] text-center mb-12">Why Choose Hypnotherapy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards with updated colors */}
            <div className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#2A4D48] mb-4">Lasting Change</h3>
              <p className="text-[#2A4D48]">Address the root cause of weight issues through the power of your subconscious mind.</p>
            </div>
            <div className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#2A4D48] mb-4">Natural Approach</h3>
              <p className="text-[#2A4D48]">No pills, no strict diets - just the natural power of your mind to transform your body.</p>
            </div>
            <div className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#2A4D48] mb-4">Proven Results</h3>
              <p className="text-[#2A4D48]">Join countless others who have successfully transformed their relationship with food.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#BADED7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2A4D48] mb-6">Your Journey to Wellness</h2>
          <p className="text-xl text-[#2A4D48] mb-8">
            Experience a transformative approach to weight loss that works with your mind, not against it.
          </p>
          <Link
            href="/about"
            className="bg-[#2A4D48] text-[#E8F7F1] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1A3D38] transition-colors inline-block"
          >
            Learn More About Our Approach
          </Link>
        </div>
      </section>

      {/* Global CTA */}
      <GlobalCTA />
    </main>
  )
}
