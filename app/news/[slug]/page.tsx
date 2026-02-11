import Image from "next/image"
import Link from "next/link"
import { Calendar, Facebook, Twitter, Link as LinkIcon } from "lucide-react"
import NewsCard from "@/components/NewsCard"
import { getNewsBySlug, getAllNews } from "@/features/news/api"
import { getAssetUrl } from "@/lib/utils"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params

  /* ================= FETCH MAIN NEWS ================= */
  const news = await getNewsBySlug(slug)
  if (!news) return <p>Мэдээ олдсонгүй</p>

  /* ================= FETCH RELATED NEWS ================= */
  const { data: relatedNews } = await getAllNews({
    category: news.category,
    limit: 4,
  })

  const filteredRelated = relatedNews
    .filter((n) => n.slug !== news.slug)
    .slice(0, 3)

  const shareUrl = `https://your-domain.mn/news/${news.slug}`

  const formattedDate = new Date(news.date_created).toLocaleDateString("mn-MN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="container mx-auto px-4 py-8 space-y-12">

      {/* ================= BREADCRUMB ================= */}
      <nav className="text-sm text-gray-500 mt-10">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Нүүр
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/news" className="hover:text-blue-600">
              Мэдээ
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium line-clamp-1">
            {news.title}
          </li>
        </ol>
      </nav>

      {/* ================= TITLE ================= */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {news.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
          <span>· {news.category}</span>
        </div>
      </div>

      {/* ================= IMAGE ================= */}
      {news.image && (
        <div className="relative w-full h-105 rounded-2xl overflow-hidden">
          <Image
            src={getAssetUrl(news.image.id)}
            alt={news.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <article
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />

      {/* ================= SHARE ================= */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-600">
          Хуваалцах:
        </span>

        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90"
        >
          <Facebook size={18} />
        </Link>

        <Link
          href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
          target="_blank"
          className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90"
        >
          <Twitter size={18} />
        </Link>

        <Link
          href={shareUrl}
          className="h-10 w-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300"
        >
          <LinkIcon size={18} />
        </Link>
      </div>

      {/* ================= RELATED NEWS ================= */}
      {filteredRelated.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Холбоотой мэдээ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredRelated.map((item) => (
              <NewsCard key={item.slug} news={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
