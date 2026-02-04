"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Нүүр", href: "/" },
  { label: "Сумын тухай", href: "/about" },
  { label: "Мэдээ мэдээлэл", href: "/news" },
  { label: "ИТХ", href: "/ith" },
  { label: "Засаг дарга", href: "/zasag-darga" },
  { label: "ЗДТГазар", href: "/zdt-gazar" },
  { label: "Хууль эрх зүй", href: "/law" },
  { label: "Байгууллагууд", href: "/baiguullaga" },
  { label: "Ил тод байдал", href: "/transparency" },
  { label: "Test", href: "/test" },

]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <div className="w-full bg-white border-b shadow-sm">
        <div className="mx-auto max-w-6xl px-4 h-24 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Soum logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>
            <div>
              <h1 className="text-2xl xl:text-3xl font-bold leading-tight">Сумын нэр</h1>
              <span className="block text-sm xl:text-md text-gray-600">Аймгийн нэр</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Action buttons – ≥1280 */}
            <div className="hidden xl:flex items-center gap-2">
              <button className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100">
                Санал хүсэлт
              </button>
              <button className="rounded-full bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700">
                Хүний нөөц
              </button>
            </div>

            {/* Burger menu – <1280 */}
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden inline-flex items-center justify-center rounded-lg border border-blue-900 bg-blue-900 p-2 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR (≥1280) ================= */}
      <header className="sticky top-2 z-50 w-full">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4">
          <nav className="hidden xl:flex items-center gap-1 bg-blue-900 px-3 py-2 rounded-full">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm px-4 py-2 rounded-full transition
                    ${isActive ? "bg-white text-blue-900 font-semibold shadow" : "text-white hover:bg-white/20"}
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      {/* ================= MOBILE / TABLET MENU LEFT SIDEBAR ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-2 px-4 py-6">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-blue-100 text-blue-900" : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Overlay when sidebar open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
