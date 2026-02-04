import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Clock, Globe } from "lucide-react"
import { Organization } from "../types"

type Props = { org: Organization }

export default function OrganizationCard({ org }: Props) {
  return (
    <Link
      href={`/baiguullaga/${org.slug}`}
      className="group flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
    >
      {/* Top image */}
      <div className="relative w-full h-40 md:h-44">
        <Image
          src={org.logo}
          alt={org.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Category */}
        {org.categoryName && (
          <span className="text-xs text-blue-600 font-medium">{org.categoryName}</span>
        )}

        {/* Name */}
        <h3 className="text-base font-semibold text-gray-900">{org.name}</h3>

        {/* Description */}
        {org.description && (
          <p className="text-gray-600 text-sm line-clamp-3">{org.description}</p>
        )}

        {/* Contact info */}
        <div className="flex flex-col gap-1 mt-1 text-gray-700 text-sm">
          {org.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-gray-400" /> {org.phone}
            </div>
          )}
          {org.email && (
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-gray-400" /> {org.email}
            </div>
          )}
          {org.website && (
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-gray-400" />
              <a href={org.website} target="_blank" className="text-blue-600 hover:underline">
                Вебсайт
              </a>
            </div>
          )}
        </div>

        {/* Working hours */}
        {org.workingHours && (
          <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" /> {org.workingHours}
          </div>
        )}
      </div>
    </Link>
  )
}
