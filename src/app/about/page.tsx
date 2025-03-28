import Link from 'next/link'
import GlobalCTA from '@/components/GlobalCTA'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#BADED7] to-[#E8F7F1]">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A4D48] text-center mb-12">
            About Our Approach
          </h1>
          <div className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#2A4D48] mb-4">
              The Power of Hypnotherapy for Weight Loss
            </h2>
            <p className="text-[#2A4D48] mb-6">
              Traditional diets focus on restricting what you eat, but they don&apos;t address the underlying reasons why you overeat. That&apos;s why 95% of diets fail in the long term.
            </p>
            <p className="text-[#2A4D48] mb-6">
              Hypnotherapy takes a different approach. By working directly with your subconscious mind, we can identify and resolve the root causes of your weight issues - whether that&apos;s emotional eating, stress, past trauma, or limiting beliefs.
            </p>
          </div>

          <div className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#2A4D48] mb-4">
              What to Expect
            </h2>
            <p className="text-[#2A4D48] mb-6">
              During our sessions, you&apos;ll experience a deeply relaxing state where your mind becomes more open to positive suggestions. This state allows us to:
            </p>
            <ul className="list-disc list-inside text-[#2A4D48] mb-6 space-y-2">
              <li>Reprogram negative eating patterns</li>
              <li>Build new, healthy habits</li>
              <li>Increase motivation for exercise</li>
              <li>Improve self-image and confidence</li>
              <li>Reduce stress and emotional eating</li>
            </ul>
            <p className="text-[#2A4D48]">
              The result? Natural, sustainable weight loss without the struggle of dieting.
            </p>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </main>
  )
} 