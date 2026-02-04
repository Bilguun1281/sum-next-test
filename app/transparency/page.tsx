// app/il-tod-baidal/page.tsx
"use client"

import { transparencyDocs } from "@/features/transparency/api"
import TransparencyCard from "@/features/transparency/components/TransparencyCard"

export default function TransparencyPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Ил тод байдал
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-3xl">
          Сумын төсөв, шийдвэр, тайлан зэрэг ил тод байдалтай холбоотой мэдээлэл.
        </p>

        {/* Transparency Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {transparencyDocs.map((doc) => (
            <TransparencyCard key={doc.title} doc={doc} />
          ))}
        </div>
      </div>
    </section>
  )
}
