import Link from "next/link"

const tabs = [
  { label: "Танилцуулга", value: "taniltsuulga" },
  { label: "Сумын билэгдэл", value: "sumyn-bilegdel" },
  { label: "Алдартнууд", value: "aldartnuud" },
  { label: "Түүхэн дурсгалт газрууд", value: "tuuhen-dursgalt-gazuud" },
  { label: "Байгалийн үзэсгэлэн газрууд", value: "baigaliin-uzesgelen-gazuud" },
  { label: "Нутгийн удирдлага", value: "nutgiin-udirdlaga" },
]

export default async function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { tab: string }
}) {
  const { tab } = await params

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* Modern Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(t => {
          const active = tab === t.value
          return (
            <Link
              key={t.value}
              href={`/about/${t.value}`}
              className={`
                px-5 py-2 text-sm font-semibold transition
                rounded-full
                ${active
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700"}
              `}
            >
              {t.label}
            </Link>
          )
        })}
      </div>

      {/* Page Content */}
      {children}
    </div>
  )
}
