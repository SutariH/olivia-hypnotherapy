import Link from 'next/link'

export default function GlobalCTA() {
  return (
    <section className="py-16 px-4 bg-[#BADED7]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2A4D48] mb-4">Ready to Transform Your Life?</h2>
        <p className="text-lg text-[#2A4D48] mb-6">
          Book your free consultation today and take the first step towards a healthier you
        </p>
        <Link
          href="/contact"
          className="bg-[#2A4D48] text-[#E8F7F1] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1A3D38] transition-colors inline-block"
        >
          Book Your Free Consultation
        </Link>
      </div>
    </section>
  )
} 