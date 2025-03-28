import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5390d9] to-[#F6FFF8]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F6FFF8] mb-6">
            About Olivia Hypnotherapy
          </h1>
          <p className="text-xl md:text-2xl text-[#F6FFF8] mb-8">
            Dedicated to helping you achieve lasting transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#5390d9] mb-6">My Journey</h2>
            <p className="text-gray-700 mb-4">
              With years of experience in hypnotherapy, I specialize in helping clients achieve their weight loss goals and transform their lives. My approach combines proven hypnotherapy techniques with personalized support to create lasting change.
            </p>
            <p className="text-gray-700 mb-4">
              I understand the challenges of weight loss and emotional eating, and I'm here to guide you through your transformation journey with compassion and expertise.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#5390d9] mb-6">My Approach</h2>
            <p className="text-gray-700 mb-4">
              I believe in creating a safe and supportive environment where you can explore and overcome the root causes of your weight-related challenges. Through hypnotherapy, we'll work together to reprogram limiting beliefs and establish healthy habits.
            </p>
            <p className="text-gray-700 mb-4">
              My methods are evidence-based and tailored to your unique needs, ensuring you receive the most effective support for your personal transformation.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-[#5390d9] text-[#F6FFF8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4380c9] transition-colors"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </main>
  )
} 