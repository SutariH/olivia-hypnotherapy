import Link from 'next/link'
import GlobalCTA from '@/components/GlobalCTA'

// Tämä on esimerkki blogikirjoituksesta. Oikeassa toteutuksessa data tulisi tietokannasta tai CMS:stä.
const blogPost = {
  id: 1,
  title: "Miksi laihdutuskuurit eivät toimi pitkällä aikavälillä?",
  content: `
    Perinteiset laihdutuskuurit ovat yksi yleisimmistä tavoista yrittää pudottaa painoa, mutta tutkimukset osoittavat, että 95% niistä epäonnistuu pitkällä aikavälillä. Miksi näin on?

    Laihdutuskuurien ongelmat:

    1. Ne keskittyvät vain oireisiin, eivät juurisyihin
    - Useimmat laihdutuskuurit keskittyvät vain ruokavalion rajoittamiseen
    - Ne eivät käsittele syömiskäyttäytymisen taustalla olevia psykologisia tekijöitä
    - Tunnesyöminen ja stressinsäätely jäävät huomiotta

    2. Rajoittava ajattelutapa
    - Tiukat säännöt ja kiellot laukaisevat usein vastareaktion
    - "Kielletty hedelmä" -efekti voi johtaa ahmimiseen
    - Syyllisyyden ja häpeän tunteet vaikeuttavat tervettä suhdetta ruokaan

    3. Kestämättömät muutokset
    - Äärimmäiset ruokavaliomuutokset ovat vaikeita ylläpitää
    - Kehon aineenvaihdunta hidastuu rajun laihduttamisen seurauksena
    - Paluu "normaaliin" johtaa usein painon takaisin nousuun

    Hypnoterapian tarjoama ratkaisu:

    Hypnoterapia lähestyy painonhallintaa kokonaisvaltaisesti:
    - Työskennellään alitajunnan kanssa muuttaen syvälle juurtuneita uskomuksia
    - Käsitellään tunnesyömisen taustalla olevia tekijöitä
    - Luodaan positiivinen suhde ruokaan ja omaan kehoon
    - Rakennetaan kestäviä, terveellisiä tapoja ilman pakkoa ja rajoituksia

    Lopputulos:
    Kun työskennellään mielen kanssa, painonhallinnasta tulee luonnollinen osa elämää, ei jatkuvaa taistelua.
  `,
  date: "2024-03-15",
  readTime: "5 min",
  category: "Painonhallinta",
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
          ← Takaisin blogiin
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
              <span>{new Date(blogPost.date).toLocaleDateString('fi-FI', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span className="mx-2">•</span>
              <span>{blogPost.readTime} lukuaika</span>
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