import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F6FFF8] to-[#CCE3DE] pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#F6FFF8]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6B9080] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#6B9080]/80">
            Book your free consultation or ask any questions about our services
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#6B9080] mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#6B9080] mb-2">Phone</h3>
                  <p className="text-[#6B9080]/80">+358 44 985 3101</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#6B9080] mb-2">Email</h3>
                  <p className="text-[#6B9080]/80">olivia.io@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F6FFF8] p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#6B9080] mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 