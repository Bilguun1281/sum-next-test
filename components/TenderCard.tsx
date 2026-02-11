import Link from "next/link"

type TenderStatus = "active" | "closed"

type TenderCardProps = {
  title: string
  status: TenderStatus
  deadline?: string | null
  budget?: number | string | null
  slug: string
}

export default function TenderCard({
  title,
  status,
  deadline,
  budget,
  slug,
}: TenderCardProps) {
  return (
    <li className="group grid grid-cols-1 gap-3 border-b border-gray-200 py-4 sm:grid-cols-[180px_1fr_140px] sm:items-center">
      
      {/* LEFT — STATUS */}
      <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-2">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status === "active" ? "НЭЭЛТТЭЙ" : "ХААГДСАН"}
        </span>

        {deadline && (
          <span className="text-sm text-gray-500">
            📅 {new Date(deadline).toLocaleDateString("mn-MN")}
          </span>
        )}
      </div>

      {/* MIDDLE — CONTENT */}
      <div>
        <h3 className="text-base font-medium text-gray-900 leading-snug group-hover:underline">
          {title}
        </h3>

        {budget && (
          <p className="mt-1 text-sm text-gray-500">
            Төсөв:{" "}
            <span className="font-medium text-gray-700">
              {typeof budget === "number"
                ? budget.toLocaleString("mn-MN")
                : budget}
            </span>
          </p>
        )}
      </div>

      {/* RIGHT — ACTION */}
      <div className="text-left sm:text-right">
        <Link
          href={`/tender/${slug}`}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:border-gray-400"
        >
          Дэлгэрэнгүй
        </Link>
      </div>
    </li>
  )
}
