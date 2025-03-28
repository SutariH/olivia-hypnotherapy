import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#BADED7] text-[#2A4D48]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Olivia Hypnotherapy</h3>
            <p className="mb-4">Transform your mind, transform your life through the power of hypnotherapy.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#1A3D38] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#1A3D38] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#1A3D38] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1A3D38] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Weight Management</li>
              <li>Emotional Eating</li>
              <li>Stress Management</li>
              <li>Confidence Building</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: olivia.io@hotmail.com</li>
              <li>Phone: +358 44 985 3101</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A4D48]/20 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Olivia Hypnotherapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 