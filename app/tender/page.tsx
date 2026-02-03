import TenderCard from "@/components/TenderCard"
import { tenderData } from "@/features/tender/api"

type Props = {
  searchParams?: {
    status?: "active" | "closed" | "all"
  }
}

export default async function TenderPage({ searchParams }: Props) {
  const statusFilter = searchParams?.status ?? "all"

  // Filter tenders based on status
  const filteredTenders =
    statusFilter === "all"
      ? tenderData
      : tenderData.filter((t) => t.status === statusFilter)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Тендерийн урилга</h1>

      {/* ================= FILTER BAR ================= */}
      <div className="flex gap-2 mb-6">
        {(["all", "active", "closed"] as const).map((status) => {
          const isActive = statusFilter === status
          const label =
            status === "all" ? "Бүгд" : status === "active" ? "Нээлттэй" : "Хаагдсан"

          return (
            <a
              key={status}
              href={`/tender${status !== "all" ? `?status=${status}` : ""}`}
              className={`
                rounded-full px-4 py-1.5 text-sm border transition
                ${isActive ? "bg-blue-600 text-white border-blue-600" : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              {label}
            </a>
          )
        })}
      </div>

      {/* ================= TENDER LIST ================= */}
      <ul className="flex flex-col gap-4">
        {filteredTenders.map((tender) => (
          <TenderCard
            key={tender.slug}
            title={tender.title}
            status={tender.status}
            deadline={tender.deadline}
            budget={tender.budget}
          />
        ))}

        {filteredTenders.length === 0 && (
          <p className="text-center text-gray-500 py-16">Энэ төрлийн тендер байхгүй байна.</p>
        )}
      </ul>
    </main>
  )
}
