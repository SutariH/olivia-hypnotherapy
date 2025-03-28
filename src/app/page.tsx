import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5390d9] to-[#F6FFF8]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Peaceful meditation background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F6FFF8] mb-6">
            Transform Your Body, Transform Your Life
          </h1>
          <p className="text-xl md:text-2xl text-[#F6FFF8] mb-8">
            Discover a proven method to achieve sustainable weight loss and lasting change
          </p>
          <Link
            href="/contact"
            className="bg-[#5390d9] text-[#F6FFF8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4380c9] transition-colors"
          >
            Start Your Weight Loss Journey
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Weight Loss Program?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-pink-50">
              <h3 className="text-xl font-semibold mb-4">Sustainable Results</h3>
              <p className="text-gray-600">Achieve lasting weight loss by addressing the root causes of overeating and emotional eating.</p>
            </div>
            <div className="p-6 rounded-lg bg-pink-50">
              <h3 className="text-xl font-semibold mb-4">No Dieting Required</h3>
              <p className="text-gray-600">Learn to naturally make healthier choices without restrictive diets or counting calories.</p>
            </div>
            <div className="p-6 rounded-lg bg-pink-50">
              <h3 className="text-xl font-semibold mb-4">Stress Reduction</h3>
              <p className="text-gray-600">Reduce stress and emotional eating through powerful relaxation techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Your Weight Loss Expert</h2>
              <p className="text-lg text-gray-700 mb-6">
                With years of experience in helping clients achieve their weight loss goals, 
                I understand the challenges you face and know how to help you overcome them.
              </p>
              <p className="text-lg text-gray-700">
                My proven approach combines behavioral psychology with powerful mind-body techniques 
                to create lasting change in your life.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/therapist.jpg"
                alt="Professional Weight Loss Expert"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Take the first step towards a healthier, happier you with our proven weight loss program
          </p>
          <Link
            href="/contact"
            className="bg-[#5390d9] text-[#F6FFF8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4380c9] transition-colors"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
