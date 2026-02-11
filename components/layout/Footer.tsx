"use client"

import { GlobalSettings, Statistic } from "@/types"
import {
  MapPin,
  Users,
  Activity,
  Building2,
  CreditCard,
  Briefcase,
  ExternalLink,
  LucideIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"

/* ------------------ STAT ICON MAP ------------------ */
const statIconMap: Record<string, LucideIcon> = {
  map: MapPin,
  users: Users,
  activity: Activity,
  building: Building2,
  credit: CreditCard,
  briefcase: Briefcase,
}

/* ------------------ SOCIAL ICON MAP ------------------ */
const socialIconMap: Record<string, LucideIcon> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
}

type FooterProps = {
  globals?: GlobalSettings
}

export default function Footer({ globals }: FooterProps) {
  const stats: Statistic[] = globals?.Statistics || []
  const socialLinks = globals?.social_links || []

  return (
    <footer className="bg-[#0B1220] text-gray-200">
      <div className="container mx-auto px-4">

        {/* ================= STATISTICS ================= */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 py-12 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon ? statIconMap[stat.icon] : null

              return (
                <div key={index} className="space-y-2">
                  {Icon && <Icon className="w-8 h-8 mx-auto text-blue-500" />}
                  <p className="text-xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              )
            })}
          </div>
        )}

        <div className="border-t border-white/10" />

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Сумын тухай</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/taniltsuulga" className="hover:text-blue-400">Танилцуулга</Link></li>
              <li><Link href="/zahirgaa" className="hover:text-blue-400">Засаг захиргаа</Link></li>
              <li><Link href="/baiguullaga" className="hover:text-blue-400">Байгууллагууд</Link></li>
              <li><Link href="/news" className="hover:text-blue-400">Мэдээ мэдээлэл</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Төрийн үйлчилгээ</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["https://e-mongolia.mn", "E-Mongolia"],
                ["https://ebarimt.mn", "Ebarimt"],
                ["https://itax.mta.mn", "iTax"],
                ["https://1212.mn", "1212.mn"],
              ].map(([url, label]) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    className="inline-flex items-center gap-1 hover:text-blue-400"
                  >
                    {label} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Холбоо барих</h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-4">
              <li>📍 {globals?.contact_address || "Сумын төв, Аймаг"}</li>
              <li>☎️ {globals?.contact_phone || "7711-0000"}</li>
              <li>✉️ {globals?.contact_email || "info@soum.gov.mn"}</li>
              <li>🕘 Даваа – Баасан 09:00–18:00</li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.platform.toLowerCase()]
                if (!Icon) return null

                return (
                  <Link
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600"
                  >
                    <Icon size={18} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        {/* ================= BOTTOM ================= */}
        <div className="py-6 text-center text-xs text-gray-400">
          © 2026 {globals?.site_name || "Сумын Засаг Даргын Тамгын Газар"}.
          Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </div>
    </footer>
  )
}
