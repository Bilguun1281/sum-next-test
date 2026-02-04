import Link from "next/link"

type TenderCardProps = {
  title: string
  status: "active" | "closed"
  deadline: string
  budget: string
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
    <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full border-b border-gray-200 last:border-b-0 p-4 bg-white sm:bg-transparent sm:p-0">
      
      {/* Left: Status + Deadline */}
      <div className="flex items-center justify-between sm:flex-col sm:items-start sm:w-48 gap-1">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status === "active" ? "НЭЭЛТТЭЙ" : "ХААГДСАН"}
        </span>
        <span className="text-gray-500 text-sm">{deadline}</span>
      </div>

      {/* Middle: Title + Budget */}
      <div className="flex-1 sm:px-4 mt-2 sm:mt-0">
        <h3 className="text-gray-800 font-medium leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mt-1">Төсөв: {budget}</p>
      </div>

      {/* Right: Action */}
      <div className="mt-2 sm:mt-0 sm:text-right">
        <Link
          href={`/tender/${slug}`}
          className="inline-block w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-medium hover:bg-gray-100 transition"
        >
          Дэлгэрэнгүй
        </Link>
      </div>
    </li>
  )
}
