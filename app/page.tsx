import NewsCard from "@/components/NewsCard";
import TenderCard from "@/components/TenderCard";
import { newsData } from "@/features/news/api";
import { tenderData } from "@/features/tender/api";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute -inset-16 bg-[url('/images/placeholder.jpg')] bg-center bg-cover brightness-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-0">
          <span className="inline-block bg-blue-950/80 px-4 py-1 rounded-full text-sm md:text-base font-semibold mb-4">
            МОНГОЛ УЛС
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Соён сумын нутгийн өөрөө удирдах байгууллага
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
            Нутгийн хөгжил, иргэдийн оролцоог эрхэмлэн, төрийн үйлчилгээг түргэн шуурхай хүргэнэ.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a className="button px-6 py-2" href="#">Дэлгэрэнгүй</a>
            <a className="button outline px-6 py-2" href="#">Сумын танилцуулга</a>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="section py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 section-header py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Хэрэгцээт холбоос
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "Сумын тухай", href: "/sumiin-tuhai" },
              { title: "Мэдээ мэдээлэл", href: "/medee" },
              { title: "Ил тод байдал", href: "/il-tod-baidal" },
              { title: "Төсөл хөтөлбөр", href: "/tusul-hutulbur" },
              { title: "Тендер", href: "/tender" },
              { title: "Хууль, журам", href: "/huuli-juuram" },
              { title: "Өргөдөл, гомдол", href: "/urgudul-gomdol" },
              { title: "Холбоо барих", href: "/holboo-barih" },
            ].map((item) => (
              <a key={item.title} href={item.href} className="group flex items-center justify-between rounded-xl border bg-white px-5 py-4 shadow-sm hover:shadow-md transition-all">
                <span className="font-medium text-gray-800 group-hover:text-blue-900">{item.title}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-900 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* E-GOV SERVICES */}
      <section className="section py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 section-header pb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Төрийн цахим үйлчилгээнүүд
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "eBarimt", url: "https://www.ebarimt.mn", icon: "🧾", desc: "НӨАТ-ын баримт бүртгэл, сугалаа" },
              { name: "ITAX", url: "https://itax.mta.mn", icon: "📊", desc: "Татварын тайлан, төлөлт, лавлагаа" },
              { name: "GAALI", url: "https://gaali.mn", icon: "🚛", desc: "Гаалийн мэдээ, зөвшөөрөл, лавлагаа" },
              { name: "1212", url: "https://1212.mn", icon: "📞", desc: "Төрийн үйлчилгээний нэгдсэн лавлах" },
            ].map((item) => (
              <a key={item.name} href={item.url} target="_blank" className="group rounded-2xl border p-6 bg-white text-gray-800 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-200 hover:to-blue-100">
                <div className="text-3xl mb-4 transition-colors group-hover:text-white">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-1 transition-colors">{item.name}</h3>
                <p className="text-sm text-gray-600 transition-colors">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

{/* NEWS SECTION */}
<section className="section py-16 md:py-24 bg-muted">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Цаг үеийн мэдээ</h2>
      <a href="/news" className="text-blue-950 font-medium hover:underline text-sm sm:text-base">Бүх мэдээ →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {/* Left Column: Featured First News */}
      {newsData[0] && (
        <a
          href={`/news/${newsData[0].slug}`}
          className="relative group block rounded-2xl overflow-hidden shadow-lg h-full"
          style={{ minHeight: '400px' }} // ensures same minimum height
        >
          <div className="absolute inset-0">
            <Image
              src={newsData[0].image}
              alt={newsData[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30"></div>
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white z-10">
            <span className="inline-block bg-blue-600/80 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-2">
              {newsData[0].category}
            </span>
            <h2 className="text-xl md:text-3xl font-bold mb-2 line-clamp-2">
              {newsData[0].title}
            </h2>
            <p className="text-sm md:text-base line-clamp-3">
              {newsData[0].description}
            </p>
          </div>
        </a>
      )}

      {/* Right Column: Other News */}
      <div className="flex flex-col gap-4 h-full">
        {newsData.slice(1, 4).map((news) => (
          <NewsCard
            key={news.slug}
            news={news}
            layout="horizontal"
            className="flex-1" // forces each card to take equal height
          />
        ))}
      </div>
    </div>
  </div>
</section>



      {/* MAYOR SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Governor Image */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-blue-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <Image src="/images/news_2.jpg" alt="Governor" width={800} height={800} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Governor Info */}
            <div className="text-white">
              <div className="inline-block px-4 py-1.5 bg-blue-500/30 backdrop-blur-sm text-white text-sm rounded-full mb-4">ЗАСАГ ДАРГА</div>
              
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Б. Болдбаатар</h2>
            
              <p className="text-lg sm:text-xl text-blue-100 mb-6">Сумын Засаг дарга</p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
                <p className="text-base sm:text-lg leading-relaxed mb-4">&quot;Эрхэм сумынхаа иргэд та бүхэнд мэндчилгээ! Манай сумын хөгжил цэцэглэлт, иргэдийн амьдралын чанарыг сайжруулах нь миний хамгийн чухал зорилго юм.&quot;</p>
                <p className="text-blue-100 text-sm sm:text-base">Бид хамтдаа эдийн засаг, боловсрол, эрүүл мэнд, инфраструктурын салбарт тогтвортой хөгжлийг хангах, ил тод үйл ажиллагаагаар иргэдээ үйлчлэх болно.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2"><Phone className="w-5 h-5 text-blue-300" /><span className="text-sm text-blue-200">Утас</span></div>
                  <p className="font-medium">+976 xxxx-1000</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2"><Mail className="w-5 h-5 text-blue-300" /><span className="text-sm text-blue-200">Имэйл</span></div>
                  <p className="font-medium text-sm">governor@soum.gov.mn</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <a href="#" className="button px-5 py-2">Төсөл, хөтөлбөрүүд</a>
                <a href="#" className="button outline px-5 py-2">Холбоо барих</a>
                <a href="#" className="button outline px-5 py-2">Цагийн хуваарь</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TENDERS */}

<section className="section py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="section-header pb-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Тендерийн урилга</h2>
      <Link href="/tender" className="text-blue-950 font-medium hover:underline text-sm sm:text-base">Бүх тендер →</Link>
    </div>

    <div className="grid md:grid-cols-1 gap-6">
      {tenderData.map((tender) => (
        <TenderCard
          key={tender.slug}
          slug={tender.slug}
          title={tender.title}
          status={tender.status}
          deadline={tender.deadline}
          budget={tender.budget}
        />
      ))}
    </div>
  </div>
</section>

      {/* RELATED ORGANIZATIONS */}
      <section className="section py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 pb-10 md:mb-12 section-header">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Холбоотой байгууллагууд</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "Засгийн газар", href: "https://zasag.mn", logo: "/images/logo.svg" },
              { name: "Аймгийн ЗДТГ", href: "#", logo: "/images/logo.svg" },
              { name: "Татварын алба", href: "https://mta.mn", logo: "/images/logo.svg" },
              { name: "Нийгмийн даатгал", href: "https://ndaatgal.mn", logo: "/images/logo.svg" },
              { name: "Цагдаагийн газар", href: "#", logo: "/images/logo.svg" },
            ].map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="group flex flex-col items-center justify-center hover:shadow-md transition">
                <div className="relative w-20 h-20 mb-3">
                  <Image src={item.logo} alt={item.name} fill className="object-contain" />
                </div>
                <span className="text-sm text-center text-gray-700 group-hover:text-blue-900 font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
