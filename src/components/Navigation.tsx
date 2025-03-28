import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-[#BADED7] shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-[#2A4D48] text-xl font-bold">
            Olivia
          </Link>
          <div className="flex space-x-8">
            <Link href="/about" className="text-[#2A4D48] hover:text-[#1A3D38]">
              About
            </Link>
            <Link href="/services" className="text-[#2A4D48] hover:text-[#1A3D38]">
              Services
            </Link>
            <Link href="/blog" className="text-[#2A4D48] hover:text-[#1A3D38]">
              Blog
            </Link>
            <Link href="/contact" className="text-[#2A4D48] hover:text-[#1A3D38]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 