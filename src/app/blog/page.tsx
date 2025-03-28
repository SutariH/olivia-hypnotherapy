import Link from 'next/link'
import GlobalCTA from '@/components/GlobalCTA'

const blogPosts = [
  {
    id: 1,
    title: "Miksi laihdutuskuurit eivät toimi pitkällä aikavälillä?",
    excerpt: "Tutkimme syitä siihen, miksi perinteiset laihdutuskuurit epäonnistuvat ja miten hypnoterapia tarjoaa kestävämmän ratkaisun painonhallintaan.",
    date: "2024-03-15",
    readTime: "5 min",
    category: "Painonhallinta"
  },
  {
    id: 2,
    title: "Tunnesyöminen ja sen voittaminen hypnoterapian avulla",
    excerpt: "Miten tunnistaa tunnesyömisen merkit ja kuinka hypnoterapia voi auttaa käsittelemään tunteita terveellisemmällä tavalla.",
    date: "2024-03-10",
    readTime: "7 min",
    category: "Tunnesyöminen"
  },
  {
    id: 3,
    title: "Alitajunnan voima painonpudotuksessa",
    excerpt: "Tutki kanssamme, miten alitajunta vaikuttaa syömistottumuksiimme ja miten voimme valjastaa sen painonhallinnan tueksi.",
    date: "2024-03-05",
    readTime: "6 min",
    category: "Hypnoterapia"
  },
  {
    id: 4,
    title: "Stressinhallinta ja painonpudotus",
    excerpt: "Stressi voi olla merkittävä este painonpudotukselle. Lue, miten hypnoterapia auttaa stressinhallinnassa ja tukee painonhallintaa.",
    date: "2024-02-28",
    readTime: "4 min",
    category: "Stressi"
  }
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#BADED7] to-[#E8F7F1]">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#D2F2E7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A4D48] mb-6">
            Blogi
          </h1>
          <p className="text-xl text-[#2A4D48] mb-8">
            Hyödyllisiä artikkeleita painonhallinnasta ja hypnoterapiasta
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-[#BADED7] text-[#2A4D48] px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <div className="text-[#2A4D48] text-sm">
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-[#2A4D48] mb-4">
                  {post.title}
                </h2>
                <p className="text-[#2A4D48] mb-6">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#2A4D48] text-sm">
                    {new Date(post.date).toLocaleDateString('fi-FI', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#2A4D48] font-semibold hover:underline"
                  >
                    Lue lisää →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </main>
  )
} 