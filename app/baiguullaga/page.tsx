import { organizationsData } from "@/features/baiguullaga/api";
import OrganizationCard from "@/features/baiguullaga/components/OrganizationCard";
import { OrgCategory } from "@/features/baiguullaga/types";
import Link from "next/link"

// Mapping from OrgCategory to human-readable categoryName
const categoryMap: Record<OrgCategory, string> = {
  school: "Ерөнхий боловсролын сургууль",
  kindergarten: "Цэцэрлэг",
  health: "Эрүүл мэндийн төв",
  culture: "Соёлын төв",
  government: "Засгийн газар",
  other: "Бусад",
};

const categories: { label: string; value: OrgCategory | "all" }[] = [
  { label: "Бүгд", value: "all" },
  { label: "Ерөнхий боловсролын сургууль", value: "school" },
  { label: "Цэцэрлэг", value: "kindergarten" },
  { label: "Эрүүл мэндийн төв", value: "health" },
  { label: "Соёлын төв", value: "culture" },
];

type Props = {
  searchParams?: {
    category?: OrgCategory | "all"
  }
}

export default function OrganizationPage({ searchParams }: Props) {
  const selectedCategory = searchParams?.category ?? "all";

  const filteredOrgs =
    selectedCategory === "all"
      ? organizationsData
      : organizationsData.filter(
          (o) => o.categoryName === categoryMap[selectedCategory as OrgCategory]
        );

  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Нүүр</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Байгууллагууд</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900">Байгууллагууд</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <Link
              key={cat.value}
              href={`/baiguullaga${cat.value !== "all" ? `?category=${cat.value}` : ""}`}
              className={`
                px-4 py-1.5 rounded-full text-sm border transition
                ${isActive ? "bg-blue-600 text-white border-blue-600" : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              {cat.label}
            </Link>
          )
        })}
      </div>

      {/* Organization Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredOrgs.map((org) => (
          <OrganizationCard key={org.slug} org={org} />
        ))}

        {filteredOrgs.length === 0 && (
          <p className="text-center text-gray-500 py-16">
            Энэ ангилалд байгууллага байхгүй байна.
          </p>
        )}
      </div>
    </main>
  )
}
