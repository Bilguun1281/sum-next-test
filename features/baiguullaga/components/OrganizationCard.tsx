import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Clock } from "lucide-react"
import { Organization } from "../types"

type Props = { org: Organization }

export default function OrganizationCard({ org }: Props) {
  return (
    <Link
      href={`/organization/${org.slug}`}
      className="group flex flex-col p-4 border rounded-xl shadow-sm hover:shadow-md transition"
    >
      {/* Logo */}
      <div className="relative w-20 h-20 mb-3 mx-auto">
        <Image src={org.logo} alt={org.name} fill className="object-contain" />
      </div>

      {/* Category */}
      <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full mb-1 inline-block">
        {org.categoryName}
      </span>

      {/* Name */}
      <h3 className="text-sm font-bold text-gray-800 mb-1 text-center">{org.name}</h3>

      {/* Description */}
      <p className="text-gray-600 text-xs line-clamp-3 mb-2 text-center">{org.description}</p>

      {/* Contact info */}
      <div className="flex flex-col gap-1 text-gray-700 text-xs">
        {org.phone && (
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3 text-gray-500" /> {org.phone}
          </div>
        )}
        {org.email && (
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3 text-gray-500" /> {org.email}
          </div>
        )}
        {org.website && (
          <a
            href={org.website}
            target="_blank"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            Вебсайт
          </a>
        )}
      </div>

      {/* Working hours */}
      {org.workingHours && (
        <div className="flex items-center gap-1 mt-2 text-gray-500 text-xs">
          <Clock className="w-3 h-3" /> {org.workingHours}
        </div>
      )}
    </Link>
  )
}
