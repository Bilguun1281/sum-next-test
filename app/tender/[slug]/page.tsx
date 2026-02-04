import Link from "next/link"
import { Calendar, Clock, DollarSign } from "lucide-react"
import { tenderData } from "@/features/tender/api"
import TenderCard from "@/components/TenderCard"

type Props = { params: { slug: string } }

export default async function TenderDetailPage({ params }: Props) {
const { slug } = await params;
const tender = tenderData.find((t) => t.slug === slug)


  if (!tender) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-500">Тендер олдсонгүй</p>
        <Link href="/tender" className="mt-4 inline-block text-blue-600 hover:underline">
          Буцах
        </Link>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mt-10">
        <Link href="/" className="hover:underline">Нүүр</Link>
        <span>/</span>
        <Link href="/tender" className="hover:underline">Тендерийн урилга</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{tender.title}</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900">{tender.title}</h1>

      {/* Info */}
      <div className="flex flex-wrap gap-6 mt-4 text-gray-700">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>Хугацаа: {tender.deadline}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          <span>Төсөв: {tender.budget}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full font-semibold ${
              tender.status === "active"
                ? "bg-green-100 text-green-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {tender.status === "active" ? "Нээлттэй" : "Хаагдсан"}
          </span>
        </div>
      </div>

      {/* Description / Details */}
      <article className="prose prose-lg text-gray-700 max-w-none mt-6">
        {tender.content
          ? tender.content
          : "Тендерийн дэлгэрэнгүй мэдээлэл одоогоор байхгүй байна."}
      </article>

      {/* Related tenders */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Бусад тендерүүд</h2>
        <ul className="flex flex-col gap-4">
          {tenderData
            .filter((t) => t.slug !== tender.slug)
            .map((t) => (
              <TenderCard
                    key={t.slug}
                    title={t.title}
                    status={t.status}
                    deadline={t.deadline}
                    budget={t.budget} slug={""}              />
            ))}
        </ul>
      </div>
    </main>
  )
}
