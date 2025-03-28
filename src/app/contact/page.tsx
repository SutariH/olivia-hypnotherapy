import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import GlobalCTA from '@/components/GlobalCTA'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#BADED7] to-[#E8F7F1] pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#D2F2E7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A4D48] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#2A4D48] mb-8">
            Take the first step towards your transformation today
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>

      <GlobalCTA />
    </main>
  )
} 