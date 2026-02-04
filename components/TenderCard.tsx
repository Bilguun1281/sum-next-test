import Link from "next/link"

type TenderCardProps = {
  title: string
  status: "active" | "closed"
  deadline: string
  budget: string
  slug: string // <-- add slug here
}

export default function TenderCard({
  title,
  status,
  deadline,
  budget,
  slug,
}: TenderCardProps) {
  return (
    <li className="flex items-center justify-between w-full border-b border-gray-200 py-4 last:border-b-0">
      {/* Left: Status */}
      <div className="flex flex-col items-start w-40 sm:w-48">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status === "active" ? "НЭЭЛТТЭЙ" : "ХААГДСАН"}
        </span>
        <span className="text-gray-500 text-sm mt-1">{deadline}</span>
      </div>

      {/* Middle: Title & Budget */}
      <div className="flex-1 px-4">
        <h3 className="text-gray-800 font-medium">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">Төсөв: {budget}</p>
      </div>

      {/* Right: Action */}
      <div>
        <Link
          href={`/tender/${slug}`} // <-- link to detailed page
          className="button outline px-4 py-1 text-sm"
        >
          Дэлгэрэнгүй
        </Link>
      </div>
    </li>
  )
}
