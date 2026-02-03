import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { NewsItem } from "@/features/news/types"

type NewsCardProps = {
  news: NewsItem
  layout?: "vertical" | "horizontal"
  className?: string
}

export default function NewsCard({
  news,
  layout = "vertical",
  className = "",
}: NewsCardProps) {
  const isHorizontal = layout === "horizontal"

  return (
    <Link
      href={`/news/${news.slug}`}
      className={`
        group block overflow-hidden rounded-2xl bg-white transition
        ${isHorizontal ? "flex items-center gap-4" : "border shadow-sm hover:shadow-lg"}
        ${className}
      `}
    >
      {/* ================= IMAGE ================= */}
      <div
        className={`
          relative flex-shrink-0 overflow-hidden
          ${isHorizontal ? "w-40 h-28 rounded-xl" : "w-full aspect-[3/2]"}
        `}
      >
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className={`
          flex flex-col justify-center
          ${isHorizontal ? "py-2 pr-2" : "px-4 pb-4 space-y-2"}
        `}
      >
        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{news.date}</span>
        </div>

        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-gray-900 group-hover:text-blue-600 transition">
          {news.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {news.description}
        </p>
      </div>
    </Link>
  )
}
