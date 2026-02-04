import { Organization } from "../types"

export const organizationsData: Organization[] = [
  {
    slug: "sum-school",
    name: "Ерөнхий боловсролын сургууль",
    category: "school",
    categoryName: "Ерөнхий боловсролын сургууль",
    logo: "/images/news_2.jpg",
    description: "Сумын Ерөнхий боловсролын сургууль нь сурагчдад боловсрол олгодог.",
    phone: "+976 11 123456",
    email: "school@soum.mn",
    website: "#",
    workingHours: "08:00 - 17:00"
  },
  {
    slug: "sum-kindergarten",
    name: "Сумын цэцэрлэг",
    category: "kindergarten",
    categoryName: "Цэцэрлэг",
    logo: "/images/logo-kindergarten.svg",
    description: "Хүүхдүүдийг хүмүүжүүлж боловсрол олгодог.",
    phone: "+976 11 654321",
    website: "#",
    workingHours: "08:30 - 17:00"
  },
  {
    slug: "sum-health-center",
    name: "Эрүүл мэндийн төв",
    category: "health",
    categoryName: "Эрүүл мэндийн төв",
    logo: "/images/logo-health.svg",
    description: "Сумын иргэдийн эрүүл мэндийг хамгаалах төв.",
    phone: "+976 11 987654",
    website: "#",
    workingHours: "09:00 - 18:00"
  },
  {
    slug: "sum-culture-center",
    name: "Соёлын төв",
    category: "culture",
    categoryName: "Соёлын төв",
    logo: "/images/logo-culture.svg",
    description: "Сумын соёл, урлаг, хөгжлийг дэмжих байгууллага.",
    website: "#",
    workingHours: "09:00 - 18:00"
  }
]
