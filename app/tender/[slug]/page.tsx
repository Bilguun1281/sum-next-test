import Link from "next/link"
import { Clock, DollarSign, Download, FileText } from "lucide-react"
import { getTenderBySlug } from "@/features/tender/api"
import { DirectusFile } from "@/types"

type Props = { params: Promise<{ slug: string }> }

export default async function TenderDetailPage({ params }: Props) {
  const { slug } = await params

  /* ================= FETCH MAIN TENDER ================= */
  const tender = await getTenderBySlug(slug)
  if (!tender) return <p>Тендер олдсонгүй</p>

  /* ================= CONTENT ================= */
  const contentHtml =
    typeof tender.content === "string" ? tender.content : JSON.stringify(tender.content)

    const getPdfUrl = (file?: DirectusFile) =>
  file
    ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${file.directus_files_id}`
    : "";
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">

      {/* ================= BREADCRUMB ================= */}
      <nav className="text-sm text-gray-500 mt-10">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-blue-600">Нүүр</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/tender" className="hover:text-blue-600">Тендерийн урилга</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium line-clamp-1">{tender.title}</li>
        </ol>
      </nav>

      {/* ================= TITLE & META ================= */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{tender.title}</h1>

        <div className="flex items-center gap-4 text-gray-700 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Хугацаа: {tender.deadline}</span>
          </div>

          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>Төсөв: {tender.budget}</span>
          </div>

          <span
            className={`px-2 py-1 rounded-full font-semibold ${
              tender.status === "active"
                ? "bg-green-100 text-green-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {tender.status === "active" ? "Нээлттэй" : "Хаагдсан"}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Дэлгэрэнгүй мэдээлэл</h2>
        <article
          className="prose prose-lg max-w-none text-gray-700 bg-white p-6 rounded-xl shadow"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>

      {/* ================= FILES ================= */}

{tender?.files && tender.files.length > 0 && (
  <section className="mt-10">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      Тендэрийн бичиг баримт
    </h2>

    <ul className="divide-y rounded-lg border border-gray-200">
      {tender.files.map((file) => (
        <li
          key={file.id}
          className="flex items-center justify-between gap-4 p-4 hover:bg-gray-50"
        >
          {/* Left: file info */}
          <div className="flex items-center gap-3 min-w-0">
            <FileText className="w-5 h-5 text-gray-500 shrink-0" />

            <div className="min-w-0">
              <a
                href={getPdfUrl(file)}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate font-medium text-gray-900 hover:underline"
              >
                {file.filename_download || "Тендерийн баримт"}
              </a>

              {/* Meta info */}
              <p className="text-sm text-gray-500">
                {file.type?.toUpperCase() || "PDF"}
                {file.filesize && (
                  <span className="ml-2">
                    • {(file.filesize / 1024 / 1024).toFixed(1)} MB
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Right: download button */}
          <a
            href={getPdfUrl(file)}
            download
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <Download className="w-4 h-4" />
            Татах
          </a>
        </li>
      ))}
    </ul>
  </section>
)}

    </main>
  )
}
