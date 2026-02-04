"use client"

import { zdtsTabs, zdtsSections } from "@/features/zdt-gazar/api"
import { useState } from "react"

export default function ZDTGPage() {
  const [activeTab, setActiveTab] = useState(zdtsTabs[0]?.key || "")
  const activeTabData = zdtsTabs.find((t) => t.key === activeTab)

  return (
    <section className="bg-muted min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Засаг даргын Тамгын газар
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-3xl">
          Засаг даргын Тамгын газрын дүрэм, бүтэц, албан хаагчдын мэдээлэл болон чухал баримт бичгүүд.
        </p>

        {/* Responsive Tabs Layout */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Left: Tabs */}
          <div className="md:w-1/4">
            {/* Horizontal scroll on mobile, vertical on md+ */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible scrollbar-hide">
              {zdtsTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`
                    group relative flex items-center gap-3 w-max md:w-full px-5 py-3 rounded-xl text-left text-sm md:text-base font-medium transition
                    shadow-sm hover:shadow-md
                    ${activeTab === tab.key 
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900"}
                  `}
                >
                  {/* Active tab left bar */}
                  <span
                    className={`
                      absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all
                      ${activeTab === tab.key ? "bg-blue-600" : "bg-transparent"}
                    `}
                  />
                  {/* Icon */}
                  {tab.icon && (
                    <tab.icon
                      className={`w-5 h-5 transition-colors ${
                        activeTab === tab.key ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    />
                  )}
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-3/4">
            {activeTabData && (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-12 transition-all duration-200">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
                  {activeTabData.icon && <activeTabData.icon className="w-5 h-5 text-gray-500" />}
                  {activeTabData.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{activeTabData.content}</p>
              </div>
            )}

            {/* Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {zdtsSections.map((section) => (
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

        </div>
      </div>
    </section>
  )
}
