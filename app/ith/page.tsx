"use client"

import { itxTabs, itxSections } from "@/features/ith/api"
import { useState } from "react"

export default function ITXPage() {
  const [activeTab, setActiveTab] = useState(itxTabs[0].key)
  const activeTabData = itxTabs.find((t) => t.key === activeTab)

  return (
    <section className="bg-muted min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4">

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          ИТХ
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-3xl">
          Сумын Иргэдийн Төлөөлөгчдийн Хурлын үйл ажиллагаа, тогтоол, тэмдэглэл, мэндчилгээ.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 bg-gray-200 rounded-2xl shadow-sm mb-8 overflow-x-auto p-1.5">
          {itxTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl text-sm md:text-base font-medium transition ${
                activeTab === tab.key
                  ? "bg-white text-black"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTabData && (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
              {activeTabData.icon && <activeTabData.icon className="w-5 h-5 text-gray-500" />}
              {activeTabData.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {/* Replace with real content */}
              Энэ хэсэгт {activeTabData.title}-н агуулга оруулна.
            </p>
          </div>
        )}

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itxSections.map((section) => (
            <div key={section.title} className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <section.icon className="w-5 h-5 text-gray-500" />
                {section.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
