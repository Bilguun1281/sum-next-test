import { Organization } from "../types";
export const organizationsData: Organization[] = [
  {
    slug: "sum-school",
    name: "Ерөнхий боловсролын сургууль",
    category: "school",       // <-- new field
    categoryName: "Боловсрол",
    description: "Сургууль тухай...",
    logo: "/images/news_2.jpg",
    phone: "99112233",
    email: "school@email.com",
    website: "https://school.mn",
    workingHours: "09:00 - 18:00",
    address: "Сумын төв",
    services: [
      { name: "Боловсролын үйлчилгээ 1", description: "Товч тайлбар 1" },
      { name: "Боловсролын үйлчилгээ 2", description: "Товч тайлбар 2" },
    ],
  },
  {
    slug: "health-center",
    name: "Эрүүл мэндийн төв",
    category: "health",       // <-- new field
    categoryName: "Эрүүл мэнд",
    description: "Эрүүл мэндийн төвийн танилцуулга...",
    logo: "/images/news_2.jpg",
    phone: "99223344",
    email: "health@email.com",
    website: "https://health.mn",
    workingHours: "08:00 - 17:00",
    address: "Сумын төв",
    services: [
      { name: "Эмчийн үзлэг", description: "Товч тайлбар" },
      { name: "Дархлаажуулалт", description: "Товч тайлбар" },
    ],
  },
]
