import Link from "next/link"
import Image from "next/image"
import { organizationsData } from "@/features/baiguullaga/api"
import { Organization } from "@/features/baiguullaga/types"

type Props = { params: { slug: string } }

export default async function OrganizationDetailPage({ params }: Props) {
  const { slug } = await params
  const org: Organization | undefined = organizationsData.find((o) => o.slug === slug)

  if (!org) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-500">Байгууллага олдсонгүй</p>
        <Link href="/organization" className="mt-4 inline-block text-blue-600 hover:underline">
          Буцах
        </Link>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Нүүр</Link>
        <span>/</span>
        <Link href="/organization" className="hover:underline">Байгууллагууд</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{org.name}</span>
      </nav>

      {/* Title */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
          <Image src={org.logo} alt={org.name} fill className="object-contain rounded-xl border p-2 bg-white" />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{org.name}</h1>
          <p className="text-gray-700">{org.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {org.website && (
              <a href={org.website} target="_blank" className="text-blue-600 hover:underline">
                Вебсайт
              </a>
            )}
            {org.email && <span>Имэйл: {org.email}</span>}
            {org.phone && <span>Утас: {org.phone}</span>}
          </div>
        </div>
      </div>
    </main>
  )
}
