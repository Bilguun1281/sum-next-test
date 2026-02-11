import Image from "next/image"
import { notFound } from "next/navigation"
import { Mail, Phone, Clock, Globe, MapPin } from "lucide-react"
import { organizationsData } from "@/features/baiguullaga/api"
import Link from "next/link"

type Props = {
  params: { slug: string }
}

export default async function OrganizationDetailPage({ params }: Props) {
  // unwrap params
  const { slug } = await params

  const org = organizationsData.find(o => o.slug === slug)

  if (!org) return notFound()

  return (
    <div className="bg-gray-50">
{/* HERO */}
<section className="relative -top-16 h-100">
  <Image
    src={org.logo}
    alt={org.name}
    fill
    priority
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 h-full flex items-end pb-10 ">
    <div className="container mx-auto px-4 pb-8 text-white space-y-3">



      {/* Category */}
      <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs">
        {org.categoryName}
      </span>

      <h1 className="text-3xl md:text-4xl font-bold">
        {org.name}
      </h1>
            {/* Breadcrumb */}
      <nav className="text-sm text-white/80">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:underline">
              Нүүр
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/baiguullaga" className="hover:underline">
              Байгууллагууд
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/baiguullaga?category=${org.category}`}
              className="hover:underline"
            >
              {org.categoryName}
            </Link>
          </li>
          <li>/</li>
          <li className="text-white font-medium truncate max-w-[200px]">
            {org.name}
          </li>
        </ol>
      </nav>
    </div>
  </div>
</section>


      {/* CONTENT */}
      <section className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Бидний тухай</h2>
            <p className="text-gray-700 leading-relaxed">{org.description}</p>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Үндсэн үйлчилгээ</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {org.services?.map((item) => (
                <div
                  key={item.name}
                  className="border rounded-xl p-4 hover:border-blue-500 transition"
                >
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              )) || (
                <p className="text-gray-500 text-sm">Үйлчилгээний мэдээлэл байхгүй байна.</p>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* Contact */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-semibold mb-4">Холбоо барих</h3>
            <div className="space-y-3 text-sm text-gray-700">
              {org.phone && (
                <div className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 text-blue-600" /> {org.phone}
                </div>
              )}
              {org.email && (
                <div className="flex gap-2 items-center">
                  <Mail className="w-4 h-4 text-blue-600" /> {org.email}
                </div>
              )}
              {org.website && (
                <div className="flex gap-2 items-center">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <a
                    href={org.website}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Вебсайт
                  </a>
                </div>
              )}
              {org.workingHours && (
                <div className="flex gap-2 items-center">
                  <Clock className="w-4 h-4 text-blue-600" /> {org.workingHours}
                </div>
              )}
              {org.address && (
                <div className="flex gap-2 items-center">
                  <MapPin className="w-4 h-4 text-blue-600" /> {org.address}
                </div>
              )}
            </div>
          </div>

          {/* Action */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white">
            <h3 className="font-semibold mb-2">Үйлчилгээ хүсэх</h3>
            <p className="text-sm opacity-90 mb-4">Онлайнаар хүсэлт илгээнэ үү</p>
            <button className="w-full bg-white text-blue-600 py-2 rounded-xl font-medium hover:bg-blue-50 transition">
              Цахим хүсэлт илгээх
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
