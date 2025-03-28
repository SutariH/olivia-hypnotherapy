import Link from 'next/link'
import GlobalCTA from '@/components/GlobalCTA'

// This is an example blog post. In a real implementation, data would come from a database or CMS.
const blogPost = {
  id: 1,
  title: "Why Diets Don't Work Long-Term",
  content: `
    Traditional diets are one of the most common ways people try to lose weight, but studies show that 95% of them fail in the long term. Why is this?

    Problems with Diets:

    1. They Focus on Symptoms, Not Root Causes
    - Most diets only focus on restricting food intake
    - They don't address the psychological factors behind eating behaviors
    - Emotional eating and stress management are ignored

    2. Restrictive Mindset
    - Strict rules and prohibitions often trigger a backlash
    - The "forbidden fruit" effect can lead to binge eating
    - Feelings of guilt and shame make it difficult to maintain a healthy relationship with food

    3. Unsustainable Changes
    - Extreme dietary changes are difficult to maintain
    - Body metabolism slows down as a result of drastic dieting
    - Return to "normal" often leads to weight regain

    The Hypnotherapy Solution:

    Hypnotherapy approaches weight management holistically:
    - Working with the subconscious to change deeply rooted beliefs
    - Addressing factors behind emotional eating
    - Creating a positive relationship with food and your body
    - Building sustainable, healthy habits without force or restrictions

    The Result:
    When working with the mind, weight management becomes a natural part of life, not a constant struggle.
  `,
  date: "2024-03-15",
  readTime: "5 min",
  category: "Weight Management",
  author: "Olivia"
}

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#BADED7] to-[#E8F7F1]">
      <article className="max-w-4xl mx-auto px-4 py-20">
        <Link 
          href="/blog"
          className="inline-block mb-8 text-[#2A4D48] hover:underline"
        >
          ← Back to Blog
        </Link>

        <div className="bg-[#D2F2E7] p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <span className="inline-block bg-[#BADED7] text-[#2A4D48] px-3 py-1 rounded-full text-sm mb-4">
              {blogPost.category}
            </span>
            <h1 className="text-4xl font-bold text-[#2A4D48] mb-4">
              {blogPost.title}
            </h1>
            <div className="flex items-center text-[#2A4D48] text-sm mb-8">
              <span>{blogPost.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span className="mx-2">•</span>
              <span>{blogPost.readTime} read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {blogPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-[#2A4D48] mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <GlobalCTA />
    </main>
  )
} 