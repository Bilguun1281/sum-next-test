// components/StaffCard.tsx
"use client"

import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { Staff } from "../types"

type Props = {
  staff: Staff
}

export default function StaffCard({ staff }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      {/* Profile */}
      <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden ring-2 ring-blue-500">
        <Image src={staff.profile} alt={staff.name} fill className="object-cover" />
      </div>

      {/* Name & Position */}
      <h3 className="font-semibold text-lg text-gray-900">{staff.name}</h3>
      <p className="text-sm text-gray-600 mb-3">{staff.position}</p>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 my-2" />

      {/* Contact Info - full width */}
      <div className="flex flex-col gap-2 w-full text-gray-700 text-sm">
        {staff.email && (
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-xl w-full justify-start">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="truncate">{staff.email}</span>
          </div>
        )}
        {staff.phone && (
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-xl w-full justify-start">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="truncate">{staff.phone}</span>
          </div>
        )}
        {staff.office && (
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-xl w-full justify-start">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="truncate">{staff.office}</span>
          </div>
        )}
      </div>
    </div>
  )
}
