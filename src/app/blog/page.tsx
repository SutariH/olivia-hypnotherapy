import Link from 'next/link'
import GlobalCTA from '@/components/GlobalCTA'

const blogPosts = [
  {
    id: 1,
    title: "Why Diets Don't Work Long-Term",
    excerpt: "Explore why traditional diets fail and how hypnotherapy offers a more sustainable approach to weight management.",
    date: "2024-03-15",
    readTime: "5 min",
    category: "Weight Management"
  },
  {
    id: 2,
    title: "Overcoming Emotional Eating Through Hypnotherapy",
    excerpt: "Learn how to identify signs of emotional eating and how hypnotherapy can help you develop healthier ways to process emotions.",
    date: "2024-03-10",
    readTime: "7 min",
    category: "Emotional Eating"
  },
  {
    id: 3,
    title: "The Power of the Subconscious in Weight Loss",
    excerpt: "Discover how your subconscious mind influences your eating habits and how we can harness it for successful weight management.",
    date: "2024-03-05",
    readTime: "6 min",
    category: "Hypnotherapy"
  },
  {
    id: 4,
    title: "Stress Management and Weight Loss",
    excerpt: "Understand how stress can be a major barrier to weight loss and how hypnotherapy helps in managing stress effectively.",
    date: "2024-02-28",
    readTime: "4 min",
    category: "Stress Management"
  }
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#BADED7] to-[#E8F7F1]">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#D2F2E7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A4D48] mb-6">
            Blog
          </h1>
          <p className="text-xl text-[#2A4D48] mb-8">
            Helpful articles about weight management and hypnotherapy
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
                    {post.readTime} read
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
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#2A4D48] font-semibold hover:underline"
                  >
                    Read more →
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