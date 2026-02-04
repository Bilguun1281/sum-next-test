"use client"

import { useState } from "react"
import { tabs } from "@/features/about/api"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].key)

  const activeTabData = tabs.find((t) => t.key === activeTab)

  return (
    <section className="bg-muted min-h-screen md:py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Сумын тухай
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-3xl">
          Сумын түүхэн замнал, байгаль газар зүй, бүтэц зохион байгуулалт болон хөгжлийн бодлогын талаарх мэдээлэл.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 bg-gray-200 rounded-2xl shadow-sm mb-8 overflow-x-auto p-1">
          {tabs.map((tab) => (
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
              {/* Add tab-specific content here */}
              Энэ хэсэгт {activeTabData.content}-н агуулга оруулна.
            </p>
          </div>
        )}


      </div>
    </section>
  )
}
