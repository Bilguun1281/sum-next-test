import NewsCard from "@/components/NewsCard";
import TenderCard from "@/components/TenderCard";
import { getEgovServices, getHomeData, getQuickLinks, getRelatedOrganizations } from "@/features/home/api";
import { getLatestNews } from "@/features/news/api";
import { getLatestTenders } from "@/features/tender/api";
import { getAssetUrl } from "@/lib/utils";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";




export default async function HomePage() {

  const newsData = await getLatestNews(4);
  const tenders = await getLatestTenders(4)


const [homeDataRes, quickLinksRes, egovRes, relatedOrgsRes] = await Promise.allSettled([
  getHomeData(),
  getQuickLinks(),
  getEgovServices(),
  getRelatedOrganizations() 
]);


    // ================= SAFE DATA =================
const homeData =
  homeDataRes.status === "fulfilled" ? homeDataRes.value : null

const egovServices =
  egovRes.status === "fulfilled" 
        ? (egovRes.value ?? []).filter((p) => p.logo?.filename_disk)
      : [];
const quickLinks =
  quickLinksRes.status === "fulfilled" ? quickLinksRes.value : [];

  const relatedOrganizations =
  relatedOrgsRes.status === "fulfilled" ? relatedOrgsRes.value : [];

  return (
    <>
{/* HERO */}
{homeData && (
  <section className="relative h-125 md:h-150">
    {/* Background image from Directus */}
    {homeData.hero_cover ? (
      <div
        className="absolute inset-x-0 -top-16 h-180  bg-center bg-cover brightness-75"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${homeData.hero_cover.filename_disk})`,
        }}
      ></div>
    ) : (
      <div className="absolute -inset-16 bg-[url('/images/placeholder.avif')] bg-center bg-cover brightness-75"></div>
    )}

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-0">
      {homeData.hero_title && (
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          {homeData.hero_title}
        </h1>
      )}
      {homeData.hero_subtitle && (
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
          {homeData.hero_subtitle}
        </p>
      )}
    </div>
  </section>
)}


     {/* ================= QUICK LINKS ================= */}
      <section className="section py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 section-header py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Хэрэгцээт холбоос
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {quickLinks.length > 0 ? (
              quickLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group flex items-center justify-between rounded-xl border bg-white px-5 py-4 shadow-sm hover:shadow-md transition-all"
                >
                  <span className="font-medium text-gray-800 group-hover:text-blue-900">
                    {item.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-900 transition" />
                </a>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                Хэрэгцээт холбоос байхгүй байна
              </p>
            )}
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
  {egovServices.map((service) => {
    const logoNode = service.logo ? (
      <Image
        src={getAssetUrl(service.logo.id)}
        alt={service.name}
        width={80}
        height={80}
        className="object-contain"
        unoptimized
      />
    ) : null

    return (
      <a
        key={service.id}
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border p-6 bg-white text-gray-800 transition-all duration-300 hover:border-transparent hover:bg-linear-to-br hover:from-blue-200 hover:to-blue-100"
      >
        <div className="mb-4">{logoNode}</div>
        <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
        <p className="text-sm text-gray-600">{service.description}</p>
      </a>
      
    )
    
  })}
</div>

        </div>
      </section>

{/* ================= NEWS SECTION ================= */}
<section className="section py-16 md:py-24 bg-muted">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0 section-header">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Цаг үеийн мэдээ
      </h2>
      <Link
        href="/news"
        className="text-blue-950 font-medium hover:underline text-sm sm:text-base"
      >
        Бүх мэдээ →
      </Link>
    </div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {/* ================= FEATURED NEWS ================= */}
      {newsData[0] && (
        <Link
          href={`/news/${newsData[0].slug}`}
          className="relative group block rounded-2xl overflow-hidden shadow-lg h-full min-h-100"
        >
          <div className="absolute inset-0">
            {newsData[0].image && (
              <Image
                src={getAssetUrl(newsData[0].image.id)}
                alt={newsData[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            )}
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
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
        </Link>
      )}

      {/* ================= OTHER NEWS ================= */}
      <div className="flex flex-col gap-4 h-full">
        {newsData.slice(1, 4).map((news) => (
          <NewsCard
            key={news.slug}
            news={news}
            layout="horizontal"
            className="flex items-center gap-4"
          />
        ))}
      </div>
    </div>
  </div>
</section>



      {/* MAYOR SECTION */}
      <section className="py-16 md:py-24 bg-linear-to-br from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Governor Image */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-blue-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <div className="aspect-3/4 rounded-xl overflow-hidden">
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
                <a href="#" className="button  px-5 py-2">Холбоо барих</a>
                <a href="#" className="button  px-5 py-2">Цагийн хуваарь</a>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* TENDERS */}
<section className="section py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="section-header pb-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        Тендерийн урилга
      </h2>
      <Link
        href="/tender"
        className="text-blue-950 font-medium hover:underline text-sm sm:text-base"
      >
        Бүх тендер →
      </Link>
    </div>

    <div className="grid md:grid-cols-1 gap-6">
      {tenders.length ? (
        tenders.map((tender) => (
          <TenderCard
            key={tender.slug}
            slug={tender.slug}
            title={tender.title}
            status={tender.status}
            deadline={tender.deadline}
            budget={tender.budget}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">
          Одоогоор тендер байхгүй байна
        </p>
      )}
    </div>
  </div>
</section>


{/* RELATED ORGANIZATIONS */}
<section className="section py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="mb-8 pb-10 md:mb-12 section-header">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        Холбоотой байгууллагууд
      </h2>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {relatedOrganizations.length ? (
        relatedOrganizations.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            className="group flex flex-col items-center justify-center hover:shadow-md transition"
          >
            {item.logo && (
              <div className="relative w-20 h-20 mb-3">
                <Image
                  src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${item.logo.filename_disk}`}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <span className="text-sm text-center text-gray-700 group-hover:text-blue-900 font-medium">
              {item.name}
            </span>
          </a>
        ))
      ) : (
        <p className="text-gray-500 col-span-full text-center">
          Холбоотой байгууллага байхгүй байна
        </p>
      )}
    </div>
  </div>
</section>


    </>
  );
}
