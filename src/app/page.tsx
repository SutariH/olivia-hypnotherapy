import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5390d9] to-[#F6FFF8]">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F6FFF8] mb-6">
            Transform Your Body, Transform Your Life
          </h1>
          <p className="text-xl md:text-2xl text-[#F6FFF8] mb-8">
            Discover a proven method to achieve sustainable weight loss and lasting change
          </p>
          <Link
            href="/contact"
            className="bg-[#5390d9] text-[#F6FFF8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4380c9] transition-colors inline-block"
          >
            Start Your Weight Loss Journey
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#F6FFF8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#6B9080] mb-16">Why Choose Our Weight Loss Program?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#6B9080] mb-4">Sustainable Results</h3>
              <p className="text-[#6B9080]/80">Achieve lasting weight loss by addressing the root causes of overeating and emotional eating.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#6B9080] mb-4">No Dieting Required</h3>
              <p className="text-[#6B9080]/80">Learn to naturally make healthier choices without restrictive diets or counting calories.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#6B9080] mb-4">Stress Reduction</h3>
              <p className="text-[#6B9080]/80">Reduce stress and emotional eating through powerful relaxation techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#EAF4F4]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#6B9080] mb-6">Your Weight Loss Expert</h2>
            <p className="text-lg text-[#6B9080]/80 mb-6">
              With years of experience in hypnotherapy, I specialize in helping clients achieve their weight loss goals through proven techniques and personalized support.
            </p>
            <p className="text-lg text-[#6B9080]/80">
              My approach combines traditional hypnotherapy with modern understanding of behavioral psychology to create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#F6FFF8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6B9080] mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-[#6B9080]/80 mb-8">
            Book your free consultation today and take the first step towards a healthier you
          </p>
          <Link
            href="/contact"
            className="bg-[#5390d9] text-[#F6FFF8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4380c9] transition-colors inline-block"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
