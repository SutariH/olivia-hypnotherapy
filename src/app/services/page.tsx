import Link from 'next/link'
import GlobalCTA from '@/components/GlobalCTA'

const services = [
  {
    title: "Initial Consultation",
    description: "A 30-minute session to discuss your goals and how hypnotherapy can help you achieve them.",
    duration: "30 minutes",
    price: "Free"
  },
  {
    title: "Weight Loss Program",
    description: "A comprehensive program combining hypnotherapy with behavioral techniques for sustainable weight loss.",
    duration: "6 sessions",
    price: "£600"
  },
  {
    title: "Single Session",
    description: "Individual hypnotherapy session focused on specific weight loss challenges.",
    duration: "1 hour",
    price: "£120"
  }
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#BADED7] to-[#E8F7F1]">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#D2F2E7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A4D48] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-[#2A4D48] mb-8">
            Transform your relationship with food through the power of hypnotherapy
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2A4D48] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#2A4D48] mb-6">
                  {service.description}
                </p>
                <div className="flex justify-between items-center text-[#2A4D48]">
                  <span>{service.duration}</span>
                  <span className="font-semibold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </main>
  )
} 