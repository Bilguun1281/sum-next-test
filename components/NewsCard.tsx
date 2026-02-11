import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { News } from "@/features/news/types"
import { getAssetUrl } from "@/lib/utils"

type NewsCardProps = {
  news: News
  layout?: "vertical" | "horizontal"
  className?: string
}

export default function NewsCard({
  news,
  layout = "vertical",
  className = "",
}: NewsCardProps) {
  const isHorizontal = layout === "horizontal"

  // Format date_created
  const formattedDate = new Date(news.date_created).toLocaleDateString("mn-MN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  // Resolve image URL from Directus
  const imageSrc = news.image?.filename_disk
    ? getAssetUrl(news.image.filename_disk)
    : null

  return (
    <Link
      href={`/news/${news.slug}`}
      className={`
        group block overflow-hidden rounded-2xl bg-white transition
        ${isHorizontal ? "flex items-start gap-4 p-3 hover:bg-gray-50" : "border shadow-sm hover:shadow-lg"}
        ${className}
      `}
    >
      {/* ================= IMAGE ================= */}
      <div
        className={`
          relative shrink-0 overflow-hidden
          ${isHorizontal ? "w-40 h-28 rounded-xl" : "w-full aspect-3/2"}
        `}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={news.title}
            fill={isHorizontal ? false : true}
            width={isHorizontal ? 160 : undefined}
            height={isHorizontal ? 112 : undefined}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium">
            No image available
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className={`
          flex flex-col justify-start
          ${isHorizontal ? "flex-1 py-1 pr-2" : "px-4 pb-4 pt-3 space-y-2"}
        `}
      >
        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>

        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-gray-900 group-hover:text-blue-600 transition">
          {news.title}
        </h3>

        {news.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
            {news.description}
          </p>
        )}
      </div>
    </Link>
  )
}
