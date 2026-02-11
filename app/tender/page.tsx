import Link from "next/link"
import TenderCard from "@/components/TenderCard"
import { getAllTenders } from "@/features/tender/api"

type Props = {
  searchParams?: {
    status?: "active" | "closed" | "all"
  }
}

export default async function TenderPage({ searchParams }: Props) {
  const statusFilter = searchParams?.status ?? "all"

  // ✅ Fetch tenders from API
  const allTendersResponse =
    statusFilter === "all"
      ? await getAllTenders()
      : await getAllTenders({ status: statusFilter })

  // Extract the array
  const tenders = allTendersResponse.data

  return (
    <main className="container mx-auto px-4 py-8 space-y-6">

      {/* ================= BREADCRUMB ================= */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mt-10">
        <Link href="/" className="hover:underline">Нүүр</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Тендерийн урилга</span>
      </nav>

      {/* ================= TITLE ================= */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Тендерийн урилга
      </h1>

      {/* ================= FILTER BAR ================= */}
      <div className="flex gap-2 mb-6">
        {(["all", "active", "closed"] as const).map((status) => {
          const isActive = statusFilter === status
          const label =
            status === "all"
              ? "Бүгд"
              : status === "active"
              ? "Нээлттэй"
              : "Хаагдсан"

          return (
            <Link
              key={status}
              href={`/tender${status !== "all" ? `?status=${status}` : ""}`}
              className={`
                rounded-full px-4 py-1.5 text-sm border transition
                ${isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              {label}
            </Link>
          )
        })}
      </div>

      {/* ================= TENDER LIST ================= */}
      <ul className="flex flex-col gap-4 mb-10">
        {tenders.length > 0 ? (
          tenders.map((tender) => (
            <TenderCard
              key={tender.slug}
              title={tender.title}
              status={tender.status}
              deadline={tender.deadline}
              budget={tender.budget}
              slug={tender.slug}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-16">
            Энэ төрлийн тендер байхгүй байна.
          </p>
        )}
      </ul>
    </main>
  )
}
