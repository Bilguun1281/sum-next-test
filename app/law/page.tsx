// app/huuli-erh-zui/page.tsx
"use client"

import { lawDocs, lawLinks } from "@/features/law/api"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LawPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Хууль эрх зүй
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Сумын хууль эрх зүй, дүрэм, журам болон албан ёсны шийдвэрийн мэдээлэл. Та хүссэн баримт бичгээ PDF татаж авах эсвэл холбогдох вэбсайтаар орж үзэх боломжтой.
          </p>
        </div>

        {/* Law Documents Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">
            Баримт бичгүүд
          </h2>

          <ul className="space-y-4">
            {lawDocs.map((doc) => (
              <li key={doc.title} className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row md:items-center justify-between hover:shadow-lg transition">
                {/* Left: Info */}
                <div className="flex-1 mb-4 md:mb-0">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mb-2">
                    {doc.category}
                  </span>
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">{doc.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{doc.description}</p>
                  <p className="text-gray-500 text-xs">Огноо: {doc.date}</p>
                </div>

                {/* Right: Download Button */}
                <div className="flex-shrink-0">
                  <Link
                    href={doc.link}
                    target="_blank"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition"
                  >
                    <FileText className="w-4 h-4" /> PDF татах
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-gray-500" /> Холбоосууд
          </h2>

          <ul className="space-y-3">
            {lawLinks.map((link) => (
              <li
                key={link.url}
                className="bg-white rounded-xl shadow p-4 flex items-center gap-3 hover:shadow-lg transition"
              >
                {/* Icon */}
                {link.icon && (
                  <div className="w-10 h-10 relative flex-shrink-0 rounded-full overflow-hidden bg-gray-100">
                    <Image src={link.icon} alt={link.label} fill className="object-contain p-1" />
                  </div>
                )}

                {/* Link Text */}
                <Link
                  href={link.url}
                  target="_blank"
                  className="flex-1 text-blue-600 font-medium hover:underline flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
