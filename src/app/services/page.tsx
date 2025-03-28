import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Weight Loss Hypnotherapy",
      description: "Transform your relationship with food and achieve sustainable weight loss through powerful subconscious reprogramming.",
      duration: "60-90 minutes",
      price: "€150",
      image: "/weight-loss.jpg"
    },
    {
      title: "Emotional Eating Therapy",
      description: "Address the root causes of emotional eating and develop healthy coping mechanisms for stress and anxiety.",
      duration: "60 minutes",
      price: "€120",
      image: "/emotional-eating.jpg"
    },
    {
      title: "Stress Management",
      description: "Learn powerful relaxation techniques and stress management strategies to improve your overall well-being.",
      duration: "45 minutes",
      price: "€100",
      image: "/stress-management.jpg"
    },
    {
      title: "Confidence Building",
      description: "Boost your self-esteem and develop a positive self-image through guided hypnosis sessions.",
      duration: "60 minutes",
      price: "€120",
      image: "/confidence.jpg"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F6FFF8] to-[#CCE3DE] pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#F6FFF8]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6B9080] mb-6">
            Professional Hypnotherapy Services
          </h1>
          <p className="text-xl text-[#6B9080]/80">
            Discover our range of specialized hypnotherapy services designed to help you achieve your goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F6FFF8] rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#6B9080] mb-4">{service.title}</h3>
                  <p className="text-[#6B9080]/80 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-[#6B9080]/70">
                      <span className="font-semibold">Duration:</span> {service.duration}
                    </div>
                    <div className="text-2xl font-bold text-[#5390d9]">
                      {service.price}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#5390d9] text-[#F6FFF8] px-6 py-3 rounded-full hover:bg-[#5390d9]/80 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#F6FFF8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#6B9080] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-[#CCE3DE] pb-6">
              <h3 className="text-xl font-semibold text-[#6B9080] mb-2">How many sessions will I need?</h3>
              <p className="text-[#6B9080]/80">The number of sessions varies depending on your individual goals and progress. Most clients see significant results within 4-6 sessions.</p>
            </div>
            <div className="border-b border-[#CCE3DE] pb-6">
              <h3 className="text-xl font-semibold text-[#6B9080] mb-2">Is hypnotherapy safe?</h3>
              <p className="text-[#6B9080]/80">Yes, hypnotherapy is completely safe. You remain in control throughout the session and can come out of hypnosis at any time.</p>
            </div>
            <div className="border-b border-[#CCE3DE] pb-6">
              <h3 className="text-xl font-semibold text-[#6B9080] mb-2">What happens during a session?</h3>
              <p className="text-[#6B9080]/80">Sessions begin with a consultation to discuss your goals, followed by guided relaxation and therapeutic suggestions tailored to your needs.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-[#6B9080] mb-2">Do you offer online sessions?</h3>
              <p className="text-[#6B9080]/80">Yes, we offer both in-person and online sessions for your convenience. Online sessions are conducted via secure video call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#EAF4F4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#6B9080] mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-[#6B9080]/80 mb-8">
            Book your free consultation today and take the first step towards transformation
          </p>
          <Link
            href="/contact"
            className="bg-[#5390d9] text-[#F6FFF8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5390d9]/80 transition-colors"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
} 