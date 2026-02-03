import Link from "next/link"
import { ChevronRight, LayoutGrid, LayoutList } from "lucide-react"
import NewsCard from "@/components/NewsCard"
import { newsData } from "@/features/news/api"

type Props = {
  searchParams?: Promise<{
    category?: string
    layout?: "horizontal" | "vertical"
  }>
}

export default async function NewsPage({ searchParams }: Props) {
  const params = await searchParams
  const selectedCategory = params?.category
  const layout = params?.layout ?? "vertical"

  // Unique categories
  const categories = Array.from(
    new Set(newsData.map((n) => n.category))
  )

  // Filter news
  const filteredNews = selectedCategory
    ? newsData.filter((n) => n.category === selectedCategory)
    : newsData

  return (
    <main className="container mx-auto px-4 py-8 space-y-8">

      {/* ================= BREADCRUMB ================= */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mt-10">
        <Link href="/" className="hover:underline">
          Нүүр
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900 font-medium">Мэдээ</span>
      </nav>

      {/* ================= TITLE ================= */}
      <h1 className="text-3xl font-bold text-gray-900">Мэдээ</h1>

      {/* ================= FILTER BAR ================= */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/news${layout === "horizontal" ? "?layout=horizontal" : ""}`}
            className={`
              rounded-full border px-4 py-1.5 text-sm transition
              ${
                !selectedCategory
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            Бүгд
          </Link>

          {categories.map((category) => {
            const isActive = selectedCategory === category

            return (
              <Link
                key={category}
                href={`/news?category=${encodeURIComponent(category)}${
                  layout === "horizontal" ? "&layout=horizontal" : ""
                }`}
                className={`
                  rounded-full border px-4 py-1.5 text-sm transition
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }
                `}
              >
                {category}
              </Link>
            )
          })}
        </div>

        {/* Layout switch with icons */}
        <div className="flex items-center gap-2">
          <Link
            href={`/news${selectedCategory ? `?category=${encodeURIComponent(selectedCategory)}` : ""}`}
            className={`
              rounded-lg p-2 border transition flex items-center justify-center
              ${layout === "vertical" ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"}
            `}
          >
            <LayoutGrid size={18} />
          </Link>

          <Link
            href={`/news?layout=horizontal${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ""}`}
            className={`
              rounded-lg p-2 border transition flex items-center justify-center
              ${layout === "horizontal" ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"}
            `}
          >
            <LayoutList size={18} />
          </Link>
        </div>
      </div>

      {/* ================= NEWS LIST ================= */}
      <div
        className={
          layout === "horizontal"
            ? "space-y-4"
            : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        {filteredNews.map((news) => (
          <NewsCard
            key={news.slug}
            news={news}
            layout={layout === "horizontal" ? "horizontal" : "vertical"}
          />
        ))}
      </div>

      {/* ================= EMPTY STATE ================= */}
      {filteredNews.length === 0 && (
        <p className="text-center text-gray-500 py-16">
          Энэ ангилалд мэдээ байхгүй байна.
        </p>
      )}
    </main>
  )
}
