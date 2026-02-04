// components/LawCard.tsx
"use client"

import { Calendar, FileText } from "lucide-react"
import Link from "next/link"
import { LawDoc } from "../types"

type Props = {
  doc: LawDoc
}

export default function LawCard({ doc }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mb-2">
          {doc.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
      </div>
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" /> {doc.date}
        </div>
        <Link
          href={doc.link}
          target="_blank"
          className="flex items-center gap-1 text-green-600 hover:underline"
        >
          <FileText className="w-4 h-4" /> Мэдээлэл
        </Link>
      </div>
    </div>
  )
}
