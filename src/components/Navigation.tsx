import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-[#F6FFF8]/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-[#5390d9]">
            Olivia Hypnotherapy
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#6B9080]/80 hover:text-[#5390d9] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#6B9080]/80 hover:text-[#5390d9] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-[#6B9080]/80 hover:text-[#5390d9] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-[#6B9080]/80 hover:text-[#5390d9] transition-colors">
              Contact
            </Link>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6 text-[#5390d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 